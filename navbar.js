//submenu animation
function animateMenu(dir, minHeight, maxHeight, dur, element) {
    element.animate ([
        {height: minHeight},
        {height: maxHeight}
    ], {
        duration: dur,
        direction: dir
    });
}

const myNavMenu = document.getElementById("nav_menu"); 
const myNavMenuClassName = myNavMenu.className;
const myNavbar = document.querySelector("#top_navbar");

let myNavLink = myNavMenu.getElementsByClassName("nav-link");

function showNav() {
    if (myNavMenu.className == myNavMenuClassName) {
        myNavMenu.className += " show";
        //setTimeout(function(){myNavMenu.className += " show"}, 50);
        animateMenu("normal", "4em", myNavbar.offsetHeight+="px", 100, myNavbar);
        console.log(myNavMenu.className);
    } else {
        animateMenu("reverse", "4em", myNavbar.offsetHeight+="px", 100, myNavbar);
        myNavMenu.className = myNavMenuClassName;
    }
}

function navbarMenusMod(linkNumber) {
    let link = myNavLink[linkNumber];
    let mySubnav = myNavLink[linkNumber].nextElementSibling;
    let subnavHeight = mySubnav.offsetHeight;

    myNavLink[linkNumber].addEventListener("mouseover", function() {
        mySubnav.style.display = "block";
        animateMenu("normal", "0",mySubnav.offsetHeight+="px", 100, mySubnav);
    });

    myNavLink[linkNumber].addEventListener("mouseout", function() { 
        //animateMenu("reverse", mySubnav);
        mySubnav.style.display = "none";
        //setTimeout(function(){subnavMenu.style.display = "none"}, 100);
    });

    mySubnav.addEventListener("mouseover", function() {
        mySubnav.style.display = "block";
        link.className += " insubmenu";
    });

    mySubnav.addEventListener("mouseleave", function() {
        animateMenu("reverse", "0",mySubnav.offsetHeight+="px", 100, mySubnav);
        //mySubnav.style.display = "none";
        setTimeout(function(){mySubnav.style.display = "none"}, 50);
        link.className = "nav-link";
    });
}

for (i = 0; i < myNavLink.length; i++) {
    navbarMenusMod(i);
}


