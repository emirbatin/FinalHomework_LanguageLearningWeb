$(window).scroll(function() {
    var scrollDistance = $(window).scrollTop();
    $('.profile-container').css('transform', 'translateY(' + scrollDistance + 'px)');
  });