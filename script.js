document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.navbar');
    const navItems = document.querySelectorAll('.nav-item a');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').substring(1) === current) {
                item.classList.add('active');
            }
        });
    });

    navItems.forEach(item => {
        item.addEventListener('mouseover', function () {
            item.style.color = '#2c3e50';
            item.style.backgroundColor = '#ecf0f1';
        });

        item.addEventListener('mouseout', function () {
            item.style.color = '';
            item.style.backgroundColor = '';
        });
    });
});
