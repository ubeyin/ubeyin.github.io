/************/

var k = false;
var i = setInterval(function () {
    var joinID, joinPS;
    var sghtg = function () {

        request(`${url}login/?id=${joinID}&open=${joinPS}`, function (a) {

            if (a.includes("C200") === true) {
                k = true;
                document.querySelectorAll(".navbar button")[document.querySelectorAll(".navbar button").length - 2].style.display = '';
                document.querySelectorAll(".navbar button")[document.querySelectorAll(".navbar button").length - 3].style.display = '';
            } else if (a.includes("C0") === true) {
                k = true;
                window.location.reload();
            } else {
                k = true;
                document.querySelectorAll(".navbar button")[document.querySelectorAll(".navbar button").length - 4].style.display = '';
                document.querySelectorAll(".navbar button")[document.querySelectorAll(".navbar button").length - 5].style.display = '';
            }

        }, 0, '0');
    }
    joinID = getCookie("YTdfhfdh");
    joinPS = getCookie("hfdhYTdf");
    setTimeout(() => {
        sghtg();
    }, 600);
}, 100);

setInterval(() => {
    if (k == true) clearInterval(i);
}, 10);