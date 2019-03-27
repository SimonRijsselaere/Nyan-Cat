var nyan = document.getElementById("nyan");
/*var backImage = document.createElement("img");*/

nyan.addEventListener("click", addNyan);

function addNyan() {
  var imageNyan = document.createElement("img");
  imageNyan.src = "nyanCat.gif";
  document.body.appendChild(imageNyan);

  imageNyan.classList.add('nyan-cat-start');
  imageNyan.classList.add('nyan-cat');

  document.body.style.backgroundImage = "url('nyanCatBackground.gif')";
  document.body.style.backgroundSize = '30vh';

  setTimeout( function () {
    imageNyan.classList.add('nyan-cat-end');
  }, 10);
}
