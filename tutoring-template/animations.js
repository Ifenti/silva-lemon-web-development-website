document.addEventListener("DOMContentLoaded", () => {
    const animatedElements = document.querySelectorAll(
        ".animate-fade-up, .animate-slide-left, .animate-slide-right, .animate-scale"
    );

    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.15
    };

    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show");
            }
        });
    }, observerOptions);

    animatedElements.forEach((element) => {
        animationObserver.observe(element);
    });
});