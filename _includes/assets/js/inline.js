// Funkcja do otwierania i zamykania menu
document.getElementById('menu-toggle').addEventListener('click', function() {
  var menu = document.getElementById('menu');  // Pobierz element menu
  menu.classList.toggle('show');  // Dodaj lub usuń klasę 'show'
});
// Funkcja obsługująca rozwijanie menu po kliknięciu
document.getElementById('menu-btn').addEventListener('click', function() {
    document.getElementById('menu').classList.toggle('open');
});

// Funkcja do aktywowania rozwijania menu po najechaniu na przycisk
document.querySelector('.navbar li').addEventListener('mouseenter', function() {
    document.querySelector('.submenu').classList.add('open');
});

document.querySelector('.navbar li').addEventListener('mouseleave', function() {
    document.querySelector('.submenu').classList.remove('open');
});
