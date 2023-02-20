function vaihto() {
    let x = document.forms["form"]["numero"].value;
    if (x < 0) {
        alert("syötä sopiva numero");
        return false;
    }
    else if (x > 40) {
        alert("syötä sopiva numero");
        return false;
    }
    else if (x < 16) {
        alert("arvosanasi on T1")
        
    }
    else if (x < 31) {
        alert("arvosanasi on H3");
        
    }
    else {
        alert("arvosanasi on K5");
        
    }
}

function lasku1() {
    let x = document.forms["form2"]["lasku"].value;
    if (x < 1) {
        alert("ei sopiva numero");
        return false;
    }
    else if (x < 50) {
        alert("hinta " + x + "â‚¬");
        return true
    }
    else if (x < 100) {
        x = 0.9 * x;
        alert("hinta on " + x + "â‚¬");
        return true
    }
    else if (x < 200) {
        x = x * 0.8;
        alert("hinta on " + x + "â‚¬");
        return true
    } 
}