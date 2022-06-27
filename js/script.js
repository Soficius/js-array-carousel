// 1. mi creo il mio array di immagini
const imgs = ['img/06.jpg', 'img/07.jpg','img/08.jpg','img/09.jpg','img/10.jpg'];

// 2. creo una variabile per ricordami l'immagine attiva
let active = 3;
const carosello = document.getElementById('carosello')

// 3. creo costante per tenere gli elementi generati
const imgsEls = []

// 4. ciclo sull'immagini del mio array per creare l'elemento corrispondente
for(let i = 0; i < imgs.length; i++){

// 4.1 creo elemento div (contenitore) e img (figlio)
    const div = document.createElement('div') 
    const img = document.createElement('img')

    // 4.2 verifico se l'elemento è attivo
    if(active===i){

        // 4.2.1 se l'elemento è attivo lo segno anche tra le classi 
        div.className = 'carousel-item active'
    } else{

        // 4.2.2 se l'elemento non è attivo assegno solo la classa base del contenitore
        div.className = 'carousel-item'
    }

    // 4.3 assegno le classi all'immagine creata alla riga 16
    img.className = 'd-block w-100'

    // 4.4 assegno la sorgente dell'immagine usando quella dell'array imgs
    img.src = imgs[i]

    // 4.5 aggiungo img(figlio) al container div
    div.appendChild(img)

    // 4.6 aggiungo all'array degli elementi generati l'elemento generato (div + img)
    imgsEls[i] = div

    // 4.7 aggiungo l'elemento generato in pagina
    carosello.appendChild(div)
}

// 5. mi metto in ascolto del click del btn prev
document.getElementById('prev').addEventListener('click', function(){
    const activeImg = imgsEls[active];
    if(active > 0){
        active--
    } else{
        active = imgs.length - 1 
    }
    const newActiveImg = imgsEls[active];
    activeImg.classList.remove('active');
    newActiveImg.classList.add('active');
})

// 6.mi metto in ascolto del click del btn next
document.getElementById('next').addEventListener('click', function(){
    const activeImg = imgsEls[active];
    if(active < imgs.length - 1 ){
        active++
    } else{
        active = 0
    }
    const newActiveImg = imgsEls[active];
    activeImg.classList.remove('active');
    newActiveImg.classList.add('active');
})