var images = [
    {
        src : 'bgs/1.jpg'
    },
    {
        src : 'bgs/2.jpg'
    },
    {
        src : 'bgs/3.jpg'
    },
    {
        src : 'bgs/4.jpg'
    },
    {
        src : 'bgs/5.jpg'
    },
    {
        src : 'bgs/6.jpg'
    },
    {
        src : 'bgs/7.jpg'
    },
];

function setBackground (images) {
    // generates a random integer between 0 and the length of the supplied array:
    var n = Math.floor(Math.random() * images.length),
        // works out whether to use the 'textContent' or 'innerText' property:
        textProperty = 'textContent' in document ? 'textContent' : 'innerText';

    // sets the background-image of the 'body' element:
    document.body.style.backgroundImage = 'url(' + images[n].src + ')';

}

setBackground(images);
