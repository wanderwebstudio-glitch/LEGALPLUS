        // Inicializar AOS
        AOS.init({
            duration: 800,
            once: true,
            offset: 300
        });


        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')

const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => 
  new bootstrap.Tooltip(tooltipTriggerEl)
)

                // Form submission handling
        document.getElementById('contactForm').addEventListener('submit', function(e) {
        // Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.style.padding = '0.5rem 0';
                navbar.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
            } else {
                navbar.style.padding = '1rem 0';
                navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            }
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
        

            e.preventDefault();
            
            // Simulación de envío de formulario
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Enviando...';
            submitBtn.disabled = true;
            
            // Simular envío
            setTimeout(() => {
                alert('¡Gracias por tu mensaje! Te contactaremos en un plazo máximo de 24 horas.');
                this.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });
        
        // Agregar efecto de carga a las imágenes
        document.addEventListener('DOMContentLoaded', function() {
            const images = document.querySelectorAll('img');
            images.forEach(img => {
                img.classList.add('fade-in');
            });
        });


document.getElementById("contactForm").addEventListener("submit", function(e) {
e.preventDefault();

let nombre = document.getElementById("name").value;
let email = document.getElementById("email").value;
let telefono = document.getElementById("phone").value;
let servicio = document.getElementById("service").value;
let mensaje = document.querySelector("textarea").value;

let numeroWhatsApp = "18096057567"; // CAMBIA ESTE NÚMERO

let texto = `Hola, recibiste un nuevo mensaje desde tu página web:

Nombre: ${nombre}
Correo: ${email}
Teléfono: ${telefono}
Servicio: ${servicio}

Mensaje:
${mensaje}`;

let url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;

window.open(url, "_blank");
});



