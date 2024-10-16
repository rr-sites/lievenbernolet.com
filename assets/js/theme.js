jQuery(document).ready(function($) {

  var offset = 1250;
  var duration = 800;
  jQuery(window).scroll(function() {
    if (jQuery(this).scrollTop() > offset) {
      jQuery('.back-to-top').fadeIn(duration);
    } else {
      jQuery('.back-to-top').fadeOut(duration);
    }
  });
  jQuery('.back-to-top').click(function(event) {
    event.preventDefault();
    jQuery('html, body').animate({
      scrollTop: 0
    }, duration);
    return false;
  })


  // alertbar later
  $(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 280) {
      $('.alertbar').fadeIn();
    } else {
      $('.alertbar').fadeOut();
    }
  });

  // masonry
  if ($('.masonrygrid').length) {
    var $grid = $('.masonrygrid').masonry({
      itemSelector: '.grid-item'
    });
    $grid.imagesLoaded().progress(function() {
      $grid.masonry();
    });
  }


  // Smooth scroll to an anchor
  $('a.smoothscroll[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });

  // to top
  $("a.sscroll[href='#totop']").click(function() {
    $("html, body").animate({
      scrollTop: 0
    }, "slow");
    return false;
  });

  // just jump
  var jumptopageof = $('#jumptopageof');
  if (jumptopageof.length) {
    $('body,html').animate({
      scrollTop: $(jumptopageof).offset().top - 0
    }, 800);
  }

});