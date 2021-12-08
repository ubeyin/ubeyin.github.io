let data = {};
data.id = "";
data.name = "USER";
data.email = "";

setInterval(() => {
    document.querySelectorAll("title")[0].innerHTML = data.name;
}, 100);