var nyan = document.getElementById("nyan");
var backImage = document.createElement("img");

nyan.addEventListener("click", doAll);

function addNyan() {
  var image = document.createElement("img");
  image.src = "nyanCat.gif";
  image.id = "kat";
  image.classList.add('nyanCat');
  image.classList.add('nyanCat-start');
  image.style.height = '60px';
  document.body.appendChild(image);
  document.body.style.backgroundImage = "url('nyanCatBackground.gif')";
  document.body.style.backgroundSize = '30vh';


}

function moveNyan() {

  document.getElementById('kat').style.animation = 'mymove 2s infinite';

}


function doAll() {
  addNyan();
  moveNyan();
}

/*
function endNyanImage(){
  document.getElementById("kat").className = "nyan-cat-end";
}


/*
function doAll() {
  addNyanImage();
  setTimeout(endNyanImage(), 3000);
}
*/
