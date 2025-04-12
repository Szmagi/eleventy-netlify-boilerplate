// Funkcja do otwierania i zamykania menu (hamburger)
document.getElementById('menu-toggle').addEventListener('click', function() {
  var menu = document.getElementById('menu');
  menu.classList.toggle('show');  // Dodaj lub usuń klasę 'show'
});

// Funkcja do rozwijania submenu po najechaniu
document.querySelectorAll('.navbar li').forEach(function(item) {
  item.addEventListener('mouseenter', function() {
    this.querySelector('.submenu').classList.add('open');
  });

  item.addEventListener('mouseleave', function() {
    this.querySelector('.submenu').classList.remove('open');
  });
});
