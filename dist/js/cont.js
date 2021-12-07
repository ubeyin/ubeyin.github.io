let alertJoin;
let joinTo;

if (document.getElementById("join-form")) {

    document.getElementById("join-form").onsubmit = function () {
        let joinID = this.getElementsByTagName('input')[0].value;
        let joinPS = this.getElementsByTagName('input')[1].value;

        request(url + 'login/?id=' + joinID + '&open=' + joinPS, function (a) {

            if (a.includes("C200") === true) {
                setCookie("YTdfhfdh", joinID);
                setCookie("hfdhYTdf", joinPS);

                new iDB.on("write", {
                    table: "ubeyin",
                    store: "logs",
                    key: "type"
                }, {
                    type: "us45nm",
                    value: joinID
                });


                new iDB.on("write", {
                    table: "ubeyin",
                    store: "logs",
                    key: "type"
                }, {
                    type: "ps54wd",
                    value: joinPS
                });

                alertJoin(0, joinID);
            } else if (a.includes("C404") === true) {
                alertJoin(2, '<div><h2>Warning!</h2><p>The ID you entered isn\'t connected or unavailable, please try again or create an account!</p><section>' + joinID + '</section><button onclick="this.parentNode.parentNode.style.display = \'none\';this.parentNode.parentNode.parentNode.parentNode.style.display = \'none\';">Okay</button><button onclick="this.parentNode.parentNode.style.display = \'none\';this.parentNode.parentNode.parentNode.parentNode.style.display = \'none\';joinTo();">Create an account</button></div>');
            } else if (a.includes("C400") === true) {
                alertJoin(2, '<div><h2>Warning!</h2><p>Your password is invalid, please try again!</p><section>' + joinID + '</section><button onclick="this.parentNode.parentNode.style.display = \'none\';this.parentNode.parentNode.parentNode.parentNode.style.display = \'none\';">Okay</button></div>');
            } else if (a.includes("C0") === true) {
                alertJoin(2, '<div><h2>Warning!</h2><p>Data connection error, please try again!</p><section>' + joinID + '</section><button onclick="this.parentNode.parentNode.style.display = \'none\';this.parentNode.parentNode.parentNode.parentNode.style.display = \'none\';">Okay</button><button onclick="window.location.reload();">Okay, refresh the page</button></div>');
            } else {
                alertJoin(2, '<div><h2>Warning!</h2><p>Error, please try again!</p><section>' + joinID + '</section><button onclick="this.parentNode.parentNode.style.display = \'none\';this.parentNode.parentNode.parentNode.parentNode.style.display = \'none\';">Okay</button><button onclick="window.location.reload();">Okay, refresh the page</button></div>');
            }

        }, 0, '0');
    };
}


if (document.getElementById("regi-form")) {

    document.getElementById("regi-form").onsubmit = function () {
        let joinID = this.getElementsByTagName('input')[0].value;
        let joinPS = this.getElementsByTagName('input')[2].value;
        let joinEM = this.getElementsByTagName('input')[1].value;

        request(url + 'signup/?id=' + joinID + '&email=' + joinEM + '&open=' + joinPS, function (a) {

            if (a.includes("C200") === true) {
                setCookie("YTdfhfdh", joinID);
                setCookie("hfdhYTdf", joinPS);


                new iDB.on("write", {
                    table: "ubeyin",
                    store: "logs",
                    key: "type"
                }, {
                    type: "us45nm",
                    value: joinID
                });


                new iDB.on("write", {
                    table: "ubeyin",
                    store: "logs",
                    key: "type"
                }, {
                    type: "ps54wd",
                    value: joinPS
                });


                alertJoin(1, joinID);
            } else if (a.includes("C404") === true) {
                alertJoin(2, '<div><h2>Warning!</h2><p>Unable to create your new account, please try again or later!</p><section>' + joinID + '</section><button onclick="this.parentNode.parentNode.style.display = \'none\';this.parentNode.parentNode.parentNode.parentNode.style.display = \'none\';">Okay</button></div>');
            } else if (a.includes("C400") === true) {
                alertJoin(2, '<div><h2>Warning!</h2><p>The full name you entered is available, please try with another name/password!</p><section>' + joinID + '</section><button onclick="this.parentNode.parentNode.style.display = \'none\';this.parentNode.parentNode.parentNode.parentNode.style.display = \'none\';">Okay</button></div>');
            } else if (a.includes("C0") === true) {
                alertJoin(2, '<div><h2>Warning!</h2><p>Data connection error, please try again!</p><section>' + joinID + '</section><button onclick="this.parentNode.parentNode.style.display = \'none\';this.parentNode.parentNode.parentNode.parentNode.style.display = \'none\';">Okay</button><button onclick="window.location.reload();">Okay, refresh the page</button></div>');
            } else {
                alertJoin(2, '<div><h2>Warning!</h2><p>Error, please try again!</p><section>' + joinID + '</section><button onclick="this.parentNode.parentNode.style.display = \'none\';this.parentNode.parentNode.parentNode.parentNode.style.display = \'none\';">Okay</button><button onclick="window.location.reload();">Okay, refresh the page</button></div>');
            }

        }, 0, '0');
    };

}

if (document.querySelectorAll(".alert")[0]) {
    document.querySelectorAll(".alert")[0].querySelectorAll('button')[0].onclick = function () {
        window.location.href = "../";
    }
    document.querySelectorAll(".alert")[0].querySelectorAll('button')[1].onclick = function () {
        window.location.href = "../";
    }
}

joinTo = function () {
    window.location.href = "../signup/?#home";
    request(url + '', function (a) {
        var b = JSON.parse(a);

    }, 0, '0');
}

alertJoin = function (state, msg) {
    let joinAL = document.querySelectorAll('.alert')[0];
    let joinWA = joinAL.querySelectorAll('.welcome');
    let joinMS = joinAL.querySelectorAll('.message')[0];
    if (state === 0) {
        joinAL.style.display = "block";
        joinWA[0].style.display = "none";
        joinWA[1].style.display = "block";
        joinWA[1].querySelectorAll('section')[0].innerHTML = msg;
    } else if (state === 1) {
        joinAL.style.display = "block";
        joinWA[1].style.display = "none";
        joinWA[0].style.display = "block";
    } else {
        joinAL.style.display = "block";
        joinWA[0].style.display = "none";
        joinWA[1].style.display = "none";
        joinMS.style.display = "block";
        joinMS.innerHTML = msg;
    }
};


/**************/

var k = false;
var i = setInterval(function () {
    let joinID, joinPS;
    let fdgdg = function () {
        request(`${url}login/?id=${joinID}&open=${joinPS}`, function (a) {

            if (a.includes("C200") === true) {
                k = true;
                window.location.href = '../';
            } else if (a.includes("C0") === true) {
                k = true;
                window.location.reload();
            } else {
                k = true;
            }

        }, 0, '0');
    };

    joinID = getCookie("YTdfhfdh");
    joinPS = getCookie("hfdhYTdf");
    setTimeout(() => {
        fdgdg();
    }, 600);
}, 100);

setInterval(() => {
    if (k == true) clearInterval(i);
}, 10);