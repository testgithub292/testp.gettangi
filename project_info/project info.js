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
  
  
  /*-------road map script ---------------------------*/
  // Show the paragraph with a transition effect
  window.onload = function() {
    document.getElementById('infoParagraph').classList.add('show');
};

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
  const sections = document.querySelectorAll('.sectiontext');
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



   //========================================================================
/*
 const toggleBtnCard1 = document.getElementById("toggleBtn-investor-gain-1");
 const hiddenContentCard1 = document.getElementById("hiddenContent-investor-gain-1");
 const card1 = document.getElementById("card-investor-gain-1");
 
 // Card 2 Elements
 const toggleBtnCard2 = document.getElementById("toggleBtn-investor-gain-2");
 const hiddenContentCard2 = document.getElementById("hiddenContent-investor-gain-2");
 const card2 = document.getElementById("card-investor-gain-2");
 
 // Card 3 Elements
 const toggleBtnCard3 = document.getElementById("toggleBtn-investor-gain-3");
 const hiddenContentCard3 = document.getElementById("hiddenContent-investor-gain-3");
 const card3 = document.getElementById("card-investor-gain-3");
 // Card 4 Elements
 const toggleBtnCard4 = document.getElementById("toggleBtn-investor-gain-4");
 const hiddenContentCard4 = document.getElementById("hiddenContent-investor-gain-4");
 const card4 = document.getElementById("card-investor-gain-4");
 
 // Card 5 Elements
 /*const toggleBtnCard5 = document.getElementById("toggleBtn-investor-gain-5");
 const hiddenContentCard5 = document.getElementById("hiddenContent-investor-gain-5");
 const card5 = document.getElementById("card-investor-gain-5");*/
 /*
 // Card 1 Toggle Functionality
 toggleBtnCard1.addEventListener("click", () => {
   hiddenContentCard1.classList.toggle("visible-investor-gain");
   toggleBtnCard1.textContent = hiddenContentCard1.classList.contains("visible-investor-gain")
     ? "Show Less"
     : "Show More";
 });
 
 // Card 2 Toggle Functionality
 toggleBtnCard2.addEventListener("click", () => {
   hiddenContentCard2.classList.toggle("visible-investor-gain");
   toggleBtnCard2.textContent = hiddenContentCard2.classList.contains("visible-investor-gain")
     ? "Show Less"
     : "Show More";
 });
 
 // Card 3 Toggle Functionality
 toggleBtnCard3.addEventListener("click", () => {
   hiddenContentCard3.classList.toggle("visible-investor-gain");
   toggleBtnCard3.textContent = hiddenContentCard3.classList.contains("visible-investor-gain")
     ? "Show Less"
     : "Show More";
 });
 
 // Card 4 Toggle Functionality
 toggleBtnCard4.addEventListener("click", () => {
   hiddenContentCard4.classList.toggle("visible-investor-gain");
   toggleBtnCard4.textContent = hiddenContentCard4.classList.contains("visible-investor-gain")
     ? "Show Less"
     : "Show More";
 });
 
// Card 5 Toggle Functionality
 toggleBtnCard5.addEventListener("click", () => {
   hiddenContentCard5.classList.toggle("visible-investor-gain");
   toggleBtnCard5.textContent = hiddenContentCard5.classList.contains("visible-investor-gain")
     ? "Show Less"
     : "Show More";
 });
 
 // Hide Content When Clicking Outside Card 1
 document.addEventListener("click", (event) => {
   if (!card1.contains(event.target)) {
     hiddenContentCard1.classList.remove("visible-investor-gain");
     toggleBtnCard1.textContent = "Show More";
   }
 });
 
 // Hide Content When Clicking Outside Card 2
 document.addEventListener("click", (event) => {
   if (!card2.contains(event.target)) {
     hiddenContentCard2.classList.remove("visible-investor-gain");
     toggleBtnCard2.textContent = "Show More";
   }
 });
 
 // Hide Content When Clicking Outside Card 3
 document.addEventListener("click", (event) => {
   if (!card3.contains(event.target)) {
     hiddenContentCard3.classList.remove("visible-investor-gain");
     toggleBtnCard3.textContent = "Show More";
   }
 });
 
 
 // Hide Content When Clicking Outside Card 4
 document.addEventListener("click", (event) => {
   if (!card4.contains(event.target)) {
     hiddenContentCard4.classList.remove("visible-investor-gain");
     toggleBtnCard4.textContent = "Show More";
   }
 });
 */
 /*
 // Hide Content When Clicking Outside Card 5
 document.addEventListener("click", (event) => {
   if (!card5.contains(event.target)) {
     hiddenContentCard5.classList.remove("visible-investor-gain");
     toggleBtnCard5.textContent = "Show More";
   }
 });*/
 
 //-------------------------------------------
 
 /*
 function toggleText() {
     var text = document.getElementById("toggleText");
     var button = document.querySelector(".toggleButton");
   
     if (text.style.display === "none") {
         text.style.display = "inline";
         button.innerHTML = "Hide";
     } else {
         text.style.display = "none";
         button.innerHTML = "Show";
     }
   }
 

   function toggleText2() {
    var text = document.getElementById("toggleText2");
    var button = document.querySelector(".toggleButton2");
  
    if (text.style.display === "none") {
        text.style.display = "inline";
        button.innerHTML = "Hide";
    } else {
        text.style.display = "none";
        button.innerHTML = "Show";
    }
  }


  function toggleText3() {
    var text = document.getElementById("toggleText3");
    var button = document.querySelector(".toggleButton3");
  
    if (text.style.display === "none") {
        text.style.display = "inline";
        button.innerHTML = "Hide";
    } else {
        text.style.display = "none";
        button.innerHTML = "Show";
    }
  }

  function toggleText4() {
    var text = document.getElementById("toggleText4");
    var button = document.querySelector(".toggleButton4");
  
    if (text.style.display === "none") {
        text.style.display = "inline";
        button.innerHTML = "Hide";
    } else {
        text.style.display = "none";
        button.innerHTML = "Show";
    }
  }
  
*/
  /*-------------------------------------*/


