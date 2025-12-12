const themeToggle = document.querySelector('.theme-toggle');
const html = document.documentElement;

// System-Präferenz prüfen
//const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
//const savedTheme = localStorage.getItem('theme') || (prefersDark ? 'dark' : 'light');

// Theme beim Laden setzen
html.setAttribute('data-theme', savedTheme);

// Toggle-Funktionalität
themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});