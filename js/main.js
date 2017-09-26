$(document).ready(function() {
    
    var scrollLink = $('.scroll');
    
    // Smooth scrolling
    scrollLink.click(function(e) {
      e.preventDefault();
      if ($('nav ul').hasClass('open')) {
        $('nav ul').removeClass('open');
      }
      $('body,html').animate({
        scrollTop: $(this.hash).offset().top - 50
      }, 500 );
    });
    
    // Active link switching
    $(window).scroll(function() {
      var scrollbarLocation = $(this).scrollTop();
      
      scrollLink.each(function() {
        
        var sectionOffset = $(this.hash).offset().top - 70;
        
        if ( sectionOffset <= scrollbarLocation ) {
          $(this).parent().addClass('active');
          $(this).parent().siblings().removeClass('active');
        }
      })
      
    })

    $('#burger').on('click', function(e) {
      e.preventDefault();
      $('nav ul').toggleClass('open');
    })
    
  })