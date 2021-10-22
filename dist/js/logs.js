var url = "https://ubapp.000webhostapp.com/";

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}


request = function (urls, success, error, data) {
    let xhr = new XMLHttpRequest();
    if (window.ActiveXObject) {
        try {
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (e) {
            xhr = false;
        }
    } else {
        try {
            xhr = new XMLHttpRequest();
        } catch (e) {
            xhr = false;
        }
    }
    if (!xhr) {
        return error();
    } else {
        xhr.open("GET", urls);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log(this)
                if (success) return success(this.responseText, urls);
            }
        }
        xhr.onerror = function () {
            if (error) return error();
        }
    }
    if (!data) {
        xhr.send(0);
    } else {
        xhr.open("POST", urls);
        xhr.send(data);
    }
};

var i = setInterval(function () {
    if (!getCookie("hfdhYTdf") || !getCookie("YTdfhfdh")) {
        window.location.href = "welcome/";
    } else if (getCookie("hfdhYTdf") && getCookie("YTdfhfdh")) {
        let joinID = getCookie("YTdfhfdh");
        let joinPS = getCookie("hfdhYTdf");
        request(url + 'login/?id=' + joinID + '&open=' + joinPS, function (a) {
            if (a.includes("C200") === true) {
                document.querySelectorAll(".stop")[0].style.display = 'none';
            } else if (a.includes("C0") === true) {
                window.location.reload();
            } else {
                window.location.href = "welcome/";
            }
        }, 0, '0');
    }
}, 10);

setTimeout(() => {
    clearInterval(i);
}, 20);