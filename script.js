// script.js
function showSideBar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex'; // Make the sidebar visible
    setTimeout(() => {
      sidebar.style.opacity = '1'; // Fade in
    }, 10); // Small delay to trigger the transition
  }
  
  function hideSideBar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.opacity = '0'; // Fade out
    sidebar.addEventListener('transitionend', () => {
      sidebar.style.display = 'none'; // Hide the sidebar after fade out
    }, { once: true }); // Use `once` to ensure the event listener is removed after it runs once
  }
  