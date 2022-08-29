//submenu animation
function animateMenu(dir, element) {
    let elmHeight = element.offsetHeight += "px";
    element.animate ([
        {height: "0", opacity: 0},
        {height: elmHeight, opacity: 1}
    ], {
        duration: 100,
        direction: dir
    });
}


let myNavbarUl = document.querySelector(".nav-ul");
let myNavLink = myNavbarUl.getElementsByClassName("nav-link");

function navbarMenusMod(linkNumber) {
    let link = myNavLink[linkNumber];
    let mySubnav = myNavLink[linkNumber].nextElementSibling;

    myNavLink[linkNumber].addEventListener("mouseover", function() {
        mySubnav.style.display = "block";
        animateMenu("normal", mySubnav);
    });

    myNavLink[linkNumber].addEventListener("mouseout", function() { 
        animateMenu("reverse", subnavMenu);
        mySubnav.style.display = "none";
        //setTimeout(function(){subnavMenu.style.display = "none"}, 100);
    });

    mySubnav.addEventListener("mouseover", function() {
        mySubnav.style.display = "block";
        link.className += " insubmenu";
    });

    mySubnav.addEventListener("mouseout", function() {
        mySubnav.style.display = "none";
        link.className = "nav-link";
    });
}

for (i = 0; i < myNavLink.length; i++) {
    navbarMenusMod(i);
}


