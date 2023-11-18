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

//gets the button by ID from your HTML element
const themeBtn = document.getElementById("theme-btn");
//when you click that button
themeBtn.onclick = () => {
//the default class "fa-moon" switches to "fa-sun" on toggle
  themeBtn.classList.toggle("fa-sun");
//after the switch on toggle, if your button contains "fa-sun" class
  if (themeBtn.classList.contains("fa-sun")) {
//onclicking themeBtn, the changeTheme styling will be applied to the body of your HTML
    document.body.classList.add("changeTheme");
  } else {
// onclicking themeBtn, applied changeTheme styling will be removed
    document.body.classList.remove("changeTheme");
  }
}