var nyan = document.getElementById("nyan");
var x = document.getElementById("fuckingWeebMusic");


function playAudio() {
  x.play();
}

var music = setInterval(playAudio, 5000);
setTimeout(function( ) {
  clearInterval(music);
}, 5000);


nyan.addEventListener("click", function(){
  addNyan();
  var myVar = setInterval(addNyan, 70);
  setTimeout(function( ) {
    clearInterval(myVar);
    document.body.style.backgroundImage = "";
    nyan.style.display = "block";
    }, 10000);
});

function addNyan() {
      var imageNyan = document.createElement("img");
      imageNyan.src = "nyanCat.gif";


      imageNyan.style.position = "fixed";
      imageNyan.style.left ='-'+ Math.floor(Math.random()*(11-1))+1+'%';
      imageNyan.style.top='0%';
      imageNyan.style.transition = Math.floor(Math.random()*(6-2))+2 +'s';
      imageNyan.style.transform = "rotate("+Math.floor(Math.random()*(180-90)+90) +'deg)';
      imageNyan.style.height = "55px";


      document.body.style.backgroundImage = "url('nyanCatBackground.gif')";
      document.body.style.backgroundSize = '30vh';
      nyan.style.display = "none";


      document.body.appendChild(imageNyan);
      setTimeout( function () {
        imageNyan.classList.add('nyan-cat-end');
        imageNyan.style.left='100%';
        imageNyan.style.top='100%';
        imageNyan.style.transform = "rotate("+Math.random()*((360-0)+0)+'deg)';

      }, 10);
}
