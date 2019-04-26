function openNav() {
    document.getElementById("mySideNav").style.width = "280px";
    document.getElementById("maincontent").style.marginLeft = "280px";
}

function closeNav() {
    document.getElementById("mySideNav").style.width = "0px";
    document.getElementById("maincontent").style.marginLeft = "0px";
}

function closeAltNav() {
    document.getElementById("myAltSideNav").style.marginBottom = "0px";
    document.getElementById("myAltSideNav").style.height = "0px";
    document.getElementById("myAltSideNav").style.zIndex = "1";
}

function openAltNav() {
    document.getElementById("myAltSideNav").style.top = "0";
    document.getElementById("myAltSideNav").style.marginBottom = "100%";
    document.getElementById("myAltSideNav").style.height = "100%";
    document.getElementById("myAltSideNav").style.zIndex = "2";
}