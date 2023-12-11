 // Function to toggle between light and dark mode
 function toggleDarkMode() {
    var darkModeCheckbox = document.getElementById('dark-mode-checkbox');
    var lightModeStylesheet = document.getElementById('light-mode');
    var darkModeStylesheet = document.getElementById('dark-mode');

    // Toggle the checkbox state
    darkModeCheckbox.checked ? enableDarkMode() : enableLightMode();
}

// Function to enable dark mode
function enableDarkMode() {
    var lightModeStylesheet = document.getElementById('light-mode');
    var darkModeStylesheet = document.getElementById('dark-mode');

    // Disable light mode and enable dark mode
    lightModeStylesheet.disabled = true;
    darkModeStylesheet.disabled = false;
}

// Function to enable light mode
function enableLightMode() {
    var lightModeStylesheet = document.getElementById('light-mode');
    var darkModeStylesheet = document.getElementById('dark-mode');

    // Disable dark mode and enable light mode
    lightModeStylesheet.disabled = false;
    darkModeStylesheet.disabled = true;
}