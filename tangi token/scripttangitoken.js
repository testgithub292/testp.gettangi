// Získání reference na tlačítko
var scrollTopBtn = document.getElementById("scrollTopBtn");

// Při scrollování stránky
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
}

// Při kliknutí na tlačítko se přesune na začátek stránky
scrollTopBtn.onclick = function() {
    document.body.scrollTop = 0; // Pro Safari
    document.documentElement.scrollTop = 0; // Pro Chrome, Firefox, IE a Opera
}



// animation text

  // Function to handle the intersection observer
  const sections = document.querySelectorAll('.section');
  const options = {
      root: null, // Use the viewport as the container
      threshold: 0.1 // Trigger when 10% of the section is visible
  };

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target); // Stop observing once it becomes visible
          }
      });
  }, options);

  sections.forEach(section => {
      observer.observe(section); // Observe each section
  });



  //-----------------------------------------------------


    // Get the navbar
    const navbar = document.querySelector('.navbar');

    // Listen for scroll event
    window.addEventListener('scroll', function() {
      if (window.scrollY >= 100) {
        navbar.classList.add('scrolled');
        navbar.classList.add('hidden');
      } else {
        navbar.classList.remove('scrolled');
        navbar.classList.remove('hidden');
      }
    });

 

    /*-----------navbar sub menu code*/
document.addEventListener('DOMContentLoaded', function () {
  const submenuToggles = document.querySelectorAll('.dropdown-submenu > .dropdown-toggle');

  submenuToggles.forEach(toggle => {
    toggle.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation(); // Prevent closing parent dropdown

      const submenu = this.nextElementSibling;
      if (submenu && submenu.classList.contains('dropdown-menu')) {
        submenu.classList.toggle('show');
      }
    });
  });

  // Prevent submenu clicks from closing parent dropdown
  const submenus = document.querySelectorAll('.dropdown-submenu .dropdown-menu');
  submenus.forEach(menu => {
    menu.addEventListener('click', function (e) {
      e.stopPropagation();
    });
  });
});