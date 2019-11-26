// var modal = document.getElementById("modal");

var formats = document.getElementsByClassName("format");

for (i=0; i<formats.length;i++) {
    var format = formats[i];
    format.addEventListener('click', function() {
        var modal = document.getElementsByClassName("modal");
        // console.log(modal);
        modal[i] = modal[i].style.display = "flex";
        var card = document.getElementsByClassName("card");
        card[i] = card[i].style.display = "flex";
    })
}