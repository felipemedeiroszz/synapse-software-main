// Translations object with all text content in different languages
const translations = {
    pt: {
        // Navigation
        "nav_about": "Sobre Nós",
        "nav_team": "Equipe",
        "nav_project": "Projeto",
        "nav_testimonial": "Depoimento",
        "nav_contact": "Contato",
        
        // About section
        "about_title": "Sobre Nós",
        "about_intro": "A Synapse é uma empresa voltada ao desenvolvimento de soluções tecnológicas baseadas em Inteligência Artificial, com especialização em:",
        "specialty_neural": "Rede neural: Modelos computacionais inspirados no funcionamento do cérebro humano, formados por neurônios artificiais interconectados para aprender com dados e tomar decisões.",
        "specialty_automation": "Automação de processos: Aplicação da IA para tornar tarefas repetitivas mais rápidas, inteligentes e eficientes, permitindo que processos aprendam e se adaptem.",
        "specialty_optimization": "Otimização de decisões: Análise de padrões e simulação de cenários para sugerir ou automatizar as melhores escolhas em negócios, saúde, logística e finanças.",
        "specialty_frontend": "Front-End: Desenvolvimento da camada visual com HTML, CSS e JavaScript, criando interfaces intuitivas e responsivas.",
        "specialty_backend": "Back-End: Processamento de dados, armazenamento em bancos de dados e garantia do funcionamento correto dos sistemas com linguagens como Python, Java e Node.js.",
        
        // Team section
        "team_title": "Equipe Synapse",
        "rogerio_position": "CTO",
        "rogerio_bio": "Como CTO, Rogério lidera a visão tecnológica e a inovação, transformando estratégias em soluções de ponta que impulsionam o crescimento e a diferenciação no mercado.",
        "bryan_position": "CEO",
        "bryan_bio": "Bryan é o CEO que inspira e executa, focado em construir equipes de alta performance e em criar um impacto duradouro. Sob sua liderança, alcança novos patamares de sucesso e relevância.",
        "joao_position": "COO",
        "joao_bio": "Responsável por transformar visão em operação com foco em inovação, performance e crescimento sustentável.",
        "felipe_position": "Desenvolvedor Front-end",
        "felipe_bio": "Como Desenvolvedor Front-end e Especialista em UI/UX, Felipe colabora para dar vida a ideias, aplicando criatividade e elegância em cada projeto. Seu foco é desenvolver experiências de usuário que não apenas sejam visualmente atraentes, mas também altamente funcionais",
        "bruno_position": "Desenvolvedor Back-end",
        "bruno_bio": "Um backend é a parte de um sistema que fica por trás das telas, responsável por processar dados, executar regras de negócio e se comunicar com bancos de dados e outros serviços. Arquiteto de soluções, Bruno constrói o coração pulsante de sistemas, garantindo performance, escalabilidade e segurança.",
        
        // Projects section
        "projects_title": "Nossos Projetos",
        "project1_highlight": "Destaque",
        "project1_title": "Site Drakkarboats",
        "project1_desc": "Desenvolvimento de site para a empresa Drakkarboats, com visual moderno e funcionalidades otimizadas para o usuário.",
        "project2_title": "Sistema Drakkarboats",
        "project2_desc": "Sistema de gestão para a Drakkarboats, com estoque, vendas, orçamentos, ordens de pós-venda, painel administrativo e relatórios.",
        "project3_title": "Site PierFans",
        "project3_desc": "Desenvolvimento de site para a empresa PierFans, com foco em vendas de conteúdos adultos.",
        
        // Testimonials section
        "testimonials_title": "Depoimentos",
        "testimonial1_text": "A Synapse revolucionou nossa operação com suas soluções de IA. A automação de processos nos permitiu economizar tempo e recursos significativos.",
        "testimonial1_name": "Ana Silva",
        "testimonial1_position": "Diretora de Tecnologia, InovaTech",
        "testimonial2_text": "O trabalho da equipe de desenvolvimento foi excepcional. Entenderam perfeitamente nossas necessidades e entregaram além do esperado.",
        "testimonial2_name": "Carlos Mendes",
        "testimonial2_position": "CEO, Digital Solutions",
        "testimonial3_text": "A parceria com a Synapse tem sido fundamental para o nosso crescimento. Suas soluções em IA nos deram uma vantagem competitiva no mercado.",
        "testimonial3_name": "Juliana Costa",
        "testimonial3_position": "Gerente de Inovação, TechForward",
        
        // Contact section
        "contact_title": "Entre em Contato",
        "location_title": "Localização",
        "location_value": "Av. Paulista, 1000 - São Paulo, SP",
        "phone_title": "Telefone",
        "phone_value": "+55 (11) 99267-1271",
        "email_title": "E-mail",
        "email_value": "synapse@synapsesofware.com.br",
        "hours_title": "Horário de Atendimento",
        "hours_value": "Segunda a Sexta: 9h às 18h",
        "social_title": "Siga-nos",
        "form_title": "Envie sua mensagem",
        "form_name": "Nome Completo",
        "form_email": "E-mail",
        "form_phone": "Telefone",
        "form_subject": "Assunto",
        "form_message": "Mensagem",
        "form_submit": "Enviar Mensagem",
        "project_view": "Ver Projeto",
        "access_denied": "Acesso negado: este projeto é restrito.",
        
        // Footer
        "footer_about": "A Synapse é uma empresa especializada em soluções tecnológicas baseadas em Inteligência Artificial, focada em inovação e excelência em todos os projetos.",
        "footer_quick_links": "Links Rápidos",
        "footer_services": "Serviços",
        "footer_contact": "Contato",
        "service_neural": "Redes Neurais",
        "service_automation": "Automação de Processos",
        "service_optimization": "Otimização de Decisões",
        "service_frontend": "Desenvolvimento Front-End",
        "service_backend": "Desenvolvimento Back-End",
        "copyright": "© 2025 Synapse. Todos os direitos reservados.",
        "privacy_policy": "Política de Privacidade",
        "terms_of_use": "Termos de Uso"
    },
    
    es: {
        // Navigation
        "nav_about": "Sobre Nosotros",
        "nav_team": "Equipo",
        "nav_project": "Proyecto",
        "nav_testimonial": "Testimonios",
        "nav_contact": "Contacto",
        
        // About section
        "about_title": "Sobre Nosotros",
        "about_intro": "Synapse es una empresa dedicada al desarrollo de soluciones tecnológicas basadas en Inteligencia Artificial, con especialización en:",
        "specialty_neural": "Red neuronal: Modelos computacionales inspirados en el funcionamiento del cerebro humano, formados por neuronas artificiales interconectadas para aprender de los datos y tomar decisiones.",
        "specialty_automation": "Automatización de procesos: Aplicación de IA para hacer tareas repetitivas más rápidas, inteligentes y eficientes, permitiendo que los procesos aprendan y se adapten.",
        "specialty_optimization": "Optimización de decisiones: Análisis de patrones y simulación de escenarios para sugerir o automatizar las mejores opciones en negocios, salud, logística y finanzas.",
        "specialty_frontend": "Front-End: Desarrollo de la capa visual con HTML, CSS y JavaScript, creando interfaces intuitivas y responsivas.",
        "specialty_backend": "Back-End: Procesamiento de datos, almacenamiento en bases de datos y garantía del funcionamiento correcto de los sistemas con lenguajes como Python, Java y Node.js.",
        
        // Team section
        "team_title": "Equipo Synapse",
        "rogerio_position": "CTO",
        "rogerio_bio": "Como CTO, Rogerio lidera la visión tecnológica y la innovación, transformando estrategias en soluciones de vanguardia que impulsan el crecimiento y la diferenciación en el mercado.",
        "bryan_position": "CEO",
        "bryan_bio": "Bryan es el CEO que inspira y ejecuta, enfocado en construir equipos de alto rendimiento y en crear un impacto duradero. Bajo su liderazgo, alcanza nuevos niveles de éxito y relevancia.",
        "joao_position": "COO",
        "joao_bio": "Responsable de transformar la visión en operación con enfoque en innovación, rendimiento y crecimiento sostenible.",
        "felipe_position": "Desarrollador Front-end",
        "felipe_bio": "Como Desarrollador Front-end y Especialista en UI/UX, Felipe colabora para dar vida a las ideas, aplicando creatividad y elegancia en cada proyecto. Su enfoque es desarrollar experiencias de usuario que no solo sean visualmente atractivas, sino también altamente funcionales.",
        "bruno_position": "Desarrollador Back-end",
        "bruno_bio": "Un backend es la parte de un sistema que se encuentra detrás de las pantallas, responsable de procesar datos, ejecutar reglas de negocio y comunicarse con bases de datos y otros servicios. Arquitecto de soluciones, Bruno construye el corazón palpitante de los sistemas, garantizando rendimiento, escalabilidad y seguridad.",
        
        // Projects section
        "projects_title": "Nuestros Proyectos",
        "project1_highlight": "Destacado",
        "project1_title": "Sitio Drakkarboats",
        "project1_desc": "Desarrollo de sitio web para la empresa Drakkarboats, con diseño moderno y funcionalidades optimizadas para el usuario.",
        "project2_title": "Sistema Drakkarboats",
        "project2_desc": "Sistema de gestión para Drakkarboats, con stock, ventas, presupuestos, órdenes de posventa, panel administrativo e informes.",
        "project3_title": "Sitio PierFans",
        "project3_desc": "Desarrollo de sitio web para la empresa PierFans, con enfoque en la venta de contenidos para adultos.",
        
        // Testimonials section
        "testimonials_title": "Testimonios",
        "testimonial1_text": "Synapse revolucionó nuestra operación con sus soluciones de IA. La automatización de procesos nos permitió ahorrar tiempo y recursos significativos.",
        "testimonial1_name": "Ana Silva",
        "testimonial1_position": "Directora de Tecnología, InovaTech",
        "testimonial2_text": "El trabajo del equipo de desarrollo fue excepcional. Entendieron perfectamente nuestras necesidades y entregaron más allá de lo esperado.",
        "testimonial2_name": "Carlos Mendes",
        "testimonial2_position": "CEO, Digital Solutions",
        "testimonial3_text": "La asociación con Synapse ha sido fundamental para nuestro crecimiento. Sus soluciones en IA nos dieron una ventaja competitiva en el mercado.",
        "testimonial3_name": "Juliana Costa",
        "testimonial3_position": "Gerente de Innovación, TechForward",
        
        // Contact section
        "contact_title": "Contáctenos",
        "location_title": "Ubicación",
        "location_value": "Av. Paulista, 1000 - São Paulo, SP",
        "phone_title": "Teléfono",
        "phone_value": "+55 (11) 99267-1271",
        "email_title": "E-mail",
        "email_value": "synapse@synapsesofware.com.br",
        "hours_title": "Horario de Atención",
        "hours_value": "Lunes a Viernes: 9h a 18h",
        "social_title": "Síguenos",
        "form_title": "Envíe su mensaje",
        "form_name": "Nombre Completo",
        "form_email": "E-mail",
        "form_phone": "Teléfono",
        "form_subject": "Asunto",
        "form_message": "Mensaje",
        "form_submit": "Enviar Mensaje",
        "project_view": "Ver Proyecto",
        "access_denied": "Acceso denegado: este proyecto es restringido.",
        
        // Footer
        "footer_about": "Synapse es una empresa especializada en soluciones tecnológicas basadas en Inteligencia Artificial, enfocada en innovación y excelencia en todos los proyectos.",
        "footer_quick_links": "Enlaces Rápidos",
        "footer_services": "Servicios",
        "footer_contact": "Contacto",
        "service_neural": "Redes Neuronales",
        "service_automation": "Automatización de Procesos",
        "service_optimization": "Optimización de Decisiones",
        "service_frontend": "Desarrollo Front-End",
        "service_backend": "Desarrollo Back-End",
        "copyright": "© 2025 Synapse. Todos los derechos reservados.",
        "privacy_policy": "Política de Privacidad",
        "terms_of_use": "Términos de Uso"
    },
    
    en: {
        // Navigation
        "nav_about": "About Us",
        "nav_team": "Team",
        "nav_project": "Projects",
        "nav_testimonial": "Testimonials",
        "nav_contact": "Contact",
        
        // About section
        "about_title": "About Us",
        "about_intro": "Synapse is a company focused on developing technological solutions based on Artificial Intelligence, specializing in:",
        "specialty_neural": "Neural network: Computational models inspired by the functioning of the human brain, formed by interconnected artificial neurons to learn from data and make decisions.",
        "specialty_automation": "Process automation: Application of AI to make repetitive tasks faster, smarter, and more efficient, allowing processes to learn and adapt.",
        "specialty_optimization": "Decision optimization: Pattern analysis and scenario simulation to suggest or automate the best choices in business, health, logistics, and finance.",
        "specialty_frontend": "Front-End: Development of the visual layer with HTML, CSS, and JavaScript, creating intuitive and responsive interfaces.",
        "specialty_backend": "Back-End: Data processing, database storage, and ensuring the correct functioning of systems with languages such as Python, Java, and Node.js.",
        
        // Team section
        "team_title": "Synapse Team",
        "rogerio_position": "CTO",
        "rogerio_bio": "As CTO, Rogerio leads the technological vision and innovation, transforming strategies into cutting-edge solutions that drive growth and differentiation in the market.",
        "bryan_position": "CEO",
        "bryan_bio": "Bryan is the CEO who inspires and executes, focused on building high-performance teams and creating a lasting impact. Under his leadership, he achieves new levels of success and relevance.",
        "joao_position": "COO",
        "joao_bio": "Responsible for transforming vision into operation with a focus on innovation, performance, and sustainable growth.",
        "felipe_position": "Front-end Developer",
        "felipe_bio": "As a Front-end Developer and UI/UX Specialist, Felipe collaborates to bring ideas to life, applying creativity and elegance to each project. His focus is on developing user experiences that are not only visually appealing but also highly functional!",
        "bruno_position": "Back-end Developer",
        "bruno_bio": "A backend is the part of a system that operates behind the scenes, responsible for processing data, executing business rules, and communicating with databases and other services. Solutions architect, Bruno builds the pulsating heart of systems, ensuring performance, scalability, and security.",
        
        // Projects section
        "projects_title": "Our Projects",
        "project1_highlight": "Featured",
        "project1_title": "Drakkarboats Website",
        "project1_desc": "Website development for Drakkarboats, with a modern design and user-optimized features.",
        "project2_title": "Drakkarboats System",
        "project2_desc": "Management system for Drakkarboats featuring inventory, sales, quotations, after-sales orders, admin dashboard, and reports.",
        "project3_title": "PierFans Website",
        "project3_desc": "Website development for PierFans, focused on selling adult content.",
        
        // Testimonials section
        "testimonials_title": "Testimonials",
        "testimonial1_text": "Synapse revolutionized our operation with their AI solutions. Process automation allowed us to save significant time and resources.",
        "testimonial1_name": "Ana Silva",
        "testimonial1_position": "Technology Director, InovaTech",
        "testimonial2_text": "The work of the development team was exceptional. They perfectly understood our needs and delivered beyond expectations.",
        "testimonial2_name": "Carlos Mendes",
        "testimonial2_position": "CEO, Digital Solutions",
        "testimonial3_text": "The partnership with Synapse has been fundamental to our growth. Their AI solutions gave us a competitive advantage in the market.",
        "testimonial3_name": "Juliana Costa",
        "testimonial3_position": "Innovation Manager, TechForward",
        
        // Contact section
        "contact_title": "Contact Us",
        "location_title": "Location",
        "location_value": "Av. Paulista, 1000 - São Paulo, SP",
        "phone_title": "Phone",
        "phone_value": "+55 (11) 99267-1271",
        "email_title": "E-mail",
        "email_value": "synapse@synapsesofware.com.br",
        "hours_title": "Business Hours",
        "hours_value": "Monday to Friday: 9am to 6pm",
        "social_title": "Follow Us",
        "form_title": "Send Your Message",
        "form_name": "Full Name",
        "form_email": "E-mail",
        "form_phone": "Phone",
        "form_subject": "Subject",
        "form_message": "Message",
        "form_submit": "Send Message",
        "project_view": "View Project",
        "access_denied": "Access denied: this project is restricted.",
        
        // Footer
        "footer_about": "Synapse is a company specialized in technological solutions based on Artificial Intelligence, focused on innovation and excellence in all projects.",
        "footer_quick_links": "Quick Links",
        "footer_services": "Services",
        "footer_contact": "Contact",
        "service_neural": "Neural Networks",
        "service_automation": "Process Automation",
        "service_optimization": "Decision Optimization",
        "service_frontend": "Front-End Development",
        "service_backend": "Back-End Development",
        "copyright": "© 2025 Synapse. All rights reserved.",
        "privacy_policy": "Privacy Policy",
        "terms_of_use": "Terms of Use"
    }
};

