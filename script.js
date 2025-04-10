// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('toggle');

    // Animate Links
    links.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
});

// Close mobile menu when clicking on a link
links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('toggle');
        links.forEach(l => l.style.animation = '');
    });
});

// Sticky Header
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    header.classList.toggle('scrolled', window.scrollY > 0);
});

// Back to Top Button
const backToTopBtn = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('active');
    } else {
        backToTopBtn.classList.remove('active');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Animate Timeline Items on Scroll
const timelineItems = document.querySelectorAll('.timeline-item');

function checkTimelineItems() {
    const triggerBottom = window.innerHeight / 5 * 4;

    timelineItems.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;

        if (itemTop < triggerBottom) {
            item.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', checkTimelineItems);
checkTimelineItems(); // Check on initial load

// Animate Skill Bars on Scroll
const skillBars = document.querySelectorAll('.skill-progress');

function animateSkillBars() {
    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 100);
    });
}

// Use Intersection Observer for skill bars animation
const skillsSection = document.querySelector('.skills');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateSkillBars();
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

observer.observe(skillsSection);

// Project Data
const projects = [
    {
        id: 1,
        title: "Tikit",
        shortDescription: "Tikit is a modern event ticketing and management app designed to simplify the event experience for organizers and attendees by replacing physical tickets with a digital system and offering powerful management tools",
        description: "This project focus on building both mobile application and web application. The mobile application is for two types of user, customer a recular user that use the application to create purchased and vendor is the event organizer that use the application to view and manage their event. As for the Web Application is use for the admin to access the dasahboard where admin can handle and manage everything from events to the users.",
        responsibility: "Designed and implemented the relational database schema using MySQL to store user, ticket, and payment details. Developed core RESTful APIs with Laravel to manage user authentication (including third-party login via Facebook/Google), ticket creation, payment processing, and data retrieval. Integrated the Stripe payment gateway. Implemented secure authentication methods and middleware to protect API endpoints from unauthorized access.",
        technologies: ["Laravel", "PHP", "MySQL", "Flutter", "REST APIs", "Stripe API", "OAuth", "Git", "PostMan"],
        images: [
            "assets/images/tikit/logo.png",
            "assets/images/tikit/home_page.png",
            "assets/images/tikit/dashboard_page.png",
            "assets/images/tikit/app_home.png",
            "assets/images/tikit/app_user.jpg",
        ]
    },
    {
        id: 2,
        title: "Receipts",
        shortDescription: "Receipts_v2 is a simple offline Flutter application designed to help asset owners manage their rental assets and monthly billing efficiently. The app provides an owner-side interface and stores all data locally on the user's device.",
        description: "Implemented user interfaces with a focus on remarkable UX/UI and real-time response using the Flutter framework. Designed backend logic including data models (Model) and data access layers (Repository) for handling data queries and CRUD operations with core features such as: Manage rental assets such as apartments, rental houses, or rooms. ecord and track monthly bills for tenants. Offline-first: all data is securely stored on the user's device. Simplified navigation between screens with proper state management. ",
        responsibility: "School project demonstrating full-stack capabilities, particularly mobile UI development with Flutter and backend data handling.",
        technologies: ["Flutter", "Dart", "UX/UI Design", "Figma", "Git"],
        images: [
            "assets/images/receipts/logo.png",
            "assets/images/receipts/home.png",
            "assets/images/receipts/history.png",
            "assets/images/receipts/building.png",
            "assets/images/receipts/client.png",
        ]
    },
    {
        id: 3,
        title: "DG Shop",
        shortDescription: "DG Shop is a full on functnal web application create to help small business owner in cambodia to sell their product online without the need to create thier own website",
        description: "This project have to portal customer and seller. Anyone can be a seller and the seller can manage their own products, order and view thier sale data. As for the buyer they can create thier pushased easly wihtout the need to directly contact to the seller",
        responsibility: "Responsible for full-stack development, database design, MVC architecture, and practical application of Agile/Scrum methodologies.",
        technologies: ["Laravel", "PHP", "MySQL", "JQuery", "Tailwind", "MVC", "HTML", "CSS", "JavaScript", "Agile", "Scrum", "UX/UI Design", "Git"],
        images: [
            "assets/images/dg_shop/logo.png",
            "assets/images/dg_shop/home.png",
            "assets/images/dg_shop/dashboard.png",
            "assets/images/dg_shop/product.png",
            "assets/images/dg_shop/order.png",
        ]
    },
    {
        id: 4,
        title: "Automata",
        shortDescription: "The purpose of this project is to develop a finite state machine (FSM) simulator that can be used to model and analyze different types of automata.",
        description: "The goal of this project is to create a comprehensive FSM simulator that can be used to design, simulate, and analyze various types of automata. The simulator should provide users with the ability to create and manipulate different types of automata, including deterministic finite automata (DFAs), nondeterministic finite automata (NFAs), and minimizing DFAs.",
        responsibility: "Repsonsible for front-end, UI implementation, and client-side data validation/formatting.",
        technologies: ["JavaScript", "HTML", "CSS", "JQuery", "UX/UI Design", "Git"],
        images: [
            "assets/images/automata/logo.png",
            "assets/images/automata/home.png",
            "assets/images/automata/function1.png",
            "assets/images/automata/function2.png",
            "assets/images/automata/function3.png",
        ]
    },
    {
        id: 5,
        title: "Tech Shop",
        shortDescription: "Tech Shop is a web application design to help make the process of make purchased items from online easier.",
        description: "This project objective is to develop a web application tageting user in cambodia by making the process of create online purchased a lot easier since they don't need to ask for the price than make order, they can just make order on the product that they like. As for the admin it a lot easeir to handle customer ordering.",
        responsibility: "Design and implement database for the whole application, implement all the bussiness logic and other importance fucntion such as authentication etc.",
        technologies: ["Laravel", "PHP", "MySQL", "REST APIs", "MVC", "React (integration)", "Git"],
        images: []
    },
];

