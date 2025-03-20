   /*     // Check karna ke user ne intro dekha hai ya nahi
        if (!sessionStorage.getItem("visited")) {
            window.location.href = "gettangi_prepage.html"; // Agar nahi dekha to intro page par le jao
        }
*//*
// Check karna ke user ne intro dekha hai ya nahi
if (!sessionStorage.getItem("visited") || performance.navigation.type === 1) {
    sessionStorage.setItem("visited", "true"); // Set karna ke ab dekha gaya hai
    window.location.href = "gettangi_prepage.html"; // Redirect to intro page
}
*/
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


  //=============================================================

  /*gsap.registerPlugin(ScrollTrigger);


  const section10CardsContainer3 = document.getElementById("section10CardsContainer3");
  

  
  gsap.to(section10CardsContainer3, {
    x: () => -(section10CardsContainer3.scrollWidth - window.innerWidth),
    ease: "none",
    scrollTrigger: {
      trigger: "#section10CardsWrapper3",
      start: "top top",
      end: () => `+=${section10CardsContainer3.scrollWidth}`,
      pin: true,
      scrub: 0.5,
      invalidateOnRefresh: true,
    },
  });*/
  

  //========================================================================

 /* const toggleBtnCard1 = document.getElementById("toggleBtn-investor-gain-1");
const hiddenContentCard1 = document.getElementById("hiddenContent-investor-gain-1");
const card1 = document.getElementById("card-investor-gain-1");
*/
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
/*
// Card 5 Elements
const toggleBtnCard5 = document.getElementById("toggleBtn-investor-gain-5");
const hiddenContentCard5 = document.getElementById("hiddenContent-investor-gain-5");
const card5 = document.getElementById("card-investor-gain-5");*/
/*
// Card 1 Toggle Functionality
toggleBtnCard1.addEventListener("click", () => {
  hiddenContentCard1.classList.toggle("visible-investor-gain");
  toggleBtnCard1.textContent = hiddenContentCard1.classList.contains("visible-investor-gain")
    ? "Show Less"
    : "Show More";

    setTimeout(() => { ScrollTrigger.refresh(); }, 900);
});
*/
// Card 2 Toggle Functionality
toggleBtnCard2.addEventListener("click", () => {
  hiddenContentCard2.classList.toggle("visible-investor-gain");
  toggleBtnCard2.textContent = hiddenContentCard2.classList.contains("visible-investor-gain")
    ? "Show Less"
    : "Show More";

    setTimeout(() => { ScrollTrigger.refresh(); }, 900);
});

// Card 3 Toggle Functionality
toggleBtnCard3.addEventListener("click", () => {
  hiddenContentCard3.classList.toggle("visible-investor-gain");
  toggleBtnCard3.textContent = hiddenContentCard3.classList.contains("visible-investor-gain")
    ? "Show Less"
    : "Show More";

    setTimeout(() => { ScrollTrigger.refresh(); }, 900);
});

// Card 4 Toggle Functionality
toggleBtnCard4.addEventListener("click", () => {
  hiddenContentCard4.classList.toggle("visible-investor-gain");
  toggleBtnCard4.textContent = hiddenContentCard4.classList.contains("visible-investor-gain")
    ? "Show Less"
    : "Show More";

    setTimeout(() => { ScrollTrigger.refresh(); }, 900);
});
/*
// Card 5 Toggle Functionality
toggleBtnCard5.addEventListener("click", () => {
  hiddenContentCard5.classList.toggle("visible-investor-gain");
  toggleBtnCard5.textContent = hiddenContentCard5.classList.contains("visible-investor-gain")
    ? "Show Less"
    : "Show More";

    setTimeout(() => { ScrollTrigger.refresh(); }, 900);
});*/

/*// Hide Content When Clicking Outside Card 1
document.addEventListener("click", (event) => {
  if (!card1.contains(event.target)) {
    hiddenContentCard1.classList.remove("visible-investor-gain");
    toggleBtnCard1.textContent = "Show More";
  }
});
*/
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

/*
// Hide Content When Clicking Outside Card 5
document.addEventListener("click", (event) => {
  if (!card5.contains(event.target)) {
    hiddenContentCard5.classList.remove("visible-investor-gain");
    toggleBtnCard5.textContent = "Show More";
  }
});*/

//*********************************************************************** 
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


function toggleText5() {
  var text = document.getElementById("toggleText5");
  var button = document.querySelector(".toggleButton5");

  if (text.style.display === "none") {
      text.style.display = "inline";
      button.innerHTML = "Hide";
  } else {
      text.style.display = "none";
      button.innerHTML = "Show";
  }
}

//********************************************************************************************** 

/*setTimeout(() => {
  document.querySelector(".preloader").style.display = "none";
}, 5000);*/

