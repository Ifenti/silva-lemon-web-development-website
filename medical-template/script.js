
document.addEventListener("DOMContentLoaded", () => {

    const animatedElements = document.querySelectorAll(".animate");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            } else {

                // Remove when leaving viewport
                // so animation replays next time

                entry.target.classList.remove("show");
            }

        });

    }, {
        threshold: 0.15
    });

    animatedElements.forEach(element => {
        observer.observe(element);
    });

});


if (history.scrollRestoration) {
  history.scrollRestoration = 'manual';
}
