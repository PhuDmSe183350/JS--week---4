function upDate(previewPic) {
    console.log("Event triggered");
    console.log("Alt text: " + previewPic.alt);
    console.log("Image source: " + previewPic.src);
    
    const imageDiv = document.getElementById("image");
    imageDiv.textContent = previewPic.alt;
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    console.log("Background image set to: " + imageDiv.style.backgroundImage);
}

function unDo() {
    const imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.textContent = "Hover over an image below to display here.";
    console.log("Background image reset to: " + imageDiv.style.backgroundImage);
    console.log("Text reset to: " + imageDiv.textContent);
}

function focusUpdate(previewPic) {
    console.log("Focus event triggered");
    upDate(previewPic);
}

function blurUpdate() {
    console.log("Blur event triggered");
    unDo();
}

function init() {
    console.log("Page loaded");
    const images = document.querySelectorAll('.preview');
    images.forEach(image => {
        image.addEventListener('mouseover', () => upDate(image));
        image.addEventListener('mouseleave', unDo);
        image.addEventListener('focus', () => focusUpdate(image));
        image.addEventListener('blur', blurUpdate);
        image.setAttribute('tabindex', '0');
    });
}

window.onload = init;
