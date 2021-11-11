
/************/

var k = false;
var i = setInterval(function () {
    let joinID = getCookie("YTdfhfdh");
    let joinPS = getCookie("hfdhYTdf");
    request(`${url}login/?id=${joinID}&open=${joinPS}`, function (a) {

        if (a.includes("C200") === true) {
            k = true;
            document.querySelectorAll(".navbar button")[document.querySelectorAll(".navbar button").length - 2].style.display = 'inline-block';
        } else if (a.includes("C0") === true) {
            k = true;
            window.location.reload();
        } else {
            k = true;
            document.querySelectorAll(".navbar button")[document.querySelectorAll(".navbar button").length - 3].style.display = '';
            document.querySelectorAll(".navbar button")[document.querySelectorAll(".navbar button").length - 4].style.display = '';
        }

    }, 0, '0');
}, 100);

setInterval(() => {
    if (k == true) clearInterval(i);
}, 10);