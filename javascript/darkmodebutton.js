document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    const toggleButton = document.getElementById('toggleDarkMode');

    toggleButton.addEventListener('click', function () {
        body.classList.toggle('dark-mode');
    });
});
