// Funkcja do otwierania i zamykania menu
document.getElementById('menu-toggle').addEventListener('click', function() {
  var menu = document.getElementById('menu');  // Pobierz element menu
  menu.classList.toggle('show');  // Dodaj lub usuń klasę 'show'
});