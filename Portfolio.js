document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll(".about, .projects, .contact"); // Añadimos contact

    const showOnScroll = () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const triggerPoint = window.innerHeight * 0.8;

            if (sectionTop < triggerPoint) {
                section.classList.add("show");
            }
        });
    };

    window.addEventListener("scroll", showOnScroll);
    showOnScroll(); // Comprobación inicial
});

const sections = document.querySelectorAll(".about, .projects");

const showOnScroll = () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight * 0.8;

        if (sectionTop < triggerPoint) {
            section.classList.add("show");
        }
    });
};

window.addEventListener("scroll", showOnScroll);
showOnScroll(); // para que cargue si ya está visible