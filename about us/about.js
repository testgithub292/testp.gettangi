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


  
  // Select the progress circle and percentage text
const progressCircle = document.getElementById('progress-circle');
const percentageText = document.getElementById('percentage');

// Observer to detect when the circle enters the viewport
const observerCircle = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            progressCircle.classList.add('active'); // Trigger fade-in effect
            animateProgressCircle(0, 33, 2000); // Animate the progress circle to 33%
        }
    });
});

// Observe the progress circle element
observerCircle.observe(progressCircle);

// Function to animate the progress circle
function animateProgressCircle(start, end, duration) {
    let current = start;
    const increment = (end - start) / (duration / 16); // Smooth increment (16ms per frame)
    const interval = setInterval(() => {
        current += increment;
        if (current >= end) {
            current = end;
            clearInterval(interval);
        }

        // Update the conic-gradient to reflect progress
        const progressColor = `conic-gradient(
            #a74dfc 0% ${current}%,  /* Purple for progress */
            #e6e6e6 ${current}% 100% /* Gray for remaining */
        )`;
        progressCircle.style.background = progressColor;

        // Update the percentage text
        percentageText.textContent = `${Math.round(current)} B`;
    }, 16);
}


//-----------------------------------------------------------------------
/*--------------------------------------------------------------------*/

let showMoreBtn = document.getElementById("prepageShowMoreBtn");
let extraContents = document.querySelectorAll(".prepageExtraContent");

// Show More / Show Less Logic with Animation for Multiple Elements
showMoreBtn.addEventListener("click", function() {
    let isHidden = extraContents[0].style.display === "none" || extraContents[0].style.opacity === "0";

    extraContents.forEach(content => {
        if (isHidden) {
            content.style.display = "block";
            setTimeout(() => {
                content.style.opacity = "1";
                content.style.transform = "translateY(0)";
            }, 10);
        } else {
            content.style.opacity = "0";
            content.style.transform = "translateY(-10px)";
            setTimeout(() => {
                content.style.display = "none";
            }, 300);
        }
    });

    showMoreBtn.innerText = isHidden ? "Show Less" : "Show More";
});
