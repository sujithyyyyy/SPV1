
document.addEventListener("DOMContentLoaded", function(){
    const navLinks = document.querySelectorAll('.nav-link');
    const currentUrl = window.location.pathname.split('/').pop();

    navLinks.forEach(link => {
        const linkUrl = link.getAttribute('href').split('/').pop();
        if (linkUrl === currentUrl) {
            link.classList.add('active');
        }
    });
});



(function() {
                        'use strict';
                        const form = document.querySelector('form');
                        
                        form.addEventListener('submit', function(event) {
                            if (!form.checkValidity()) {
                                event.preventDefault();
                                event.stopPropagation();
                            }
                            form.classList.add('was-validated');
                            
                            if (form.checkValidity()) {
                                const button = form.querySelector('button[type="submit"]');
                                const buttonText = button.querySelector('.button-text');
                                const spinner = button.querySelector('.spinner-border');
                                
                                buttonText.textContent = 'Sending...';
                                spinner.classList.remove('d-none');
                                button.disabled = true;
                            }
                        }, false);
                    })();