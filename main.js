// Navigation
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
    
    burger.classList.toggle('toggle');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Submission
const repairForm = document.getElementById('repairForm');
if (repairForm) {
    repairForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Collect form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            deviceType: document.getElementById('deviceType').value,
            description: document.getElementById('description').value
        };
        
        // Simulate form submission
        alert('Demande de réparation envoyée avec succès ! Nous vous contacterons bientôt.');
        repairForm.reset();
    });
}

// Tracking System
function trackRepair() {
    const trackingNumber = document.getElementById('trackingNumber').value;
    const trackingResult = document.getElementById('trackingResult');
    
    if (!trackingNumber) {
        trackingResult.innerHTML = '<p class="error">Veuillez entrer un numéro de suivi</p>';
        return;
    }
    
    // Simulate tracking status
    const statuses = [
        'En attente de diagnostic',
        'Diagnostic en cours',
        'Réparation en cours',
        'Tests finaux',
        'Prêt pour récupération'
    ];
    
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
    
    trackingResult.innerHTML = `
        <div class="tracking-status">
            <h3>Statut de la réparation</h3>
            <p>Numéro de suivi: ${trackingNumber}</p>
            <p>Statut: ${randomStatus}</p>
            <div class="progress-bar">
                <div class="progress" style="width: ${Math.random() * 100}%"></div>
            </div>
        </div>
    `;
}

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close all FAQ items
        faqItems.forEach(faqItem => {
            faqItem.classList.remove('active');
        });
        
        // Open clicked item if it wasn't active
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

// Scroll Animation
function revealOnScroll() {
    const elements = document.querySelectorAll('.service-card, .faq-item');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);

// Initialize animations
revealOnScroll();