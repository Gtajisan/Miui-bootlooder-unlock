// ============================================================================
// MIUI Bootloader Unlock Guide - Advanced Web Management System
// Developer: Gtajisan
// GitHub: https://github.com/Gtajisan
// ============================================================================

'use strict';

const APP_CONFIG = {
    version: '2.0.0',
    pages: {
        index: 'index.html',
        tools: 'tools-references.html'
    },
    analytics: {
        enabled: true
    }
};

// Page Navigation Manager
class PageNavigator {
    constructor() {
        this.currentPage = 'index';
        this.history = [];
        this.init();
    }

    init() {
        this.detectCurrentPage();
        this.setupSmoothScroll();
        this.setupNavigation();
        this.logInfo(`Application initialized - v${APP_CONFIG.version}`);
    }

    detectCurrentPage() {
        const filename = window.location.pathname.split('/').pop() || 'index.html';
        this.currentPage = filename.includes('tools') ? 'tools' : 'index';
    }

    navigate(page) {
        if (page === this.currentPage) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }

        this.history.push(this.currentPage);
        const targetPage = APP_CONFIG.pages[page];
        
        if (targetPage) {
            window.location.href = targetPage;
        }
    }

    setupSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                const href = anchor.getAttribute('href');
                if (href === '#') return;
                
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    setupNavigation() {
        window.navigate = (page) => this.navigate(page);
    }

    logInfo(message) {
        console.log(`[MIUI Unlock] ${message}`);
    }
}

// Enhanced Navbar Handler
class NavbarHandler {
    constructor() {
        this.navbar = document.querySelector('.navbar');
        this.init();
    }

    init() {
        window.addEventListener('scroll', () => this.updateNavbar());
    }

    updateNavbar() {
        if (!this.navbar) return;

        if (window.scrollY > 100) {
            this.navbar.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)';
            this.navbar.style.backdropFilter = 'blur(20px)';
        } else {
            this.navbar.style.boxShadow = 'none';
            this.navbar.style.backdropFilter = 'blur(10px)';
        }
    }
}

// Code Block Manager
class CodeBlockManager {
    constructor() {
        this.init();
    }

    init() {
        this.addCopyButtons();
    }

    addCopyButtons() {
        document.querySelectorAll('code').forEach((code, index) => {
            code.style.cursor = 'pointer';
            code.title = 'Click to copy';
            code.addEventListener('click', () => this.copyCode(code));
        });
    }

    copyCode(element) {
        const text = element.textContent;
        navigator.clipboard.writeText(text).then(() => {
            this.showCopyNotification(element);
        });
    }

    showCopyNotification(element) {
        const original = element.textContent;
        element.textContent = '✓ Copied!';
        element.style.background = 'var(--primary)';
        element.style.color = 'white';
        
        setTimeout(() => {
            element.textContent = original;
            element.style.background = '';
            element.style.color = '';
        }, 1500);
    }
}

// Analytics Tracker
class AnalyticsTracker {
    constructor() {
        if (!APP_CONFIG.analytics.enabled) return;
        this.init();
    }

    init() {
        this.trackPageView();
        this.trackInteractions();
    }

    trackPageView() {
        const filename = window.location.pathname.split('/').pop() || 'index.html';
        console.log(`[Analytics] Page View: ${filename}`);
    }

    trackInteractions() {
        document.querySelectorAll('.btn, .link').forEach(element => {
            element.addEventListener('click', (e) => {
                const text = e.target.textContent.trim();
                console.log(`[Analytics] Interaction: ${text}`);
            });
        });
    }
}

// Scroll Progress Indicator
class ScrollProgress {
    constructor() {
        this.init();
    }

    init() {
        window.addEventListener('scroll', () => this.updateProgress());
    }

    updateProgress() {
        const windowHeight = window.innerHeight;
        const docHeight = document.documentElement.scrollHeight;
        const totalScroll = window.scrollY;
        const totalDocScroll = docHeight - windowHeight;
        const scrollPercent = (totalScroll / totalDocScroll) * 100;

        // Optional: Can be used for progress bar
        if (scrollPercent >= 100) {
            this.onPageComplete();
        }
    }

    onPageComplete() {
        // Trigger any completion actions
    }
}

// Performance Monitor
class PerformanceMonitor {
    constructor() {
        this.init();
    }

    init() {
        window.addEventListener('load', () => this.reportMetrics());
    }

    reportMetrics() {
        if (!window.performance) return;

        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;

        console.log(`
╔════════════════════════════════════════╗
║      Performance Metrics              ║
╠════════════════════════════════════════╣
║ Total Load Time:  ${pageLoadTime}ms
║ DOM Ready:        ${perfData.domContentLoadedEventEnd - perfData.navigationStart}ms
║ Time to Paint:    ${perfData.responseStart - perfData.navigationStart}ms
╚════════════════════════════════════════╝
        `);
    }
}

// Utility Functions
const Utils = {
    // Format timestamp
    formatTime(ms) {
        return `${ms / 1000}s`;
    },

    // Check device capability
    getDeviceInfo() {
        return {
            userAgent: navigator.userAgent,
            online: navigator.onLine,
            language: navigator.language,
            cores: navigator.hardwareConcurrency || 'Unknown'
        };
    },

    // Theme detection
    isDarkMode() {
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    },

    // Scroll to top
    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
};

// Initialize Application
class Application {
    constructor() {
        this.init();
    }

    init() {
        // Initialize all managers
        this.navigator = new PageNavigator();
        this.navbar = new NavbarHandler();
        this.codeBlocks = new CodeBlockManager();
        this.analytics = new AnalyticsTracker();
        this.scrollProgress = new ScrollProgress();
        this.performance = new PerformanceMonitor();

        this.setupGlobalHandlers();
        this.logStartup();
    }

    setupGlobalHandlers() {
        // Handle page visibility
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                console.log('[App] Page hidden');
            } else {
                console.log('[App] Page visible');
            }
        });

        // Handle offline/online
        window.addEventListener('online', () => console.log('[Network] Back online'));
        window.addEventListener('offline', () => console.log('[Network] Gone offline'));
    }

    logStartup() {
        const deviceInfo = Utils.getDeviceInfo();
        console.log(`
╔════════════════════════════════════════╗
║   MIUI Bootloader Unlock Guide v2.0   ║
╠════════════════════════════════════════╣
║ Developer: Gtajisan                   ║
║ GitHub: @Gtajisan                     ║
║ Repository: Miui-bootlooder-unlock   ║
║ License: Open Source                  ║
╠════════════════════════════════════════╣
║ Device Cores: ${deviceInfo.cores}
║ Online: ${deviceInfo.online ? '✓ Yes' : '✗ No'}
║ Language: ${deviceInfo.language}
╚════════════════════════════════════════╝
        `);
    }
}

// Initialize application when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.app = new Application();
    });
} else {
    window.app = new Application();
}

// Export for debugging
window.DEBUG = {
    navigator: () => new PageNavigator(),
    utils: Utils,
    config: APP_CONFIG
};

console.log('💡 Tip: Use DEBUG.utils for utility functions');
console.log('📚 Read more: https://github.com/Gtajisan/Miui-bootlooder-unlock');
