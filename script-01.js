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

// Traducciones para el sitio web
const traducciones = {

es:{
inicio:"Inicio",
servicios:"Servicios",
nosotros:"Nosotros",
equipo:"Equipo",
blog:"Blog",
contacto:"Contacto",
consulta:"Consulta Gratis",
abogados:"ABOGADOS CONSULTORES",

/* HERO */
heroTitulo:"Expertos en Soluciones Legales",
heroTexto: "En <strong>LegalPlus</strong> somos un bufete de abogados en República Dominicana especializado en brindar asesoría legal profesional en derecho civil, penal, familiar y corporativo. Nuestro equipo combina experiencia jurídica y un enfoque moderno para ofrecer soluciones legales efectivas y proteger los intereses de nuestros clientes.",
btnAsesoria:"Solicitar Asesoría",
btnServicios:"Nuestros Servicios",

/* SERVICIOS */
tituloServicios:"Nuestros Servicios",
subServicios:"Ofrecemos asesoría legal integral en todas las áreas del derecho",

serv1Titulo:"Derecho Corporativo",
serv1Texto:"Asesoría legal para empresas, constitución de sociedades, fusiones y adquisiciones, contratos comerciales y cumplimiento regulatorio.",

serv2Titulo:"Derecho Familiar",
serv2Texto:"Divorcios, custodia de menores, alimentos, división de bienes y sucesiones. Protegemos los intereses de tu familia con sensibilidad y profesionalismo.",

serv3Titulo:"Derecho Laboral",
serv3Texto:"Asesoría a empleadores y trabajadores, despidos, negociación colectiva, acoso laboral y cumplimiento de normativas laborales.",

serv4Titulo:"Derecho Inmobiliario",
serv4Texto:"Compraventa de propiedades, arrendamientos, trámites notariales, litigios de propiedad y desarrollo de proyectos inmobiliarios.",

serv5Titulo:"Derecho de Salud",
serv5Texto:"Asesoría a instituciones de salud, responsabilidad médica, regulación sanitaria y protección de derechos de pacientes.",

serv6Titulo:"Litigios y Arbitraje",
serv6Texto:"Representación en tribunales, arbitrajes nacionales e internacionales, mediación y resolución alternativa de conflictos.",

masInfo:"Más información →",

// NOSOTROS

sobreTitulo:"Sobre LegalPlus",
sobreSubtitulo:"Más de 25 años de excelencia jurídica",

sobreTexto1:"Fundado en 1998, LegalPlus Abogados Consultores se ha consolidado como un referente en el sector legal, combinando tradición jurídica con un enfoque innovador y adaptado a las necesidades actuales.",

sobreTexto2:"Nuestro equipo multidisciplinario ofrece soluciones legales integrales, siempre priorizando la relación cercana con nuestros clientes y la búsqueda de resultados efectivos.",

casos:"Casos Exitosos",
experiencia:"Años de Experiencia",
abogados:"Abogados Especializados",
satisfaccion:"Satisfacción del Cliente",

filosofiaTitulo:"Nuestra Filosofía",
filosofiaTexto:"La excelencia jurídica no es un objetivo, es nuestro estándar diario.",
fundador:"Carlos Rodríguez, Socio Fundador",

equipoTitulo:"Nuestro Equipo",
equipoSub:"Profesionales comprometidos con tu éxito legal",

cargo1:"Socio Fundador - Derecho Corporativo",
bio1:"Más de 25 años de experiencia en derecho empresarial y financiero.",

//MAPA

ubicacionTitulo:"Nuestra Ubicación",
ubicacionSub:"Visítanos en nuestra oficina en Punta Cana",

direccionTitulo:"Dirección",
direccionTexto:`Calle Los Taínos, Local #03<br>
Plaza Marbella<br>
Bávaro, Punta Cana<br>
República Dominicana`,

horarioTitulo:"Horario",

horarioSemana:"Lunes – Viernes: 9:00 AM – 6:00 PM",
horarioSabado:"Sábados: 10:00 AM – 2:00 PM",

abrirMapa:"Abrir en Google Maps",


// CONTACTO

contactTitulo:"Contáctanos",
contactSub:"Estamos aquí para ayudarte con tus necesidades legales",

nombre:"Nombre completo *",
correo:"Correo electrónico *",
telefono:"Teléfono",
area:"Área de interés",

seleccionaServicio:"Selecciona un servicio",

corp:"Derecho Corporativo",
fam:"Derecho Familiar",
lab:"Derecho Laboral",
inmo:"Derecho Inmobiliario",
salud:"Derecho de Salud",
litigios:"Litigios y Arbitraje",
otro:"Otro",

mensaje:"Mensaje *",

enviarMensaje:"Enviar Mensaje",

nota:"* Los campos marcados son obligatorios. Te contactaremos en un plazo máximo de 24 horas.",
//FOOTER

    slogan: "ABOGADOS CONSULTORES",
    description: "Más de 25 años brindando excelencia jurídica y soluciones legales innovadoras para nuestros clientes.",

    linksTitle: "Enlaces",
    links: {
        inicio: "Inicio",
        servicios: "Servicios",
        nosotros: "Nosotros",
        equipo: "Equipo",
        contacto: "Contacto"
    },

    contactTitle: "Contacto",
    address: "Av. Principal 123, Ciudad",
    phone: "+1 809 605 7567",
    email: "Legalplusabogadosd@gmail.com",

    scheduleTitle: "Horario",
    
        weekday: "Lunes - Viernes: 9:00 - 18:00",
        saturday: "Sábados: 10:00 - 14:00",
        sunday: "Domingos: Cerrado",

    appointmentButton: "Agendar Cita",

    copyright: "© 2023 LegalPlus Abogados Consultores. Todos los derechos reservados.",
    design: "Diseño adaptado a Material Design 3"
},


en:{
inicio:"Home",
servicios:"Services",
nosotros:"About Us",
equipo:"Team",
blog:"Blog",
contacto:"Contact",
consulta:"Free Consultation",
abogados:"LEGAL CONSULTANTS",
/* HERO */
heroTitulo:"Experts in Legal Solutions",
heroTexto:"At <strong>LegalPlus</strong>, we are a law firm in the Dominican Republic specialized in providing professional legal advice in civil, criminal, family, and corporate law. Our team combines legal expertise with a modern approach to deliver effective legal solutions and protect our clients’ interests.",
btnAsesoria:"Request Consultation",
btnServicios:"Our Services",

/* SERVICIOS */
tituloServicios:"Our Services",
subServicios:"We provide comprehensive legal advice in all areas of law",

serv1Titulo:"Corporate Law",
serv1Texto:"Legal advice for companies, company formation, mergers and acquisitions, commercial contracts and regulatory compliance.",

serv2Titulo:"Family Law",
serv2Texto:"Divorces, child custody, alimony, asset division and inheritance. We protect your family's interests with sensitivity and professionalism.",

serv3Titulo:"Labor Law",
serv3Texto:"Advice for employers and employees, dismissals, collective bargaining, workplace harassment and labor law compliance.",

serv4Titulo:"Real Estate Law",
serv4Texto:"Property transactions, leases, notarial procedures, property litigation and real estate project development.",

serv5Titulo:"Health Law",
serv5Texto:"Legal advice for healthcare institutions, medical liability, health regulations and patient rights protection.",

serv6Titulo:"Litigation and Arbitration",
serv6Texto:"Representation in courts, national and international arbitration, mediation and alternative dispute resolution.",

masInfo:"More information →",

//  NOSOTROS
sobreTitulo:"About LegalPlus",
sobreSubtitulo:"More than 25 years of legal excellence",

sobreTexto1:"Founded in 1998, LegalPlus Lawyers & Consultants has established itself as a reference in the legal sector, combining legal tradition with an innovative approach adapted to today's needs.",

sobreTexto2:"Our multidisciplinary team provides comprehensive legal solutions, always prioritizing a close relationship with our clients and the pursuit of effective results.",

casos:"Successful Cases",
experiencia:"Years of Experience",
abogados:"Specialized Lawyers",
satisfaccion:"Client Satisfaction",

filosofiaTitulo:"Our Philosophy",
filosofiaTexto:"Legal excellence is not a goal, it is our daily standard.",
fundador:"Carlos Rodríguez, Founding Partner",

equipoTitulo:"Our Team",
equipoSub:"Professionals committed to your legal success",

cargo1:"Founding Partner - Corporate Law",
bio1:"More than 25 years of experience in corporate and financial law.",

//MAPA

ubicacionTitulo:"Our Location",
ubicacionSub:"Visit us at our office in Punta Cana",

direccionTitulo:"Address",
direccionTexto:`Los Taínos Street, Unit #03<br>
Plaza Marbella<br>
Bávaro, Punta Cana<br>
Dominican Republic`,

horarioTitulo:"Schedule",

horarioSemana:"Monday – Friday: 9:00 AM – 6:00 PM",
horarioSabado:"Saturday: 10:00 AM – 2:00 PM",

abrirMapa:"Open in Google Maps",


// CONTACTO

contactTitulo:"Contact Us",
contactSub:"We are here to help with your legal needs",

nombre:"Full name *",
correo:"Email address *",
telefono:"Phone",
area:"Area of interest",

seleccionaServicio:"Select a service",

corp:"Corporate Law",
fam:"Family Law",
lab:"Labor Law",
inmo:"Real Estate Law",
salud:"Health Law",
litigios:"Litigation and Arbitration",
otro:"Other",

mensaje:"Message *",

enviarMensaje:"Send Message",

nota:"* Required fields. We will contact you within 24 hours.",

//  FOOTER
    slogan: "LEGAL CONSULTANTS",
    description: "More than 25 years providing legal excellence and innovative legal solutions for our clients.",

    linksTitle: "Links",
    
        inicio: "Home",
        servicios: "Services",
        nosotros: "About Us",
        equipo: "Team",
        contacto: "Contact",

    contactTitle: "Contact",
    address: "Main Avenue 123, City",
    phone: "+1 809 605 7567",
    email: "Legalplusabogadosd@gmail.com",

    scheduleTitle: "Schedule",
   
        weekday: "Monday - Friday: 9:00 - 18:00",
        saturday: "Saturday: 10:00 - 14:00",
        sunday: "Sunday: Closed",

    appointmentButton: "Book Appointment",

    copyright: "© 2023 LegalPlus Legal Consultants. All rights reserved.",
    design: "Design adapted to Material Design 3"
}

};

function cambiarIdioma(idioma){

const elementos = document.querySelectorAll("[data-i18n]");

elementos.forEach(elemento => {

const clave = elemento.getAttribute("data-i18n");
const traduccion = traducciones[idioma][clave];

if(!traduccion) return;

// Si el elemento tiene HTML dentro, no lo reemplaza completo
if(elemento.children.length > 0){
    elemento.innerHTML = traduccion;
}else{
    elemento.textContent = traduccion;
}

});

}


