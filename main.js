document.addEventListener('DOMContentLoaded', () => {
    const langToggleBtn = document.getElementById('lang-toggle');
    const htmlElement = document.documentElement;

    let currentLang = 'en';

    langToggleBtn.addEventListener('click', () => {
        if (currentLang === 'en') {
            currentLang = 'ar';
            htmlElement.setAttribute('lang', 'ar');
            htmlElement.setAttribute('dir', 'rtl');
            langToggleBtn.textContent = 'English';
            translatePage('ar');
        } else {
            currentLang = 'en';
            htmlElement.setAttribute('lang', 'en');
            htmlElement.setAttribute('dir', 'ltr');
            langToggleBtn.textContent = 'عربي';
            translatePage('en');
        }
    });

    function translatePage(lang) {
        // Translate text content
        const elements = document.querySelectorAll('[data-en]');
        elements.forEach(el => {
            const text = el.getAttribute(`data-${lang}`);
            if (text) {
                el.innerHTML = text;
            }
        });

        // Translate Form Placeholders
        const inputs = document.querySelectorAll('[data-en-placeholder]');
        inputs.forEach(input => {
            const placeholderText = input.getAttribute(`data-${lang}-placeholder`);
            if (placeholderText) {
                input.setAttribute('placeholder', placeholderText);
            }
        });
    }
});