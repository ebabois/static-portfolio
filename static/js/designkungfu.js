// ===== Scroll to Top ==== 
$(window).scroll(function() {
  if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
      $('#return-to-top').fadeIn(200);    // Fade in the arrow
  } else {
      $('#return-to-top').fadeOut(200);   // Else fade out the arrow
  }
});
$('#return-to-top').click(function() {      // When arrow is clicked
  $('body,html').animate({
      scrollTop : 0                       // Scroll to top of body
  }, 500).preventDefault();
  
});


$(document).ready(function(){
  $("table tr:odd").addClass("odd");
});


// home feature random 
this.randomfeature = function(){
	var length = $(".work.random a").length;
	var ran = Math.floor(Math.random()*length) + 1;
	$(".work.random a:nth-child(" + ran + ")").show();
};

$(document).ready(function(){	
	randomfeature();
});

// faq random 
this.randomfaq = function(){
	var length = $("ul.randomfaq li").length;
	var ran = Math.floor(Math.random()*length) + 1;
	$("ul.randomfaq li:nth-child(" + ran + ")").show();
};

$(document).ready(function(){	
	randomfaq();
});


// slideshow controls
//$(".slideshow").cycle({fx: "fade", timeout: 0, prev: ".prev", next: ".next"});


// image bricks assign class to first one for different treatment    
$(document).ready(function(){
  $(".blogroll.bricks div:first-child").addClass("feature");
  $(".blogroll.bricks>div:nth-child(3n)").addClass("spacing");
  
  $(".work.home>a:nth-child(4)").addClass("half");
  $(".work.home>a:nth-child(5)").addClass("half");
  
  $(".work.specific>a:first-child").addClass("feature");  
  $(".work.specific>a:nth-child(5)").addClass("half");
  $(".work.specific>a:nth-child(6)").addClass("half");  
});

$(document).scroll(function(e){
  var window_height = $(window).height();

  checkInRange(document);

  $(document).scroll(function(e){
      checkInRange(this);
  });

  function checkInRange(element){
      var range = {
          top: $(this).scrollTop(),
          bottom: $(this).scrollTop()+window_height
      }

      $("section").each(function(){
          if(
              $(this).position().top >= range.top &&
              $(this).position().top + $(this).outerHeight() <= range.bottom

          ){
              $(this).effect("highlight", { times:3 }, 500);
              $(this).addClass("selected");
          }else{
              $(this).removeClass("selected");
          }
      });
  }
    
});
