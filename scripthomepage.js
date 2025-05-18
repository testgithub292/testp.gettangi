
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

/*------------------------*/

  /*     // Check karna ke user ne intro dekha hai ya nahi
        if (!sessionStorage.getItem("visited")) {
            window.location.href = "gettangi_prepage.html"; // Agar nahi dekha to intro page par le jao
        }
*/

document.addEventListener("DOMContentLoaded", function () {
    let videos = document.querySelectorAll(".lazy-video");

    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let video = entry.target;
                let source = video.querySelector("source");
                source.src = source.getAttribute("data-src");
                video.load();
                observer.unobserve(video); // Ek dafa load hone ke baad dobara observe na ho
            }
        });
    }, { threshold: 0.5 });

    videos.forEach(video => observer.observe(video));
});

/*---------------------------------------------------------*/
/*-----------------open prepage code index-------------*/

// Check karna ke user ne intro dekha hai ya nahi
if (!sessionStorage.getItem("visited") || performance.navigation.type === 1) {
    sessionStorage.setItem("visited", "true"); // Set karna ke ab dekha gaya hai
    window.location.href = "gettangi_prepage.html"; // Redirect to intro page
}
//*--------------------*/

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
const toggleBtnCard5 = document.getElementById("toggleBtn-investor-gain-5");
const hiddenContentCard5 = document.getElementById("hiddenContent-investor-gain-5");
const card5 = document.getElementById("card-investor-gain-5");

// Card 6 Elements
const toggleBtnCard6 = document.getElementById("toggleBtn-investor-gain-6");
const hiddenContentCard6 = document.getElementById("hiddenContent-investor-gain-6");
const card6 = document.getElementById("card-investor-gain-6");

// Card 7 Elements
const toggleBtnCard7 = document.getElementById("toggleBtn-investor-gain-7");
const hiddenContentCard7 = document.getElementById("hiddenContent-investor-gain-7");
const card7 = document.getElementById("card-investor-gain-7");

// Card 5 Elements
const toggleBtnCard8 = document.getElementById("toggleBtn-investor-gain-8");
const hiddenContentCard8 = document.getElementById("hiddenContent-investor-gain-8");
const card8 = document.getElementById("card-investor-gain-8");

// Card 5 Elements
const toggleBtnCard9 = document.getElementById("toggleBtn-investor-gain-9");
const hiddenContentCard9 = document.getElementById("hiddenContent-investor-gain-9");
const card9 = document.getElementById("card-investor-gain-9");

// Card 1 Toggle Functionality
toggleBtnCard1.addEventListener("click", () => {
  hiddenContentCard1.classList.toggle("visible-investor-gain");
  toggleBtnCard1.textContent = hiddenContentCard1.classList.contains("visible-investor-gain")
    ? "Show Less"
    : "Show More";

    setTimeout(() => { ScrollTrigger.refresh(); }, 900);
});


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

// Card 5 Toggle Functionality
toggleBtnCard5.addEventListener("click", () => {
  hiddenContentCard5.classList.toggle("visible-investor-gain");
  toggleBtnCard5.textContent = hiddenContentCard5.classList.contains("visible-investor-gain")
    ? "Show Less"
    : "Show More";

    setTimeout(() => { ScrollTrigger.refresh(); }, 900);
});

// Card 6 Toggle Functionality
toggleBtnCard6.addEventListener("click", () => {
    hiddenContentCard6.classList.toggle("visible-investor-gain");
    toggleBtnCard6.textContent = hiddenContentCard6.classList.contains("visible-investor-gain")
      ? "Show Less"
      : "Show More";
  
      setTimeout(() => { ScrollTrigger.refresh(); }, 900);
  });

  // Card 7 Toggle Functionality
toggleBtnCard7.addEventListener("click", () => {
    hiddenContentCard7.classList.toggle("visible-investor-gain");
    toggleBtnCard7.textContent = hiddenContentCard7.classList.contains("visible-investor-gain")
      ? "Show Less"
      : "Show More";
  
      setTimeout(() => { ScrollTrigger.refresh(); }, 900);
  });

  // Card 8 Toggle Functionality
toggleBtnCard8.addEventListener("click", () => {
    hiddenContentCard8.classList.toggle("visible-investor-gain");
    toggleBtnCard8.textContent = hiddenContentCard8.classList.contains("visible-investor-gain")
      ? "Show Less"
      : "Show More";
  
      setTimeout(() => { ScrollTrigger.refresh(); }, 900);
  });

  // Card 9 Toggle Functionality
