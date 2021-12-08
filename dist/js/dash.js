var k = false;
var i = setInterval(function () {
    var joinID, joinPS;
    var hfdh = function () {
        request(`${url}login/?id=${joinID}&open=${joinPS}`, function (a) {

            if (a.includes("C200") === true) {
                k = true;
                document.querySelectorAll(".home-lbox")[document.querySelectorAll(".home-lbox").length - 1].style.display = "none";
                //document.querySelectorAll(".home2")[0].style.display = "";
                document.querySelectorAll(".home")[0].style.display = "";
            } else if (a.includes("C0") === true) {
                k = true;
                window.location.reload();
            } else {
                k = true;
                window.location.href = 'welcome/'
            }

        }, 0, '0');
    };
    joinID = getCookie("YTdfhfdh");
    joinPS = getCookie("hfdhYTdf");
    setTimeout(() => {
        hfdh();
    }, 600);
}, 100);

setInterval(() => {
    if (k == true) clearInterval(i);
}, 10);