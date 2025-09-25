document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const header = document.getElementById('header');

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('-translate-x-full');
    });

    mobileMenu.addEventListener('click', (e) => {
        if(e.target.tagName === 'A') mobileMenu.classList.add('-translate-x-full');
    });

    window.addEventListener('scroll', () => {
        if(window.scrollY > 50){
            header.classList.add('bg-black/80','backdrop-blur-sm');
        } else {
            header.classList.remove('bg-black/80','backdrop-blur-sm');
        }
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e){
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target) target.scrollIntoView({ behavior: 'smooth' });
        });
    });
});


