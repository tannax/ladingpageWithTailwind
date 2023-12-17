document.addEventListener('DOMContentLoaded', function () {
    const featureCards = document.querySelectorAll('.feature-card');

    featureCards.forEach(card => {
        card.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent the default click behavior (i.e., redirection)

            // Create a modal container
            const modalContainer = document.createElement('div');
            modalContainer.classList.add('modal-container');

            // Create an image in the container
            const modalImage = document.createElement('img');
            modalImage.src = this.querySelector('img').src;
            modalImage.alt = this.querySelector('h3').textContent;
            modalImage.classList.add('modal-image');

            // Append image to the container
            modalContainer.appendChild(modalImage);

            // Create an h3 element for the modal
            const modalTitle = document.createElement('h3');
            modalTitle.textContent = this.querySelector('h3').textContent;
            modalTitle.classList.add('modal-title');

            // Append h3 to the container
            modalContainer.appendChild(modalTitle);

            // Append container to the body
            document.body.appendChild(modalContainer);

            // Gradually decrease the blur effect
            let blurValue = 2;
            const blurInterval = setInterval(() => {
                blurValue = 1; // Adjust the decrement value as needed
                modalImage.style.filter = `blur(${blurValue}px)`;

                if (blurValue <= 2) {
                    clearInterval(blurInterval);
                    // Show the modal container
                    modalContainer.style.opacity = '1';
                    modalContainer.style.visibility = 'visible';
                    modalTitle.style.transform = 'translate(-50%, -50%)'; // Move h3 to the center
                }
            }, 10); // Decreased the interval for a smoother transition

            // Close modal and redirect after 3 seconds
            setTimeout(() => {
                // Hide the modal container
                modalContainer.style.opacity = '0';
                modalContainer.style.visibility = 'hidden';
                modalTitle.style.transform = ''; // Reset h3 position

                // Remove the modal container after hiding
                setTimeout(() => {
                    modalContainer.remove();

                    // Redirect to the desired URL
                    window.location.href = card.dataset.src || '#';
                }, 500);
            }, 3000); // Changed the duration to 3 seconds
        });
    });
});
