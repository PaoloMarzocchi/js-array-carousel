
// - creo il markup dinamicamente con javascript
    //    -creo un array contenente le immagini
const imgList = ['01.jpg','02.jpg','03.jpg','04.jpg','05.jpg','06.jpg'];
    //    -seleziono il tag che contiene le immagini
const slider = document.querySelector('.current_img');
const thumbElement = document.querySelector('.carousel');
console.log(thumbElement);
    //    -creo una variabile come segnaposto che mi servirà per spostare la classe active tra le immagini
let activeImg = 0;
//let shownImg = 0
    //    -ciclo per scorrere nell'array d'immagini e sostituire sequenzialmente la classe active


for (let i = 0; i < imgList.length; i++) {
    const img = imgList[i];
    //console.log(img);
    let currentImgMarkup = `<img class="${i === activeImg ? "active" : "d_none"}" src="./assets/img/${img}" alt=""></img>`;
    let shownImgMarkup = `<img class=" ${i === activeImg ? "shown" : "unshown"}" src="./assets/img/${img}" alt=""></img>`;
    //console.log(shownImgMarkup);
    slider.insertAdjacentHTML('beforeend', currentImgMarkup);
    thumbElement.insertAdjacentHTML('beforeend', shownImgMarkup);
}
console.log(thumbElement);

// - aggiungo gli eventi ai click dei due bottoni (avanti e indietro)
const up = document.querySelector('.up');
const down = document.querySelector('.down');

down.addEventListener('click', function(){
    activeImg++;

    if (activeImg > imgList.length -1) {
        activeImg = 0;
    }
    //console.log(activeImg);
    //console.log(imgList[activeImg]);
    let imgElement = document.querySelector('img.active');
    //console.log(imgElement);
    imgElement.classList.remove("active");
    imgElement.classList.add("d_none");
    //console.log(imgElement.classList);
    let allImg = document.querySelectorAll('.current_img img');
    //console.log(allImg);
    allImg[activeImg].classList.add("active");
    allImg[activeImg].classList.remove('d_none');

    let thumbImg = document.querySelector('img.shown');
    //console.log(imgElement);
    thumbImg.classList.remove("shown");
    thumbImg.classList.add("unshown");
    
    
    //console.log(imgElement.classList);
    let allThumbImg = document.querySelectorAll('.carousel img');
    //console.log(allThumbImg);
    allThumbImg[activeImg].classList.add("shown");
    allThumbImg[activeImg].classList.remove("unshown");
    



})

up.addEventListener('click', function(){
    activeImg--;
    if (activeImg < 0) {
        activeImg = imgList.length -1;
    }
    //console.log(activeImg);
    //console.log(imgList[activeImg]);
    let imgElement = document.querySelector('img.active');
    //console.log(imgElement);
    imgElement.classList.remove("active");
    imgElement.classList.add("d_none");
    //console.log(imgElement.classList);
    let allImg = document.querySelectorAll('.current_img img');
    //console.log(allImg);
    allImg[activeImg].classList.add("active");
    allImg[activeImg].classList.remove('d_none');
    let thumbImg = document.querySelector('img.shown');
    //console.log(imgElement);
    thumbImg.classList.remove("shown");
    thumbImg.classList.add("unshown");
    
    
    //console.log(imgElement.classList);
    let allThumbImg = document.querySelectorAll('.carousel img');
    //console.log(allThumbImg);
    allThumbImg[activeImg].classList.add("shown");
    allThumbImg[activeImg].classList.remove("unshown");
})
