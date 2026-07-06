document.addEventListener('DOMContentLoaded', () => {
  const tracks = document.querySelectorAll('.carousel__track');
  if (!tracks.length) return;

  tracks.forEach(track => {
    const originalItems = Array.from(track.children);
    if (originalItems.length === 0) return;

    // Clone original items to create seamless loop
    originalItems.forEach(item => track.appendChild(item.cloneNode(true)));

    const gap = parseFloat(getComputedStyle(track).gap) || 0;

    function updateAnimation() {
      const firstSet = Array.from(track.children).slice(0, originalItems.length);
      const firstSetWidth = firstSet.reduce((sum, el) => sum + el.getBoundingClientRect().width, 0) + gap * (firstSet.length - 1);
      track.style.setProperty('--marquee-distance', firstSetWidth + 'px');
      const pxPerSecond = 80;
      const duration = Math.max(8, firstSetWidth / pxPerSecond);
      track.style.animationDuration = duration + 's';
    }

    // start scrolling
    track.classList.add('scrolling');

    // if carousel wrapper has .reverse class, mark track to play reversed
    if (track.closest('.carousel') && track.closest('.carousel').classList.contains('reverse')) {
      track.classList.add('reverse');
    }

    // pause on hover
    track.addEventListener('mouseenter', () => track.style.animationPlayState = 'paused');
    track.addEventListener('mouseleave', () => track.style.animationPlayState = 'running');

    updateAnimation();

    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(updateAnimation, 120);
    });
  });
});
