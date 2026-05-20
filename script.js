const container1 = document.getElementById("container");
const container2 = document.getElementById("container2");
const container3 = document.getElementById("container3");
const slider1 = document.getElementById("slider1");
const slider2 = document.getElementById("slider2");
const slider3 = document.getElementById("slider3");

// Slider 1 hiding when user interacts with it -> slider 2 appears
slider1.addEventListener("input", () => {
    container1.classList.add("hidden");
    container2.classList.remove("hidden");
});

// Slider 2 hiding when user interacts with it -> slider 3 appears
slider2.addEventListener("input", () => {
    // resetting text before switching sliders
    Text.style.transform = 'translateX(0px) rotate(0deg)';
    container2.classList.add("hidden");
    container3.classList.remove("hidden");
});

//slider 3 actually adjusts text size
slider3.addEventListener("input", (e) => {
    const val = e.target.value;
    Text.style.fontSize = val + "px";
});