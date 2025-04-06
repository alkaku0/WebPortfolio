function toggleLanguage() {
    const currentLanguage = document.body.getAttribute('data-lang') === 'cs' ? 'en' : 'cs';
    document.body.setAttribute('data-lang', currentLanguage);
    const texts = document.querySelectorAll('.text');
    texts.forEach(text => {
      text.textContent = text.getAttribute(`data-${currentLanguage}`);
    });
    localStorage.setItem('selectedLanguage', currentLanguage);
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    document.body.setAttribute('data-lang', savedLanguage);
    const texts = document.querySelectorAll('.text');
    texts.forEach(text => {
      text.textContent = text.getAttribute(`data-${savedLanguage}`);
    });
  });
  