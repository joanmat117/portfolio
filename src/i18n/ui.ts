export const languages = {
    es: '🇪🇸',
    en: '🇺🇸',
};

export const defaultLang = 'es';

export const ui = {
    es: {
        'layout.title': 'Desarrollador Frontend',
        'layout.description': 'Sitio web personal de Joan Matías. Aquí puedes encontrar información sobre mi experiencia, proyectos y detalles de contacto',
        'nav.home': 'Inicio',
        'nav.projects': 'Proyectos',
        'nav.about': 'Sobre mí',
        'nav.contact': 'Contacto',
        'hero.badge': 'Disponible para trabajar',
        'hero.title': 'Hola, soy Joan',
        'hero.bio': '+1.5 años de experiencia aportando a la web. <strong>Desarrollador Frontend</strong> 🇨🇺 especializado en crear experiencias que no solo funcionen, sino que <strong>se sientan increíbles.</strong>',
        'hero.mail': 'Contáctame',
        'hero.linkedin': 'LinkedIn',
        'exp.title': 'Experiencia',
        'projects.title': 'Proyectos Destacados',
        'about.title': 'Sobre mí',
        'about.bio': `<p>Mi primer "Hola mundo" fue el LED de un Arduino parpadeando. Ahí aprendí que lo importante no es solo que algo funcione, sino que sea útil y fácil de usar para los demás.</p><p>Creo, como Steve Jobs, que "el diseño no es solo cómo se ve, sino cómo funciona". Por eso, me apasiona construir interfaces donde la tecnología se note en los resultados: en lo rápido que carga, en lo fácil que es navegar y en lo simple que es entenderlo.</p><p>Mi objetivo es que la persona al otro lado de la pantalla no tenga que pensar en cómo usarlo, sino solo en disfrutar de lo que hace.</p>
        `,
        'footer.rights': 'Todos los derechos reservados',
        'personalImageAlt': 'Fotografía de Joan Matías',
        /* exp: [
            {
                title: 'Desarrollador Frontend',
                date: '2023 - Presente',
                company: 'Proyectos Personales',
                description: 'Desarrollo de aplicaciones web modernas utilizando React, Next.js, TypeScript y diversas tecnologías del ecosistema frontend. Implementación de mejores prácticas, optimización de rendimiento y creación de interfaces responsivas.',
            }
        ],*/
        projects: [
            {
                title: 'Energía Ideal',
                description: 'Un sitio web de noticias de alto rendimiento con diseño elegante, SEO perfecto y estructura multilingüe para alcance global.',
                link: 'https://energiaideal.vercel.app/en',
                github: 'https://github.com/joanmat117/energia-ideal',
                image: '/energia-ideal.webp',
                imageAlt: 'Captura de pantalla del sitio web Ideal Energy',
                tags: ['nextjs', 'typeScript', 'react', 'supabase', 'tailwindCSS'],
            },
            {
                title: 'Online Bible',
                description: 'Una aplicación web moderna para leer la Biblia, construida con Next.js y React. Cuenta con una interfaz limpia y responsiva creada con Material UI, gestión de estado centralizada mediante Redux y una arquitectura escalable.',
                link: 'https://online-bible.vercel.app/home',
                github: 'https://github.com/joanmat117/online-bible',
                image: '/online-bible.webp',
                imageAlt: 'Captura de pantalla de la aplicación Online Bible',
                tags: ['nextjs', 'TypeScript', 'React', 'Material UI', 'Redux'],
            },
            {
                title: 'Community Website',
                description: 'Un sitio web moderno para una comunidad, con un diseño temático y atractivo. Incluye un sistema completo de autenticación, un CMS interno para gestión de contenido y una interfaz de usuario responsiva y de alto rendimiento.',
                github: '',
                image: '/community-website.webp',
                imageAlt: 'Captura de pantalla del sitio web de comunidad',
                tags: ['Supabase', 'TypeScript', 'React', 'TailwindCSS', 'Shadcn', 'Zustand', 'Serverless Function'],
            },
            {
                title: 'Chatbot Room',
                description: 'Una plataforma moderna que ofrece chatbots especializados impulsados por IA. Los usuarios pueden elegir entre múltiples asistentes (finanzas, salud, académico, etc.) para obtener ayuda experta y contextual en diversos campos.',
                link: 'https://chatbot-room.vercel.app',
                github: 'https://github.com/joanmat117/chatbot-room',
                image: '/chatbot-room.webp',
                imageAlt: 'Captura de pantalla de la plataforma Chatbot Room',
                tags: ['React', 'TailwindCSS', 'Typescript', 'Google Gemini'],
            }
        ]
    },
    en: {
        'layout.title': 'Frontend Developer',
        'layout.description': 'Personal website of Joan Matías. Here you can find information about my experience, projects, and contact details.',
        'nav.home': 'Home',
        'nav.projects': 'Projects',
        'nav.about': 'About me',
        'nav.contact': 'Contact',
        'hero.badge': 'Open to work',
        'hero.title': 'Hello, I\'m Joan',
        'hero.bio': '+1.5 years of experience contributing to the web. <strong>Frontend Developer</strong> 🇨🇺 specialized in creating experiences that not only work but <strong>feel incredible.</strong>',
        'hero.mail': 'Contact me',
        'hero.linkedin': 'LinkedIn',
        'exp.title': 'Experience',
        'projects.title': 'Featured Projects',
        'about.title': 'About me',
        'about.bio': `<p>My first "Hello world" was an Arduino LED blinking. That's where I learned that what matters is not just that something works, but that it is useful and easy for others to use.</p>

<p>I believe, like Steve Jobs, that "design is not just what it looks like, it's how it works." That’s why I’m passionate about building interfaces where technology is noticeable in the results: in how fast it loads, how easy it is to navigate, and how simple it is to understand.</p>

<p>My goal is for the person on the other side of the screen not to have to think about how to use it, but simply to enjoy what it does.</p>`,
        'footer.rights': 'All rights reserved',
        'personalImageAlt': 'Photograph of Joan Matías',
        /* exp: [
            {
                title: 'Frontend Developer',
                date: '2023 - Present',
                company: 'Personal Projects',
                description: 'Development of modern web applications using React, Next.js, TypeScript, and various frontend ecosystem technologies. Implementation of best practices, performance optimization, and creation of responsive interfaces.',
            }
        ],*/
        projects: [
            {
                title: 'Ideal Energy',
                description: 'A high-performance news website with an elegant design, perfect SEO, and a multilingual structure for global reach.',
                link: 'https://energiaideal.vercel.app/en',
                github: 'https://github.com/joanmat117/energia-ideal',
                image: '/energia-ideal.webp',
                imageAlt: 'Screenshot of Ideal Energy website',
                tags: ['Nextjs', 'TypeScript', 'React', 'Supabase', 'TailwindCSS'],
            },
            {
                title: 'Online Bible',
                description: 'A modern web application for reading the Bible, built with Next.js and React. It features a clean, responsive interface crafted with Material UI, centralized state management via Redux, and a scalable architecture.',
                link: 'https://online-bible.vercel.app/home',
                github: 'https://github.com/joanmat117/online-bible',
                image: '/online-bible.webp',
                imageAlt: 'Screenshot of Online Bible application',
                tags: ['Nextjs', 'TypeScript', 'React', 'Material UI', 'Redux'],
            },
            {
                title: 'Community Website',
                description: 'A modern website for a community, featuring a themed and engaging design. It includes a full authentication system, an internal CMS for content management, and a responsive, high-performance user interface.',
                github: '',
                image: '/community-website.webp',
                imageAlt: 'Screenshot of community website',
                tags: ['Supabase', 'TypeScript', 'React', 'TailwindCSS', 'Shadcn', 'Zustand', 'Serverless Function'],
            },
            {
                title: 'Chatbot Room',
                description: 'A modern platform offering specialized AI-powered chatbots. Users can choose from multiple assistants (finance, health, academic, etc.) to get expert, contextual help across various fields.',
                link: 'https://chatbot-room.vercel.app',
                github: 'https://github.com/joanmat117/chatbot-room',
                image: '/chatbot-room.webp',
                imageAlt: 'Screenshot of Chatbot Room platform',
                tags: ['React', 'TailwindCSS', 'Typescript', 'Google Gemini'],
            }
        ],
    },

} as const;
