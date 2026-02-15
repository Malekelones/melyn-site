/* ============================================================
   MELYN — SPA Router (hash-based)
   ============================================================ */

class Router {
    constructor() {
        this.routes = {};
        this.currentRoute = null;
        window.addEventListener('hashchange', () => this.resolve());
        window.addEventListener('load', () => this.resolve());
    }

    on(path, handler) {
        this.routes[path] = handler;
        return this;
    }

    resolve() {
        const hash = window.location.hash.slice(1) || '/';
        const app = document.getElementById('app');

        // Try exact match first
        if (this.routes[hash]) {
            this.transition(app, () => this.routes[hash]());
            this.currentRoute = hash;
            return;
        }

        // Try dynamic routes (e.g., /services/:id)
        for (const pattern in this.routes) {
            if (pattern.includes(':')) {
                const regex = new RegExp('^' + pattern.replace(/:([^/]+)/g, '([^/]+)') + '$');
                const match = hash.match(regex);
                if (match) {
                    this.transition(app, () => this.routes[pattern](match[1]));
                    this.currentRoute = hash;
                    return;
                }
            }
        }

        // Fallback to home
        if (this.routes['/']) {
            this.transition(app, () => this.routes['/']());
            this.currentRoute = '/';
        }
    }

    transition(container, renderFn) {
        container.classList.add('page-transition-enter');
        container.classList.remove('page-transition-active');

        // Render new content
        renderFn();

        // Trigger transition
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                container.classList.remove('page-transition-enter');
                container.classList.add('page-transition-active');
            });
        });

        // Scroll to top (unless anchor hash)
        if (!window.location.hash.includes('#section-')) {
            window.scrollTo({ top: 0, behavior: 'instant' });
        }
    }

    navigate(path) {
        window.location.hash = path;
    }
}

export default new Router();
