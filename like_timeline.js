location.href='http://instagram.com/';

function sleepFor( sleepDuration ){
    var now = new Date().getTime();
    while(new Date().getTime() < now + sleepDuration){ /* do nothing */ }
}

function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

function like_and_load() {
    console.log('like + load');
    var hearts = document.getElementsByClassName("coreSpriteHeartOpen");
    for (j = 0; j < hearts.length; j++) {
        hearts[j].click();
        console.log('like');
        sleepFor(getRandom(800, 1200));
    }
    console.log('++ load more');
    window.scrollTo(0,document.body.scrollHeight);
    setTimeout(function() {
        like_and_load();
    }, getRandom(1500, 2200));
}

$("a:contains('Load more')")[0].click();

setTimeout(function() {
    like_and_load();
}, getRandom(1500, 2200));

