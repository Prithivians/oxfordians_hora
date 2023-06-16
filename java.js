//Profile View
function myFunction() {
    var x = document.getElementById("myLinks");
    if (window.innerWidth >= 768) {
      if (x.style.display === "block") {
        x.style.display = "none";
        setTimeout(function() { x.style.display = "none"; }, 500);
      } else {
        x.style.display = "block";
        x.style.animation = "slides-in 0.3s forwards";
      }
    }
  }
  

//Menus View
  function myFunction2() {
    var x = document.getElementById("menus");
    if (window.innerWidth >= 768) {
      if (x.style.display === "block") {
        x.style.display = "none";
        setTimeout(function() { x.style.display = "none"; }, 500);
      } else {
        x.style.display = "block";
        x.style.animation = "slide-in 0.3s forwards";
      }
    }
  }



  
//To close menus and profile when clicked on main area
  function myFunctionremoveall() {
    var x = document.getElementById("myLinks");
    if (window.innerWidth >= 768) {
      if (x.style.display === "block") {
        x.style.display = "none";
        setTimeout(function() { x.style.display = "none"; }, 500);
      }
    }
    var x = document.getElementById("menus");
    if (window.innerWidth >= 768) {
      if (x.style.display === "block") {
        x.style.display = "none";
        setTimeout(function() { x.style.display = "none"; }, 500);
      }
    }
  }


  

  //Menus in Mobile
function myFunction2mobile() {
  var x = document.getElementById("menus");
  if (window.innerWidth <= 767) {
    if (x.style.display === "block") {
      x.style.display = "none";
      setTimeout(function() { x.style.display = "none"; }, 500);
    } else {
      x.style.display = "block";
      x.style.animation = "slide-in 0.3s forwards";
    }
  }
}


  //To close in mobile area 
  //To close menus and profile when clicked on main area
  function myFunctionremoveallmobile() {
    var x = document.getElementById("myLinks");
    if (window.innerWidth <= 767) {
      if (x.style.display === "block") {
        x.style.display = "none";
        setTimeout(function() { x.style.display = "none"; }, 500);
      }
    }
    var x = document.getElementById("menus");
    if (window.innerWidth <= 767) {
      if (x.style.display === "block") {
        x.style.display = "none";
        setTimeout(function() { x.style.display = "none"; }, 500);
      }
    }
  }



