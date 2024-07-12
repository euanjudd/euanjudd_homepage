document.addEventListener('DOMContentLoaded', function () {
    const dropdownButton = document.getElementById('dropdownButton');
    const dropdownMenu = document.getElementById('dropdownMenu');

    dropdownButton.addEventListener('click', function () {
        // Toggle the 'hidden' class to show or hide the dropdown
        dropdownMenu.classList.toggle('hidden');

        // Manage aria-expanded attribute based on the visibility of the dropdown menu
        const isExpanded = dropdownButton.getAttribute('aria-expanded') === 'true' || false;
        dropdownButton.setAttribute('aria-expanded', !isExpanded);
    });

    // Optional: Close the dropdown when clicking outside of it
    document.addEventListener('click', function (event) {
        if (!dropdownButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.add('hidden');
            dropdownButton.setAttribute('aria-expanded', 'false');
        }
    });

    // Optional: Close the dropdown on pressing the escape key
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            dropdownMenu.classList.add('hidden');
            dropdownButton.setAttribute('aria-expanded', 'false');
        }
    });
});
