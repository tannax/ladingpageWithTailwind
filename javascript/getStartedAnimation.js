document.addEventListener('DOMContentLoaded', function () {
    const getStartedContainer = document.getElementById('getStartedContainer');
    const corvetteImage = document.getElementById('corvetteImage');

    let isAnimating = false; // Flag to prevent multiple animations

    getStartedContainer.addEventListener('mouseenter', function (event) {
        event.preventDefault();

        if (isAnimating) return; // Skip if already animating

        isAnimating = true;

        // Clone the Corvette image
        const clonedCorvette = corvetteImage.cloneNode(true);
        clonedCorvette.classList.remove('hidden'); // Remove the "hidden" class

        // Insert the cloned image as a sibling before the button
        getStartedContainer.parentNode.insertBefore(clonedCorvette, getStartedContainer);

        // Calculate the target position
        const targetLeft = getStartedContainer.getBoundingClientRect().right + 20; // Calculate based on the right side of the button
        const targetTop = getStartedContainer.getBoundingClientRect().top;

        // Set the initial position of the cloned image
        clonedCorvette.style.left = `${targetLeft}px`;
        clonedCorvette.style.top = `${targetTop}px`;

        // Trigger the animation
        setTimeout(() => {
            clonedCorvette.style.left = `${targetLeft + corvetteImage.width + 20}px`; // Move to the right of the button
        }, 10);

        // Remove the cloned image after the animation
        setTimeout(() => {
            clonedCorvette.remove();
            isAnimating = false; // Reset the flag after the animation
        }, 500);
    });
});
