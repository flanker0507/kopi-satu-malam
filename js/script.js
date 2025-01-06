// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector('.navbar-nav');

// ketika hamburger menu diklik
document.querySelector('#hamburger-menu').onclick = (e) => {
  navbarNav.classList.toggle('active');
  e.preventDefault();
};

// Toggle class active untuk search form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

// ketika search diklik
document.querySelector('#search-button').onclick = (e) => {
  searchForm.classList.toggle('active');
  searchBox.focus();
  e.preventDefault();
};

// ketika SHopping Cart diklik
const shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#shopping-cart-button').onclick = (e) => {
  shoppingCart.classList.toggle('active');
  e.preventDefault();
};

// klik di luar sidebar untuk menghilang nav
const hb = document.querySelector('#hamburger-menu');

document.addEventListener('click', function (e) {
  if (!hb.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});

// klik di luar sidebar untuk menghilang nav
const sb = document.querySelector('#search-button');

document.addEventListener('click', function (e) {
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove('active');
  }
});

// klik di luar sidebar untuk menghilang nav
const scb = document.querySelector('#shopping-cart-button');

document.addEventListener('click', function (e) {
  if (!scb.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove('active');
  }
});

// Modal Box
const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButtons = document.querySelectorAll('.item-detail-button');

itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = 'flex';
    e.preventDefault();
  };
});

// klik tombol close modal
document.querySelector('.modal .close-icon').onclick = (e) => {
  itemDetailModal.style.display = 'none';
  e.preventDefault();
};

// klik di luar modal
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = 'none';
  }
};
