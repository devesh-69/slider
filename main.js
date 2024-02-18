
const slides = document.querySelectorAll(".slide");
let counter = 0;

 slides.forEach((slide, index) => {
     slide.style.left = `${index * 100}%`;
 });


const previous = () => {
    counter--;
    slideImg();
};

const plst = () => {
    counter;
    slideImg();
};
const next = () => {
    counter++;
    slideImg();
};
// setInterval(autoSlide, 2000);

const slideImg = () => {
    slides.forEach((slide, index) => {
        let position = (index - counter + slides.length) % slides.length;
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
};

