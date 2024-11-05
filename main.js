

document.addEventListener('DOMContentLoaded', function() {
    const featureSection = document.querySelector('.Features'); // The main features section
    const featureSections = document.querySelectorAll('[data-feature-image]');
    const featureImages = document.querySelectorAll('.feature-image');
    let currentImageIndex = -1; // Start with no image active

    // Apply CSS for fade transitions
    featureImages.forEach((img) => img.classList.remove('active'));

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        
        return (
            rect.top <= windowHeight * 0.8 && rect.bottom >= windowHeight * 0.2
        );
    }

    function updateImage() {
        let activeIndex = -1;

        // Check if the entire features section is in the viewport
        const sectionInView = isElementInViewport(featureSection);

        if (sectionInView) {
            // Find the currently visible feature section
            featureSections.forEach((section, index) => {
                if (isElementInViewport(section)) {
                    activeIndex = index;
                }
            });

            // Update images based on the active section
            if (activeIndex !== -1 && activeIndex !== currentImageIndex) {
                if (currentImageIndex >= 0) {
                    featureImages[currentImageIndex].classList.remove('active');
                }
                featureImages[activeIndex].classList.add('active');
                currentImageIndex = activeIndex;
            }
        } else if (currentImageIndex !== -1) {
            // Fade out the last active image when scrolling past the entire section
            featureImages[currentImageIndex].classList.remove('active');
            currentImageIndex = -1; // Reset
        }
    }

    function onScroll() {
        requestAnimationFrame(updateImage);
    }

    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', onScroll);
    
    // Initial update
    updateImage();
});




//back to top
window.addEventListener('scroll', function() {
    const backToTop = document.querySelector('.back-to-top');
    if (window.pageYOffset > 300) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});
