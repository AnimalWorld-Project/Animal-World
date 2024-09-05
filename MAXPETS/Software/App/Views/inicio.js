// Funcionalidad de la cuenta (dropdown)
document.getElementById('account-icon').addEventListener('click', function() {
    const dropdown = document.querySelector('.dropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});

window.addEventListener('click', function(e) {
    const dropdown = document.querySelector('.dropdown');
    if (!document.getElementById('account-icon').contains(e.target)) {
        dropdown.style.display = 'none';
    }
});

// Funcionalidad de la campanita de notificaciones
document.getElementById('notification-icon').addEventListener('click', function() {
    const notificationDropdown = document.querySelector('.notification-dropdown');
    notificationDropdown.style.display = notificationDropdown.style.display === 'block' ? 'none' : 'block';
});

window.addEventListener('click', function(e) {
    const notificationDropdown = document.querySelector('.notification-dropdown');
    if (!document.getElementById('notification-icon').contains(e.target)) {
        notificationDropdown.style.display = 'none';
    }
});

// Funcionalidad de la barra lateral
document.getElementById('toggle-sidebar').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    const menu = document.querySelector('.menu');
    const mainContent = document.getElementById('main-content');
    const toggleSidebar = document.getElementById('toggle-sidebar');
    const toggleIcon = toggleSidebar.querySelector('span');

    sidebar.classList.toggle('hidden');
    menu.classList.toggle('hidden');
    mainContent.classList.toggle('expanded');
    toggleSidebar.classList.toggle('hidden');

    // Cambiar el símbolo de la flecha
    if (sidebar.classList.contains('hidden')) {
        toggleIcon.textContent = '►';
    } else {
        toggleIcon.textContent = '◄';
    }
});
