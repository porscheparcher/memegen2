/*const bottomText = document.getElementById('bottomText');
const imageURL = document.getElementById('imageURL');
const btn = document.getElementById('btn');
const topText = document.getElementById('topText');
const canvas = document.querySelector('#meme');*/

let topText, bottomText, imageURL, btn, canvas, ctx;


function genMeme () {
  ctx.drawImage(img, 0, 0);

}

function start () {
  topText = document.getElementById('topText');
  bottomText = document.getElementById('bottomText');
  imageURL = document.getElementById('imageURL');
  btn = document.getElementById('btn');
  canvas = document.getElementById('meme');

  let ctx = canvas.getContext('2d');


  btn.addEventListener('click', function (e) {
    e.preventDefault();
    let img = new Image();
    img.crossOrigin = 'Anonymous';
    img.onload = function() {
      let loadedImageWidth = img.width;
      let loadedImageHeight = img.height;
      canvas.width = loadedImageWidth
      canvas.height = loadedImageHeight;
      ctx.drawImage(img, 0, 0);
    };
    img.src = imageURL.value;
    
  });

}

start();






/*imageURL.addEventListener('change', () => {
  const imageDataURL = URL.createObjectURL(imageURL.img[0]);
  image = new Image();
  image.src = imageDataURL;

  image.addEventListener('load', () => {
    updateCanvas(canvas, image, topText.value, bottomText.value);
  })
});*/

/*function updateCanvas(canvas, image, topText, bottomText) {
  const ctx = canvas.getContext('2d');
  const width = image.width;
  const height = image.height;
  const sizeFont = Math.floor(width / 10);
  const yOffset = height / 25;

  canvas.width = width;
  canvas.height = height;
  ctx.drawImage(image, 0, 0);

  ctx.strokeStyle = 'black';
  ctx.linewidth = Math.floor(sizeFont / 4);

  ctx.fillStyle = 'white';
  ctx.textAlign = 'center';
  ctx.lineJoin = 'round';
  ctx.font = `${sizeFont}px roboto`;

  ctx.textBaseline = 'top';
  ctx.strokeText(topText, width / 2, yOffset);
  ctx.fillText(topText, width / 2, yOffset);

  ctx.textBaseline = 'bottom';
  ctx.strokeText(bottomText, width / 2, height - yOffset);
  ctx.fillText(bottomText, width / 2, height - yOffset);
};*/








/*btn.addEventListener('click', function(event) {
  let imageURL = document.getElementById('imageURL').value;
  let img = document.createElement('img');
  img.src = imageURL;
  document.body.appendChild(img);
})*/







/*topText.addEventListener('keyup', function(e) {
  e.preventDefault();
  console.log(topText);
});

/*document.getElementById('btn').onclick = function(e) {
  e.preventDefault();
  console.log(topText);
};






//let textInput = document.getElementsByClassName('input');*/

