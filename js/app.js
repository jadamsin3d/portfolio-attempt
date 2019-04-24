function openNav() {
    document.getElementById("mySideNav").style.width = "280px";
    document.getElementById("maincontent").style.marginLeft = "280px";
}

function closeNav() {
    document.getElementById("mySideNav").style.width = "0px";
    document.getElementById("maincontent").style.marginLeft = "0px";
}

function closeAltNav() {
    document.getElementById("myAltSideNav").style.width = "0px";
    document.getElementById("myAltSideNav").style.height = "0px";
    document.getElementById("maincontent").style.marginTop = "0px";
}

function openAltNav() {
    document.getElementById("myAltSideNav").style.width = "100%";
    document.getElementById("myAltSideNav").style.height = "100%";
    document.getElementById("maincontent").style.marginTop = "100%";
}