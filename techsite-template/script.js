document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // Scroll Reveal Animations
    // =========================

    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.15
    };

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
            } else {
                entry.target.classList.remove("is-visible");
            }
        });
    }, observerOptions);

    document
        .querySelectorAll(".animate-on-scroll")
        .forEach(el => scrollObserver.observe(el));

    // =========================
    // Star Parallax
    // =========================

    const back = document.querySelector(".star-layer-back");
    const mid = document.querySelector(".star-layer-mid");
    const front = document.querySelector(".star-layer-front");

    let mouseX = 0;
    let mouseY = 0;

    let currentX = 0;
    let currentY = 0;

    document.addEventListener("mousemove", (e) => {
        mouseX = (e.clientX / window.innerWidth - 0.5);
        mouseY = (e.clientY / window.innerHeight - 0.5);
    });

    function animate() {

        // Smooth mouse interpolation
        currentX += (mouseX - currentX) * 0.5;
        currentY += (mouseY - currentY) * 0.5;

        const scroll = window.scrollY;

        // Very subtle movement
        back.style.transform =
            `translate(${currentX * 5}px, ${scroll * 0.02 + currentY * 5}px)`;

        mid.style.transform =
            `translate(${currentX * 10}px, ${scroll * 0.04 + currentY * 10}px)`;

        front.style.transform =
            `translate(${currentX * 15}px, ${scroll * 0.07 + currentY * 15}px)`;

        requestAnimationFrame(animate);
    }

    animate();
});



if (history.scrollRestoration) {
  history.scrollRestoration = 'manual';
}
//cursor