// Expose translations globally for other scripts
window.translations = translations;

// Default language
let currentLanguage = 'pt';
window.currentLanguage = currentLanguage;

// Function to translate the page
function translatePage(lang) {
    if (!translations[lang]) {
        console.error(`Translation not available for language: ${lang}`);
        return;
    }
    
    currentLanguage = lang;
    window.currentLanguage = lang;
    
    // Store the selected language in localStorage
    localStorage.setItem('selectedLanguage', lang);
    
    // Get all elements with data-translate attribute
    const elements = document.querySelectorAll('[data-translate]');
    
    // Update text content for each element
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update navigation menu
    document.querySelectorAll('.nav-menu a').forEach((link, index) => {
        const keys = ['nav_about', 'nav_team', 'nav_project', 'nav_testimonial', 'nav_contact'];
        if (index < keys.length) {
            link.textContent = translations[lang][keys[index]];
        }
    });
    
    // Update about section
    document.querySelector('#sobre .section-title').textContent = translations[lang]['about_title'];
    document.querySelector('#sobre .about-text p').textContent = translations[lang]['about_intro'];
    
    // Update specialties list
    const specialties = document.querySelectorAll('.specialties-list li');
    if (specialties.length >= 5) {
        specialties[0].innerHTML = `<i class="fas fa-brain specialty-icon"></i><strong>Rede neural:</strong> ${translations[lang]['specialty_neural'].split(':')[1]}`;
        specialties[1].innerHTML = `<i class="fas fa-cogs specialty-icon"></i><strong>Automação de processos:</strong> ${translations[lang]['specialty_automation'].split(':')[1]}`;
        specialties[2].innerHTML = `<i class="fas fa-chart-line specialty-icon"></i><strong>Otimização de decisões:</strong> ${translations[lang]['specialty_optimization'].split(':')[1]}`;
        specialties[3].innerHTML = `<i class="fas fa-laptop-code specialty-icon"></i><strong>Front-End:</strong> ${translations[lang]['specialty_frontend'].split(':')[1]}`;
        specialties[4].innerHTML = `<i class="fas fa-server specialty-icon"></i><strong>Back-End:</strong> ${translations[lang]['specialty_backend'].split(':')[1]}`;
    }
    
    // Update team section
    document.querySelector('#equipe .section-title').textContent = translations[lang]['team_title'];
    
    const teamMembers = document.querySelectorAll('.team-member');
    if (teamMembers.length >= 5) {
        // Rogerio
        teamMembers[0].querySelector('.member-position').textContent = translations[lang]['rogerio_position'];
        teamMembers[0].querySelector('.member-bio').textContent = translations[lang]['rogerio_bio'];
        
        // Bryan
        teamMembers[1].querySelector('.member-position').textContent = translations[lang]['bryan_position'];
        teamMembers[1].querySelector('.member-bio').textContent = translations[lang]['bryan_bio'];
        
        // João
        teamMembers[2].querySelector('.member-position').textContent = translations[lang]['joao_position'];
        teamMembers[2].querySelector('.member-bio').textContent = translations[lang]['joao_bio'];
        
        // Felipe
        teamMembers[3].querySelector('.member-position').textContent = translations[lang]['felipe_position'];
        teamMembers[3].querySelector('.member-bio').textContent = translations[lang]['felipe_bio'];
        
        // Bruno
        teamMembers[4].querySelector('.member-position').textContent = translations[lang]['bruno_position'];
        teamMembers[4].querySelector('.member-bio').textContent = translations[lang]['bruno_bio'];
    }
    
    // Update projects section
    document.querySelector('#projeto .section-title').textContent = translations[lang]['projects_title'];
    
    const projects = document.querySelectorAll('.project-card');
    if (projects.length >= 3) {
        // Project 1
        projects[0].querySelector('.project-highlight').textContent = translations[lang]['project1_highlight'];
        projects[0].querySelector('h3').textContent = translations[lang]['project1_title'];
        projects[0].querySelector('p').textContent = translations[lang]['project1_desc'];
        
        // Project 2
        projects[1].querySelector('h3').textContent = translations[lang]['project2_title'];
        projects[1].querySelector('p').textContent = translations[lang]['project2_desc'];
        
        // Project 3
        projects[2].querySelector('h3').textContent = translations[lang]['project3_title'];
        projects[2].querySelector('p').textContent = translations[lang]['project3_desc'];
    }
    
    // Update testimonials section
    document.querySelector('#depoimento .section-title').textContent = translations[lang]['testimonials_title'];
    
    const testimonials = document.querySelectorAll('.testimonial-card');
    if (testimonials.length >= 3) {
        // Testimonial 1
        testimonials[0].querySelector('.testimonial-text').textContent = translations[lang]['testimonial1_text'];
        testimonials[0].querySelector('.author-info h4').textContent = translations[lang]['testimonial1_name'];
        testimonials[0].querySelector('.author-info p').textContent = translations[lang]['testimonial1_position'];
        
        // Testimonial 2
        testimonials[1].querySelector('.testimonial-text').textContent = translations[lang]['testimonial2_text'];
        testimonials[1].querySelector('.author-info h4').textContent = translations[lang]['testimonial2_name'];
        testimonials[1].querySelector('.author-info p').textContent = translations[lang]['testimonial2_position'];
        
        // Testimonial 3
        testimonials[2].querySelector('.testimonial-text').textContent = translations[lang]['testimonial3_text'];
        testimonials[2].querySelector('.author-info h4').textContent = translations[lang]['testimonial3_name'];
        testimonials[2].querySelector('.author-info p').textContent = translations[lang]['testimonial3_position'];
    }
    
    // Update contact section
    document.querySelector('#contato .section-title').textContent = translations[lang]['contact_title'];
    
    const contactCards = document.querySelectorAll('.contact-card');
    if (contactCards.length >= 4) {
        // Location
        contactCards[0].querySelector('h3').textContent = translations[lang]['location_title'];
        contactCards[0].querySelector('p').textContent = translations[lang]['location_value'];
        
        // Phone
        contactCards[1].querySelector('h3').textContent = translations[lang]['phone_title'];
        contactCards[1].querySelector('p').textContent = translations[lang]['phone_value'];
        
        // Email
        contactCards[2].querySelector('h3').textContent = translations[lang]['email_title'];
        contactCards[2].querySelector('p').textContent = translations[lang]['email_value'];
        
        // Hours
        contactCards[3].querySelector('h3').textContent = translations[lang]['hours_title'];
        contactCards[3].querySelector('p').textContent = translations[lang]['hours_value'];
    }
    
    // Update social media section
    document.querySelector('.social-media-contact h3').textContent = translations[lang]['social_title'];
    
    // Update contact form
    document.querySelector('.contact-form h3').textContent = translations[lang]['form_title'];
    document.querySelector('label[for="name"]').textContent = translations[lang]['form_name'];
    document.querySelector('label[for="email"]').textContent = translations[lang]['form_email'];
    document.querySelector('label[for="phone"]').textContent = translations[lang]['form_phone'];
    document.querySelector('label[for="subject"]').textContent = translations[lang]['form_subject'];
    document.querySelector('label[for="message"]').textContent = translations[lang]['form_message'];
    document.querySelector('.btn-submit span').textContent = translations[lang]['form_submit'];
    
    // Update footer
    document.querySelector('.footer-about').textContent = translations[lang]['footer_about'];
    document.querySelectorAll('.footer-heading')[0].textContent = translations[lang]['footer_quick_links'];
    document.querySelectorAll('.footer-heading')[1].textContent = translations[lang]['footer_services'];
    document.querySelectorAll('.footer-heading')[2].textContent = translations[lang]['footer_contact'];
    
    // Update footer links
    const footerLinks = document.querySelectorAll('.footer-links');
    if (footerLinks.length >= 2) {
        // Quick links
        const quickLinks = footerLinks[0].querySelectorAll('a');
        if (quickLinks.length >= 5) {
            quickLinks[0].textContent = translations[lang]['nav_about'];
            quickLinks[1].textContent = translations[lang]['nav_team'];
            quickLinks[2].textContent = translations[lang]['nav_project'];
            quickLinks[3].textContent = translations[lang]['nav_testimonial'];
            quickLinks[4].textContent = translations[lang]['nav_contact'];
        }
        
        // Services
        const serviceLinks = footerLinks[1].querySelectorAll('a');
        if (serviceLinks.length >= 5) {
            serviceLinks[0].textContent = translations[lang]['service_neural'];
            serviceLinks[1].textContent = translations[lang]['service_automation'];
            serviceLinks[2].textContent = translations[lang]['service_optimization'];
            serviceLinks[3].textContent = translations[lang]['service_frontend'];
            serviceLinks[4].textContent = translations[lang]['service_backend'];
        }
    }
    
    // Update copyright and footer bottom links
    document.querySelector('.copyright').textContent = translations[lang]['copyright'];
    const footerBottomLinks = document.querySelectorAll('.footer-bottom-links a');
    if (footerBottomLinks.length >= 2) {
        footerBottomLinks[0].textContent = translations[lang]['privacy_policy'];
        footerBottomLinks[1].textContent = translations[lang]['terms_of_use'];
    }
}

// Initialize translation on page load
document.addEventListener('DOMContentLoaded', function() {
    // Check if there's a saved language preference
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage && translations[savedLanguage]) {
        translatePage(savedLanguage);
    }
});

// Export the translatePage function to make it available globally
window.translatePage = translatePage;
