
/*SLIDER*/ 

let contador = 0;
let slider = document.getElementById('sliders');

window.setInterval(function(){
contador++;
if (contador > 2) contador = 0;
slider.style.setProperty('left', contador * -100 + 'vw');
}, 5000);

/*END SLIDER */