var audio = document.getElementsByTagName("audio")[0];
var played = false;

window.onload = function() {
    $( ".imgtop" ).hide(-4);
    $( ".img1" ).hide(2500);
};

window.onclick = function(){
       if (played) {   
    $("#my_audio").pause();
    }
      $(".imgtop").show(1800);
      $("#my_audio").get(0).play();
       played = true;  
 }; 





       
