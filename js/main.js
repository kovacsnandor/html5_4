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

// Kép húzása és dobása
// Alapértelmezett esemény beállítása
function allowDrop(ev){
    //Letiltjuk, megelőzzük a böngésző alap kezelését
    //console.log(ev.target)
    //ev.target.style.border = "dashed 5px #e0e0e0";
    ev.preventDefault();
}

//Amikor az elemről lehúzzák az egeret
function dropLeaved(ev){
    //ev.target.style.border="solid 1px black";
    ev.preventDefault();
}

// Az elem húzásának megkezdése
function drag(ev) {
    // id nevű adatba töltjük a kép id-jét
    ev.dataTransfer.setData("id", ev.target.id);
}

//Amikor bedobják az elemet
function drop(ev) {
    ev.preventDefault();
    
    // Esemény célpontja
    var div = ev.target;
    
    // Elem hozzáadása
    // Ez a forrásból áthúzott kép
    var id = ev.dataTransfer.getData("id");
    // Ez a forrásból áthúzott kép szülője
    var sdiv = document.querySelector("#" + id).parentNode;
    //console.log(id);
    div.appendChild(document.querySelector("#" + id));
    
    // Ár kalkulálása
    calcPrice(div);
    calcPrice(sdiv);
}


//
function calcPrice(div) {
    // Keressük a "data-ar" attribútumú elemeket a div elemben
    var order = div.querySelectorAll("[data-ar]")
    // végmegyünk az order elemein
    var price = 0;
    Array.prototype.forEach.call(order, function(item){
        var ar = item.getAttribute("data-ar")
        price += parseInt(ar,10);
    });
    
    div.querySelector(".price-div").innerHTML=price + " Ft";
    //console.log(price);
}

// Kép rajzolás
fillImg();

// Kitöltés indítása
//fillCanvas();