// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Sticky navbar effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.2)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});

// Mobile menu toggle
const navMenu = document.querySelector('.nav-menu');
const navBrand = document.querySelector('.nav-brand');

// Add mobile responsiveness
if (window.innerWidth < 768) {
    navMenu.style.display = 'none';
}

window.addEventListener('resize', function() {
    if (window.innerWidth < 768) {
        navMenu.style.display = 'none';
    } else {
        navMenu.style.display = 'flex';
    }
});

// Copy to clipboard for passwords/codes
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Copied: ' + text);
    });
}

// Add copy functionality to code blocks
document.querySelectorAll('code').forEach(code => {
    code.style.cursor = 'pointer';
    code.addEventListener('click', function() {
        copyToClipboard(this.textContent);
    });
});

console.log('MIUI Bootloader Unlock Guide - By Gtajisan');
console.log('GitHub: https://github.com/Gtajisan');
console.log('Telegram: https://t.me/farhan_muh_tasim');
