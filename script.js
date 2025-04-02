// Získej reference na vstupy a progress bar
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const progressBar = document.querySelector('.progress-bar');

// Poslouchá zadání uživatelského jména
usernameInput.addEventListener('input', () => {
  if (usernameInput.value === 'admin') {
    progressBar.style.width = '50%'; // Progress na 50% při správném jménu
  } else {
    progressBar.style.width = '0%'; // Reset progress baru
  }
});

// Poslouchá zadání hesla
passwordInput.addEventListener('input', () => {
  if (passwordInput.value === 'jakubpietrula789' && usernameInput.value === 'admin') {
    progressBar.style.width = '100%'; // Progress na 100% při správném heslu
  } else if (usernameInput.value === 'admin') {
    progressBar.style.width = '50%'; // Udrž progress na 50%, pokud heslo není správné
  } else {
    progressBar.style.width = '0%'; // Reset progress baru
  }
});

// Přihlášení uživatele
document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Zabraň odeslání formuláře

  const username = usernameInput.value;
  const password = passwordInput.value;

  if (username === 'admin' && password === 'jakubpietrula789') {
    window.location.href = 'dashboard.html'; // Přesměruj na dashboard
  } else {
    alert('Nesprávné uživatelské jméno nebo heslo!');
  }
});
