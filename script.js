document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    function handleScroll() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const sectionHeight = section.getBoundingClientRect().height;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight - sectionHeight / 4) {
                section.classList.add('fade-in');
            }
        });
    }

    function handleNavLinkClick(e) {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });

        targetSection.classList.add('fade-in');
    }

    window.addEventListener('scroll', handleScroll);

    navLinks.forEach(link => {
        link.addEventListener('click', handleNavLinkClick);
    });
});