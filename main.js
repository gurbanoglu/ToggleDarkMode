function calculateSettingAsThemeString({ localStorageTheme, systemSettingDark }) {
  if (localStorageTheme !== null) {
    return localStorageTheme;
  }

  if (systemSettingDark.matches) {
    return "dark";
  }

  return "light";
}

function updateThemeOnHtmlEl({ theme }) {
  document.querySelector("html").setAttribute("data-theme", theme);
}

let currentColourMode = document.querySelector('html').getAttribute('data-theme');

console.log('currentColourMode:', currentColourMode);

updateThemeOnHtmlEl({ theme: currentColourMode });

let switchColour = () => {
  const newTheme = currentColourMode === "dark" ? "light" : "dark";
 
  updateThemeOnHtmlEl({ theme: newTheme });

  currentColourMode = newTheme;
}

function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');

  navLinks.classList.toggle('active');
}

const toggleLightBtn = document.querySelector('#toggle-light-btn');

/*The toggle light button will
  not be visible by default.*/
toggleLightBtn.style.display = "none";

const toggleDarkBtn = document.querySelector('#toggle-dark-btn');

toggleLightBtn.addEventListener('click', () => {
	toggleLightBtn.style.display = "none";
  toggleDarkBtn.style.display = "inline-block";

  switchColour();
})

toggleDarkBtn.addEventListener('click', () => {
	toggleDarkBtn.style.display = "none";
  toggleLightBtn.style.display = "inline-block";

  switchColour();
})

const modalDialog = document.getElementById('modal-dialog');
const closeModalBtn = document.getElementById('close-modal-btn');

function showModal(event) {
  event.preventDefault();

  modalDialog.style.display = "block";
}

closeModalBtn.onclick = function() {
  document.getElementById("inquiries").reset();

  modalDialog.style.display = "none";
};

window.onclick = function(event) {
  if (event.target === modalDialog) {
    modalDialog.style.display = "none";
  }
};