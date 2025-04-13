// heder
const logoHeader = document.getElementById("logoHeader");
const menuHeader = document.getElementById("menuHeader");

// ion buyer
let icomBuyer = document.createElement("img");
icomBuyer.src = "../img/buyer_icon.png";
logoHeader.appendChild(icomBuyer);
icomBuyer.style.width = "2em";
icomBuyer.style.marginTop = "1em";

// button login
const loginButton = document.createElement("button");
loginButton.textContent = "ورود|ثبت نام";
logoHeader.appendChild(loginButton);
loginButton.style.marginLeft = "2em";
loginButton.style.width = "8em";
loginButton.style.height = "2em";

// ion bell
let icomBell = document.createElement("img");
icomBell.src = "../img/bell.png";
logoHeader.appendChild(icomBell);
icomBell.style.width = "2em";
icomBell.style.marginLeft = "2em";