/*

let visitCount = localStorage.getItem("visitCount") || 0;
visitCount++;
localStorage.setItem("visitCount", visitCount);

let displayTime = visitCount === 1 ? 5000 : 1000; // First visit 5 sec, next visits 2 sec
let hideTimeout;

function hidePreloader() {
    document.querySelector(".preloader").style.display = "none";
    document.querySelector(".overlay").style.display = "none";
}

let preloader = document.querySelector(".preloader");
let isHolding = false;

preloader.addEventListener("mouseenter", () => {
    clearTimeout(hideTimeout);
});
preloader.addEventListener("mouseleave", () => {
    hideTimeout = setTimeout(hidePreloader, 1000);
});

preloader.addEventListener("touchstart", () => {
    isHolding = true;
    clearTimeout(hideTimeout);
});
preloader.addEventListener("touchend", () => {
    isHolding = false;
    hideTimeout = setTimeout(hidePreloader, 1000);
});

hideTimeout = setTimeout(hidePreloader, displayTime);*/

/*
let visitCount = localStorage.getItem("visitCount") || 0;
visitCount++;
localStorage.setItem("visitCount", visitCount);

// Check if the user navigated from another page
let hasNavigated = performance.navigation.type === 1 ? false : true;

if (hasNavigated) {
    sessionStorage.setItem("hasVisited", "true");
}

let hasVisited = sessionStorage.getItem("hasVisited");

if (!hasVisited) {
    let displayTime = visitCount === 1 ? 5000 : 1000; // First visit 5 sec, next visits 1 sec
    let hideTimeout;

    function hidePreloader() {
        document.querySelector(".preloader").style.display = "none";
        document.querySelector(".overlay").style.display = "none";
    }

    let preloader = document.querySelector(".preloader");
    let isHolding = false;

    preloader.addEventListener("mouseenter", () => {
        clearTimeout(hideTimeout);
    });
    preloader.addEventListener("mouseleave", () => {
        hideTimeout = setTimeout(hidePreloader, 1000);
    });

    preloader.addEventListener("touchstart", () => {
        isHolding = true;
        clearTimeout(hideTimeout);
    });
    preloader.addEventListener("touchend", () => {
        isHolding = false;
        hideTimeout = setTimeout(hidePreloader, 1000);
    });

    hideTimeout = setTimeout(hidePreloader, displayTime);
} else {
    document.querySelector(".preloader").style.display = "none";
    document.querySelector(".overlay").style.display = "none";
}
*/

// good working js 
/*
let visitCount = localStorage.getItem("visitCount") || 0;
visitCount++;
localStorage.setItem("visitCount", visitCount);

// Check if the page was refreshed or navigated
let isRefreshed = performance.navigation.type === 1; // 1 means refreshed

if (isRefreshed) {
    sessionStorage.removeItem("hasVisited"); // Refresh hone par reset
}

let hasVisited = sessionStorage.getItem("hasVisited");

if (!hasVisited) {
    sessionStorage.setItem("hasVisited", "true"); // Navigate hone par set hoga

    let displayTime = visitCount === 1 ? 5000 : 5000; // First visit 5 sec, next visits 1 sec
    let hideTimeout;

    function hidePreloader() {
        document.querySelector(".preloader").style.display = "none";
        document.querySelector(".overlay").style.display = "none";
    }

    let preloader = document.querySelector(".preloader");
    let isHolding = false;

    preloader.addEventListener("mouseenter", () => {
        clearTimeout(hideTimeout);
    });
    preloader.addEventListener("mouseleave", () => {
        hideTimeout = setTimeout(hidePreloader, 1000);
    });

    preloader.addEventListener("touchstart", () => {
        isHolding = true;
        clearTimeout(hideTimeout);
    });
    preloader.addEventListener("touchend", () => {
        isHolding = false;
        hideTimeout = setTimeout(hidePreloader, 1000);
    });

    hideTimeout = setTimeout(hidePreloader, displayTime);
} else {
    document.querySelector(".preloader").style.display = "none";
    document.querySelector(".overlay").style.display = "none";
}

*/


//****************************************************** */
/*
function openModalAndScroll(event) {
  event.preventDefault(); // Pehle navigation rokna

  // Modal ko show karna
  var myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
  myModal.show();

  // Jab modal band ho to scroll karein
  document.getElementById('exampleModal').addEventListener('hidden.bs.modal', function () {
      var targetSection = document.getElementById('movesectioncontactustoclub');
      if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
      }
  });
}*/

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


/*-----------------------------------------------------*/

const cardContainer = document.getElementById("cardContainer");
const cardWidth = 310; // Card width + gap

document.getElementById("leftBtn").addEventListener("click", function() {
    cardContainer.scrollBy({ left: -cardWidth, behavior: 'smooth' });
});

