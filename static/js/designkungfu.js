// convert external links  
$(document).ready(function(){  
  $("a[href*='http://']:not([href*='"+location.hostname+"']), a[rel='external']").live("click", function(){ 
    $(this).attr("target","_blank"); 
  });  
  $("a[href*='https://']:not([href*='"+location.hostname+"']), a[rel='external']").live("click", function(){ 
    $(this).attr("target","_blank"); 
  });
});

// twitter feed 
getTwitters('tweet', {
  id: 'designkungfu',
  count: 2,
  enableLinks: true,
  ignoreReplies: true,
  clearContents: true,
  newwindow: true,
  template: '%text%'
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

$(document).ready(function() {
  // initialize scrollable
  $(".scroll").scrollable();
  
  //var width = 0;
  //$('.scroll div.items img').each(function() {
  //width += $(this).outerWidth( true );
  //});
  //$('.scroll div.items').css('width', width);
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
