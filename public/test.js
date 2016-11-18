var audio = document.getElementsByTagName("audio")[0];
var played = false;

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //----January is 0!
var yyyy = today.getFullYear();

if (dd <10) {
    dd ='0'+dd
} 

if(mm<10) {
    mm='0'+mm
} 

window.onload = function() {
    $( ".imgtop" ).hide(-4);
    $( ".img1" ).hide(2500);
};

window.onclick = function(){
       if (played) {   
           
//----------------- $("#my_audio").pause();
           
           $("#my_audio").pause();
       
    }
      $(".imgtop").show(1300);
      $("#my_audio").get(0).play();
       played = true; 
};



       
