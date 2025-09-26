// Script pour le menu hamburger
document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');

    if (burgerMenu && navLinks) {
        burgerMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            burgerMenu.classList.toggle('active');
        });
    }

    // Script pour le carrousel (facultatif)
    const carouselSlider = document.querySelector('.carousel-slider');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');

    if (carouselSlider && prevButton && nextButton) {
        let slideIndex = 0;
        const slides = document.querySelectorAll('.testimonial-slide');

        const showSlide = (index) => {
            if (index >= slides.length) {
                slideIndex = 0;
            }
            if (index < 0) {
                slideIndex = slides.length - 1;
            }
            carouselSlider.style.transform = `translateX(${-slideIndex * 100}%)`;
        };

        nextButton.addEventListener('click', () => {
            slideIndex++;
            showSlide(slideIndex);
        });

        prevButton.addEventListener('click', () => {
            slideIndex--;
            showSlide(slideIndex);
        });

        // Optionnel : carrousel automatique
        // setInterval(() => {
        //     slideIndex++;
        //     showSlide(slideIndex);
        // }, 5000);
    }

    // Script pour les animations au scroll
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(section);
    });
});