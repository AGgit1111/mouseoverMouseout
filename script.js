// Select all images with the class "hover-image"
// (The querySelectorAll() method returns all elements that matches a CSS selector(s).)
const imageRow1 = document.querySelectorAll('.hover-image1');
const imageRow2 = document.querySelectorAll('.hover-image2');

// Loop through each image and add the event listeners
// Adding a scale hover effect to the first row of images
imageRow1.forEach(image => {
    // Add the "mouseover" event
    image.addEventListener('mouseover', function () {
        this.classList.add('hover-effect1');
    })

    // Add the 'mouseout' event
    image.addEventListener('mouseout', function () {
        this.classList.remove('hover-effect1');
    })
});

// Adding the rotate hover effect to the second row of images
imageRow2.forEach(image => {
    // Add the "mouseover" event
    image.addEventListener('mouseover', function () {
        this.classList.add('hover-effect2');
    })

    // Add the 'mouseout' event
    image.addEventListener('mouseout', function () {
        this.classList.remove('hover-effect2');
    })
});