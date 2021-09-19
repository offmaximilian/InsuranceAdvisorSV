/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunctionBurger(){
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav" || x.className === "topnav sticky") {
      x.className += " responsive";
    } else if(x.className === "topnav sticky responsive"){
      x.className = "topnav sticky";
    } else{
      x.className = "topnav";
    }
  }
