// Handle functionality for creating stars for use in animated background
document.addEventListener("DOMContentLoaded", function() {
    const numberOfStars = 100; // Define the number of stars

    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement("div");
        star.className = "star";
        star.style.left = `${Math.random() * 100}vw`; // Define a random horizontal position for each star
        star.style.animationDelay = `${Math.random() * 10}s`; // Define a random animation delay in seconds for each star
        document.querySelector(".animated-background").appendChild(star);
    }
});