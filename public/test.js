

window.onload = function() {
 
//    alert( "welcome to Contact List App ;)" );
    
    $( ".imgtop" ).hide(1);
        $( ".img1" ).hide(300);
    
    
//   document.getElementById("my_audio").play();

//$(document).ready(function() {
   
//});
    
};



//window.onload = function() {
//    document.getElementById("my_audio").play();
//}
//


var audio = document.getElementsByTagName("audio")[0];
var played = false;


     
window.onclick = function(){
       if (played) {
//           audio.pause();
           
    $("#my_audio").pause();
       }
      $(".imgtop").show(1500);
    
    $("#my_audio").get(0).play();
     
 
    played = true;
    
    
 }; 





       
