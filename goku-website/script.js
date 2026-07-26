// Function to handle Single Page Navigation with Smooth Fades
function switchTab(targetId) {
  const pages = document.querySelectorAll('.page');
  const navBtns = document.querySelectorAll('.nav-btn');


  // Deactivate all pages
  pages.forEach(page => {
    page.classList.remove('active-page');
  });


  // Remove active styling from buttons
  navBtns.forEach(btn => {
    btn.classList.remove('active');
  });


  // Activate selected page
  const activePage = document.getElementById(targetId);
  if (activePage) {
    activePage.classList.add('active-page');
  }


  // Highlight matching navigation button
  const activeNav = document.querySelector(`[data-target="${targetId}"]`);
  if (activeNav) {
    activeNav.classList.add('active');
  }


  // Scroll smoothly to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}


// Event Listeners for Nav Buttons
document.addEventListener('DOMContentLoaded', () => {
  const navBtns = document.querySelectorAll('.nav-btn');


  navBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const target = btn.getAttribute('data-target');
      switchTab(target);
    });
  });
});
