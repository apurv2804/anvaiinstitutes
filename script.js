document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation
    const hamburger = document.querySelector('#hamburger');
    const navMenu = document.querySelector('#navbar ul');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a nav link
    const navLinks = document.querySelectorAll('#navbar ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // WhatsApp Form Integration
    const whatsappForm = document.getElementById('whatsappForm');
    if (whatsappForm) {
        whatsappForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const email = document.getElementById('email').value;
            const course = document.getElementById('course').value;
            const message = document.getElementById('message').value;
            
            // Validate form
            if (!name || !phone) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Format message for WhatsApp
            let whatsappMessage = `Hello, my name is ${name}. `;
            whatsappMessage += `I'm interested in learning more about your paramedical courses. `;
            
            if (course) {
                whatsappMessage += `I'm particularly interested in the ${course} program. `;
            }
            
            if (email) {
                whatsappMessage += `My email is ${email}. `;
            }
            
            if (message) {
                whatsappMessage += `Additional message: ${message}`;
            }
            
            // Encode the message for URL
            const encodedMessage = encodeURIComponent(whatsappMessage);
            
            // Open WhatsApp with the message
            window.open(`https://wa.me/919701818923?text=${encodedMessage}`, '_blank');
        });
    }
    
    // Simple Testimonial Slider (if needed)
    const testimonials = document.querySelectorAll('.testimonial');
    let currentTestimonial = 0;
    
    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            if (i === index) {
                testimonial.style.display = 'block';
            } else {
                testimonial.style.display = 'none';
            }
        });
    }
    
    // Only initialize slider if there are multiple testimonials and they're not in a flex container
    if (testimonials.length > 1 && window.getComputedStyle(testimonials[0].parentElement).display !== 'flex') {
        showTestimonial(currentTestimonial);
        
        setInterval(() => {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            showTestimonial(currentTestimonial);
        }, 5000);
    }
});