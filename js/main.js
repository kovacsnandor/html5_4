// Canvas kitöltése
function fillCanvas(){
    //Képkeret kiválasztása
    var canvas=document.querySelector("#myCanvas");
    //console.log(canvas);
    
    // Rajzolás
    // Beolvassa a vásznat és előkészíti a 2 dimenziós rajzolásra
    // A context a ceruza
    var context = canvas.getContext("2d");
    // A ceruza színe
    context.fillStyle = "#ff00ff";
    //Négyzet
    context.fillRect(10,10, 300, 80);
}


// Kép, vonal, kör
function fillImg() {
    //Képkeret kiválasztása
    var canvas=document.querySelector("#myCanvas");
    // Ceruza elkészítése
    var context = canvas.getContext("2d");
    
    // Vonal rajzolása
    context.moveTo(100,100);
    context.lineTo(300,100);
    context.stroke();
    
    // Kör rajzolása
    context.beginPath();
    context.arc(250, 100, 40, 0, 2*Math.PI);
    context.stroke();
    
    // Kép kiválasztása
    var img = document.querySelector("#myImg");
    context.drawImage(img,0,0);
}


// Kép rajzolás
fillImg();

// Kitöltés indítása
//fillCanvas();