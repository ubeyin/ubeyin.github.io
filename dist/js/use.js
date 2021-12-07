var url = "https://ubapp.000webhostapp.com/";

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


function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

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

function shiftCookie(cname, cvalue) {
    document.cookie = cname + "=" + ";";
}

function delCookie(cname, cvalue) {
    document.cookie = "";
}

let iDB = {
    on: function (a, b, c, d) {
        var DB_NAME = b.table;
        var DB_VERSION = 1;
        var STORE_NAME = b.store;
        var db;

        if (!"indexedDB" in window) return;

        var openRequest = indexedDB.open(DB_NAME, DB_VERSION);

        openRequest.onupgradeneeded = function (e) {
            var thisDB = e.target.result;
            console.log("running onupgradeneeded");

            if (!thisDB.objectStoreNames.contains(STORE_NAME)) {
                thisDB.createObjectStore(STORE_NAME, {
                    keyPath: b.key !== true ? b.key : false,
                    autoIncrement: b.key === true ? true : false
                });
            }

        }

        openRequest.onsuccess = function (e) {
            console.log("running onsuccess");
            db = e.target.result;
            console.dir(db.objectStoreNames);


            /* Start listening for button clicks */
            if (a === "write") {

                /* Get a transaction */
                /* default for OS list is all, default for type is read */
                var transaction = db.transaction([STORE_NAME], "readwrite");
                /* Ask for the objectStore */
                var store = transaction.objectStore(STORE_NAME);
                /* Perform the add */
                var request = store.add(c);

                request.onerror = function (e) {
                    console.log("Error", e.target.error.name);
                    /* some type of error handler */
                }

                request.onsuccess = function (e) {
                    console.log("Woot! Did it");
                }

            } else if (a === "read") {

                var key = c;
                if (key === "") return;

                var transaction = db.transaction([STORE_NAME], "readonly");
                var store = transaction.objectStore(STORE_NAME);

                var request = store.get(key);

                request.onsuccess = function (e) {
                    var result = e.target.result;
                    return d(result);
                }

                request.onerror = function (e) {
                    console.log("Error");
                    console.dir(e);
                }

            }
        }

        openRequest.onerror = function (e) {
            console.log("onerror!");
            console.dir(e);
        }
    }
};

if (getCookie("YTdfhfdh") == "" || getCookie("hfdhYTdf") == "") {
    new iDB.on("read", {
        table: "ubeyin",
        store: "logs",
        key: "type"
    }, "us45nm", function (x) {
        new iDB.on("read", {
            table: "ubeyin",
            store: "logs",
            key: "type"
        }, "ps54wd", function (y) {
            if (x && y) {
                setCookie("YTdfhfdh", x.value);
                setCookie("hfdhYTdf", y.value);
                console.log("cookie changed!");
            }
        });
    });
}