toggleBtnCard9.addEventListener("click", () => {
    hiddenContentCard9.classList.toggle("visible-investor-gain");
    toggleBtnCard9.textContent = hiddenContentCard9.classList.contains("visible-investor-gain")
      ? "Show Less"
      : "Show More";
  
      setTimeout(() => { ScrollTrigger.refresh(); }, 900);
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


// Hide Content When Clicking Outside Card 5
document.addEventListener("click", (event) => {
  if (!card5.contains(event.target)) {
    hiddenContentCard5.classList.remove("visible-investor-gain");
    toggleBtnCard5.textContent = "Show More";
  }
});

// Hide Content When Clicking Outside Card 6
document.addEventListener("click", (event) => {
    if (!card6.contains(event.target)) {
      hiddenContentCard6.classList.remove("visible-investor-gain");
      toggleBtnCard6.textContent = "Show More";
    }
  });

  // Hide Content When Clicking Outside Card 7
document.addEventListener("click", (event) => {
    if (!card7.contains(event.target)) {
      hiddenContentCard7.classList.remove("visible-investor-gain");
      toggleBtnCard7.textContent = "Show More";
    }
  });

  // Hide Content When Clicking Outside Card 8
document.addEventListener("click", (event) => {
    if (!card8.contains(event.target)) {
      hiddenContentCard8.classList.remove("visible-investor-gain");
      toggleBtnCard8.textContent = "Show More";
    }
  });

  // Hide Content When Clicking Outside Card 9
document.addEventListener("click", (event) => {
    if (!card9.contains(event.target)) {
      hiddenContentCard9.classList.remove("visible-investor-gain");
      toggleBtnCard9.textContent = "Show More";
    }
  });*/

//*********************************************************************** 
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

function toggleText6() {
    var text = document.getElementById("toggleText6");
    var button = document.querySelector(".toggleButton6");
  
    if (text.style.display === "none") {
        text.style.display = "inline";
        button.innerHTML = "Hide";
    } else {
        text.style.display = "none";
        button.innerHTML = "Show";
    }
  }

  function toggleText7() {
    var text = document.getElementById("toggleText7");
    var button = document.querySelector(".toggleButton7");
  
    if (text.style.display === "none") {
        text.style.display = "inline";
        button.innerHTML = "Hide";
    } else {
        text.style.display = "none";
        button.innerHTML = "Show";
    }
  }

  function toggleText8() {
    var text = document.getElementById("toggleText8");
    var button = document.querySelector(".toggleButton8");
  
    if (text.style.display === "none") {
        text.style.display = "inline";
        button.innerHTML = "Hide";
    } else {
        text.style.display = "none";
        button.innerHTML = "Show";
    }
  }

  function toggleText9() {
    var text = document.getElementById("toggleText9");
    var button = document.querySelector(".toggleButton9");
  
    if (text.style.display === "none") {
        text.style.display = "inline";
        button.innerHTML = "Hide";
    } else {
        text.style.display = "none";
        button.innerHTML = "Show";
    }
  }
  */
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

/*
const cardContaineryoutubevideo = document.getElementById("cardContaineryoutubevideo");
const cardWidthyoutubevideo = 310; // Card width + gap

document.getElementById("leftBtnyoutubevideo").addEventListener("click", function() {
    cardContaineryoutubevideo.scrollBy({ left: -cardWidth, behavior: 'smooth' });
});

document.getElementById("rightBtnyoutubevideo").addEventListener("click", function() {
    cardContaineryoutubevideo.scrollBy({ left: cardWidth, behavior: 'smooth' });
});

*/
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
/*-----------------------real code waring --------*/
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

        // جب یوزر modal بند کرے، تب preloader دوبارہ دکھے
        document.getElementById('exampleModalprepage').addEventListener('hidden.bs.modal', function () {
            showPreloader();
        });
    });
} else {
    hidePreloader(); // If visited before, hide preloader
}
*/



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
/*
function openImage() {
    var imageUrl = "https://drive.google.com/file/d/1VBN3NQNqYjBOpxB5cLDlbQR_2TtpjT3g/view?usp=sharing"; // Apni image ka URL yahan dalain
    window.open(imageUrl, "_blank");
}
*/


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
/*
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
*/
/*--------------------------*/

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


