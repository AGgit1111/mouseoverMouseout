// Select all images with the class "hover-image"
// (The querySelectorAll() method returns all elements that matches a CSS selector(s).)
const images = document.querySelectorAll('.hover-image');

// Loop through each image and add the event listeners
images.forEach(image => {
    // Add the "mouseover" event
    image.addEventListener('mouseover', function () {
        this.classList.add('hover-effect');
    })

    // Add the 'mouseout' event
    image.addEventListener('mouseout', function () {
        this.classList.remove('hover-effect');
    })
});