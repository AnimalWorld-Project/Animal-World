document.getElementById('account-icon').addEventListener('click', function() {
    const dropdown = document.getElementById('account-dropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});

document.getElementById('notifications-icon').addEventListener('click', function() {
    const notificationsDropdown = document.getElementById('notifications-dropdown');
    notificationsDropdown.style.display = notificationsDropdown.style.display === 'block' ? 'none' : 'block';
});

window.addEventListener('click', function(e) {
    const dropdown = document.getElementById('account-dropdown');
    const notificationsDropdown = document.getElementById('notifications-dropdown');
    
    if (!document.getElementById('account-icon').contains(e.target)) {
        dropdown.style.display = 'none';
    }

    if (!document.getElementById('notifications-icon').contains(e.target)) {
        notificationsDropdown.style.display = 'none';
    }
});

document.getElementById('toggle-btn').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    const toggleIcon = this.querySelector('span');
    const mainContent = document.getElementById('main-content');
    
    sidebar.classList.toggle('hidden');
    mainContent.style.marginLeft = sidebar.classList.contains('hidden') ? '0' : '250px';
    toggleIcon.style.transform = sidebar.classList.contains('hidden') ? 'rotate(180deg)' : 'rotate(0deg)';
});
