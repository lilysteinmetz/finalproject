window.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
        const elements = document.querySelectorAll('.animate-on-scroll');
        const resumeContainer = document.querySelector('.resume-container');

        elements.forEach(function (element) {
            if (element && isElementInViewport(element)) {
                element.classList.add('visible');
            }
        });

        if (resumeContainer && isElementInViewport(resumeContainer)) {
            resumeContainer.classList.add('resume-visible');
        }
    });
});

function isElementInViewport(element) {
    if (!element) return false; 

    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}