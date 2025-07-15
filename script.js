// Dynamic Sign-in Greeting
const signin = document.querySelector('.nav-signin');
signin.addEventListener('click', () => {
  let username = prompt("Enter your name:");
  if (username) {
    signin.innerHTML = `<p><span>Hello, ${username}</span></p><p class="nav-second">Account & Lists</p>`;
  }
});

// Responsive Menu Toggle
document.getElementById("menu-toggle").addEventListener("click", () => {
  document.querySelector(".panel-ops").classList.toggle("active");
});

// Scroll to Top Button
const scrollBtn = document.getElementById("scrollTopBtn");
window.onscroll = () => {
  scrollBtn.style.display = window.scrollY > 200 ? "block" : "none";
};
scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
