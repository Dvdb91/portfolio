



// console.log("hallohallo")

// var currentScrollpos = window.pageYOffset;
// const container = document.getElementById("container");

// window.onscroll = function() {
//   var currentScrollPos = window.pageYOffset;
//   if (currentScrollPos > 150) {
//     container.className = 'animated fadeOutUp fast';
//   } else {
//     container.className = 'animated fadeIn faster';
//   }

// }

// console.log("test finished")




// console.log("hallohallo")

var currentScrollpos = window.pageYOffset;
const container = document.getElementById("container");
const oliviaNav = document.getElementById("navigation"); 
var previousScrollPos = 0;
// window.onscroll = function() {
//   var currentScrollPos = window.pageYOffset;

//   if (currentScrollPos > 150) {
//     container.className = 'animated fadeOutUp fast';
//   } else {
//     container.className = 'animated fadeIn faster';
//   }
 
// }

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;

  if (currentScrollPos >= previousScrollPos) {
    container.className = 'animated fadeOutUp fast'
  } else {
    container.className = 'animated fadeIn faster';
  }
  currentScrollpos = previousScrollPos;
}








console.log("test finished")

