window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

const container = document.querySelector('.starContainer1');
const container2 = document.querySelector('.review1');
const container3 = document.querySelector('.review2');
console.log(container2);

function setupScroll(el) {
    if (!el) return;
    
    function scroll() {
        el.scrollLeft += 1;
        if (el.scrollLeft >= (el.scrollWidth - el.clientWidth)) {
            el.scrollLeft = 0;
        }
    }
    
    let interval = setInterval(scroll, 30);
    
   // el.addEventListener('mouseenter', () => clearInterval(interval));
    //el.addEventListener('mouseleave', () => interval = setInterval(scroll, 30));
}


function setupScroll2(el) {
    if (!el) return;
    
    function scroll() {
        el.scrollLeft -= 1;

        if (el.scrollLeft <= 0) {
            el.scrollLeft = el.scrollWidth - el.clientWidth;
        }
    }
    
    let interval = setInterval(scroll, 30);
    
   // el.addEventListener('mouseenter', () => clearInterval(interval));
    //el.addEventListener('mouseleave', () => interval = setInterval(scroll, 30));
}

setupScroll(container);
setupScroll(container2);
setupScroll2(container3);

