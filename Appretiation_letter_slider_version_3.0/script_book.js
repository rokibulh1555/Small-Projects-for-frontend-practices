function changeImage_GP() {
    var img1 = document.getElementById("image1");
    console.log(img1);
    img1.src = "images/Grameenphone_Logo_inner.png";

    var img2 = document.getElementById("image2");
    img2.src = "images/Grameenphone_logo_inner.png";

    var img3 = document.getElementById("image3");

}

function changeImage_ROBI() {
    var img1 = document.getElementById("image1");
    img1.src = "images/Robi_logo_cover.png";

    var img2 = document.getElementById("image2");
    img2.src = "images/Robi_logo_inner.png";

    var img3 = document.getElementById("image3");
    
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

    var img3 = document.getElementById("image3");
    
}





// const slider = document.querySelector('.slider');
// const items = slider.querySelectorAll('.item');
// const card = document.querySelector('.card'); // Select the card element
// let currentIndex = 0;

// function autoClickFrontItem() {
//     items[currentIndex].click(); // Automatically clicks the front item
// }

// function rotateAndClick() {
//     const totalItems = items.length;
//     const rotationAngle = 360 / totalItems;
//     currentIndex = (currentIndex + 1) % totalItems;

//     slider.style.transform = `perspective(1000px) rotateX(-16deg) rotateY(-${currentIndex * rotationAngle}deg)`;

//     // Add hover effect when the current icon comes to the front
//     card.classList.add('hover-effect');

//     // Remove hover effect after the animation is done
//     setTimeout(() => {
//         card.classList.remove('hover-effect');
//     }, 1000); // Match the duration of the hover effect transition

//     setTimeout(autoClickFrontItem, 500); // Adjust the timeout to match your animation timing
// }

// setInterval(rotateAndClick, 5000); // Rotate every 5 seconds and trigger the click
