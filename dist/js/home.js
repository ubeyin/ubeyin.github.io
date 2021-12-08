/************/

function switch_home() {
    document.getElementById("it1").getElementsByClassName("_inactive")[0].classList.add("none");
    document.getElementById("it1").getElementsByClassName("_active")[0].classList.remove("none");
    document.getElementById("it2").getElementsByClassName("_inactive")[0].classList.remove("none");
    document.getElementById("it2").getElementsByClassName("_active")[0].classList.add("none");
    document.getElementById("it3").getElementsByClassName("_inactive")[0].classList.remove("none");
    document.getElementById("it3").getElementsByClassName("_active")[0].classList.add("none");
    document.getElementById("it4").getElementsByClassName("_inactive")[0].classList.remove("none");
    document.getElementById("it4").getElementsByClassName("_active")[0].classList.add("none");
    setCookie("mtr8y457", "1");
}

function switch_friend() {
    document.getElementById("it2").getElementsByClassName("_inactive")[0].classList.add("none");
    document.getElementById("it2").getElementsByClassName("_active")[0].classList.remove("none");
    document.getElementById("it1").getElementsByClassName("_inactive")[0].classList.remove("none");
    document.getElementById("it1").getElementsByClassName("_active")[0].classList.add("none");
    document.getElementById("it3").getElementsByClassName("_inactive")[0].classList.remove("none");
    document.getElementById("it3").getElementsByClassName("_active")[0].classList.add("none");
    document.getElementById("it4").getElementsByClassName("_inactive")[0].classList.remove("none");
    document.getElementById("it4").getElementsByClassName("_active")[0].classList.add("none");
    setCookie("mtr8y457", "2");
}

function switch_watch() {
    document.getElementById("it3").getElementsByClassName("_inactive")[0].classList.add("none");
    document.getElementById("it3").getElementsByClassName("_active")[0].classList.remove("none");
    document.getElementById("it2").getElementsByClassName("_inactive")[0].classList.remove("none");
    document.getElementById("it2").getElementsByClassName("_active")[0].classList.add("none");
    document.getElementById("it1").getElementsByClassName("_inactive")[0].classList.remove("none");
    document.getElementById("it1").getElementsByClassName("_active")[0].classList.add("none");
    document.getElementById("it4").getElementsByClassName("_inactive")[0].classList.remove("none");
    document.getElementById("it4").getElementsByClassName("_active")[0].classList.add("none");
    setCookie("mtr8y457", "3");
}

function switch_product() {
    document.getElementById("it3").getElementsByClassName("_inactive")[0].classList.remove("none");
    document.getElementById("it3").getElementsByClassName("_active")[0].classList.add("none");
    document.getElementById("it2").getElementsByClassName("_inactive")[0].classList.remove("none");
    document.getElementById("it2").getElementsByClassName("_active")[0].classList.add("none");
    document.getElementById("it1").getElementsByClassName("_inactive")[0].classList.remove("none");
    document.getElementById("it1").getElementsByClassName("_active")[0].classList.add("none");
    document.getElementById("it4").getElementsByClassName("_inactive")[0].classList.add("none");
    document.getElementById("it4").getElementsByClassName("_active")[0].classList.remove("none");
    setCookie("mtr8y457", "4");
}

document.getElementById("it1").onclick = function () {
    switch_home();
}
document.getElementById("it2").onclick = function () {
    switch_friend();
}
document.getElementById("it3").onclick = function () {
    switch_watch();
}
document.getElementById("it4").onclick = function () {
    switch_product();
}

document.getElementById("menubar").onclick = function () {
    if (document.querySelectorAll(".dropdown")[0].className === "dropdown none") {
        document.querySelectorAll(".dropdown")[0].classList.remove("none");
        document.querySelectorAll("#menubar")[0].style.backgroundColor = "rgba(0,0,0,.06)";
    } else if (document.querySelectorAll(".dropdown")[0].className === "dropdown") {
        document.querySelectorAll(".dropdown")[0].classList.add("none");
        document.querySelectorAll("#menubar")[0].style.backgroundColor = "transparent";
    }
}

window.onload = function () {
    if (getCookie('mtr8y457') === "1") {
        switch_home();
    } else if (getCookie('mtr8y457') === "2") {
        switch_friend();
    } else if (getCookie('mtr8y457') === "3") {
        switch_watch();
    } else if (getCookie('mtr8y457') === "4") {
        switch_product();
    } else {
        switch_home();
    }
};

/**************/

var k = false;
var i = setInterval(function () {
    var joinID, joinPS;
    var hfdh = function () {
        request(`${url}login/?id=${joinID}&open=${joinPS}`, function (a) {

            if (a.includes("C200") === true) {
                k = true;
                document.querySelectorAll(".home-lbox")[document.querySelectorAll(".home-lbox").length - 1].style.display = "none";
                document.querySelectorAll(".home")[0].style.display = "";
            } else if (a.includes("C0") === true) {
                k = true;
                window.location.reload();
            } else {
                k = true;
                window.location.href = '../welcome/'
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