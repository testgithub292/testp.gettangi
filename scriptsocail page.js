
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

  /*----white paper js -----------------------------------*/
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');

  function openSidebar() {
    sidebar.classList.add('active');
    overlay.classList.add('active');
  }

  function closeSidebar() {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
  }

  // ScrollSpy
  const links = document.querySelectorAll('.sidebar a');
  const sections = document.querySelectorAll('section');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= sectionTop - 100) {
        current = section.getAttribute('id');
      }
    });

    links.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  });

  function toggleDropdown(e) {
  e.preventDefault();
  const parent = e.target.closest('.dropdown');
  parent.classList.toggle('open');
}

/*--------------------------*/



  const sidebar2 = document.querySelector(".sidebar");
  const footer = document.getElementById("footer");

  function adjustSidebar() {
    const footerTop = footer.getBoundingClientRect().top;
    const sidebarHeight = sidebar2.offsetHeight;
    const marginTop = 160; // aapka sidebar ka margin-top
    const offsetBeforeFooter = 220; // 50px before footer

    if (footerTop < sidebarHeight + marginTop + offsetBeforeFooter) {
      // Unfix the sidebar before touching footer
      sidebar2.style.position = "absolute";
      sidebar2.style.top = `${window.scrollY + footerTop - sidebarHeight - offsetBeforeFooter}px`;
    } else {
      // Keep sidebar fixed
      sidebar2.style.position = "fixed";
      sidebar2.style.top = "0";
    }
  }

  window.addEventListener("scroll", adjustSidebar);
  window.addEventListener("resize", adjustSidebar);





