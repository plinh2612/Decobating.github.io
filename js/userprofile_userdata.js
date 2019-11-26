

var btmenuClicks = document.getElementsByClassName("cate");

for (i=0;i<btmenuClicks.length;i++) {
    var btmenuClick = btmenuClicks[i];
    btmenuClick.addEventListener('click', function (e) {
        var current = document.getElementsByClassName('active');
        // console.log(current);
        current[0].className = current[0].className.replace(" active","");
        this.className += (" active");
    })
};