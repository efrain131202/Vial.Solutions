  //

document.addEventListener("DOMContentLoaded", function() {
    const navbarLinks = document.querySelectorAll(".navbar-items a");
    const toggleButton = document.getElementById("toggleButton");
    const navbar = document.querySelector('.navbar');
  
    navbarLinks.forEach(link => {
      link.addEventListener("click", smoothScroll);
    });
  
    toggleButton.addEventListener('click', function() {
      navbar.classList.toggle('active');
    });

  //
  
    function smoothScroll(event) {
      event.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      const navbarHeight = document.querySelector('.navbar').offsetHeight;
  
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - navbarHeight,
          behavior: "smooth"
        });
        navbar.classList.remove('active');
      }
    }
  });

  //

  
  document.addEventListener("DOMContentLoaded", function() {
    const text = document.querySelector('.text');
    text.style.animationPlayState = 'running';
  });

  //

  window.addEventListener('scroll', () => {
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
  
    const progressBar = document.querySelector('.progress-bar');
    progressBar.style.width = scrolled + '%';
  });

  //

  