var url = "https://ubeyin.000webhostapp.com/u/";

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

window.onload = function () {
    if (getCookie("hfdhYTdf") && getCookie("YTdfhfdh")) {
        let joinID = getCookie("YTdfhfdh");
        let joinPS = getCookie("hfdhYTdf");
        request(url + 'login/?id=' + joinID + '&open=' + joinPS, function (a) {
            
                if (a == 200) {
                    window.location.href = "app.html";
                } else if (a == 0) {
                    window.location.reload();
                }

        }, 0, '0');
    }
}