const images = [
    "1.jpeg",
    "2.jpeg",
    "3.jpeg",
    "4.jpeg",
    "5.jpeg",
    "6.jpeg",
    "7.jpeg",
    "8.jpeg",
    "9.jpeg"
];

const randomIndex = Math.floor(Math.random() * images.length);

const randomImage = document.getElementById("randomImage");
randomImage.src = "images/" + images[randomIndex];