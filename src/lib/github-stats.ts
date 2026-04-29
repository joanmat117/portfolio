export interface GitHubStats {
  totalCommits: number;
  totalPullRequests: number;
  totalRepositories: number;
  totalReposCreatedThisYear: number;
  hasRestrictedContributions: boolean;
  restrictedCount: number;
  repositoriesWithCommits: number;
  year: number;
  lastUpdated: string;
  error?: string;
}

// Configuración de caché
const CACHE_TTL = import.meta.env.DEV ? 60_000 : 300_000;
let cachedStats: GitHubStats | null = null;
let lastFetchTime: number = 0;

// Helper para formatear fecha como ISO string (funciona para DateTime y GitTimestamp)
function toISOString(date: Date): string {
  return date.toISOString();
}

export async function getGitHubStats(username: string, token: string): Promise<GitHubStats> {
  const now = Date.now();
  
  if (cachedStats && (now - lastFetchTime) < CACHE_TTL) {
    console.log('📦 Retornando estadísticas desde caché');
    return cachedStats;
  }

  console.log('🔄 Fetching fresh stats from GitHub...');
  
  const startOfYear = new Date();
  startOfYear.setMonth(0, 1);
  startOfYear.setHours(0, 0, 0, 0);
  
  const endOfYear = new Date();
  endOfYear.setMonth(11, 31);
  endOfYear.setHours(23, 59, 59, 999);

  // QUERY CORREGIDA - eliminamos el filtro since/until en history
  // y usamos contributionsCollection para commits, que es más confiable
  const query = `
    query($username: String!, $from: DateTime!, $to: DateTime!) {
      user(login: $username) {
        contributionsCollection(from: $from, to: $to) {
          totalCommitContributions
          restrictedContributionsCount
          hasAnyRestrictedContributions
          totalPullRequestContributions
          repositoryContributions(first: 100) {
            totalCount
            nodes {
              repository {
                name
                isPrivate
                owner { login }
              }
            }
          }
        }
        repositories(first: 100, ownerAffiliations: OWNER) {
          totalCount
          nodes {
            name
            createdAt
            isPrivate
          }
        }
      }
    }
  `;

  const variables = {
    username,
    from: toISOString(startOfYear),
    to: toISOString(endOfYear)
  };

  try {
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'User-Agent': 'Astro-Portfolio/1.0'
      },
      body: JSON.stringify({ query, variables })
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`GitHub API error: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    
    if (data.errors) {
      console.error('GraphQL Errors:', JSON.stringify(data.errors, null, 2));
      throw new Error(data.errors[0].message);
    }

    const user = data.data.user;
    const contributions = user.contributionsCollection;
    
    // Contar repos creados en el año (basado en createdAt)
    const reposCreatedThisYear = user.repositories.nodes.filter((repo: any) => {
      const createdAt = new Date(repo.createdAt);
      return createdAt >= startOfYear && createdAt <= endOfYear;
    }).length;
    
    // Contar repos (approx, no podemos filtrar fácilmente por commits en el año)
    const repositoriesWithCommits = user.repositories.nodes.length; // simplificado
    
    // Extraer PRs totales de la colección de contribuciones
    let totalPullRequests = contributions.totalPullRequestContributions || 0;
    
    // Si no vino en totalPullRequestContributions, intentamos sumar de los nodos
    if (totalPullRequests === 0 && contributions.repositoryContributions?.nodes) {
      totalPullRequests = contributions.repositoryContributions.nodes
        .filter((node: any) => node.repository)
        .length;
    }

    const stats: GitHubStats = {
      totalCommits: contributions.totalCommitContributions || 0,
      totalPullRequests: totalPullRequests,
      totalRepositories: user.repositories.totalCount || 0,
      totalReposCreatedThisYear: reposCreatedThisYear,
      hasRestrictedContributions: contributions.hasAnyRestrictedContributions || false,
      restrictedCount: contributions.restrictedContributionsCount || 0,
      repositoriesWithCommits: repositoriesWithCommits,
      year: startOfYear.getFullYear(),
      lastUpdated: new Date().toISOString()
    };
    
    console.log('✅ Stats obtenidas:', stats);
    
    cachedStats = stats;
    lastFetchTime = now;
    
    return stats;
    
  } catch (error: any) {
    console.error('Error fetching GitHub stats:', error);
    
    if (cachedStats) {
      console.log('⚠️ Error, retornando caché viejo');
      return { ...cachedStats, error: error.message };
    }
    
    return {
      totalCommits: 0,
      totalPullRequests: 0,
      totalRepositories: 0,
      totalReposCreatedThisYear: 0,
      hasRestrictedContributions: false,
      restrictedCount: 0,
      repositoriesWithCommits: 0,
      year: new Date().getFullYear(),
      lastUpdated: new Date().toISOString(),
      error: error.message
    };
  }
}
