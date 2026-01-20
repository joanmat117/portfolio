// services/portfolio.service.ts

export type Language = 'es' | 'en';

// --- INTERFACES ---

export interface ProjectLinks {
  code: string | null;
  demo: string | null;
}

export interface DateRange {
  start: string;
  end: string;
}

export interface Project {
  name: string;
  slug: string;
  description: string;
  advancedDescription: string[];
  technologies: string[];
  links: ProjectLinks;
  image: string;
  role: string;
  date: DateRange;
}

/**
 * Nueva Interfaz para Experiencia Laboral (job_experience_*.json)
 */
export interface JobExperience {
  company: string;
  role: string;
  date: DateRange;
  description: string;
  technologies: string[];
  location?: string;
  link?: string; // Por si quieres añadir un link a la empresa
}

export interface Education {
  center: string;
  title: string;
  location: string;
  date: DateRange;
  description: string;
}

export interface Technologies {
  frontend: string[];
  backend: string[];
  devops: string[];
}

export interface CertificationItem {
  title: string;
  link: string;
  image: string;
}

export interface Certifications {
  [key: string]: CertificationItem;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
}

export interface PersonalInfo {
  name: string;
  role: string;
  exp: string;
  image: string;
  education: Education;
  languages: string[];
  phone: string;
  location: string;
  professionalAboutMe: string;
  largeAboutMe: string[];
  shortAboutMe: string[];
  technologies: Technologies;
  certifications: Certifications;
  social: SocialLinks;
}

export class PortfolioService {
  private static BASE_URL = 'https://raw.githubusercontent.com/joanmat117/_json-data/refs/heads/main';

  /**
   * Método privado con manejo de errores para archivos inexistentes
   */
  private async fetchData<T>(filename: string, lang: Language, defaultValue: T): Promise<T> {
    const url = `${PortfolioService.BASE_URL}/${filename}_${lang}.json`;
    
    try {
      const response = await fetch(url);
      
      // Si el archivo no existe (404) o hay otro error de red
      if (!response.ok) {
        console.warn(`[PortfolioService] Archivo no encontrado o error: ${url}. Usando valor por defecto.`);
        return defaultValue;
      }
      
      return (await response.json()) as T;
    } catch (error) {
      // Maneja errores de conexión o JSON mal formado
      console.error(`[PortfolioService Error] Error crítico en ${url}:`, error);
      return defaultValue;
    }
  }

  /**
   * Obtiene la experiencia laboral. Retorna [] si no existe.
   */
  async getJobExperience(lang: Language = 'en'): Promise<JobExperience[]> {
    return this.fetchData<JobExperience[]>('job_experience', lang, []);
  }

  /**
   * Obtiene los proyectos. Retorna [] si no existe.
   */
  async getExperience(lang: Language = 'en'): Promise<Project[]> {
    return this.fetchData<Project[]>('experience', lang, []);
  }

  /**
   * Obtiene info personal. Retorna un objeto parcial o nulo si no existe.
   */
  async getPersonalInfo(lang: Language = 'en'): Promise<PersonalInfo | null> {
    // Aquí pasamos null como valor por defecto si no encuentra el "About"
    return this.fetchData<PersonalInfo | null>('about', lang, null);
  }

  // --- MÉTODOS ÚTILES EXTRA ---

  async getSocials(lang: Language = 'en'): Promise<SocialLinks | null> {
    const info = await this.getPersonalInfo(lang);
    return info ? info.social : null;
  }

  async getTechStack(lang: Language = 'en'): Promise<Technologies | null> {
    const info = await this.getPersonalInfo(lang);
    return info ? info.technologies : null;
  }

  async getHeroDescription(lang: Language = 'en'): Promise<string> {
    const info = await this.getPersonalInfo(lang);
    if (!info || !info.shortAboutMe) return '';
    return info.shortAboutMe.join(" ");
  }
}

export const portfolioService = new PortfolioService();
