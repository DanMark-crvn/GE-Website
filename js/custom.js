
  (function ($) {
  
  "use strict";

    // MENU
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });
    
    // CUSTOM LINK
    $('.smoothscroll').click(function(){
      var el = $(this).attr('href');
      var elWrapped = $(el);
      var header_height = $('.navbar').height();
  
      scrollToDiv(elWrapped,header_height);
      return false;
  
      function scrollToDiv(element,navheight){
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop-navheight;
  
        $('body,html').animate({
        scrollTop: totalScroll
        }, 300);
      }
    });
  
  })(window.jQuery);

  
//ADDRESS BAR URL CHANGE
document.querySelectorAll('.nav-link.click-scroll').forEach(link => {
    link.addEventListener('click', function(e) {
        // Prevent default anchor behavior
        e.preventDefault();

        // Get the href value (e.g., #about-sections)
        const target = this.getAttribute('href');

        // Change the address bar URL without reloading
        history.pushState(null, '', target);

        // Optionally, scroll to the section
        const section = document.querySelector(target);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    });
});



//TAB NAMES
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");

    const titles = {
        home: "GE - Home",
        product: "GE - Product",
        about: "GE - About",
        reseller: "GE - Reseller",
        contact: "GE - Contact"
    };

    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            const id = this.id;
            if (titles[id]) {
                document.title = titles[id];
            }
        });
    });
});

// LOADER Duration
window.addEventListener("load", function () {
    setTimeout(function () {
        document.body.classList.add("loaded");
    }, 2000); // delays for 1.2 seconds
});


// For Navigations of active class
// Wait until the page is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navLinks.forEach(item => item.classList.remove('active')); // remove active from all
            this.classList.add('active'); // add to clicked
        });
    });
});

