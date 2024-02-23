
// - creo il markup dinamicamente con javascript
    //    -creo un array contenente le immagini
const imgList = ['01.jpg','02.jpg','03.jpg','04.jpg','05.jpg','06.jpg'];
    //    -seleziono il tag che contiene le immagini
const slider = document.querySelector('.carousel');
    //    -creo una variabile come segnaposto che mi servirà per spostare la classe active tra le immagini
let activeImg = 0;
    //    -ciclo per scorrere nell'array d'immagini e sostituire sequenzialmente la classe active


for (let i = 0; i < imgList.length; i++) {
    const img = imgList[i];
    //console.log(img);
    let imgMarkup = `<img class="${i === activeImg ? "active" : ""}" src="./assets/img/${img}" alt=""></img>`;
    //console.log(imgMarkup);
    slider.insertAdjacentHTML('beforeend', imgMarkup);
}

// - aggiungo gli eventi ai click dei due bottoni (avanti e indietro)
const up = document.querySelector('.up');
const down = document.querySelector('.down');

up.addEventListener('click', function(){
    activeImg++;

    if (activeImg > imgList.length -1) {
        activeImg = 0;
    }
    //console.log(activeImg);
    //console.log(imgList[activeImg]);
    let imgElement = document.querySelector('img.active');
    //console.log(imgElement);
    imgElement.classList.remove("active");
    //console.log(imgElement.classList);
    let allImg = document.querySelectorAll('.carousel img');
    //console.log(allImg);
    allImg[activeImg].classList.add("active");

})

down.addEventListener('click', function(){
    activeImg--;
    if (activeImg < 0) {
        activeImg = imgList.length -1;
    }
    //console.log(activeImg);
    //console.log(imgList[activeImg]);
    let imgElement = document.querySelector('img.active');
    //console.log(imgElement);
    imgElement.classList.remove("active");
    //console.log(imgElement.classList);
    let allImg = document.querySelectorAll('.carousel img');
    //console.log(allImg);
    allImg[activeImg].classList.add("active");
})

 //    -al click aumento di 1 (o diminuisco di 1) la variabile segnaposto
 //    -seleziono l'immagine successiva andando a cambiare il percorso tramite l'indice dell'array che sarà uguale alla variabile segnaposto
