// Funkcja otwierająca menu po kliknięciu
document.getElementById('menu-btn').addEventListener('click', function() {
  document.getElementById('menu').classList.toggle('open');
});// Add your inline JS here
<script>
  document.getElementById("menu-toggle").addEventListener("click", function() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("show");
  });
</script>
