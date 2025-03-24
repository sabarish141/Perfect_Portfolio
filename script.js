// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
});

// Scroll Animation for Elements
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Elements to animate on scroll
const animateElements = document.querySelectorAll('.skill-card, .project-card, .timeline-content, .education-card, .contact-item');

animateElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'all 0.6s ease-out';
    observer.observe(element);
});

// Add animation class to elements when they come into view
document.addEventListener('DOMContentLoaded', () => {
    animateElements.forEach(element => {
        element.classList.add('animate');
    });
});

// Form Submission with Email
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const message = contactForm.querySelector('textarea').value;
        
        // Email body formatting
        const emailBody = `
            Name: ${name}
            Email: ${email}
            Message: ${message}
        `;

        // Send email using SMTP.js
        Email.send({
            Host: "s1.maildns.net",
            Username: "sabarish27nov@gmail.com", // Replace with your email
            Password: "Admin@2024", // Replace with your email password
            To: 'sabarish27nov@gmail.com', // Replace with your receiving email
            From: email,
            Subject: `Portfolio Contact Form - Message from ${name}`,
            Body: emailBody
        }).then(message => {
            if(message === "OK") {
                alert("Thank you! Your message has been sent successfully.");
                contactForm.reset();
            } else {
                alert("There was an error sending your message. Please try again.");
            }
        });
    });
}

// Navbar Background Change on Scroll
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !navbar.classList.contains('scroll-down')) {
        // Scroll Down
        navbar.classList.remove('scroll-up');
        navbar.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && navbar.classList.contains('scroll-down')) {
        // Scroll Up
        navbar.classList.remove('scroll-down');
        navbar.classList.add('scroll-up');
    }
    lastScroll = currentScroll;
});

// Add CSS for scroll animations
const style = document.createElement('style');
style.textContent = `
    .animate {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
    
    .navbar.scroll-down {
        transform: translateY(-100%);
    }
    
    .navbar.scroll-up {
        transform: translateY(0);
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
    
    .hamburger.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }
    
    .hamburger.active span:nth-child(2) {
        opacity: 0;
    }
    
    .hamburger.active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
    }
`;

document.head.appendChild(style);

// Typing Animation for Hero Section
const heroText = document.querySelector('.hero h1');
if (heroText) {
    const text = heroText.textContent;
    heroText.textContent = '';
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            heroText.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }

    typeWriter();
}

// Network Animation
const networkAnimation = document.querySelector('.network-animation');
if (networkAnimation) {
    // Add a simple network animation effect
    const dots = 20;
    const radius = 150;
    const centerX = 200;
    const centerY = 200;

    for (let i = 0; i < dots; i++) {
        const dot = document.createElement('div');
        dot.className = 'network-dot';
        const angle = (i / dots) * Math.PI * 2;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
        dot.style.left = `${x}px`;
        dot.style.top = `${y}px`;
        networkAnimation.appendChild(dot);
    }
}

// Add CSS for network animation
const networkStyle = document.createElement('style');
networkStyle.textContent = `
    .network-dot {
        position: absolute;
        width: 8px;
        height: 8px;
        background: var(--primary-color);
        border-radius: 50%;
        animation: pulse 2s infinite;
    }
    
    @keyframes pulse {
        0% {
            transform: scale(1);
            opacity: 1;
        }
        50% {
            transform: scale(1.5);
            opacity: 0.5;
        }
        100% {
            transform: scale(1);
            opacity: 1;
        }
    }
`;

document.head.appendChild(networkStyle);