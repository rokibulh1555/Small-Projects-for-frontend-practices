
let currentImageIndex = 0;
let autoSlideInterval;
let numberOfImages;

function initializeSlider(imageSources) {
    numberOfImages = imageSources.length;
    const sliderContainer = document.getElementById('image-slider');
    sliderContainer.innerHTML = ''; // Clear any existing images

    for (let i = 0; i < numberOfImages; i++) {
        const img = document.createElement('img');
        img.src = imageSources[i];
        img.style.display = 'none';
        sliderContainer.appendChild(img);
    }

    currentImageIndex = 0;
    showImage(currentImageIndex);

    startAutoSlide();
}

function showImage(index) {
    const images = document.getElementById('image-slider').getElementsByTagName('img');
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = 'none';
    }
    images[index].style.display = 'block';

    document.getElementById('indicator').textContent = `${index + 1} of ${numberOfImages}`;

    
    document.getElementById('next-btn').style.display = index === numberOfImages - 1 ? 'none' : 'block';

    
    document.getElementById('prev-btn').style.display = index === 0 ? 'none' : 'block';
}


function nextImage() {
    if (currentImageIndex < numberOfImages - 1) {
        currentImageIndex++;
        showImage(currentImageIndex);
    }
}

function prevImage() {
    if (currentImageIndex > 0) {
        currentImageIndex--;
        showImage(currentImageIndex);
    }
}

// Set up auto-slide
function startAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(() => {
        if (currentImageIndex < numberOfImages - 1) {
            nextImage();
        }
    }, 3000); 
}


document.getElementById('next-btn').addEventListener('click', () => {
    clearInterval(autoSlideInterval);
    nextImage();
    startAutoSlide();
});

document.getElementById('prev-btn').addEventListener('click', () => {
    clearInterval(autoSlideInterval);
    prevImage();
    startAutoSlide();
});


const grameenImages = [
    'images/a2i_1st.png',
    'images/a2i_2nd.png',
    'images/a2i_2nd.png',
    'images/picture 8.jpg',
    'images/softBD logo.png',
    'images/picture 4.jpg'
];

const robiImages = [
    'images/CTT_2nd.png',
    'images/CTT.png',
   'images/picture 2.jpg',
   'images/picture 4.jpg'
];

const teletalkImages = [
    'images/standard_charted_bank.png',
    'images/standard_charted_bank2.png',
    'images/a2i_2nd.png',
    'images/picture 4.jpg',
    'images/picture 5.jpg'
];











function changeImage_GP() {
    var img1 = document.getElementById("image1");
    console.log(img1);
    img1.src = "images/Grameenphone_Logo_inner.png";

    var img2 = document.getElementById("image2");
    img2.src = "images/Grameenphone_logo_inner.png";

    initializeSlider(grameenImages);

}

function changeImage_ROBI() {
    var img1 = document.getElementById("image1");
    img1.src = "images/Robi_logo_cover.png";

    var img2 = document.getElementById("image2");
    img2.src = "images/Robi_logo_inner.png";

    initializeSlider(robiImages);
    
}

function changeImage_DMP() {
    var img1 = document.getElementById("image1");
    img1.src = "images/DMP_logo_cover.png";

    var img2 = document.getElementById("image2");
    img2.src = "images/DMP_logo_inner.png";

    var img3 = document.getElementById("image3");
    
}

function changeImage_LandMinistry() {
    var img1 = document.getElementById("image1");
    img1.src = "images/land_ministry_cover.png";

    var img2 = document.getElementById("image2");
    img2.src = "images/land_ministry_cover.png";

    var img3 = document.getElementById("image3");
    
}

function changeImage_Teletalk() {
    var img1 = document.getElementById("image1");
    img1.src = "images/teletalk_logo_cover.png";

    var img2 = document.getElementById("image2");
    img2.src = "images/teletalk_logo_inner.png";

    initializeSlider(teletalkImages);
    
}

initializeSlider(robiImages);

