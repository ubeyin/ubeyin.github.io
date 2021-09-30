let url = "https://ubeyin.000webhostapp.com/u/";
let alertJoin, request;
let joinTo;

document.getElementById("join-form").onsubmit = function () {
    let joinID = this.getElementsByTagName('input')[0].value;
    let joinPS = this.getElementsByTagName('input')[1].value;

    console.log(joinID, joinPS);

    request(url + 'login/?id=' + joinID + '&open=' + joinPS, function (a) {
        if (window.location.href.indexOf("/bn") > -1) {
            if (a == 200) {
                alertJoin(0, joinID);
            } else if (a == 404) {
                alertJoin(2, '<img src="../dist/image/moment.png" title="Welcome to ubeyin community."><div><h2>সতর্কতা!</h2><p>আপনার দেওয়া আইডি সংযুক্ত বা অনুপলব্ধ, অনুগ্রহ করে আবার চেষ্টা করুন অথবা একটি অ্যাকাউন্ট তৈরি করুন!</p><section>' + joinID + '</section><button onclick="this.parentNode.parentNode.style.display = \'none\';this.parentNode.parentNode.parentNode.parentNode.style.display = \'none\';">ঠিক আছে</button><button onclick="this.parentNode.parentNode.style.display = \'none\';this.parentNode.parentNode.parentNode.parentNode.style.display = \'none\';joinTo();">একটি অ্যাকাউন্ট তৈরি করুন</button></div>');
            } else if (a == 400) {
                alertJoin(2, '<img src="../dist/image/moment.png" title="Welcome to ubeyin community."><div><h2>সতর্কতা!</h2><p>আপনার পাসওয়ার্ড অবৈধ, দয়া করে আবার চেষ্টা করুন!</p><section>' + joinID + '</section><button onclick="this.parentNode.parentNode.style.display = \'none\';this.parentNode.parentNode.parentNode.parentNode.style.display = \'none\';">ঠিক আছে, আমি সমাধান করব</button></div>');
            } else if (a == 0) {
                alertJoin(2, '<img src="../dist/image/moment.png" title="Welcome to ubeyin community."><div><h2>সতর্কতা!</h2><p>ডেটা কানেকশন ত্রুটি, অনুগ্রহ করে আবার চেষ্টা করুন!</p><section>' + joinID + '</section><button onclick="this.parentNode.parentNode.style.display = \'none\';this.parentNode.parentNode.parentNode.parentNode.style.display = \'none\';">ঠিক আছে</button><button onclick="window.location.reload();">পৃষ্ঠাটি রিফ্রেশ করুন</button></div>');
            } else {
                alertJoin(2, '<img src="../dist/image/moment.png" title="Welcome to ubeyin community."><div><h2>সতর্কতা!</h2><p>আবার চেষ্টা করুন!</p><section>' + joinID + '</section><button onclick="this.parentNode.parentNode.style.display = \'none\';this.parentNode.parentNode.parentNode.parentNode.style.display = \'none\';">ঠিক আছে</button><button onclick="window.location.reload();">পৃষ্ঠাটি রিফ্রেশ করুনfresh the page</button></div>');
            }
        } else {
            if (a == 200) {
                alertJoin(0, joinID);
            } else if (a == 404) {
                alertJoin(2, '<img src="dist/image/moment.png" title="Welcome to ubeyin community."><div><h2>Warning!</h2><p>The ID you entered isn\'t connected or unavailable, please try again or create an account!</p><section>' + joinID + '</section><button onclick="this.parentNode.parentNode.style.display = \'none\';this.parentNode.parentNode.parentNode.parentNode.style.display = \'none\';">Okay</button><button onclick="this.parentNode.parentNode.style.display = \'none\';this.parentNode.parentNode.parentNode.parentNode.style.display = \'none\';joinTo();">Create an account</button></div>');
            } else if (a == 400) {
                alertJoin(2, '<img src="dist/image/moment.png" title="Welcome to ubeyin community."><div><h2>Warning!</h2><p>Your password is invalid, please try again!</p><section>' + joinID + '</section><button onclick="this.parentNode.parentNode.style.display = \'none\';this.parentNode.parentNode.parentNode.parentNode.style.display = \'none\';">Okay</button></div>');
            } else if (a == 0) {
                alertJoin(2, '<img src="dist/image/moment.png" title="Welcome to ubeyin community."><div><h2>Warning!</h2><p>Data connection error, please try again!</p><section>' + joinID + '</section><button onclick="this.parentNode.parentNode.style.display = \'none\';this.parentNode.parentNode.parentNode.parentNode.style.display = \'none\';">Okay</button><button onclick="window.location.reload();">Okay, refresh the page</button></div>');
            } else {
                alertJoin(2, '<img src="dist/image/moment.png" title="Welcome to ubeyin community."><div><h2>Warning!</h2><p>Error, please try again!</p><section>' + joinID + '</section><button onclick="this.parentNode.parentNode.style.display = \'none\';this.parentNode.parentNode.parentNode.parentNode.style.display = \'none\';">Okay</button><button onclick="window.location.reload();">Okay, refresh the page</button></div>');
            }
        }
    }, 0, '0');
};

joinTo = function () {
    alert('...')
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
                console.log(this.responseText)
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