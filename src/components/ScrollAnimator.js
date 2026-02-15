/* ============================================================
   MELYN — Scroll Animator (Intersection Observer)
   ============================================================ */

export function initScrollAnimator() {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    document.querySelectorAll('.reveal, .reveal-left, .reveal-scale').forEach((el) => {
        observer.observe(el);
    });
}
