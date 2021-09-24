
(function (w) {
    document.getElementById("join-form").onsubmit = function () {
        let joinID = this.getElementsByTagName('input')[0].value;
        let joinPS = this.getElementsByTagName('input')[1].value;
        
        let joinAL = document.querySelectorAll('.alert')[0];
        let joinWA = joinAL.querySelectorAll('.welcome');
        joinAL.style.display = "block";
        joinWA[0].style.display = "none";
        joinWA[1].style.display = "block";
    }
})(typeof window === "object" ? window : this);