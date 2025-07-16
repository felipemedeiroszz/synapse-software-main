// JavaScript for language selection and navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar partículas flutuantes
    initParticles();
    
    console.log('Página carregada com sucesso!');
    
    // Hamburger menu functionality
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburgerMenu) {
        hamburgerMenu.addEventListener('click', function() {
            hamburgerMenu.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking on a nav link
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburgerMenu.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!hamburgerMenu.contains(event.target) && 
                !navMenu.contains(event.target) && 
                navMenu.classList.contains('active')) {
                hamburgerMenu.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
    
    // Get all flag elements
    const flags = document.querySelectorAll('.flag');
    
    // Add click event to each flag
    flags.forEach(flag => {
        flag.addEventListener('click', function(e) {
            e.preventDefault();
            const lang = this.getAttribute('data-lang');
            console.log(`Idioma selecionado: ${lang}`);
            
            // Call the translatePage function from translations.js
            if (typeof window.translatePage === 'function') {
                window.translatePage(lang);
            } else {
                console.error('Translation function not found!');
            }
        });
    });
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-menu a, .footer-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Calcular a posição considerando o header fixo
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Funcionalidade para o carrossel de depoimentos
    const testimonials = document.querySelectorAll('.testimonial-card');
    const prevBtn = document.querySelector('.testimonial-btn.prev');
    const nextBtn = document.querySelector('.testimonial-btn.next');
    const indicators = document.querySelectorAll('.testimonial-indicator');
    let currentTestimonialIndex = 0;
    
    // Esconder todos os depoimentos exceto o primeiro
    if (testimonials.length > 0) {
        testimonials.forEach((testimonial, index) => {
            if (index !== 0) {
                testimonial.style.display = 'none';
            }
        });
    }
    
    // Função para mostrar o depoimento atual
    function showTestimonial(index) {
        // Atualizar visibilidade dos depoimentos
        testimonials.forEach((testimonial, i) => {
            if (i === index) {
                testimonial.style.display = 'flex';
            } else {
                testimonial.style.display = 'none';
            }
        });
        
        // Atualizar indicadores
        indicators.forEach((indicator, i) => {
            if (i === index) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }
    
    // Evento para o botão anterior
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentTestimonialIndex--;
            if (currentTestimonialIndex < 0) {
                currentTestimonialIndex = testimonials.length - 1;
            }
            showTestimonial(currentTestimonialIndex);
        });
    }
    
    // Evento para o botão próximo
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentTestimonialIndex++;
            if (currentTestimonialIndex >= testimonials.length) {
                currentTestimonialIndex = 0;
            }
            showTestimonial(currentTestimonialIndex);
        });
    }
    
    // Adicionar eventos de clique aos indicadores
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentTestimonialIndex = index;
            showTestimonial(currentTestimonialIndex);
        });
    });
    
    // Formulário de contato
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Aqui você pode adicionar o código para processar o envio do formulário
            // Por exemplo, usando fetch para enviar os dados para um servidor
            
            const formData = new FormData(contactForm);
            const formValues = {};
            
            for (let [key, value] of formData.entries()) {
                formValues[key] = value;
            }
            
            console.log('Dados do formulário:', formValues);
            
            // Simulação de envio bem-sucedido
            alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
            contactForm.reset();
        });
    }
    
    // Animação de scroll para mostrar elementos quando visíveis
    const animateOnScroll = function() {
        const sections = document.querySelectorAll('.section');
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight * 0.75) {
                section.classList.add('visible');
            }
        });
    };
    
    // Executar animação no carregamento e no scroll
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
    
    // Código para a seção de projetos
    const projectCards = document.querySelectorAll('.project-card');
    
    // Função para verificar se o elemento está visível na viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85 &&
            rect.bottom >= 0
        );
    }
    
    // Função para animar os cards quando estiverem visíveis
    function animateProjectCards() {
        projectCards.forEach((card, index) => {
            if (isElementInViewport(card)) {
                // Adiciona classe com delay baseado no índice
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, index * 150);
            }
        });
    }
    
});

// Sistema de partículas flutuantes
function initParticles() {
    // Criar elemento canvas para as partículas
    const canvas = document.createElement('canvas');
    canvas.id = 'particles-canvas';
    document.body.insertBefore(canvas, document.body.firstChild);
    
    // Estilizar o canvas para cobrir toda a tela
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '-1';
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Configurações das partículas
    const particlesArray = [];
    const numberOfParticles = 50;
    const colors = [
        'rgba(0, 102, 204, 0.3)',  // Azul (primário)
        'rgba(0, 204, 153, 0.3)',   // Verde (secundário)
        'rgba(255, 255, 255, 0.3)'   // Branco
    ];
    
    // Classe Partícula
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 3 + 1;
            this.speedX = Math.random() * 0.5 - 0.25;
            this.speedY = Math.random() * 0.5 - 0.25;
            this.color = colors[Math.floor(Math.random() * colors.length)];
            this.glow = Math.random() * 5 + 3;
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            
            // Verificar limites da tela
            if (this.x > canvas.width) this.x = 0;
            else if (this.x < 0) this.x = canvas.width;
            
            if (this.y > canvas.height) this.y = 0;
            else if (this.y < 0) this.y = canvas.height;
        }
        
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.shadowBlur = this.glow;
            ctx.shadowColor = this.color;
            ctx.fill();
            ctx.closePath();
        }
    }
    
    // Criar partículas
    function init() {
        for (let i = 0; i < numberOfParticles; i++) {
            particlesArray.push(new Particle());
        }
    }
    
    // Animar partículas
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
            particlesArray[i].draw();
            
            // Conectar partículas próximas
            connectParticles(particlesArray[i], particlesArray);
        }
        
        requestAnimationFrame(animate);
    }
    
    // Conectar partículas com linhas
    function connectParticles(p1, particles) {
        const maxDistance = 150;
        
        for (let i = 0; i < particles.length; i++) {
            const p2 = particles[i];
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < maxDistance) {
                const opacity = 1 - (distance / maxDistance);
                ctx.beginPath();
                ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.15})`;
                ctx.lineWidth = 0.5;
                ctx.moveTo(p1.x, p1.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.stroke();
                ctx.closePath();
            }
        }
    }
    
    // Redimensionar canvas quando a janela for redimensionada
    window.addEventListener('resize', function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
    
    // Iniciar animação
    init();
    animate();
}