document.getElementById("rightBtn").addEventListener("click", function() {
    cardContainer.scrollBy({ left: cardWidth, behavior: 'smooth' });
});




const cardContainerartical = document.getElementById("cardContainerartical");
const cardWidthartical = 310; // Card width + gap

document.getElementById("leftBtnartical").addEventListener("click", function() {
  cardContainerartical.scrollBy({ left: -cardWidth, behavior: 'smooth' });
});

document.getElementById("rightBtnartical").addEventListener("click", function() {
  cardContainerartical.scrollBy({ left: cardWidth, behavior: 'smooth' });
});


//-----------------------------------------------------------------------
// pre page js
/*
document.addEventListener("DOMContentLoaded", function () {
  var myModal = new bootstrap.Modal(document.getElementById('exampleModalprepage'));
  myModal.show();
});*/

// pre page and  and warning page js 
/*
let visitCount = localStorage.getItem("visitCount") || 0;
visitCount++;
localStorage.setItem("visitCount", visitCount);

// Check if the page was refreshed or navigated
let isRefreshed = performance.navigation.type === 1; // 1 means refreshed

if (isRefreshed) {
    sessionStorage.removeItem("hasVisited"); // Refresh hone par reset
}

let hasVisited = sessionStorage.getItem("hasVisited");

if (!hasVisited) {
    sessionStorage.setItem("hasVisited", "true"); // Navigate hone par set hoga

    let displayTime = visitCount === 1 ? 5000 : 5000; // First visit 5 sec, next visits 1 sec
    let hideTimeout;

    function hideElements() {
        document.querySelector(".preloader").style.display = "none";
        document.querySelector(".overlay").style.display = "none";
        
        // Modal ko bhi hide karna
        let myModalEl = document.getElementById('exampleModalprepage');
        let modalInstance = bootstrap.Modal.getInstance(myModalEl);
        if (modalInstance) {
            modalInstance.hide();
        }
    }

    let preloader = document.querySelector(".preloader");
    let isHolding = false;

    preloader.addEventListener("mouseenter", () => {
        clearTimeout(hideTimeout);
    });
    preloader.addEventListener("mouseleave", () => {
        hideTimeout = setTimeout(hideElements, 1000);
    });

    preloader.addEventListener("touchstart", () => {
        isHolding = true;
        clearTimeout(hideTimeout);
    });
    preloader.addEventListener("touchend", () => {
        isHolding = false;
        hideTimeout = setTimeout(hideElements, 1000);
    });

    // Show modal along with preloader
    document.addEventListener("DOMContentLoaded", function () {
        var myModal = new bootstrap.Modal(document.getElementById('exampleModalprepage'));
        myModal.show();
    });

    hideTimeout = setTimeout(hideElements, displayTime);
} else {
    document.querySelector(".preloader").style.display = "none";
    document.querySelector(".overlay").style.display = "none";
    
    // Modal ko bhi directly hide karna
    let myModalEl = document.getElementById('exampleModalprepage');
    let modalInstance = bootstrap.Modal.getInstance(myModalEl);
    if (modalInstance) {
        modalInstance.hide();
    }
}*/

let visitCount = localStorage.getItem("visitCount") || 0;
visitCount++;
localStorage.setItem("visitCount", visitCount);

// Check if the page was refreshed
let isRefreshed = performance.navigation.type === 1; // 1 means refreshed

if (isRefreshed) {
    sessionStorage.removeItem("hasVisited");
}

let hasVisited = sessionStorage.getItem("hasVisited");

function showPreloader() {
    document.querySelector(".preloader").style.display = "block";
    document.querySelector(".overlay").style.display = "block";

    let hideTimeout = setTimeout(hidePreloader, 5000);

    let preloader = document.querySelector(".preloader");
    let isHolding = false;

    preloader.addEventListener("mouseenter", () => {
        clearTimeout(hideTimeout);
    });
    preloader.addEventListener("mouseleave", () => {
        hideTimeout = setTimeout(hidePreloader, 1000);
    });

    preloader.addEventListener("touchstart", () => {
        isHolding = true;
        clearTimeout(hideTimeout);
    });
    preloader.addEventListener("touchend", () => {
        isHolding = false;
        hideTimeout = setTimeout(hidePreloader, 1000);
    });
}

function hidePreloader() {
    document.querySelector(".preloader").style.display = "none";
    document.querySelector(".overlay").style.display = "none";
}

// First-time visit logic
if (!hasVisited) {
    sessionStorage.setItem("hasVisited", "true"); // First visit tracking

    showPreloader();

    document.addEventListener("DOMContentLoaded", function () {
        var myModal = new bootstrap.Modal(document.getElementById('exampleModalprepage'));
        myModal.show();

        // جب یوزر modal بند کرے، تب preloader دوبارہ دکھے
        document.getElementById('exampleModalprepage').addEventListener('hidden.bs.modal', function () {
            showPreloader();
        });
    });
} else {
    hidePreloader(); // If visited before, hide preloader
}




