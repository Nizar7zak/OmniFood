
$(document).ready(function() {
    /*-scroll sticky-*/
    $('.js--section-features').waypoint(function(direction) {
        if (direction == 'down') {
            $('nav').addClass('sticky');

        }
        else {
            $('nav').removeClass('sticky');

        }
      } , { offset: '70px'   
    });

  /*- scroll on btn -*/
 $('.js--scroll-on-plan').click(function() {
     $('html,body').animate({scrollTop: $('js--section-plans').offset().top},1500);
 });

 $('.js--scroll-on-features').click(function() {
    $('html,body').animate({scrollTop: $('js--section-features').offset().top},1500);
});
    

    /*-nav  scroll-*/
    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
          if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
              $('html,body').animate({
                scrollTop: target.offset().top
              }, 1500);
              return false;
            }
          }
        });
      });

         /*-Animation on scroll-*/
      $('.js--wp-1').waypoint(function(direction) {
          $('.js--wp-1').addClass('animated fadeIn');
      } , {
          offset:'50%;' 
      });
      $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    } , {
        offset:'50%;'
    })
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    } , {
        offset:'50%;'
    })
    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated pulse');
    } , {
        offset:'50%;'
    })



    /*-mobile navigation-*/
$('.js--nav-icon').click(function() {
    var nav = $('.js--main-nav');

    nav.slideToggle(200);

});


/*- map-*/
var map = new GMaps({
    div: '.map',  
    lat: 38.7437396,
    lng: -9.2302439,
    zoom: 12
  });

  map.addMarker({
    lat: 38.7437396,
    lng: -9.2302439,
    title: 'LISBON',
    infoWindow: {
        content: '<p>Our Lisbon</p>'
      }
  });





});