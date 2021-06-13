
const planes = document.getElementById('planes')
planes.addEventListener('click', function(){
   window.scrollTo(0,document.body.scrollHeight);
})

 let myplanes = document.getElementById('randomPlane');
 myimage =[
    'http://127.0.0.1:5500/images/blue.jpg',
    'http://127.0.0.1:5500/images/N43UaA-TopView.png',
    'http://127.0.0.1:5500/images/plane.jpg',
    'http://127.0.0.1:5500/images/stock-photo-cartoon-stealth-aircraft-model-for-game-development-1771939265.jpg',
    'http://127.0.0.1:5500/images/stock-photo-the-heavy-decorated-airplane-sprite-model-for-game-development-1771934369.jpg',
    'http://127.0.0.1:5500/images/stuka.jpg'
    
 ],

 myrandom_numbr = Math.floor(Math.random() * myimage.length);

 console.log(myimage[myrandom_numbr]);
let counter= 200;
 function change_image(myplanes , myimage){
    'use strict';
    const imageLooper= setInterval(function(){
        counter --;
  if (counter == 0) {
    clearInterval(imageLooper);
  }
         myrandom_numbr = Math.floor(Math.random() * myimage.length);
         myplanes.src = myimage[myrandom_numbr];
     }, );
  
 }
 change_image(myplanes ,myimage);

