function bkgrndColor() {
    var bgColor = document.getElementById("bgColor");
    var newBgColor = bgColor.options[bgColor.selectedIndex].value;

    bgColor.style.background = newBgColor;
    document.body.style.background = newBgColor;
}

function hdrColor() {
    var hdColor = document.getElementsByClassName("hdr");   
    var hderColor = document.getElementById("hderColor");
    var newHeaderColor = hderColor.options[hderColor.selectedIndex].value;

    hderColor.style.background = newHeaderColor;

    // to loop over mulitple elements
    for (let hd of hdColor) {
        hd.style.color = newHeaderColor;
    }
    
}

function bdyColor() {
    var txtColor = document.getElementById("txtColor");
    var newTxtColor = txtColor.options[txtColor.selectedIndex].value;

    txtColor.style.background = newTxtColor;
    document.body.style.color = newTxtColor;
}