// SaiVortex Portfolio JavaScript

// Portfolio data
const portfolioData = {
  1: {
    title: "SaiVortex Brand Identity",
    category: "branding",
    description: "Complete brand identity system with logo, color palette, and mascot character design.",
    tools: "Adobe Illustrator, Photoshop",
    details: "This comprehensive brand identity project established the visual foundation for SaiVortex. The design incorporates modern gradient aesthetics with a memorable mascot character, creating a cohesive brand experience across all touchpoints.",
    features: [
      "Custom logo design with mascot character",
      "Brand color palette with gradient variations",
      "Typography system selection",
      "Brand guidelines documentation",
      "Application across various media"
    ]
  },
  2: {
    title: "Business Card Design",
    category: "print",
    description: "Professional business card design featuring the SaiVortex brand elements.",
    tools: "Adobe Illustrator",
    details: "Professional business cards that embody the SaiVortex brand identity, featuring elegant gradient backgrounds and clean typography that leaves a lasting impression.",
    features: [
      "Premium gradient background design",
      "Clean, readable typography",
      "Strategic use of brand colors",
      "Professional contact information layout",
      "Print-ready specifications"
    ]
  },
  3: {
    title: "Digital Mockups",
    category: "digital",
    description: "Real-world application mockups showcasing brand versatility across platforms.",
    tools: "Photoshop, After Effects",
    details: "Comprehensive mockup collection demonstrating how the SaiVortex brand translates across digital and physical applications, from business cards to web interfaces.",
    features: [
      "Business card mockups",
      "Digital device presentations", 
      "Social media templates",
      "Website interface designs",
      "Brand application examples"
    ]
  },
  4: {
    title: "Gradient Color Palettes",
    category: "gradient",
    description: "Custom gradient color systems including purple, green, and blue variations.",
    tools: "Adobe Illustrator",
    details: "Carefully crafted gradient color systems that form the core of SaiVortex's visual identity, combining purple, green, and blue tones in harmonious progressions.",
    features: [
      "Primary gradient combinations",
      "Secondary color variations", 
      "Accessibility-tested contrast ratios",
      "Digital and print specifications",
      "Usage guidelines and examples"
    ]
  },
  5: {
    title: "Typography System",
    category: "branding",
    description: "Brand typography with primary and secondary typeface selections.",
    tools: "Adobe Fonts, Illustrator",
    details: "Comprehensive typography system establishing clear hierarchy and consistent brand voice across all SaiVortex communications.",
    features: [
      "Primary and secondary font selections",
      "Heading and body text specifications",
      "Font pairing guidelines",
      "Size and spacing recommendations",
      "Usage examples across mediums"
    ]
  }
};

// DOM Elements
const nav = document.getElementById('nav');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');
const modal = document.getElementById('portfolio-modal');
const modalBody = document.getElementById('modal-body');
const contactForm = document.getElementById('contact-form');
const skillBars = document.querySelectorAll('.skill-progress');

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  initializeNavigation();
  initializePortfolioFilters();
  initializeScrollAnimations();
  initializeContactForm();
  initializeSkillBars();
  
  // Set initial active nav link
  updateActiveNavLink();
});

// Navigation Functions
function initializeNavigation() {
  // Mobile menu toggle
  navToggle.addEventListener('click', function() {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
  });

  // Close mobile menu when clicking on links
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      navMenu.classList.remove('active');
      navToggle.classList.remove('active');
    });
  });

  // Smooth scrolling for navigation links
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      scrollToSection(targetId);
    });
  });

  // Add scroll effect to navigation
  window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
    updateActiveNavLink();
  });
}

// Smooth scroll to section
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    const offsetTop = section.offsetTop - 70; // Account for fixed nav height
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  }
}

// Update active navigation link based on scroll position
function updateActiveNavLink() {
  const sections = document.querySelectorAll('section');
  const scrollPosition = window.scrollY + 100;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

// Portfolio Filter Functions
function initializePortfolioFilters() {
  filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const filter = this.getAttribute('data-filter');
      
      // Update active filter button
      filterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      
      // Filter portfolio items
      filterPortfolioItems(filter);
    });
  });
}

function filterPortfolioItems(filter) {
  portfolioItems.forEach(item => {
    const category = item.getAttribute('data-category');
    
    if (filter === 'all' || category === filter) {
      item.style.display = 'block';
      item.style.animation = 'fadeInUp 0.6s ease-out';
    } else {
      item.style.display = 'none';
    }
  });
}

// Modal Functions
function openModal(projectId) {
  const project = portfolioData[projectId];
  if (!project) return;

  const modalContent = `
  <div class="modal-project">
    <div class="modal-image">
      <img src="${project.image}" alt="${project.title}" class="portfolio-img" style="width:100%;height:100%;object-fit:cover;border-radius:12px;">
    </div>
    <div class="modal-details">
      <h2>${project.title}</h2>
      <p class="project-category">${project.category.toUpperCase()}</p>
      <p class="project-description">${project.details}</p>
      <div class="project-tools">
        <h4>Tools Used:</h4>
        <p>${project.tools}</p>
      </div>
      <div class="project-features">
        <h4>Key Features:</h4>
        <ul>
          ${project.features.map(feature => `<li>${feature}</li>`).join('')}
        </ul>
      </div>
    </div>
  </div>
`;


  modalBody.innerHTML = modalContent;
  modal.classList.remove('hidden');
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('active');
  setTimeout(() => {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }, 300);
}

