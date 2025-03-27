

// aos
$(document).ready(function () {
  // Custom function which toggles between sticky class (is-sticky)
  var stickyToggle = function (sticky, stickyWrapper, scrollElement) {
      var stickyHeight = sticky.outerHeight();
      var stickyTop = stickyWrapper.offset().top;
      if (scrollElement.scrollTop() >= stickyTop) {
          stickyWrapper.height(stickyHeight);
          sticky.addClass("is-sticky");
      }
      else {
          sticky.removeClass("is-sticky");
          stickyWrapper.height('auto');
      }
  };

  // Find all data-toggle="sticky-onscroll" elements
  $('[data-toggle="sticky-onscroll"]').each(function () {
      var sticky = $(this);
      var stickyWrapper = $('<div>').addClass('sticky-wrapper'); // insert hidden element to maintain actual top offset on page
      sticky.before(stickyWrapper);
      sticky.addClass('sticky');

      // Scroll & resize events
      $(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function () {
          stickyToggle(sticky, stickyWrapper, $(this));
      });

      // On page load
      stickyToggle(sticky, stickyWrapper, $(window));
  });
});


// sticky menu on upp
        // auto generated side menu from top header menu start
        var topHeaderMenu = $('header nav > ul').clone();
        var sideMenu = $('.side-menu-wrap nav');
        sideMenu.append(topHeaderMenu);
        if ($(sideMenu).find('.sub-menu').length != 0) {
          $(sideMenu).find('.sub-menu').parent().append('<i class="fas fa-chevron-right d-flex align-items-center"></i>');
        }
        var sideMenuList = $('.side-menu-wrap nav > ul > li > i');
        $(sideMenuList).on('click', function () {
          if (!($(this).siblings('.sub-menu').hasClass('d-block'))) {
            $(this).siblings('.sub-menu').addClass('d-block');
          } else {
            $(this).siblings('.sub-menu').removeClass('d-block');
          }
        });
        $('.side-menu-close').on('click', function () {
          if (!($('.side-menu-close').hasClass('closed'))) {
            $('.side-menu-close').addClass('closed');
          } else {
            $('.side-menu-close').removeClass('closed');
          }
        });
        $('.wrapper').append('<div class="custom-overlay h-100 w-100"></div>');
        $('.side-menu-close').on('click', function () {
          if (!($('.side-menu-wrap').hasClass('opened')) && !($('.custom-overlay').hasClass('show'))) {
            $('.side-menu-wrap').addClass('opened');
            $('.custom-overlay').addClass('show');
          } else {
            $('.side-menu-wrap').removeClass('opened');
            $('.custom-overlay').removeClass('show');
          }
        })
        $('.custom-overlay').on('click', function () {
          sideMenuCloseAction();
        });
      var isDragging = false, initialOffset = 0, finalOffset = 0;
      $(".side-menu-wrap")
      .mousedown(function(e) {
          isDragging = false;
        initialOffset = e.offsetX;
      })
      .mousemove(function() {
          isDragging = true;
       })
      .mouseup(function(e) {
          var wasDragging = isDragging;
          isDragging = false;
        finalOffset = e.offsetX;
          if (wasDragging) {
              if(initialOffset>finalOffset) {
                 sideMenuCloseAction();
                 }
          }
      });
        function sideMenuCloseAction() {
          $('.side-menu-wrap').addClass('open');
          $('.wrapper').addClass('freeze');
          $('.custom-overlay').removeClass('show');
          $('.side-menu-wrap').removeClass('opened');
          $('.side-menu-close').removeClass('closed');
          $(sideMenuList).siblings('.sub-menu').removeClass('d-block');
        }
          $(window).on('resize', function() {
              if($(window).width() >= 992) {
                  sideMenuCloseAction();
              }
          });
          //menu end
    
        // parralx
        // $(document).ready(function(){
        //   $('.partner-logos').parallax({imageSrc: './img/partner-banner.png'});
        // });
 
        // $('.client-slider').owlCarousel({
        //   loop:true,
        //   margin:10,
        //   nav:false,
        //   autoplay:true,
        //   autoplayTimeout:500,
        //   responsive:{
        //       0:{
        //           items:2
        //       },
        //       600:{
        //           items:4
        //       },
        //       640:{
        //         items:3
        //     },
        //       1000:{
        //           items:5
        //       },
        //       1200:{
        //         items:7
        //     }
        //   }
        // });
        
      var owl = $('.how-work');
owl.owlCarousel({
    loop:true,
    nav:true,
    margin:5,
    dots:false,
    autoplay:true,
    autoplayTimeout:3000,
    navText:['<i class="fas fa-caret-left arrow-howmo how-left"></i>',
    '<i class="fas fa-caret-right arrow-howmo how-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },            
        960:{
            items:1
        },
        1200:{
            items:1
        }
    }
});
// owl.on('mousewheel', '.owl-stage', function (e) {
//     if (e.deltaY>0) {
//         owl.trigger(' prev.owl');
//     } else {
//         owl.trigger('next.owl');
//     }
//     e.preventDefault();
// });

// scroll site

