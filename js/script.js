// 1. mi creo il mio array di immagini
const imgs = ['img/06.jpg', 'img/07.jpg','img/08.jpg','img/09.jpg','img/10.jpg'];

// 2. creo una variabile per ricordami l'immagine attiva
let active = 0;

// 3.
const imgsEls = []
for(let i = 0; i < imgs.length; i++){
    const div = document.createElement('div') 
    const img = document.createElement('img')
    if(active===i){
        div.className = 'carousel-item active'
    } else{
        div.className = 'carousel-item'
    }
    
}


/* 
<div class="carousel-item active">
    <img src="img/06.jpg" class="d-block w-100" alt="image 6">
</div> 
*/
