var nyan = document.getElementById("nyan");
/*var backImage = document.createElement("img");*/
var x = document.getElementById("fuckingWeebMusic");


function playAudio() {
  x.play();
}

var music = setInterval(playAudio, 5000);
setTimeout(function( ) {
  clearInterval(music);
}, 5000);


nyan.addEventListener("click", addNyan);

function addNyan() {

  var myVar = setInterval(myTimer, 100);


  function myTimer(){
      var imageNyan = document.createElement("img");
      imageNyan.src = "nyanCat.gif";
      document.body.appendChild(imageNyan);


      imageNyan.classList.add('nyan-cat-start');
      imageNyan.classList.add('nyan-cat');

      var random = document.getElementsByClassName("nyan-cat");



      document.body.style.backgroundImage = "url('nyanCatBackground.gif')";
      document.body.style.backgroundSize = '30vh';
      nyan.style.display = "none";

      setTimeout( function () {
        imageNyan.classList.add('nyan-cat-end');
      }, 10);


  }

  setTimeout(function( ) {
    clearInterval(myVar);
    document.body.style.backgroundImage = "";
    nyan.style.display = "block";
  }, 10000);


}