/*----------------------------*/
/*
function toggleText() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("toggleBtn");

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      moreText.style.display = "none";
      btnText.innerHTML = " Show more";
    } else {
      dots.style.display = "none";
      moreText.style.display = "inline";
      btnText.innerHTML = " Show less";
    }
  }

  */
/*--------------------------------------------------
  function toggleText(id) {
    var dots = document.getElementById("dots" + id);
    var moreText = document.getElementById("more" + id);
    var btnText = document.getElementById("toggleBtn" + id);

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      moreText.style.display = "none";
      btnText.innerHTML = " Show more";
    } else {
      dots.style.display = "none";
      moreText.style.display = "inline";
      btnText.innerHTML = " Show less";
    }
  }
*/

/*
function toggleText(id) {
  var dots = document.getElementById("dots" + id);
  var moreText = document.getElementById("more" + id);
  var btnText = document.getElementById("toggleBtn" + id);

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    moreText.style.display = "none";
    btnText.innerHTML = " Show more";
  } else {
    dots.style.display = "none";
    moreText.style.display = "inline";
    btnText.innerHTML = " Show less";

    // Add document click listener when text is expanded
    setTimeout(() => {
      document.addEventListener("click", handleOutsideClick);
    }, 0);
  }
/*
  // Function to hide the text when clicking outside
  function handleOutsideClick(e) {
    // Agar click kisi aise element pe hua jo related he, ignore
    if (
      e.target.id === "toggleBtn" + id ||
      document.getElementById("more" + id).contains(e.target)
    ) {
      return;
    }

    // Collapse the text
    dots.style.display = "inline";
    moreText.style.display = "none";
    btnText.innerHTML = " Show more";

    // Remove the listener after collapse
    document.removeEventListener("click", handleOutsideClick);
  }
}
*/


document.querySelectorAll('.toggleBtn').forEach(btn => {
  btn.addEventListener('click', function () {
    const id = this.getAttribute('data-id');
    toggleText(id);
  });
});

function toggleText(id) {
  const dots = document.querySelectorAll('.dots[data-id="' + id + '"]');
  const moreText = document.querySelectorAll('.moreText[data-id="' + id + '"]');
  const buttons = document.querySelectorAll('.toggleBtn[data-id="' + id + '"]');

  const isExpanded = dots[0].style.display === "none"; // check from first one

  if (isExpanded) {
    dots.forEach(dot => dot.style.display = "inline");
    moreText.forEach(text => text.style.display = "none");
    buttons.forEach(btn => btn.innerHTML = " Show more");
  } else {
    dots.forEach(dot => dot.style.display = "none");
    moreText.forEach(text => text.style.display = "inline");
    buttons.forEach(btn => btn.innerHTML = " Show less");
  }
}

/*--------custom notificaton ----------*/

/*
let toastTimeout; // for storing the timeout ID

window.onload = function() {
  if (!sessionStorage.getItem('toastShown')) {
    setTimeout(function() {
      const toast = document.getElementById("customToast");
      toast.style.display = "block";

      // Save session flag
      sessionStorage.setItem('toastShown', 'true');

      // Start auto-hide timer
      toastTimeout = setTimeout(function() {
        toast.style.display = "none";
      }, 6000); // Hide after 6 seconds
    }, 1000);
  }
};

function closeToast() {
  document.getElementById("customToast").style.display = "none";
}

// Stop auto-hide if mouse is over the toast or touch is on the toast
document.addEventListener("DOMContentLoaded", function () {
  const toast = document.getElementById("customToast");

  // Mouse events
  toast.addEventListener("mouseenter", function () {
    clearTimeout(toastTimeout); // Cancel auto-hide on hover
  });

  toast.addEventListener("mouseleave", function () {
    // Restart hide timer when mouse leaves
    toastTimeout = setTimeout(function() {
      toast.style.display = "none";
    }, 3000); // 3 seconds after leaving
  });

  // Touch events for mobile users
  toast.addEventListener("touchstart", function () {
    clearTimeout(toastTimeout); // Cancel auto-hide on touch
  });

  toast.addEventListener("touchend", function () {
    // Restart hide timer when touch ends
    toastTimeout = setTimeout(function() {
      toast.style.display = "none";
    }, 3000); // 3 seconds after touch ends
  });
});*/
/*---------------------------*/






