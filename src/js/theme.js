import '../css/styles.css';
import '../css/theme.css';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const input = document.getElementById('theme-switch-toggle');
const body = document.body;
input.addEventListener('change', onChange);
const savedTheme = localStorage.getItem('Theme');

const date = new Date();
const hours = date.getHours();
console.log(hours);

if (hours > 19) {
  body.classList.add(Theme.DARK);
  input.checked = true;
}

if (savedTheme) {
  body.classList.add(savedTheme);
  if (savedTheme === Theme.DARK) {
    input.checked = true;
  }
} else {
  body.classList.add(Theme.LIGHT);
}

function onChange(e) {
  if (e.currentTarget.checked) {
    body.classList.add(Theme.DARK);
    body.classList.remove(Theme.LIGHT);
    localStorage.setItem('Theme', Theme.DARK);
  } else {
    body.classList.add(Theme.LIGHT);
    body.classList.remove(Theme.DARK);
    localStorage.setItem('Theme', Theme.LIGHT);
  }
}
