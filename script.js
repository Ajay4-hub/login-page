document.addEventListener("DOMContentLoaded", function() {
    // Select the container or element that you want to animate
    const container = document.querySelector('.container');

    // Function to add animation classes on click
    function triggerAnimations() {
        container.classList.add('animate');
    }

    // Listen for a click/tap event on the body
    document.body.addEventListener('click', triggerAnimations, { once: true });
});