// Prevent drag photo and links
(function () {
  var elems = document.querySelectorAll('img, a');
  for (var i = 0; elem = elems[i++];) {
    elem.ondragstart = function () { return false; };
  }
})();


// "ForEach" polyfill for IE/Edge
(function () {
  if ( typeof NodeList.prototype.forEach === "function" ) return false;
  NodeList.prototype.forEach = Array.prototype.forEach;
})();

var defineDOM = function() {
 
    var navMenuDiv = document.getElementById("nav-content");
    var navMenu = document.getElementById("nav-toggle");
    
    document.onclick = check;
    function check(e){
      var target = (e && e.target) || (event && event.srcElement);
      
      //Nav Menu
      if (!checkParent(target, navMenuDiv)) {
      // click NOT on the menu
      if (checkParent(target, navMenu)) {
        // click on the link
        if (navMenuDiv.classList.contains("hidden")) {
        navMenuDiv.classList.remove("hidden");
        } else {navMenuDiv.classList.add("hidden");}
      } else {
        // click both outside link and outside menu, hide menu
        navMenuDiv.classList.add("hidden");
      }
      }
      
    }
    function checkParent(t, elm) {
      while(t.parentNode) {
      if( t == elm ) {return true;}
      t = t.parentNode;
      }
      return false;
    }
  

  var initPlugins = {
    init: function() {
      this.carousel();
    },

    carousel: function() {
      var carousel = document.querySelector('.homepage-carousel');
      var categoryCarousel = document.querySelector('.category-carousel');

      if (carousel) {
        var slider = tns({
          container: carousel,
          nav: true,
          autoplay: true,
          autoplayTimeout: 4000,
          touch: true,
          speed: 700,
          autoplayButtonOutput: false,
          controls: false,
          items: 1,
          navPosition: 'bottom',
        });
      }

      if (categoryCarousel) {
        var slider = tns({
          container: categoryCarousel,
          nav: true,
          autoplay: true,
          autoplayTimeout: 4000,
          touch: true,
          speed: 700,
          autoplayButtonOutput: false,
          controls: false,
          items: 1,
          navPosition: 'bottom',
          navContainer: '.custom-nav',
        });
      }

     

    },



  }

  initPlugins.init();
  // Hamburger.init();

}

document.addEventListener('DOMContentLoaded', function() { defineDOM() });