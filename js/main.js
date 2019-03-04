$(window).on("load",function() {
  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();

	  // Fade in on scroll
    $("section").each(function() {
      var objectTop = $(this).offset().top + 100;

      if (objectTop < windowBottom) { // scrolling down
        if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
      } else { // scrolling up
        if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
      }
    });

    // Add Nav BG color on scroll
    var coverHeight = $("#cover").innerHeight();
    var navHeight = $("#navbar").innerHeight();

    if (windowBottom > (coverHeight+navHeight)) {
    	$("#navbar").addClass("navbar-bg");
    } else {
    	$("#navbar").removeClass("navbar-bg");
    }

  }).scroll(); //invoke scroll-handler on page-load
});

// Smooth scrolling
$(document).on('click', 'a[href^="#"]', function (event) {
event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

// Bio Toggle
$('.toggle').click(function(e) {
  e.preventDefault();

  var $this = $(this);

if ($this.next().hasClass('show')) {
        $this.next().removeClass('show');
        $this.next().slideUp(350);
    } else {
        $this.parent().parent().find('li .inner').removeClass('show');
        $this.parent().parent().find('li .inner').slideUp(350);
        $this.next().toggleClass('show');
        $this.next().slideToggle(350);
    }
});

// activate Slick
$(document).ready(function(){
  $('.slideshow').slick({
    // autoplay: true,
    // autoplaySpeed: 5000,
    arrows: true,
    adaptiveHeight: true,
    dots: true,
    infinite: false,
    pauseOnFocus: true,
    swipeToSlide: true,
    draggable: true,
    // fade: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
        {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  });
});
