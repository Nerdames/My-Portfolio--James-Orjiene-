// show sidebar
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
  

  // Sticky Header
window.onscroll = function() {
  makeHeaderSticky();
};

function makeHeaderSticky() {
  const header = document.querySelector("header");
  const sticky = header.offsetTop; // Get the offset position of the header

  if (window.pageYOffset > sticky) {
    header.style.position = "fixed"; // Make the header fixed
    header.style.top = "0"; // Stick it to the top
    header.classList.add("sticky"); // Add sticky class for color change
  } else {
    header.style.position = "relative"; // Reset to default
    header.classList.remove("sticky"); // Remove sticky class for color reset
  }
}
