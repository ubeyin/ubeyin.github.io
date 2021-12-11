window.onload = function () {

    /**************/

    var k = false;
    var i = setInterval(function () {
        var joinID, joinPS;
        var hfdh = function () {
            request(`${url}login/?id=${joinID}&open=${joinPS}`, function (a) {

                if (a.includes("C200") === true) {
                    k = true;
                    document.querySelectorAll(".navbar button")[0].style.display = "";
                    document.querySelectorAll(".navbar button")[0].innerHTML = "My Account";
                    document.querySelectorAll(".navbar button")[0].onclick = function () {
                        window.location.href = 'profile.html';
                    }
                } else if (a.includes("C0") === true) {
                    k = true;
                    window.location.reload();
                    document.querySelectorAll(".navbar button")[0].style.display = "";
                } else {
                    k = true;
                    document.querySelectorAll(".navbar button")[0].style.display = "";
                    document.querySelectorAll(".navbar button")[0].innerHTML = "Let's start";
                    document.querySelectorAll(".navbar button")[0].onclick = function () {
                        window.location.href = 'account/';
                    }
                }

            }, 0, '0');
        };
        joinID = getCookie("YTdfhfdh");
        joinPS = getCookie("hfdhYTdf");
        setTimeout(() => {
            hfdh();
        }, 100);
    }, 100);

    setInterval(() => {
        if (k == true) clearInterval(i);
    }, 10);
}