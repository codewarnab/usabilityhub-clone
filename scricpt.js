let i = 0;
let h2 = document.getElementById("h");
let aqua = document.querySelector(".aqua");
let percentBar = document.querySelector(".percentBar");
let container = document.querySelector('.loader');
let number = document.querySelector(".number");
let body = document.querySelector("body");
            

let interval = setInterval(function () {
    number.innerHTML = i + "<span>%<span>";
    percentBar.style.width = i + "%";
    i++;
    if (i == 101) {
        clearInterval(interval);
        setTimeout(function () {
            aqua.style.opacity = "0";
            aqua.style.visibility = "hidden";
            container.style.background = "#03a9f4";
            h2.style.opacity = "1";
            h2.style.visibility = "visible";
        });
    }
}, 10);

function hidepreloader()
 {  
    container.style.display='none';
    body.style.overflow='visible'; 
 }

const toggleButton = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");

toggleButton.addEventListener("click", () => {
                navLinks.classList.toggle("active");
            });