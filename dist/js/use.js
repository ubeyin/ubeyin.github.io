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

var activeIndex;
var db;

/* In the following line, you should include the prefixes of implementations you want to test.*/
window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
/* DON'T use "var indexedDB = ..." if you're not in a function.*/
/* Moreover, you may need references to some window.IDB* objects:*/
window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;
/* (Mozilla has never prefixed these objects, so we don't need window.mozIDB*) */

var iDB = {
    read: function (id, onload) {
        var DBOpenRequest = window.indexedDB.open(id, 1);

        DBOpenRequest.onsuccess = function (event) {
            db = DBOpenRequest.result;
            var objall = [];

            var transaction = db.transaction([id], 'readonly');
            var objectStore = transaction.objectStore(id);

            objectStore.openCursor().onsuccess = function (event) {
                var cursor = event.target.result;
                if (cursor) {
                    objall.push(cursor.value);
                    cursor.continue();
                } else {
                    /* console.log('Entries all displayed.'); */
                }
            };
            return onload(objall);
        };
    },
    write: function (id, value) {
        var DBOpenRequest = window.indexedDB.open(id, 1);

        DBOpenRequest.onsuccess = function (event) {
            db = DBOpenRequest.result;

            if (typeof value === "object") {
                var transaction = db.transaction([id], 'readwrite');
                var objectStore = transaction.objectStore(id);

                for (i = 0; i < value.length; i++) {
                    objectStore.put(value[i]);
                };

                transaction.oncomplete = function () {};

            } else {

            }
        };

        DBOpenRequest.onupgradeneeded = function (event) {
            var db = event.target.result;

            db.onerror = function (event) {
                console.log('Error loading database.');
            };

            var objectStore = db.createObjectStore(id, {
                keyPath: 'id'
            });

            /*for (let i = 0; i < value.length; i++) {
                if (typeof value[i] === "object") {
                    for (let l = 0; l < value[i].length; l++) {
                        objectStore.createIndex(Object.keys(value[i][l]), Object.keys(value[i][l]), {
                            unique: false
                        });
                    }
                }
            }*/
        };
    },
};