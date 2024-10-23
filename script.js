window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
   
    
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    console.log(navbar);
  });
  
 const slides= document.querySelectorAll(".slide")


// JavaScript to detect when the image is visible and add the 'visible' class

document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once it's visible
            }
        });
    }, { threshold: 0.1 }); 

    // Select all elements you want to animate (you can have multiple classes, separated by commas)
    const elementsToAnimate = document.querySelectorAll('.about-image, .about-text'); 

    // Loop through each element and observe it
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});

