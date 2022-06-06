$(document).ready(function(){
    
    $("#btn").click(function() {
      window.scrollTo({ top: 550, behavior: 'smooth'});
    });
  
    if(pageYOffset <= 461.25){
      $(".navbar").removeClass("second_navbar");
      $(".navbar").addClass("first_nav");
    }
    else{
      $(".navbar").addClass("second_navbar");
      $(".navbar").removeClass("first_nav");
    }
        
        
    $(window).on("scroll", function () {
  
      if(pageYOffset >= 461.25){
        $(".navbar").addClass("second_navbar");
        $(".navbar").removeClass("first_nav");
      }
      else{
        $(".navbar").removeClass("second_navbar");
        $(".navbar").addClass("first_nav");
      }
    });
  });
  
  