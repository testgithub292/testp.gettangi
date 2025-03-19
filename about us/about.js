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
/*----------------------------------------------------------------------*/


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


  /*-------------------------------------------*/
/*
  function navigateAndOpenModal(event) {
    event.preventDefault(); // Default behavior rokna
  
    // Pehle page ko smoothly scroll karwana
    var targetSection = document.getElementById('movesectioncontactustoclub');
    if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  
    // 1 second (1000ms) ka delay daalna taake pehle scroll complete ho, phir modal open ho
    setTimeout(function () {
        var myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
        myModal.show();
  
        // Modal 5 second (5000ms) ke baad automatically close hoga
        setTimeout(function () {
            myModal.hide();
        }, 5000);
    }, 1000);
  }
  
*/

  /*-------------------------------------------------------------*/

/*
  function toggleContentRoi() {
    var content = document.getElementById("hiddenContentRoi");
    var button = document.getElementById("toggleButtonRoi");

    if (content.classList.contains("visibleRoi")) {
        content.classList.remove("visibleRoi");
        button.innerHTML = "Show More";
    } else {
        content.classList.add("visibleRoi");
        button.innerHTML = "Show Less";
    }
}
*/
/*
function toggleContentRoi(event) {
  var content = document.getElementById("hiddenContentRoi");
  var button = document.getElementById("toggleButtonRoi");

  if (content.classList.contains("visibleRoi")) {
      content.classList.remove("visibleRoi");
      button.innerHTML = "Expand";
  } else {
      content.classList.add("visibleRoi");
      button.innerHTML = "Collapse ";
  }

  // Stop event propagation to prevent hiding immediately after clicking the button
  event.stopPropagation();
}

// Add event listener for clicking anywhere outside the content
document.addEventListener("click", function () {
  var content = document.getElementById("hiddenContentRoi");
  var button = document.getElementById("toggleButtonRoi");

  if (content.classList.contains("visibleRoi")) {
      content.classList.remove("visibleRoi");
      button.innerHTML = "Expand";
  }
});

// Prevent hiding when clicking on the content itself
document.getElementById("hiddenContentRoi").addEventListener("click", function (event) {
  event.stopPropagation();
});*/
//-----------------------------------------------------------------------
/*--------------------------------------------------------------------*/

