// load picture

let img = [
    `./img/picture1.jpg`,
    `./img/picture2.jpg`,
    `./img/picture3.jpg`,
    `./img/picture4.jpg`,
    `./img/picture5.jpg`,
    `./img/picture6.jpg`,
    `./img/picture7.jpg`,
    `./img/picture8.jpg`,
    `./img/picture9.jpg`,
    `./img/picture10.png`,
    `./img/picture11.jpg`,
    `./img/picture12.jpg`,
];

let imgNames = [];
let currentIndex = 0;

// image names 
function getImageNames() {
    img.forEach((path) => {
        let name = path.split("/").pop();
        imgNames.push(name);
    });
}

// content load / render
function render() {
    let contentRef = document.getElementById("contentRef");
    contentRef.innerHTML = "";
    for (let i = 0; i < img.length; i++) {
        contentRef.innerHTML += `
            <img 
              src="${img[i]}" 
              class="images_size" 
              onclick="toggleOverlay(${i})"
            >
        `;
        indexCounter();
    }
}

// template
function getImgTemplate(index) {
    return `
        <img onclick="toggleOverlay(${index})" class="images_size" src="${img[index]}" alt="">
    `;
}
// onload function
window.onload = function () {
    getImageNames();
    render();
};

// overlay with index of picture
function toggleOverlay(index) {
    let refOverlay = document.getElementById("overlay-section");

        currentIndex = index;
        updateOverlayImage();
        refOverlay.showModal();
}

// overlay image in dialog
function updateOverlayImage() {
    let overlay = document.getElementById("overlay-images");
    overlay.innerHTML = `
        <img id="overlayImg" src="${img[currentIndex]}" alt="image">
    `;
    document.getElementById("img-title").textContent = imgNames[currentIndex];
    indexCounter();
}

// click to  previous picture
function previousOverlayImage() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = img.length - 1;
    }
    updateOverlayImage();
}

// click to  next picture
function nextOverlayImage() {
    currentIndex++;
    if (currentIndex >= img.length) {
        currentIndex = 0;
    }
    updateOverlayImage();
}

function overlayStayOpen(event) {
    event.stopPropagation();
}

function closeOverlay() {
    let refOverlay = document.getElementById("overlay-section");
    refOverlay.close();
}

function indexCounter () {
     let numberRef = document.getElementById("counter");
    numberRef.innerText = currentIndex + 1 + "/" + img.length;
    }