function getPlaceholderClass(projectId) {
  const classes = {
    1: 'brand-identity',
    2: 'business-card',
    3: 'mockups',
    4: 'gradients',
    5: 'typography'
  };
  return classes[projectId] || 'brand-identity';
}

// Close modal when clicking outside
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('modal-overlay')) {
    closeModal();
  }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && modal.classList.contains('active')) {
    closeModal();
  }
});

// Contact Form Functions
function initializeContactForm() {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    // Create mailto link
    const mailtoLink = `mailto:saivortex.dev@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    showNotification('Email client opened! Thank you for your message.', 'success');
    
    // Reset form
    this.reset();
  });
}

// Skill Bars Animation
function initializeSkillBars() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateSkillBars();
          observer.disconnect(); // Only animate once
        }
      });
    },
    { threshold: 0.5 }
  );

  const aboutSection = document.getElementById('about');
  if (aboutSection) {
    observer.observe(aboutSection);
  }
}

function animateSkillBars() {
  skillBars.forEach(bar => {
    const percentage = bar.getAttribute('data-percentage');
    setTimeout(() => {
      bar.style.width = percentage + '%';
    }, 300);
  });
}

// Scroll Animations
function initializeScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, observerOptions);

  // Observe service cards
  document.querySelectorAll('.service-card').forEach(card => {
    observer.observe(card);
  });

  // Observe portfolio items
  document.querySelectorAll('.portfolio-item').forEach(item => {
    observer.observe(item);
  });
}

// Notification System
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `notification notification--${type}`;
  notification.textContent = message;
  
  // Style the notification
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: var(--color-surface);
    color: var(--color-text);
    padding: 16px 24px;
    border-radius: 8px;
    box-shadow: var(--shadow-lg);
    border-left: 4px solid var(--color-${type === 'success' ? 'success' : 'primary'});
    z-index: 3000;
    animation: slideInRight 0.3s ease-out;
    max-width: 300px;
  `;

  document.body.appendChild(notification);

  // Remove notification after 4 seconds
  setTimeout(() => {
    notification.style.animation = 'slideOutRight 0.3s ease-in';
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 4000);
}

// Add CSS animations for notifications
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
  @keyframes slideInRight {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideOutRight {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(100%);
      opacity: 0;
    }
  }

  .animate-in {
    animation: fadeInUp 0.8s ease-out;
  }

  .modal-project {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    align-items: start;
  }

  .modal-image {
    height: 300px;
  }

  .modal-image .portfolio-placeholder {
    height: 100%;
    border-radius: 12px;
  }

  .modal-details h2 {
    margin-bottom: 8px;
    background: linear-gradient(135deg, #7F3FBF, #3CB371);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .project-category {
    color: var(--color-text-secondary);
    font-weight: 500;
    font-size: 14px;
    margin-bottom: 16px;
    letter-spacing: 1px;
  }

  .project-description {
    line-height: 1.6;
    margin-bottom: 24px;
  }

  .project-tools,
  .project-features {
    margin-bottom: 24px;
  }

  .project-tools h4,
  .project-features h4 {
    color: var(--color-primary);
    margin-bottom: 8px;
    font-size: 16px;
  }

  .project-features ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .project-features li {
    padding: 4px 0;
    position: relative;
    padding-left: 20px;
  }

  .project-features li:before {
    content: '▸';
    position: absolute;
    left: 0;
    color: var(--color-primary);
    font-weight: bold;
  }

  .portfolio-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
}


  @media (max-width: 768px) {
    .modal-project {
      grid-template-columns: 1fr;
      gap: 24px;
    }
    
    .modal-image {
      height: 200px;
    }
  }
`;
document.head.appendChild(notificationStyles);

// Parallax Effect for Hero Section
function initializeParallax() {
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const rate = scrolled * -0.5;
    
    if (hero) {
      hero.style.transform = `translateY(${rate}px)`;
    }
  });
}

// Initialize parallax effect
initializeParallax();

// Smooth reveal animations for elements on scroll
function revealOnScroll() {
  const reveals = document.querySelectorAll('.service-card, .portfolio-item, .about-content');
  
  reveals.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;
    
    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add('animate-in');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(revealOnScroll, 100));

// Loading animation
window.addEventListener('load', function() {
  document.body.classList.add('loaded');
  
  // Trigger hero animations
  const heroElements = document.querySelectorAll('.hero-title, .hero-subtitle, .hero-cta');
  heroElements.forEach((element, index) => {
    setTimeout(() => {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }, index * 200);
  });
});

// Export functions for global access
window.scrollToSection = scrollToSection;
window.openModal = openModal;
window.closeModal = closeModal;