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
function changeSubnavStatus(subnav) {
    let subnavStatus = subnav.style.display;
    console.log(subnavStatus);
    switch (subnavStatus) {
        case "block":
            subnav.style.display = "none";
        case "none":
            subnav.style.display = "block";
    }
}

let myNavbarUl = document.querySelector(".nav-ul");
let myNavLink = myNavbarUl.getElementsByClassName("nav-link");

function navbarMenusMod(linkNumber) {
    let link = myNavLink[linkNumber];
    let mySubnav = myNavLink[linkNumber].nextElementSibling;
    mySubnav.style.display = "none";

    myNavLink[linkNumber].addEventListener("mouseover", function() {
        changeSubnavStatus(mySubnav);
        animateMenu("normal", mySubnav);
    });

    myNavLink[linkNumber].addEventListener("mouseout", function() { 
        //animateMenu("reverse", subnavMenu);
        mySubnav.style.display = "none";
        //setTimeout(function(){subnavMenu.style.display = "none"}, 100);
    });

    mySubnav.addEventListener("mouseover", function() {
        mySubnav.style.display = "block";
        link.className += " insubmenu";
        console.log(link.className);
    });

    mySubnav.addEventListener("mouseout", function() {
        mySubnav.style.display = "none";
        link.className = "nav-link";
        console.log(link.className);
    });
}

for (i = 0; i < myNavLink.length; i++) {
    navbarMenusMod(i);
}


