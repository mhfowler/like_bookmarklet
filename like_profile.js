function sleepFor( sleepDuration ){
    var now = new Date().getTime();
    while(new Date().getTime() < now + sleepDuration){ /* do nothing */ }
}

function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

function like_and_next() {
    var hearts = document.getElementsByClassName("coreSpriteHeartOpen");
    for (j = 0; j < hearts.length; j++) {
        hearts[j].click();
        console.log('like');
        sleepFor(getRandom(800, 1200));
    }
    console.log('++ next');
    var next_button = document.getElementsByClassName('coreSpriteRightPaginationArrow');
    next_button[0].click();
    setTimeout(function() {
        like_and_next();
    }, getRandom(1800, 2200));
}

var images = $('img');
var first_image = images[1];
first_image.click();
setTimeout(function() {
    like_and_next()
    }, 2000);