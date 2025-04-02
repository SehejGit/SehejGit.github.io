document.addEventListener('DOMContentLoaded', function() {
    // Tab Functionality
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');
    
    // Function to activate a tab
    function activateTab(tabId) {
        // Hide all tab content
        tabContents.forEach(content => {
            content.classList.remove('active');
        });
        
        // Deactivate all tabs
        tabs.forEach(tab => {
            tab.classList.remove('active');
        });
        
        // Activate the selected tab
        document.querySelector(`[data-tab="${tabId}"]`).classList.add('active');
        document.getElementById(tabId).classList.add('active');
        
        // Update URL hash
        window.location.hash = tabId;
    }
    
    // Add click event to tabs
    tabs.forEach(tab => {
        tab.addEventListener('click', function(e) {
            e.preventDefault();
            const tabId = this.getAttribute('data-tab');
            activateTab(tabId);
        });
    });
    
    // Check for URL hash on page load
    if (window.location.hash) {
        const tabId = window.location.hash.substring(1);
        const tab = document.querySelector(`[data-tab="${tabId}"]`);
        if (tab) {
            activateTab(tabId);
        }
    }
    
    // Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // In a real application, you would send the data to a server
            // For this example, we'll just show a success message
            const formData = new FormData(contactForm);
            let formValues = {};
            
            for (let [key, value] of formData.entries()) {
                formValues[key] = value;
            }
            
            console.log('Form submission:', formValues);
            
            // Show success message
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            
            submitButton.textContent = 'Message Sent!';
            submitButton.style.backgroundColor = '#4CAF50';
            
            // Reset the form
            contactForm.reset();
            
            // Reset button after 3 seconds
            setTimeout(() => {
                submitButton.textContent = originalText;
                submitButton.style.backgroundColor = '';
            }, 3000);
        });
    }
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') !== '#') {
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Project cards hover effect enhancement
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Responsive menu for mobile (if needed in the future)
    // This is a placeholder for adding a mobile menu toggle
    
    // Skills animation (optional enhancement)
    const skillItems = document.querySelectorAll('.skills-list li');
    skillItems.forEach((skill, index) => {
        skill.style.animationDelay = `${index * 0.1}s`;
        skill.classList.add('fadeIn');
    });
});

// Add some subtle parallax effect to the header (optional enhancement)
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const header = document.querySelector('header');
    
    if (header && scrollPosition < 500) {
        header.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    }
});