//2nd jab close btn clik hone ke bad again warning modal
/*
let visitCount = localStorage.getItem("visitCount") || 0;
visitCount++;
localStorage.setItem("visitCount", visitCount);

// Check if the page was refreshed
let isRefreshed = performance.navigation.type === 1; // 1 means refreshed

if (isRefreshed) {
    sessionStorage.removeItem("hasVisited");
}

let hasVisited = sessionStorage.getItem("hasVisited");

function showPreloader() {
    document.querySelector(".preloader").style.display = "block";
    document.querySelector(".overlay").style.display = "block";

    let hideTimeout = setTimeout(hidePreloader, 5000);

    let preloader = document.querySelector(".preloader");
    let isHolding = false;

    preloader.addEventListener("mouseenter", () => {
        clearTimeout(hideTimeout);
    });
    preloader.addEventListener("mouseleave", () => {
        hideTimeout = setTimeout(hidePreloader, 1000);
    });

    preloader.addEventListener("touchstart", () => {
        isHolding = true;
        clearTimeout(hideTimeout);
    });
    preloader.addEventListener("touchend", () => {
        isHolding = false;
        hideTimeout = setTimeout(hidePreloader, 1000);
    });
}

function hidePreloader() {
    document.querySelector(".preloader").style.display = "none";
    document.querySelector(".overlay").style.display = "none";
}

// First-time visit logic
if (!hasVisited) {
    sessionStorage.setItem("hasVisited", "true"); // First visit tracking

    showPreloader();

    document.addEventListener("DOMContentLoaded", function () {
        var myModal = new bootstrap.Modal(document.getElementById('exampleModalprepage'));
        myModal.show();

        // When modal is closed, show preloader again for 5 seconds
        document.getElementById('exampleModalprepage').addEventListener('hidden.bs.modal', function () {
            showPreloader();
        });
    });
} else {
    hidePreloader(); // If visited before, hide preloader
}

*/

/*------------------------------------*/
/*
function prepageShowPopup() {
    document.getElementById("prepage-popup").classList.add("prepage-show");
    document.getElementById("prepage-overlay").classList.add("prepage-show");
}

function prepageClosePopup() {
    document.getElementById("prepage-popup").classList.remove("prepage-show");
    document.getElementById("prepage-overlay").classList.remove("prepage-show");
}

function prepageShowFullscreen() {
    let imgSrc = document.getElementById("prepage-popup-image").src;
    document.getElementById("prepage-fullscreen-img").src = imgSrc;
    document.getElementById("prepage-fullscreen").style.display = "flex";
}

function prepageCloseFullscreen() {
    document.getElementById("prepage-fullscreen").style.display = "none";
}

*/
/*-------------------------*/
function openImage() {
    var imageUrl = "https://drive.google.com/file/d/1VBN3NQNqYjBOpxB5cLDlbQR_2TtpjT3g/view?usp=sharing"; // Apni image ka URL yahan dalain
    window.open(imageUrl, "_blank");
}



/*---------------------------------------------------

let showMoreBtn = document.getElementById("prepageShowMoreBtn");
let extraContent = document.getElementById("prepageExtraContent");

// Show More / Show Less Logic with Animation
showMoreBtn.addEventListener("click", function() {
    if (extraContent.style.display === "none" || extraContent.style.opacity === "0") {
        extraContent.style.display = "block";
        setTimeout(() => {
            extraContent.style.opacity = "1";
            extraContent.style.transform = "translateY(0)";
        }, 10);
        showMoreBtn.innerText = "Show Less";
    } else {
        extraContent.style.opacity = "0";
        extraContent.style.transform = "translateY(-10px)";
        setTimeout(() => {
            extraContent.style.display = "none";
        }, 300);
        showMoreBtn.innerText = "Show More";
    }
});


let showMoreBtn2 = document.getElementById("prepageShowMoreBtn2");
let extraContent2 = document.getElementById("prepageExtraContent2");

// Show More / Show Less Logic with Animation
showMoreBtn2.addEventListener("click", function() {
    if (extraContent2.style.display === "none" || extraContent2.style.opacity === "0") {
        extraContent2.style.display = "block";
        setTimeout(() => {
            extraContent2.style.opacity = "1";
            extraContent2.style.transform = "translateY(0)";
        }, 10);
        showMoreBtn2.innerText = "Show Less";
    } else {
        extraContent2.style.opacity = "0";
        extraContent2.style.transform = "translateY(-10px)";
        setTimeout(() => {
            extraContent2.style.display = "none";
        }, 300);
        showMoreBtn2.innerText = "Show More";
    }
});*/

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

/*--------------------------*/

