window.onload = function () {
    let flag = false;
    document.getElementById("switch").onclick = function () {
        if (flag == false) {
            document.getElementById("switch").innerHTML = "Login";
            document.getElementById("form1").style.display = "none";
            document.getElementById("form2").style.display = "";
            setCookie("flag", 1, 1);
            flag = true;
        } else if (flag == true) {
            document.getElementById("switch").innerHTML = "Create Account";
            document.getElementById("form1").style.display = "";
            document.getElementById("form2").style.display = "none";
            setCookie("flag", 0, 1);
            flag = false;
        }
    }
    if (getCookie("flag") == 1) {
        document.getElementById("switch").innerHTML = "Login";
        document.getElementById("form1").style.display = "none";
        document.getElementById("form2").style.display = "";
        flag = true;
    } else if (getCookie("flag") == 0) {
        document.getElementById("switch").innerHTML = "Create Account";
        document.getElementById("form1").style.display = "";
        document.getElementById("form2").style.display = "none";
        flag = false;
    }
    /**/

    document.getElementById("form1").onsubmit = function () {
        let joinID = this.getElementsByTagName('input')[0].value;
        let joinPS = this.getElementsByTagName('input')[1].value;

        request(url + 'login/?id=' + joinID + '&open=' + joinPS, function (a) {

            if (a.includes("C200") === true) {
                if (document.getElementById("lg").checked == true) {
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
                } else if (document.getElementById("lg").checked == false) {
                    alert()
                    setCookie("YTdfhfdh", joinID, false);
                    setCookie("hfdhYTdf", joinPS, false);
                }

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

    document.getElementById("form2").onsubmit = function () {
        let joinID = this.getElementsByTagName('input')[0].value;
        let joinPS = this.getElementsByTagName('input')[2].value;
        let joinEM = this.getElementsByTagName('input')[1].value;

        request(url + 'signup/?id=' + joinID + '&email=' + joinEM + '&open=' + joinPS, function (a) {

            if (a.includes("C200") === true) {
                if (document.getElementById("lg").checked == true) {
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
                } else if (document.getElementById("lg").checked == false) {
                    alert()
                    setCookie("YTdfhfdh", joinID, false);
                    setCookie("hfdhYTdf", joinPS, false);
                }

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
};
