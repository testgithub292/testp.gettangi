    function goToMain() {
        sessionStorage.setItem("visited", "true"); // Mark karein ke user ne page dekha hai
        window.location.href = "index.html"; // Main page per redirect kar do
    }

 
    /*-----------------------------------------*/
    
 // Function to detect when elements come into view
 function animateOnScroll(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show"); // Reset animation when out of view
            }
        });
    }

    // Create observer
    const observer = new IntersectionObserver(animateOnScroll, {
        root: null,
        threshold: 0.2 // Trigger when 20% of the element is visible
    });

    // Observe all elements that need animation
    document.querySelectorAll(".animate-left, .animate-right, .animate-p").forEach(element => {
        observer.observe(element);
    });
    /*---------------------------------------------*/
// Function to detect when elements come into view
function animateBottomOnScroll(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show-bottom");
        } else {
            entry.target.classList.remove("show-bottom"); // Reset animation when out of view
        }
    });
}

// Create observer
const bottomObserver = new IntersectionObserver(animateBottomOnScroll, {
    root: null,
    threshold: 0.2
});

// Observe all elements with .animate-bottom class
document.querySelectorAll(".animate-bottom").forEach(element => {
    bottomObserver.observe(element);
});

//------------------------------------

function updateButtons() {
    // Buttons ko select karo
    var btn1 = document.getElementById("btn1");
    var btn2 = document.getElementById("btn2");
    var btn3 = document.getElementById("btn3");
    var btn4 = document.getElementById("btn4");

    // Agar viewport width 700px se kam ho
    if (window.innerWidth < 790) {
      btn1.textContent = "General PreSale";
      btn2.textContent = "Elite Investment";
      btn3.textContent = "Go To Website";
      btn4.textContent = "Meet Investors";
    } else {
      // Wapas original text restore karein
      btn1.textContent = "Join Our PreSale Now";
      btn2.textContent = "Join Our Exclusive Investor Club";
      btn3.textContent = "Go To Website";
      btn4.textContent = "Connect With Existing Investors";
    }
  }

  // Jab window resize ho, function chale
  window.addEventListener("resize", updateButtons);

  // Page load hone par bhi check kare
  updateButtons();


  //------------------------------------------------------

  function updateButtons2() {
    // Buttons ko select karo
    var btn5 = document.getElementById("btn5");
    var btn6 = document.getElementById("btn6");
    var btn7 = document.getElementById("btn7");
    var btn8 = document.getElementById("btn8");

    // Agar viewport width 700px se kam ho
    if (window.innerWidth < 992) {
      btn5.textContent = "General PreSale";
      btn6.textContent = "Elite Investment";
      btn7.textContent = "Go To Website";
      btn8.textContent = "Meet Investors";
    } else {
      // Wapas original text restore karein
      btn5.textContent = "Join Our PreSale Now";
      btn6.textContent = "Join Our Exclusive Investor Club";
      btn7.textContent = "Go To Website";
      btn8.textContent = "Connect With Existing Investors";
    }
  }

  // Jab window resize ho, function chale
  window.addEventListener("resize", updateButtons2);

  // Page load hone par bhi check kare
  updateButtons2();