// Render Projects
function renderProjects() {
    const projectsGrid = document.querySelector('.projects-grid');

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';

        // Prepare project image if available
        const projectImageHtml = (project.images && project.images.length > 0)
            ? `<div class="project-image">
                    <img src="${project.images[0]}" alt="${project.title}">
                </div>`
            : '';

        projectCard.innerHTML = `
            ${projectImageHtml}
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.shortDescription}</p>
                <div class="project-tags">
                    ${project.technologies.slice(0, 4).map(tech => `<span class="project-tag">${tech}</span>`).join('')}
                </div>
                <button class="btn view-details" data-id="${project.id}">View Details</button>
            </div>
        `;
        projectsGrid.appendChild(projectCard);
    });

    // Add event listeners to view details buttons
    document.querySelectorAll('.view-details').forEach(button => {
        button.addEventListener('click', (e) => {
            const projectId = parseInt(e.target.getAttribute('data-id'));
            const project = projects.find(p => p.id === projectId);
            openProjectModal(project);
        });
    });
}

// Project Modal
const modal = document.getElementById('projectModal');
const modalContent = document.querySelector('.modal-content');
const modalBody = document.querySelector('.modal-body');

function openProjectModal(project) {
    modalBody.innerHTML = `
        <h2 class="modal-project-title">${project.title}</h2>

        <div class="modal-project-content">
            <div>
                <div class="modal-project-description">
                    <h3>Project Description</h3>
                    <p>${project.description}</p>
                </div>
                
                <div class="modal-project-responsibility">
                    <h3>Responsibility</h3>
                    <p>${project.responsibility}</p>
                </div>
            </div>
            
            <div class="modal-project-tech">
                <h3>Technologies Used</h3>
                <div class="modal-project-tags">
                    ${project.technologies.map(tech => `<span class="modal-project-tag">${tech}</span>`).join('')}
                </div>
            </div>
        </div>

        <div class="modal-project-images">
            ${project.images.slice(1).map(img => `<img src="${img}" alt="${project.title}">`).join('')}
        </div>
    `;

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close modal when clicking X
document.querySelector('.close-modal').addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Telegram Submission
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('form-status');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    formStatus.textContent = 'Sending...';

    // Get form values
    const name = document.getElementById('name').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    const telegramBotToken = '8070276652:AAFiiIgIzhw21NA1fqJwsEcZThm77-BJ7ck';
    const chatId = '1212242278';

    // Check if placeholders are replaced
    if (!telegramBotToken || !chatId) {
        console.error('Bot Token or Chat ID is missing or not properly configured.');
        formStatus.textContent = 'Configuration error. Cannot send message.';
        formStatus.style.color = 'red';
        return; // Stop submission
    }

    // Escape special characters for MarkdownV2
    const escapeMarkdownV2 = (text) => {
        return text.replace(/[_*[\]()~`>#+\-=|{}.!]/g, '\\$&');
    };

    // Construct the message text without email
    const text = `*New Message from Portfolio*\n*Name:* ${escapeMarkdownV2(name)}\n*Subject:* ${escapeMarkdownV2(subject)}\n*Message:*\n${escapeMarkdownV2(message)}`;

    // Encode the text for URL
    const encodedText = encodeURIComponent(text);

    // Send message to Telegram using the Bot API
    fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage?chat_id=${chatId}&text=${encodedText}&parse_mode=MarkdownV2`)
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                formStatus.textContent = 'Thank you for Reaching Out! Your message has been sent.';
                formStatus.style.color = 'green';
                contactForm.reset(); // Reset the form
            } else {
                throw new Error(data.description || 'Telegram API request failed');
            }
        })
        .catch(error => {
            console.error('Error sending message:', error);
            formStatus.textContent = 'Error sending message. Please try again later.';
            formStatus.style.color = 'red';
        })
        .finally(() => {
            // Clear status after 5 seconds
            setTimeout(() => { formStatus.textContent = ''; }, 5000);
        });
});


// Smooth Scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
});