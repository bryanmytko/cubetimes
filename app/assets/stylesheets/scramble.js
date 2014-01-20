function initvariables() {
    dropdwn(2);
    if (window.location.href.indexOf("type") > -1) {
        var e = getUrlVars()["type"];
        if (e == "2x2x2") {
            dropdwn(1)
        }
        if (e == "rubiks-cube") {
            dropdwn(2)
        }
        if (e == "4x4x4") {
            dropdwn(3)
        }
        if (e == "5x5x5") {
            dropdwn(4)
        }
        if (e == "6x6x6") {
            dropdwn(5)
        }
        if (e == "7x7x7") {
            dropdwn(6)
        }
        if (e == "8x8x8") {
            dropdwn(7)
        }
        if (e == "9x9x9") {
            dropdwn(8)
        }
        if (e == "10x10x10") {
            dropdwn(9)
        }
        if (e == "11x11x11") {
            dropdwn(10)
        }
        if (e == "square-1") {
            dropdwn(11)
        }
        if (e == "rubiks-clock") {
            dropdwn(12)
        }
        if (e == "megaminx") {
            dropdwn(13)
        }
        if (e == "pyraminx") {
            dropdwn(14)
        }
        if (e == "letters") {
            dropdwn(15)
        }
        if (e == "numbers") {
            dropdwn(16)
        }
    }
    cscram = 5;
    if (window.location.href.indexOf("amount") > -1) {
        var t = getUrlVars()["amount"];
        if (t < 100 && t > 0) {
            cscram = t
        }
    }
    if (window.location.href.indexOf("length") > -1) {
        t = getUrlVars()["length"];
        if (t < 1e3 && t > 0) {
            cleng = t
        }
    }
    csep = 1;
    corient = 1;
    cfru = 1;
    if (window.location.href.indexOf("var") > -1) {
        t = getUrlVars()["var"];
        if (t < 1e3 && t > 0) {
            if (t == 8) {
                csep = 1;
                corient = 1;
                cfru = 1
            }
            if (t == 7) {
                csep = 1;
                corient = 1;
                cfru = 0
            }
            if (t == 6) {
                csep = 1;
                corient = 0;
                cfru = 1
            }
            if (t == 5) {
                csep = 1;
                corient = 0;
                cfru = 0
            }
            if (t == 4) {
                csep = 0;
                corient = 1;
                cfru = 1
            }
            if (t == 3) {
                csep = 0;
                corient = 1;
                cfru = 0
            }
            if (t == 2) {
                csep = 0;
                corient = 0;
                cfru = 1
            }
            if (t == 1) {
                csep = 0;
                corient = 0;
                cfru = 0
            }
        }
    }
    if (ctype == 13) {
    }
    if (ctype == 1) {
    }
    if (ctype == 1) {
        cleng = 9;
        cfru = 0
    }
    if (ctype == 2) {
        cleng = 25;
        cfru = 1
    }
    if (ctype == 3) {
        cleng = 40;
        cfru = 1
    }
    if (ctype == 4) {
        cleng = 60;
        cfru = 1
    }
    if (ctype == 5) {
        cleng = 80;
        cfru = 1
    }
    if (ctype == 6) {
        cleng = 90;
        cfru = 1
    }
    if (ctype == 7) {
        cleng = 100;
        cfru = 1
    }
    if (ctype == 8) {
        cleng = 110;
        cfru = 1
    }
    if (ctype == 9) {
        cleng = 120;
        cfru = 1
    }
    if (ctype == 10) {
        cleng = 130;
        cfru = 1
    }
    if (ctype == 11) {
        cleng = 16
    }
    if (ctype == 12) {
        cleng = 12
    }
    if (ctype == 13) {
        cleng = 77;
        csep = 0
    }
    if (ctype == 14) {
        cleng = 12
    }
    initnotscrambled();
    clicksep();
    clickorient();
    clickfru();
    document.getElementById("scramblesvalue").value = cscram;
    document.getElementById("lengthvalue").value = cleng;
    document.getElementById("mxcolors").value = megamcolorscheme
}
function generatedropdownurls() {
    return "&amount=" + cscram + "&length=" + cleng + "&var=" + (8 - (cfru + 2 * corient + 4 * csep))
}
function updatemxcolor() {
    megamcolorscheme = document.getElementById("mxcolors").value
}
function mindenmezorebetut(e) {
    uly[2 * e + 2] = 2;
    uly[3 * e + 2] = 2;
    uly[4 * e + 3] = 2;
    uly[3 * e + 4] = 2;
    uly[2 * e + 4] = 2;
    lly[2 * e + 2] = 3;
    lly[3 * e + 2] = 3;
    lly[4 * e + 2] = 3;
    lly[5 * e + 2] = 3;
    lly[5 * e + 3] = 3;
    lly[5 * e + 4] = 3;
    fly[2 * e + 2] = 1;
    fly[3 * e + 2] = 1;
    fly[4 * e + 2] = 1;
    fly[5 * e + 2] = 1;
    fly[6 * e + 2] = 1;
    fly[2 * e + 3] = 1;
    fly[4 * e + 3] = 1;
    rly[2 * e + 2] = 5;
    rly[2 * e + 3] = 5;
    rly[3 * e + 2] = 5;
    rly[4 * e + 2] = 5;
    rly[5 * e + 2] = 5;
    rly[6 * e + 2] = 5;
    rly[3 * e + 3] = 5;
    rly[5 * e + 3] = 5;
    rly[6 * e + 4] = 5;
    rly[3 * e + 4] = 5;
    bly[2 * e + 2] = 6;
    bly[3 * e + 2] = 6;
    bly[4 * e + 2] = 6;
    bly[5 * e + 2] = 6;
    bly[6 * e + 2] = 6;
    bly[2 * e + 3] = 6;
    bly[3 * e + 3] = 6;
    bly[5 * e + 3] = 6;
    bly[6 * e + 3] = 6;
    dly[2 * e + 2] = 4;
    dly[3 * e + 2] = 4;
    dly[4 * e + 2] = 4;
    dly[5 * e + 2] = 4;
    dly[6 * e + 2] = 4;
    dly[2 * e + 3] = 4;
    dly[3 * e + 4] = 4;
    dly[4 * e + 4] = 4;
    dly[5 * e + 4] = 4;
    dly[6 * e + 3] = 4
}
function initnotscrambled() {
    var e = 6;
    var t = 3;
    var n = 2;
    var r = 5;
    var s = 4;
    var o = 1;
    var u = 0;
    if (corient == 1 && ctype < 11) {
        u = Math.floor(Math.random() * 24);
        if (u == 0) {
            orientstr = "Up: yellow<br />Front: orange";
            e = 1;
            t = 2;
            n = 3;
            r = 4;
            s = 5;
            o = 6
        }
        if (u == 1) {
            orientstr = "Up: yellow <br />Front: blue ";
            e = 1;
            t = 3;
            n = 4;
            r = 5;
            s = 2;
            o = 6
        }
        if (u == 2) {
            orientstr = "Up: yellow <br />Front: red ";
            e = 1;
            t = 4;
            n = 5;
            r = 2;
            s = 3;
            o = 6
        }
        if (u == 3) {
            orientstr = "Up: yellow <br />Front: green ";
            e = 1;
            t = 5;
            n = 2;
            r = 3;
            s = 4;
            o = 6
        }
        if (u == 4) {
            orientstr = "Up: red <br />Front: blue ";
            e = 5;
            t = 1;
            n = 4;
            r = 6;
            s = 2;
            o = 3
        }
        if (u == 5) {
            orientstr = "Up: green <br />Front: red ";
            e = 2;
            t = 1;
            n = 5;
            r = 6;
            s = 3;
            o = 4
        }
        if (u == 6) {
            orientstr = "Up: orange <br />Front: green ";
            e = 3;
            t = 1;
            n = 2;
            r = 6;
            s = 4;
            o = 5
        }
        if (u == 7) {
            orientstr = "Up: blue <br />Front: orange ";
            e = 4;
            t = 1;
            n = 3;
            r = 6;
            s = 5;
            o = 2
        }
        if (u == 8) {
            orientstr = "Up: orange <br />Front: yellow ";
            e = 3;
            t = 4;
            n = 1;
            r = 2;
            s = 6;
            o = 5
        }
        if (u == 9) {
            orientstr = "Up: green <br />Front: yellow ";
            e = 2;
            t = 3;
            n = 1;
            r = 5;
            s = 6;
            o = 4
        }
        if (u == 10) {
            orientstr = "Up: red <br />Front: yellow ";
            e = 5;
            t = 2;
            n = 1;
            r = 4;
            s = 6;
            o = 3
        }
        if (u == 11) {
            orientstr = "Up: blue <br />Front: yellow ";
            e = 4;
            t = 5;
            n = 1;
            r = 3;
            s = 6;
            o = 2
        }
        if (u == 12) {
            orientstr = "Up: orange <br />Front: blue ";
            e = 3;
            t = 6;
            n = 4;
            r = 1;
            s = 2;
            o = 5
        }
        if (u == 13) {
            orientstr = "Up: green <br />Front: orange ";
            e = 2;
            t = 6;
            n = 3;
            r = 1;
            s = 5;
            o = 4
        }
        if (u == 14) {
            orientstr = "Up: red <br />Front: green ";
            e = 5;
            t = 6;
            n = 2;
            r = 1;
            s = 4;
            o = 3
        }
        if (u == 15) {
            orientstr = "Up: blue <br />Front: red ";
            e = 4;
            t = 6;
            n = 5;
            r = 1;
            s = 3;
            o = 2
        }
        if (u == 16) {
            orientstr = "Up: orange <br />Front: white ";
            e = 3;
            t = 2;
            n = 6;
            r = 4;
            s = 1;
            o = 5
        }
        if (u == 17) {
            orientstr = "Up: green <br />Front: white ";
            e = 2;
            t = 5;
            n = 6;
            r = 3;
            s = 1;
            o = 4
        }
        if (u == 18) {
            orientstr = "Up: red <br />Front: white ";
            e = 5;
            t = 4;
            n = 6;
            r = 2;
            s = 1;
            o = 3
        }
        if (u == 19) {
            orientstr = "Up: blue <br />Front: white ";
            e = 4;
            t = 3;
            n = 6;
            r = 5;
            s = 1;
            o = 2
        }
        if (u == 20) {
            orientstr = "Up: white <br />Front: green ";
            e = 6;
            t = 3;
            n = 2;
            r = 5;
            s = 4;
            o = 1
        }
        if (u == 21) {
            orientstr = "Up: white <br />Front: red ";
            e = 6;
            t = 2;
            n = 5;
            r = 4;
            s = 3;
            o = 1
        }
        if (u == 22) {
            orientstr = "Up: white <br />Front: orange ";
            e = 6;
            t = 4;
            n = 3;
            r = 2;
            s = 5;
            o = 1
        }
        if (u == 23) {
            orientstr = "Up: white <br />Front: blue ";
            e = 6;
            t = 5;
            n = 4;
            r = 3;
            s = 2;
            o = 1
        }
    }
    if (ctype == 14) {
        t = 3;
        n = 2;
        r = 6;
        o = 4
    }
    if (corient == 1 && ctype == 14) {
        u = Math.floor(Math.random() * 12);
        if (u == 0) {
            orientstr = "Front: red <br />Down: blue ";
            t = 2;
            n = 3;
            r = 4;
            o = 6
        }
        if (u == 1) {
            orientstr = "Front: yellow <br />Down: blue ";
            t = 3;
            n = 4;
            r = 2;
            o = 6
        }
        if (u == 2) {
            orientstr = "Front: green <br />Down: blue ";
            t = 4;
            n = 2;
            r = 3;
            o = 6
        }
        if (u == 3) {
            orientstr = "Front: green <br />Down: red ";
            t = 6;
            n = 2;
            r = 4;
            o = 3
        }
        if (u == 4) {
            orientstr = "Front: yellow <br />Down: red ";
            t = 2;
            n = 4;
            r = 6;
            o = 3
        }
        if (u == 5) {
            orientstr = "Front: blue <br />Down: red ";
            t = 4;
            n = 6;
            r = 2;
            o = 3
        }
        if (u == 6) {
            orientstr = "Front: red <br />Down: green ";
            t = 4;
            n = 3;
            r = 6;
            o = 2
        }
        if (u == 7) {
            orientstr = "Front: blue <br />Down: green ";
            t = 3;
            n = 6;
            r = 4;
            o = 2
        }
        if (u == 8) {
            orientstr = "Front: yellow <br />Down: green ";
            t = 6;
            n = 4;
            r = 3;
            o = 2
        }
        if (u == 9) {
            orientstr = "Front: red <br />Down: yellow ";
            t = 6;
            n = 3;
            r = 2;
            o = 4
        }
        if (u == 10) {
            orientstr = "Front: green <br />Down: yellow ";
            t = 3;
            n = 2;
            r = 6;
            o = 4
        }
        if (u == 11) {
            orientstr = "Front: blue <br />Down: yellow ";
            t = 2;
            n = 6;
            r = 3;
            o = 4
        }
    }
    for (i = 1; i < 10; i++) {
        a[i] = e;
        a[i + 9] = t;
        a[i + 18] = n;
        a[i + 27] = r;
        a[i + 36] = s;
        a[i + 45] = o
    }
    for (i = 0; i < 122; i++) {
        uly[i] = e;
        lly[i] = t;
        fly[i] = n;
        rly[i] = r;
        bly[i] = s;
        dly[i] = o
    }
    if (ctype == 12) {
        for (i = 1; i < 20; i++) {
            clc[i] = 12
        }
    }
    if (ctype == 13) {
        e = 1;
        t = 2;
        n = 7;
        r = 10;
        s = 3;
        o = 14;
        var f = 9;
        var l = 12;
        var c = 4;
        var h = 5;
        var p = 6;
        var d = 11;
        if (megamcolorscheme.length == 12) {
            e = megacsbetu(megamcolorscheme.charAt(0));
            t = megacsbetu(megamcolorscheme.charAt(1));
            n = megacsbetu(megamcolorscheme.charAt(2));
            r = megacsbetu(megamcolorscheme.charAt(3));
            s = megacsbetu(megamcolorscheme.charAt(4));
            o = megacsbetu(megamcolorscheme.charAt(5));
            f = megacsbetu(megamcolorscheme.charAt(6));
            l = megacsbetu(megamcolorscheme.charAt(7));
            c = megacsbetu(megamcolorscheme.charAt(8));
            h = megacsbetu(megamcolorscheme.charAt(9));
            p = megacsbetu(megamcolorscheme.charAt(10));
            d = megacsbetu(megamcolorscheme.charAt(11))
        } else {
            alert("The color scheme must be 12 character long containing a-o letters.")
        }
        for (i = 1; i < 13; i++) {
            mx1[i] = e;
            mx2[i] = t;
            mx3[i] = n;
            mx4[i] = r;
            mx5[i] = s;
            mx6[i] = o;
            mx7[i] = f;
            mx8[i] = l;
            mx9[i] = c;
            mx10[i] = h;
            mx11[i] = p;
            mx12[i] = d
        }
    }
    if (ctype == 11) {
        for (i = 1; i < 25; i++) {
            sq[i] = i
        }
        sq[25] = 0
    }
}
function megacsbetu(e) {
    if (e == "a") {
        return 10
    }
    if (e == "b") {
        return 1
    }
    if (e == "c") {
        return 4
    }
    if (e == "d") {
        return 7
    }
    if (e == "e") {
        return 12
    }
    if (e == "f") {
        return 3
    }
    if (e == "g") {
        return 6
    }
    if (e == "h") {
        return 9
    }
    if (e == "i") {
        return 5
    }
    if (e == "j") {
        return 2
    }
    if (e == "k") {
        return 14
    }
    if (e == "l") {
        return 11
    }
    if (e == "m") {
        return 8
    }
    if (e == "n") {
        return 13
    }
    return 15
}
function updatescrambles() {
    var e = document.getElementById("scramblesvalue").value;
    if (isNaN(Number(e))) {
        alert(e + " is not valid number!")
    } else {
        cscram = e
    }
    dropdownclose()
}
function updatelength() {
    var e = document.getElementById("lengthvalue").value;
    if (isNaN(Number(e))) {
        alert(e + " is not valid number!")
    } else {
        cleng = e
    }
    dropdownclose()
}
function doszuksegesrotations(e, t) {
    if (e == "U") {
        forduly(t);
        sliceu(0, t)
    }
    if (e == "U'") {
        forduly(t);
        sliceu(0, t);
        forduly(t);
        sliceu(0, t);
        forduly(t);
        sliceu(0, t)
    }
    if (e == "U2") {
        forduly(t);
        sliceu(0, t);
        forduly(t);
        sliceu(0, t)
    }
    if (e == "U<sub>2</sub>") {
        forduly(t);
        sliceu(0, t);
        sliceu(1, t)
    }
    if (e == "U<sub>2</sub>'") {
        forduly(t);
        sliceu(0, t);
        sliceu(1, t);
        forduly(t);
        sliceu(0, t);
        sliceu(1, t);
        forduly(t);
        sliceu(0, t);
        sliceu(1, t)
    }
    if (e == "U<sub>2</sub>2") {
        forduly(t);
        sliceu(0, t);
        sliceu(1, t);
        forduly(t);
        sliceu(0, t);
        sliceu(1, t)
    }
    if (e == "U<sub>3</sub>") {
        forduly(t);
        sliceu(0, t);
        sliceu(1, t);
        sliceu(2, t)
    }
    if (e == "U<sub>3</sub>'") {
        forduly(t);
        sliceu(0, t);
        sliceu(1, t);
        sliceu(2, t);
        forduly(t);
        sliceu(0, t);
        sliceu(1, t);
        sliceu(2, t);
        forduly(t);
        sliceu(0, t);
        sliceu(1, t);
        sliceu(2, t)
    }
    if (e == "U<sub>3</sub>2") {
        forduly(t);
        sliceu(0, t);
        sliceu(1, t);
        sliceu(2, t);
        forduly(t);
        sliceu(0, t);
        sliceu(1, t);
        sliceu(2, t)
    }
    if (e == "U<sub>4</sub>") {
        forduly(t);
        sliceu(0, t);
        sliceu(1, t);
        sliceu(2, t);
        sliceu(3, t)
    }
    if (e == "U<sub>4</sub>'") {
        forduly(t);
        sliceu(0, t);
        sliceu(1, t);
        sliceu(2, t);
        sliceu(3, t);
        forduly(t);
        sliceu(0, t);
        sliceu(1, t);
        sliceu(2, t);
        sliceu(3, t);
        forduly(t);
        sliceu(0, t);
        sliceu(1, t);
        sliceu(2, t);
        sliceu(3, t)
    }
    if (e == "U<sub>4</sub>2") {
        forduly(t);
        sliceu(0, t);
        sliceu(1, t);
        sliceu(2, t);
        sliceu(3, t);
        forduly(t);
        sliceu(0, t);
        sliceu(1, t);
        sliceu(2, t);
        sliceu(3, t)
    }
    if (e == "U<sub>5</sub>") {
        forduly(t);
        sliceu(0, t);
        sliceu(1, t);
        sliceu(2, t);
        sliceu(3, t);
        sliceu(4, t)
    }
    if (e == "U<sub>5</sub>'") {
        forduly(t);
        sliceu(0, t);
        sliceu(1, t);
        sliceu(2, t);
        sliceu(3, t);
        sliceu(4, t);
        forduly(t);
        sliceu(0, t);
        sliceu(1, t);
        sliceu(2, t);
        sliceu(3, t);
        sliceu(4, t);
        forduly(t);
        sliceu(0, t);
        sliceu(1, t);
        sliceu(2, t);
        sliceu(3, t);
        sliceu(4, t)
    }
    if (e == "U<sub>5</sub>2") {
        forduly(t);
        sliceu(0, t);
        sliceu(1, t);
        sliceu(2, t);
        sliceu(3, t);
        sliceu(4, t);
        forduly(t);
        sliceu(0, t);
        sliceu(1, t);
        sliceu(2, t);
        sliceu(3, t);
        sliceu(4, t)
    }
    if (e == "R") {
        fordrly(t);
        slicer(0, t)
    }
    if (e == "R'") {
        fordrly(t);
        slicer(0, t);
        fordrly(t);
        slicer(0, t);
        fordrly(t);
        slicer(0, t)
    }
    if (e == "R2") {
        fordrly(t);
        slicer(0, t);
        fordrly(t);
        slicer(0, t)
    }
    if (e == "R<sub>2</sub>") {
        fordrly(t);
        slicer(0, t);
        slicer(1, t)
    }
    if (e == "R<sub>2</sub>'") {
        fordrly(t);
        slicer(0, t);
        slicer(1, t);
        fordrly(t);
        slicer(0, t);
        slicer(1, t);
        fordrly(t);
        slicer(0, t);
        slicer(1, t)
    }
    if (e == "R<sub>2</sub>2") {
        fordrly(t);
        slicer(0, t);
        slicer(1, t);
        fordrly(t);
        slicer(0, t);
        slicer(1, t)
    }
    if (e == "R<sub>3</sub>") {
        fordrly(t);
        slicer(0, t);
        slicer(1, t);
        slicer(2, t)
    }
    if (e == "R<sub>3</sub>'") {
        fordrly(t);
        slicer(0, t);
        slicer(1, t);
        slicer(2, t);
        fordrly(t);
        slicer(0, t);
        slicer(1, t);
        slicer(2, t);
        fordrly(t);
        slicer(0, t);
        slicer(1, t);
        slicer(2, t)
    }
    if (e == "R<sub>3</sub>2") {
        fordrly(t);
        slicer(0, t);
        slicer(1, t);
        slicer(2, t);
        fordrly(t);
        slicer(0, t);
        slicer(1, t);
        slicer(2, t)
    }
    if (e == "R<sub>4</sub>") {
        fordrly(t);
        slicer(0, t);
        slicer(1, t);
        slicer(2, t);
        slicer(3, t)
    }
    if (e == "R<sub>4</sub>'") {
        fordrly(t);
        slicer(0, t);
        slicer(1, t);
        slicer(2, t);
        slicer(3, t);
        fordrly(t);
        slicer(0, t);
        slicer(1, t);
        slicer(2, t);
        slicer(3, t);
        fordrly(t);
        slicer(0, t);
        slicer(1, t);
        slicer(2, t);
        slicer(3, t)
    }
    if (e == "R<sub>4</sub>2") {
        fordrly(t);
        slicer(0, t);
        slicer(1, t);
        slicer(2, t);
        slicer(3, t);
        fordrly(t);
        slicer(0, t);
        slicer(1, t);
        slicer(2, t);
        slicer(3, t)
    }
    if (e == "R<sub>5</sub>") {
        fordrly(t);
        slicer(0, t);
        slicer(1, t);
        slicer(2, t);
        slicer(3, t);
        slicer(4, t)
    }
    if (e == "R<sub>5</sub>'") {
        fordrly(t);
        slicer(0, t);
        slicer(1, t);
        slicer(2, t);
        slicer(3, t);
        slicer(4, t);
        fordrly(t);
        slicer(0, t);
        slicer(1, t);
        slicer(2, t);
        slicer(3, t);
        slicer(4, t);
        fordrly(t);
        slicer(0, t);
        slicer(1, t);
        slicer(2, t);
        slicer(3, t);
        slicer(4, t)
    }
    if (e == "R<sub>5</sub>2") {
        fordrly(t);
        slicer(0, t);
        slicer(1, t);
        slicer(2, t);
        slicer(3, t);
        slicer(4, t);
        fordrly(t);
        slicer(0, t);
        slicer(1, t);
        slicer(2, t);
        slicer(3, t);
        slicer(4, t)
    }
    if (e == "F") {
        fordfly(t);
        slicef(0, t)
    }
    if (e == "F'") {
        fordfly(t);
        slicef(0, t);
        fordfly(t);
        slicef(0, t);
        fordfly(t);
        slicef(0, t)
    }
    if (e == "F2") {
        fordfly(t);
        slicef(0, t);
        fordfly(t);
        slicef(0, t)
    }
    if (e == "F<sub>2</sub>") {
        fordfly(t);
        slicef(0, t);
        slicef(1, t)
    }
    if (e == "F<sub>2</sub>'") {
        fordfly(t);
        slicef(0, t);
        slicef(1, t);
        fordfly(t);
        slicef(0, t);
        slicef(1, t);
        fordfly(t);
        slicef(0, t);
        slicef(1, t)
    }
    if (e == "F<sub>2</sub>2") {
        fordfly(t);
        slicef(0, t);
        slicef(1, t);
        fordfly(t);
        slicef(0, t);
        slicef(1, t)
    }
    if (e == "F<sub>3</sub>") {
        fordfly(t);
        slicef(0, t);
        slicef(1, t);
        slicef(2, t)
    }
    if (e == "F<sub>3</sub>'") {
        fordfly(t);
        slicef(0, t);
        slicef(1, t);
        slicef(2, t);
        fordfly(t);
        slicef(0, t);
        slicef(1, t);
        slicef(2, t);
        fordfly(t);
        slicef(0, t);
        slicef(1, t);
        slicef(2, t)
    }
    if (e == "F<sub>3</sub>2") {
        fordfly(t);
        slicef(0, t);
        slicef(1, t);
        slicef(2, t);
        fordfly(t);
        slicef(0, t);
        slicef(1, t);
        slicef(2, t)
    }
    if (e == "F<sub>4</sub>") {
        fordfly(t);
        slicef(0, t);
        slicef(1, t);
        slicef(2, t);
        slicef(3, t)
    }
    if (e == "F<sub>4</sub>'") {
        fordfly(t);
        slicef(0, t);
        slicef(1, t);
        slicef(2, t);
        slicef(3, t);
        fordfly(t);
        slicef(0, t);
        slicef(1, t);
        slicef(2, t);
        slicef(3, t);
        fordfly(t);
        slicef(0, t);
        slicef(1, t);
        slicef(2, t);
        slicef(3, t)
    }
    if (e == "F<sub>4</sub>2") {
        fordfly(t);
        slicef(0, t);
        slicef(1, t);
        slicef(2, t);
        slicef(3, t);
        fordfly(t);
        slicef(0, t);
        slicef(1, t);
        slicef(2, t);
        slicef(3, t)
    }
    if (e == "F<sub>5</sub>") {
        fordfly(t);
        slicef(0, t);
        slicef(1, t);
        slicef(2, t);
        slicef(3, t);
        slicef(4, t)
    }
    if (e == "F<sub>5</sub>'") {
        fordfly(t);
        slicef(0, t);
        slicef(1, t);
        slicef(2, t);
        slicef(3, t);
        slicef(4, t);
        fordfly(t);
        slicef(0, t);
        slicef(1, t);
        slicef(2, t);
        slicef(3, t);
        slicef(4, t);
        fordfly(t);
        slicef(0, t);
        slicef(1, t);
        slicef(2, t);
        slicef(3, t);
        slicef(4, t)
    }
    if (e == "F<sub>5</sub>2") {
        fordfly(t);
        slicef(0, t);
        slicef(1, t);
        slicef(2, t);
        slicef(3, t);
        slicef(4, t);
        fordfly(t);
        slicef(0, t);
        slicef(1, t);
        slicef(2, t);
        slicef(3, t);
        slicef(4, t)
    }
    if (e == "B") {
        fordbly(t);
        slicef(t - 1, t);
        slicef(t - 1, t);
        slicef(t - 1, t)
    }
    if (e == "B'") {
        fordbly(t);
        fordbly(t);
        fordbly(t);
        slicef(t - 1, t)
    }
    if (e == "B2") {
        fordbly(t);
        fordbly(t);
        slicef(t - 1, t);
        slicef(t - 1, t)
    }
    if (e == "B<sub>2</sub>") {
        fordbly(t);
        slicef(t - 1, t);
        slicef(t - 1, t);
        slicef(t - 1, t);
        slicef(t - 2, t);
        slicef(t - 2, t);
        slicef(t - 2, t)
    }
    if (e == "B<sub>2</sub>'") {
        fordbly(t);
        fordbly(t);
        fordbly(t);
        slicef(t - 1, t);
        slicef(t - 2, t)
    }
    if (e == "B<sub>2</sub>2") {
        fordbly(t);
        fordbly(t);
        slicef(t - 1, t);
        slicef(t - 1, t);
        slicef(t - 2, t);
        slicef(t - 2, t)
    }
    if (e == "B<sub>3</sub>") {
        fordbly(t);
        slicef(t - 1, t);
        slicef(t - 1, t);
        slicef(t - 1, t);
        slicef(t - 2, t);
        slicef(t - 2, t);
        slicef(t - 2, t);
        slicef(t - 3, t);
        slicef(t - 3, t);
        slicef(t - 3, t)
    }
    if (e == "B<sub>3</sub>'") {
        fordbly(t);
        fordbly(t);
        fordbly(t);
        slicef(t - 1, t);
        slicef(t - 2, t);
        slicef(t - 3, t)
    }
    if (e == "B<sub>3</sub>2") {
        fordbly(t);
        fordbly(t);
        slicef(t - 1, t);
        slicef(t - 1, t);
        slicef(t - 2, t);
        slicef(t - 2, t);
        slicef(t - 3, t);
        slicef(t - 3, t)
    }
    if (e == "B<sub>4</sub>") {
        fordbly(t);
        slicef(t - 1, t);
        slicef(t - 1, t);
        slicef(t - 1, t);
        slicef(t - 2, t);
        slicef(t - 2, t);
        slicef(t - 2, t);
        slicef(t - 3, t);
        slicef(t - 3, t);
        slicef(t - 3, t);
        slicef(t - 4, t);
        slicef(t - 4, t);
        slicef(t - 4, t)
    }
    if (e == "B<sub>4</sub>'") {
        fordbly(t);
        fordbly(t);
        fordbly(t);
        slicef(t - 1, t);
        slicef(t - 2, t);
        slicef(t - 3, t);
        slicef(t - 4, t)
    }
    if (e == "B<sub>4</sub>2") {
        fordbly(t);
        fordbly(t);
        slicef(t - 1, t);
        slicef(t - 1, t);
        slicef(t - 2, t);
        slicef(t - 2, t);
        slicef(t - 3, t);
        slicef(t - 3, t);
        slicef(t - 4, t);
        slicef(t - 4, t)
    }
    if (e == "B<sub>5</sub>") {
        fordbly(t);
        slicef(t - 1, t);
        slicef(t - 1, t);
        slicef(t - 1, t);
        slicef(t - 2, t);
        slicef(t - 2, t);
        slicef(t - 2, t);
        slicef(t - 3, t);
        slicef(t - 3, t);
        slicef(t - 3, t);
        slicef(t - 4, t);
        slicef(t - 4, t);
        slicef(t - 4, t);
        slicef(t - 5, t);
        slicef(t - 5, t);
        slicef(t - 5, t)
    }
    if (e == "B<sub>5</sub>'") {
        fordbly(t);
        fordbly(t);
        fordbly(t);
        slicef(t - 1, t);
        slicef(t - 2, t);
        slicef(t - 3, t);
        slicef(t - 4, t);
        slicef(t - 5, t)
    }
    if (e == "B<sub>5</sub>2") {
        fordbly(t);
        fordbly(t);
        slicef(t - 1, t);
        slicef(t - 1, t);
        slicef(t - 2, t);
        slicef(t - 2, t);
        slicef(t - 3, t);
        slicef(t - 3, t);
        slicef(t - 4, t);
        slicef(t - 4, t);
        slicef(t - 5, t);
        slicef(t - 5, t)
    }
    if (e == "L") {
        fordlly(t);
        slicer(t - 1, t);
        slicer(t - 1, t);
        slicer(t - 1, t)
    }
    if (e == "L'") {
        fordlly(t);
        fordlly(t);
        fordlly(t);
        slicer(t - 1, t)
    }
    if (e == "L2") {
        fordlly(t);
        fordlly(t);
        slicer(t - 1, t);
        slicer(t - 1, t)
    }
    if (e == "L<sub>2</sub>") {
        fordlly(t);
        slicer(t - 1, t);
        slicer(t - 1, t);
        slicer(t - 1, t);
        slicer(t - 2, t);
        slicer(t - 2, t);
        slicer(t - 2, t)
    }
    if (e == "L<sub>2</sub>'") {
        fordlly(t);
        fordlly(t);
        fordlly(t);
        slicer(t - 1, t);
        slicer(t - 2, t)
    }
    if (e == "L<sub>2</sub>2") {
        fordlly(t);
        fordlly(t);
        slicer(t - 1, t);
        slicer(t - 1, t);
        slicer(t - 2, t);
        slicer(t - 2, t)
    }
    if (e == "L<sub>3</sub>") {
        fordlly(t);
        slicer(t - 1, t);
        slicer(t - 1, t);
        slicer(t - 1, t);
        slicer(t - 2, t);
        slicer(t - 2, t);
        slicer(t - 2, t);
        slicer(t - 3, t);
        slicer(t - 3, t);
        slicer(t - 3, t)
    }
    if (e == "L<sub>3</sub>'") {
        fordlly(t);
        fordlly(t);
        fordlly(t);
        slicer(t - 1, t);
        slicer(t - 2, t);
        slicer(t - 3, t)
    }
    if (e == "L<sub>3</sub>2") {
        fordlly(t);
        fordlly(t);
        slicer(t - 1, t);
        slicer(t - 1, t);
        slicer(t - 2, t);
        slicer(t - 2, t);
        slicer(t - 3, t);
        slicer(t - 3, t)
    }
    if (e == "L<sub>4</sub>") {
        fordlly(t);
        slicer(t - 1, t);
        slicer(t - 1, t);
        slicer(t - 1, t);
        slicer(t - 2, t);
        slicer(t - 2, t);
        slicer(t - 2, t);
        slicer(t - 3, t);
        slicer(t - 3, t);
        slicer(t - 3, t);
        slicer(t - 4, t);
        slicer(t - 4, t);
        slicer(t - 4, t)
    }
    if (e == "L<sub>4</sub>'") {
        fordlly(t);
        fordlly(t);
        fordlly(t);
        slicer(t - 1, t);
        slicer(t - 2, t);
        slicer(t - 3, t);
        slicer(t - 4, t)
    }
    if (e == "L<sub>4</sub>2") {
        fordlly(t);
        fordlly(t);
        slicer(t - 1, t);
        slicer(t - 1, t);
        slicer(t - 2, t);
        slicer(t - 2, t);
        slicer(t - 3, t);
        slicer(t - 3, t);
        slicer(t - 4, t);
        slicer(t - 4, t)
    }
    if (e == "L<sub>5</sub>") {
        fordlly(t);
        slicer(t - 1, t);
        slicer(t - 1, t);
        slicer(t - 1, t);
        slicer(t - 2, t);
        slicer(t - 2, t);
        slicer(t - 2, t);
        slicer(t - 3, t);
        slicer(t - 3, t);
        slicer(t - 3, t);
        slicer(t - 4, t);
        slicer(t - 4, t);
        slicer(t - 4, t);
        slicer(t - 5, t);
        slicer(t - 5, t);
        slicer(t - 5, t)
    }
    if (e == "L<sub>5</sub>'") {
        fordlly(t);
        fordlly(t);
        fordlly(t);
        slicer(t - 1, t);
        slicer(t - 2, t);
        slicer(t - 3, t);
        slicer(t - 4, t);
        slicer(t - 5, t)
    }
    if (e == "L<sub>5</sub>2") {
        fordlly(t);
        fordlly(t);
        slicer(t - 1, t);
        slicer(t - 1, t);
        slicer(t - 2, t);
        slicer(t - 2, t);
        slicer(t - 3, t);
        slicer(t - 3, t);
        slicer(t - 4, t);
        slicer(t - 4, t);
        slicer(t - 5, t);
        slicer(t - 5, t)
    }
    if (e == "D") {
        forddly(t);
        sliceu(t - 1, t);
        sliceu(t - 1, t);
        sliceu(t - 1, t)
    }
    if (e == "D'") {
        forddly(t);
        forddly(t);
        forddly(t);
        sliceu(t - 1, t)
    }
    if (e == "D2") {
        forddly(t);
        forddly(t);
        sliceu(t - 1, t);
        sliceu(t - 1, t)
    }
    if (e == "D<sub>2</sub>") {
        forddly(t);
        sliceu(t - 1, t);
        sliceu(t - 1, t);
        sliceu(t - 1, t);
        sliceu(t - 2, t);
        sliceu(t - 2, t);
        sliceu(t - 2, t)
    }
    if (e == "D<sub>2</sub>'") {
        forddly(t);
        forddly(t);
        forddly(t);
        sliceu(t - 1, t);
        sliceu(t - 2, t)
    }
    if (e == "D<sub>2</sub>2") {
        forddly(t);
        forddly(t);
        sliceu(t - 1, t);
        sliceu(t - 1, t);
        sliceu(t - 2, t);
        sliceu(t - 2, t)
    }
    if (e == "D<sub>3</sub>") {
        forddly(t);
        sliceu(t - 1, t);
        sliceu(t - 1, t);
        sliceu(t - 1, t);
        sliceu(t - 2, t);
        sliceu(t - 2, t);
        sliceu(t - 2, t);
        sliceu(t - 3, t);
        sliceu(t - 3, t);
        sliceu(t - 3, t)
    }
    if (e == "D<sub>3</sub>'") {
        forddly(t);
        forddly(t);
        forddly(t);
        sliceu(t - 1, t);
        sliceu(t - 2, t);
        sliceu(t - 3, t)
    }
    if (e == "D<sub>3</sub>2") {
        forddly(t);
        forddly(t);
        sliceu(t - 1, t);
        sliceu(t - 1, t);
        sliceu(t - 2, t);
        sliceu(t - 2, t);
        sliceu(t - 3, t);
        sliceu(t - 3, t)
    }
    if (e == "D<sub>4</sub>") {
        forddly(t);
        sliceu(t - 1, t);
        sliceu(t - 1, t);
        sliceu(t - 1, t);
        sliceu(t - 2, t);
        sliceu(t - 2, t);
        sliceu(t - 2, t);
        sliceu(t - 3, t);
        sliceu(t - 3, t);
        sliceu(t - 3, t);
        sliceu(t - 4, t);
        sliceu(t - 4, t);
        sliceu(t - 4, t)
    }
    if (e == "D<sub>4</sub>'") {
        forddly(t);
        forddly(t);
        forddly(t);
        sliceu(t - 1, t);
        sliceu(t - 2, t);
        sliceu(t - 3, t);
        sliceu(t - 4, t)
    }
    if (e == "D<sub>4</sub>2") {
        forddly(t);
        forddly(t);
        sliceu(t - 1, t);
        sliceu(t - 1, t);
        sliceu(t - 2, t);
        sliceu(t - 2, t);
        sliceu(t - 3, t);
        sliceu(t - 3, t);
        sliceu(t - 4, t);
        sliceu(t - 4, t)
    }
    if (e == "D<sub>5</sub>") {
        forddly(t);
        sliceu(t - 1, t);
        sliceu(t - 1, t);
        sliceu(t - 1, t);
        sliceu(t - 2, t);
        sliceu(t - 2, t);
        sliceu(t - 2, t);
        sliceu(t - 3, t);
        sliceu(t - 3, t);
        sliceu(t - 3, t);
        sliceu(t - 4, t);
        sliceu(t - 4, t);
        sliceu(t - 4, t);
        sliceu(t - 5, t);
        sliceu(t - 5, t);
        sliceu(t - 5, t)
    }
    if (e == "D<sub>5</sub>'") {
        forddly(t);
        forddly(t);
        forddly(t);
        sliceu(t - 1, t);
        sliceu(t - 2, t);
        sliceu(t - 3, t);
        sliceu(t - 4, t);
        sliceu(t - 5, t)
    }
    if (e == "D<sub>5</sub>2") {
        forddly(t);
        forddly(t);
        sliceu(t - 1, t);
        sliceu(t - 1, t);
        sliceu(t - 2, t);
        sliceu(t - 2, t);
        sliceu(t - 3, t);
        sliceu(t - 3, t);
        sliceu(t - 4, t);
        sliceu(t - 4, t);
        sliceu(t - 5, t);
        sliceu(t - 5, t)
    }
}
function doScramble() {
    dropdownclose();
    var e = 0;
    var t = 1;
    var n = 1;
    var r = 86;
    var i = 86;
    var s = "F";
    var o = "yo";
    initnotscrambled();
    if (corient == 1 && (ctype < 11 || ctype == 14)) {
        o = orientstr + "<br /> <br />"
    } else {
        o = ""
    }
    if (ctype == 1) {
        while (e < cleng) {
            s = "no";
            t = Math.floor(Math.random() * 6);
            if (t == 0 && r != 0) {
                if (!(i == 0 && r == 3)) {
                    s = "F"
                }
            }
            if (t == 1 && r != 1) {
                if (!(i == 1 && r == 4)) {
                    s = "R"
                }
            }
            if (t == 2 && r != 2) {
                if (!(i == 2 && r == 5)) {
                    s = "U"
                }
            }
            if (t == 3 && r != 3 && cfru == 0) {
                if (!(i == 3 && r == 0)) {
                    s = "B"
                }
            }
            if (t == 4 && r != 4 && cfru == 0) {
                if (!(i == 4 && r == 1)) {
                    s = "L"
                }
            }
            if (t == 5 && r != 5 && cfru == 0) {
                if (!(i == 5 && r == 2)) {
                    s = "D"
                }
            }
            if (s != "no") {
                i = r;
                r = t;
                n = Math.floor(Math.random() * 3);
                if (n == 1) {
                    s = s + "2"
                }
                if (n == 2) {
                    s = s + "'"
                }
                doszuksegesrotations(s, ctype + 1);
                s = s + " ";
                if (csep == 1 && (e + 1) % 5 == 0 && e + 1 < cleng) {
                    s = s + "- "
                }
                e++;
                o = o + s
            }
        }
    }
    if (ctype == 2) {
        while (e < cleng) {
            s = "no";
            t = Math.floor(Math.random() * 6);
            if (t == 0 && r != 0) {
                if (!(i == 0 && r == 3)) {
                    s = "F"
                }
            }
            if (t == 1 && r != 1) {
                if (!(i == 1 && r == 4)) {
                    s = "R"
                }
            }
            if (t == 2 && r != 2) {
                if (!(i == 2 && r == 5)) {
                    s = "U"
                }
            }
            if (t == 3 && r != 3 && cfru == 0) {
                if (!(i == 3 && r == 0)) {
                    s = "B"
                }
            }
            if (t == 4 && r != 4 && cfru == 0) {
                if (!(i == 4 && r == 1)) {
                    s = "L"
                }
            }
            if (t == 5 && r != 5 && cfru == 0) {
                if (!(i == 5 && r == 2)) {
                    s = "D"
                }
            }
            if (s != "no") {
                i = r;
                r = t;
                n = Math.floor(Math.random() * 3);
                if (n == 1) {
                    s = s + "2"
                }
                if (n == 2) {
                    s = s + "'"
                }
                if (s == "F") {
                    ff()
                }
                if (s == "F'") {
                    fi()
                }
                if (s == "F2") {
                    ff();
                    ff()
                }
                if (s == "R") {
                    rr()
                }
                if (s == "R'") {
                    ri()
                }
                if (s == "R2") {
                    rr();
                    rr()
                }
                if (s == "U") {
                    uu()
                }
                if (s == "U'") {
                    ui()
                }
                if (s == "U2") {
                    uu();
                    uu()
                }
                if (s == "B") {
                    bb()
                }
                if (s == "B'") {
                    bi()
                }
                if (s == "B2") {
                    bb();
                    bb()
                }
                if (s == "L") {
                    ll()
                }
                if (s == "L'") {
                    li()
                }
                if (s == "L2") {
                    ll();
                    ll()
                }
                if (s == "D") {
                    dd()
                }
                if (s == "D'") {
                    di()
                }
                if (s == "D2") {
                    dd();
                    dd()
                }
                s = s + " ";
                if (csep == 1 && (e + 1) % 5 == 0 && e + 1 < cleng) {
                    s = s + "- "
                }
                e++;
                o = o + s
            }
        }
    }
    if (ctype == 3) {
        while (e < cleng) {
            s = "no";
            t = Math.floor(Math.random() * 6);
            if (t == 0 && r != 0) {
                if (!(i == 0 && r == 3)) {
                    s = "F"
                }
            }
            if (t == 1 && r != 1) {
                if (!(i == 1 && r == 4)) {
                    s = "R"
                }
            }
            if (t == 2 && r != 2) {
                if (!(i == 2 && r == 5)) {
                    s = "U"
                }
            }
            if (t == 3 && r != 3 && cfru == 0) {
                if (!(i == 3 && r == 0)) {
                    s = "B"
                }
            }
            if (t == 4 && r != 4 && cfru == 0) {
                if (!(i == 4 && r == 1)) {
                    s = "L"
                }
            }
            if (t == 5 && r != 5 && cfru == 0) {
                if (!(i == 5 && r == 2)) {
                    s = "D"
                }
            }
            if (s != "no") {
                i = r;
                r = t;
                n = Math.floor(Math.random() * 6);
                if (n == 1) {
                    s = s + "2"
                }
                if (n == 2) {
                    s = s + "'"
                }
                if (n == 3) {
                    s = s + "<sub>2</sub>"
                }
                if (n == 4) {
                    s = s + "<sub>2</sub>'"
                }
                if (n == 5) {
                    s = s + "<sub>2</sub>2"
                }
                doszuksegesrotations(s, ctype + 1);
                s = s + " ";
                if (csep == 1 && (e + 1) % 5 == 0 && e + 1 < cleng) {
                    s = s + "- "
                }
                e++;
                o = o + s
            }
        }
    }
    if (ctype == 4) {
        while (e < cleng) {
            s = "no";
            t = Math.floor(Math.random() * 6);
            if (t == 0 && r != 0) {
                if (!(i == 0 && r == 3)) {
                    s = "F"
                }
            }
            if (t == 1 && r != 1) {
                if (!(i == 1 && r == 4)) {
                    s = "R"
                }
            }
            if (t == 2 && r != 2) {
                if (!(i == 2 && r == 5)) {
                    s = "U"
                }
            }
            if (t == 3 && r != 3 && cfru == 0) {
                if (!(i == 3 && r == 0)) {
                    s = "B"
                }
            }
            if (t == 4 && r != 4 && cfru == 0) {
                if (!(i == 4 && r == 1)) {
                    s = "L"
                }
            }
            if (t == 5 && r != 5 && cfru == 0) {
                if (!(i == 5 && r == 2)) {
                    s = "D"
                }
            }
            if (s != "no") {
                i = r;
                r = t;
                n = Math.floor(Math.random() * 6);
                if (n == 1) {
                    s = s + "2"
                }
                if (n == 2) {
                    s = s + "'"
                }
                if (n == 3) {
                    s = s + "<sub>2</sub>"
                }
                if (n == 4) {
                    s = s + "<sub>2</sub>'"
                }
                if (n == 5) {
                    s = s + "<sub>2</sub>2"
                }
                doszuksegesrotations(s, ctype + 1);
                s = s + " ";
                if (csep == 1 && (e + 1) % 5 == 0 && e + 1 < cleng) {
                    s = s + "- "
                }
                e++;
                o = o + s
            }
        }
    }
    if (ctype == 5) {
        while (e < cleng) {
            s = "no";
            t = Math.floor(Math.random() * 6);
            if (t == 0 && r != 0) {
                if (!(i == 0 && r == 3)) {
                    s = "F"
                }
            }
            if (t == 1 && r != 1) {
                if (!(i == 1 && r == 4)) {
                    s = "R"
                }
            }
            if (t == 2 && r != 2) {
                if (!(i == 2 && r == 5)) {
                    s = "U"
                }
            }
            if (t == 3 && r != 3 && cfru == 0) {
                if (!(i == 3 && r == 0)) {
                    s = "B"
                }
            }
            if (t == 4 && r != 4 && cfru == 0) {
                if (!(i == 4 && r == 1)) {
                    s = "L"
                }
            }
            if (t == 5 && r != 5 && cfru == 0) {
                if (!(i == 5 && r == 2)) {
                    s = "D"
                }
            }
            if (s != "no") {
                i = r;
                r = t;
                n = Math.floor(Math.random() * 9);
                if (n == 1) {
                    s = s + "2"
                }
                if (n == 2) {
                    s = s + "'"
                }
                if (n == 3) {
                    s = s + "<sub>2</sub>"
                }
                if (n == 4) {
                    s = s + "<sub>2</sub>'"
                }
                if (n == 5) {
                    s = s + "<sub>2</sub>2"
                }
                if (n == 6) {
                    s = s + "<sub>3</sub>"
                }
                if (n == 7) {
                    s = s + "<sub>3</sub>'"
                }
                if (n == 8) {
                    s = s + "<sub>3</sub>2"
                }
                doszuksegesrotations(s, ctype + 1);
                s = s + " ";
                if (csep == 1 && (e + 1) % 5 == 0 && e + 1 < cleng) {
                    s = s + "- "
                }
                e++;
                o = o + s
            }
        }
    }
    if (ctype == 6) {
        while (e < cleng) {
            s = "no";
            t = Math.floor(Math.random() * 6);
            if (t == 0 && r != 0) {
                if (!(i == 0 && r == 3)) {
                    s = "F"
                }
            }
            if (t == 1 && r != 1) {
                if (!(i == 1 && r == 4)) {
                    s = "R"
                }
            }
            if (t == 2 && r != 2) {
                if (!(i == 2 && r == 5)) {
                    s = "U"
                }
            }
            if (t == 3 && r != 3 && cfru == 0) {
                if (!(i == 3 && r == 0)) {
                    s = "B"
                }
            }
            if (t == 4 && r != 4 && cfru == 0) {
                if (!(i == 4 && r == 1)) {
                    s = "L"
                }
            }
            if (t == 5 && r != 5 && cfru == 0) {
                if (!(i == 5 && r == 2)) {
                    s = "D"
                }
            }
            if (s != "no") {
                i = r;
                r = t;
                n = Math.floor(Math.random() * 9);
                if (n == 1) {
                    s = s + "2"
                }
                if (n == 2) {
                    s = s + "'"
                }
                if (n == 3) {
                    s = s + "<sub>2</sub>"
                }
                if (n == 4) {
                    s = s + "<sub>2</sub>'"
                }
                if (n == 5) {
                    s = s + "<sub>2</sub>2"
                }
                if (n == 6) {
                    s = s + "<sub>3</sub>"
                }
                if (n == 7) {
                    s = s + "<sub>3</sub>'"
                }
                if (n == 8) {
                    s = s + "<sub>3</sub>2"
                }
                doszuksegesrotations(s, ctype + 1);
                s = s + " ";
                if (csep == 1 && (e + 1) % 5 == 0 && e + 1 < cleng) {
                    s = s + "- "
                }
                e++;
                o = o + s
            }
        }
    }
    if (ctype == 7) {
        while (e < cleng) {
            s = "no";
            t = Math.floor(Math.random() * 6);
            if (t == 0 && r != 0) {
                if (!(i == 0 && r == 3)) {
                    s = "F"
                }
            }
            if (t == 1 && r != 1) {
                if (!(i == 1 && r == 4)) {
                    s = "R"
                }
            }
            if (t == 2 && r != 2) {
                if (!(i == 2 && r == 5)) {
                    s = "U"
                }
            }
            if (t == 3 && r != 3 && cfru == 0) {
                if (!(i == 3 && r == 0)) {
                    s = "B"
                }
            }
            if (t == 4 && r != 4 && cfru == 0) {
                if (!(i == 4 && r == 1)) {
                    s = "L"
                }
            }
            if (t == 5 && r != 5 && cfru == 0) {
                if (!(i == 5 && r == 2)) {
                    s = "D"
                }
            }
            if (s != "no") {
                i = r;
                r = t;
                n = Math.floor(Math.random() * 12);
                if (n == 1) {
                    s = s + "2"
                }
                if (n == 2) {
                    s = s + "'"
                }
                if (n == 3) {
                    s = s + "<sub>2</sub>"
                }
                if (n == 4) {
                    s = s + "<sub>2</sub>'"
                }
                if (n == 5) {
                    s = s + "<sub>2</sub>2"
                }
                if (n == 6) {
                    s = s + "<sub>3</sub>"
                }
                if (n == 7) {
                    s = s + "<sub>3</sub>'"
                }
                if (n == 8) {
                    s = s + "<sub>3</sub>2"
                }
                if (n == 9) {
                    s = s + "<sub>4</sub>"
                }
                if (n == 10) {
                    s = s + "<sub>4</sub>'"
                }
                if (n == 11) {
                    s = s + "<sub>4</sub>2"
                }
                doszuksegesrotations(s, ctype + 1);
                s = s + " ";
                if (csep == 1 && (e + 1) % 5 == 0 && e + 1 < cleng) {
                    s = s + "- "
                }
                e++;
                o = o + s
            }
        }
    }
    if (ctype == 8) {
        while (e < cleng) {
            s = "no";
            t = Math.floor(Math.random() * 6);
            if (t == 0 && r != 0) {
                if (!(i == 0 && r == 3)) {
                    s = "F"
                }
            }
            if (t == 1 && r != 1) {
                if (!(i == 1 && r == 4)) {
                    s = "R"
                }
            }
            if (t == 2 && r != 2) {
                if (!(i == 2 && r == 5)) {
                    s = "U"
                }
            }
            if (t == 3 && r != 3 && cfru == 0) {
                if (!(i == 3 && r == 0)) {
                    s = "B"
                }
            }
            if (t == 4 && r != 4 && cfru == 0) {
                if (!(i == 4 && r == 1)) {
                    s = "L"
                }
            }
            if (t == 5 && r != 5 && cfru == 0) {
                if (!(i == 5 && r == 2)) {
                    s = "D"
                }
            }
            if (s != "no") {
                i = r;
                r = t;
                n = Math.floor(Math.random() * 12);
                if (n == 1) {
                    s = s + "2"
                }
                if (n == 2) {
                    s = s + "'"
                }
                if (n == 3) {
                    s = s + "<sub>2</sub>"
                }
                if (n == 4) {
                    s = s + "<sub>2</sub>'"
                }
                if (n == 5) {
                    s = s + "<sub>2</sub>2"
                }
                if (n == 6) {
                    s = s + "<sub>3</sub>"
                }
                if (n == 7) {
                    s = s + "<sub>3</sub>'"
                }
                if (n == 8) {
                    s = s + "<sub>3</sub>2"
                }
                if (n == 9) {
                    s = s + "<sub>4</sub>"
                }
                if (n == 10) {
                    s = s + "<sub>4</sub>'"
                }
                if (n == 11) {
                    s = s + "<sub>4</sub>2"
                }
                doszuksegesrotations(s, ctype + 1);
                s = s + " ";
                if (csep == 1 && (e + 1) % 5 == 0 && e + 1 < cleng) {
                    s = s + "- "
                }
                e++;
                o = o + s
            }
        }
    }
    if (ctype == 9) {
        while (e < cleng) {
            s = "no";
            t = Math.floor(Math.random() * 6);
            if (t == 0 && r != 0) {
                if (!(i == 0 && r == 3)) {
                    s = "F"
                }
            }
            if (t == 1 && r != 1) {
                if (!(i == 1 && r == 4)) {
                    s = "R"
                }
            }
            if (t == 2 && r != 2) {
                if (!(i == 2 && r == 5)) {
                    s = "U"
                }
            }
            if (t == 3 && r != 3 && cfru == 0) {
                if (!(i == 3 && r == 0)) {
                    s = "B"
                }
            }
            if (t == 4 && r != 4 && cfru == 0) {
                if (!(i == 4 && r == 1)) {
                    s = "L"
                }
            }
            if (t == 5 && r != 5 && cfru == 0) {
                if (!(i == 5 && r == 2)) {
                    s = "D"
                }
            }
            if (s != "no") {
                i = r;
                r = t;
                n = Math.floor(Math.random() * 15);
                if (n == 1) {
                    s = s + "2"
                }
                if (n == 2) {
                    s = s + "'"
                }
                if (n == 3) {
                    s = s + "<sub>2</sub>"
                }
                if (n == 4) {
                    s = s + "<sub>2</sub>'"
                }
                if (n == 5) {
                    s = s + "<sub>2</sub>2"
                }
                if (n == 6) {
                    s = s + "<sub>3</sub>"
                }
                if (n == 7) {
                    s = s + "<sub>3</sub>'"
                }
                if (n == 8) {
                    s = s + "<sub>3</sub>2"
                }
                if (n == 9) {
                    s = s + "<sub>4</sub>"
                }
                if (n == 10) {
                    s = s + "<sub>4</sub>'"
                }
                if (n == 11) {
                    s = s + "<sub>4</sub>2"
                }
                if (n == 12) {
                    s = s + "<sub>5</sub>"
                }
                if (n == 13) {
                    s = s + "<sub>5</sub>'"
                }
                if (n == 14) {
                    s = s + "<sub>5</sub>2"
                }
                doszuksegesrotations(s, ctype + 1);
                s = s + " ";
                if (csep == 1 && (e + 1) % 5 == 0 && e + 1 < cleng) {
                    s = s + "- "
                }
                e++;
                o = o + s
            }
        }
    }
    if (ctype == 10) {
        while (e < cleng) {
            s = "no";
            t = Math.floor(Math.random() * 6);
            if (t == 0 && r != 0) {
                if (!(i == 0 && r == 3)) {
                    s = "F"
                }
            }
            if (t == 1 && r != 1) {
                if (!(i == 1 && r == 4)) {
                    s = "R"
                }
            }
            if (t == 2 && r != 2) {
                if (!(i == 2 && r == 5)) {
                    s = "U"
                }
            }
            if (t == 3 && r != 3 && cfru == 0) {
                if (!(i == 3 && r == 0)) {
                    s = "B"
                }
            }
            if (t == 4 && r != 4 && cfru == 0) {
                if (!(i == 4 && r == 1)) {
                    s = "L"
                }
            }
            if (t == 5 && r != 5 && cfru == 0) {
                if (!(i == 5 && r == 2)) {
                    s = "D"
                }
            }
            if (s != "no") {
                i = r;
                r = t;
                n = Math.floor(Math.random() * 15);
                if (n == 1) {
                    s = s + "2"
                }
                if (n == 2) {
                    s = s + "'"
                }
                if (n == 3) {
                    s = s + "<sub>2</sub>"
                }
                if (n == 4) {
                    s = s + "<sub>2</sub>'"
                }
                if (n == 5) {
                    s = s + "<sub>2</sub>2"
                }
                if (n == 6) {
                    s = s + "<sub>3</sub>"
                }
                if (n == 7) {
                    s = s + "<sub>3</sub>'"
                }
                if (n == 8) {
                    s = s + "<sub>3</sub>2"
                }
                if (n == 9) {
                    s = s + "<sub>4</sub>"
                }
                if (n == 10) {
                    s = s + "<sub>4</sub>'"
                }
                if (n == 11) {
                    s = s + "<sub>4</sub>2"
                }
                if (n == 12) {
                    s = s + "<sub>5</sub>"
                }
                if (n == 13) {
                    s = s + "<sub>5</sub>'"
                }
                if (n == 14) {
                    s = s + "<sub>5</sub>2"
                }
                doszuksegesrotations(s, ctype + 1);
                s = s + " ";
                if (csep == 1 && (e + 1) % 5 == 0 && e + 1 < cleng) {
                    s = s + "- "
                }
                e++;
                o = o + s
            }
        }
    }
    if (ctype == 11) {
        while (e < cleng) {
            o = o + randomslice();
            if (csep == 1 && (e + 1) % 5 == 0 && e + 1 < cleng) {
                o = o + " <br />"
            }
            e++
        }
    }
    if (ctype == 12) {
        var u = '<div class="clockbetukkel">';
        var a = 86;
        var f = "UUUU";
        var l = 1;
        while (e < cleng) {
            l = Math.floor(Math.random() * 16);
            if (l == a) {
                l = Math.floor(Math.random() * 16)
            }
            if (l == a) {
                l = Math.floor(Math.random() * 16)
            }
            a = l;
            if (l == 0) {
                cbutt1 = 0;
                cbutt2 = 0;
                cbutt3 = 0;
                cbutt4 = 0
            }
            if (l == 1) {
                cbutt1 = 0;
                cbutt2 = 0;
                cbutt3 = 0;
                cbutt4 = 1;
                f = "UUUd"
            }
            if (l == 2) {
                cbutt1 = 0;
                cbutt2 = 0;
                cbutt3 = 1;
                cbutt4 = 0;
                f = "UUdU"
            }
            if (l == 3) {
                cbutt1 = 0;
                cbutt2 = 0;
                cbutt3 = 1;
                cbutt4 = 1;
                f = "UUdd"
            }
            if (l == 4) {
                cbutt1 = 0;
                cbutt2 = 1;
                cbutt3 = 0;
                cbutt4 = 0;
                f = "UdUU"
            }
            if (l == 5) {
                cbutt1 = 0;
                cbutt2 = 1;
                cbutt3 = 0;
                cbutt4 = 1;
                f = "UdUd"
            }
            if (l == 6) {
                cbutt1 = 0;
                cbutt2 = 1;
                cbutt3 = 1;
                cbutt4 = 0;
                f = "UddU"
            }
            if (l == 7) {
                cbutt1 = 0;
                cbutt2 = 1;
                cbutt3 = 1;
                cbutt4 = 1;
                f = "Uddd"
            }
            if (l == 8) {
                cbutt1 = 1;
                cbutt2 = 0;
                cbutt3 = 0;
                cbutt4 = 0;
                f = "dUUU"
            }
            if (l == 9) {
                cbutt1 = 1;
                cbutt2 = 0;
                cbutt3 = 0;
                cbutt4 = 1;
                f = "dUUd"
            }
            if (l == 10) {
                cbutt1 = 1;
                cbutt2 = 0;
                cbutt3 = 1;
                cbutt4 = 0;
                f = "dUdU"
            }
            if (l == 11) {
                cbutt1 = 1;
                cbutt2 = 0;
                cbutt3 = 1;
                cbutt4 = 1;
                f = "dUdd"
            }
            if (l == 12) {
                cbutt1 = 1;
                cbutt2 = 1;
                cbutt3 = 0;
                cbutt4 = 0;
                f = "ddUU"
            }
            if (l == 13) {
                cbutt1 = 1;
                cbutt2 = 1;
                cbutt3 = 0;
                cbutt4 = 1;
                f = "ddUd"
            }
            if (l == 14) {
                cbutt1 = 1;
                cbutt2 = 1;
                cbutt3 = 1;
                cbutt4 = 0;
                f = "dddU"
            }
            if (l == 15) {
                cbutt1 = 1;
                cbutt2 = 1;
                cbutt3 = 1;
                cbutt4 = 1;
                f = "dddd"
            }
            var c = 1 + Math.floor(Math.random() * 4);
            var h = Math.floor(Math.random() * 11) - 4;
            if (h == 0) {
                h = -5
            }
            var p = 0;
            if (h < 0) {
                p = 1
            } else {
                p = 0
            }
            p = 10 * c + p;
            if (f == "UUUU") {
                clc[1] = crot(clc[1], h);
                clc[2] = crot(clc[2], h);
                clc[3] = crot(clc[3], h);
                clc[4] = crot(clc[4], h);
                clc[5] = crot(clc[5], h);
                clc[6] = crot(clc[6], h);
                clc[7] = crot(clc[7], h);
                clc[8] = crot(clc[8], h);
                clc[9] = crot(clc[9], h);
                clc[11] = crot(clc[11], -1 * h);
                clc[13] = crot(clc[13], -1 * h);
                clc[17] = crot(clc[17], -1 * h);
                clc[19] = crot(clc[19], -1 * h)
            }
            if (f == "UUUd") {
                if (c == 4) {
                    clc[9] = crot(clc[9], h);
                    clc[14] = crot(clc[14], -1 * h);
                    clc[15] = crot(clc[15], -1 * h);
                    clc[17] = crot(clc[17], -1 * h);
                    clc[18] = crot(clc[18], -1 * h)
                }
                if (c != 4) {
                    clc[1] = crot(clc[1], h);
                    clc[2] = crot(clc[2], h);
                    clc[3] = crot(clc[3], h);
                    clc[4] = crot(clc[4], h);
                    clc[5] = crot(clc[5], h);
                    clc[6] = crot(clc[6], h);
                    clc[7] = crot(clc[7], h);
                    clc[8] = crot(clc[8], h);
                    clc[11] = crot(clc[11], -1 * h);
                    clc[13] = crot(clc[13], -1 * h);
                    clc[19] = crot(clc[19], -1 * h)
                }
            }
            if (f == "UUdU") {
                if (c == 3) {
                    clc[7] = crot(clc[7], h);
                    clc[16] = crot(clc[16], -1 * h);
                    clc[15] = crot(clc[15], -1 * h);
                    clc[19] = crot(clc[19], -1 * h);
                    clc[18] = crot(clc[18], -1 * h)
                }
                if (c != 3) {
                    clc[1] = crot(clc[1], h);
                    clc[2] = crot(clc[2], h);
                    clc[3] = crot(clc[3], h);
                    clc[4] = crot(clc[4], h);
                    clc[5] = crot(clc[5], h);
                    clc[6] = crot(clc[6], h);
                    clc[8] = crot(clc[8], h);
                    clc[9] = crot(clc[9], h);
                    clc[11] = crot(clc[11], -1 * h);
                    clc[13] = crot(clc[13], -1 * h);
                    clc[17] = crot(clc[17], -1 * h)
                }
            }
            if (f == "UUdd") {
                if (c == 1 || c == 2) {
                    clc[1] = crot(clc[1], h);
                    clc[2] = crot(clc[2], h);
                    clc[3] = crot(clc[3], h);
                    clc[4] = crot(clc[4], h);
                    clc[5] = crot(clc[5], h);
                    clc[6] = crot(clc[6], h);
                    clc[11] = crot(clc[11], -1 * h);
                    clc[13] = crot(clc[13], -1 * h)
                }
                if (c == 3 || c == 4) {
                    clc[7] = crot(clc[7], h);
                    clc[9] = crot(clc[9], h);
                    clc[14] = crot(clc[14], -1 * h);
                    clc[15] = crot(clc[15], -1 * h);
                    clc[16] = crot(clc[16], -1 * h);
                    clc[17] = crot(clc[17], -1 * h);
                    clc[18] = crot(clc[18], -1 * h);
                    clc[19] = crot(clc[19], -1 * h)
                }
            }
            if (f == "UdUU") {
                if (c == 2) {
                    clc[3] = crot(clc[3], h);
                    clc[11] = crot(clc[11], -1 * h);
                    clc[12] = crot(clc[12], -1 * h);
                    clc[14] = crot(clc[14], -1 * h);
                    clc[15] = crot(clc[15], -1 * h)
                }
                if (c != 2) {
                    clc[1] = crot(clc[1], h);
                    clc[2] = crot(clc[2], h);
                    clc[4] = crot(clc[4], h);
                    clc[5] = crot(clc[5], h);
                    clc[6] = crot(clc[6], h);
                    clc[7] = crot(clc[7], h);
                    clc[8] = crot(clc[8], h);
                    clc[9] = crot(clc[9], h);
                    clc[19] = crot(clc[19], -1 * h);
                    clc[13] = crot(clc[13], -1 * h);
                    clc[17] = crot(clc[17], -1 * h)
                }
            }
            if (f == "UdUd") {
                if (c == 1 || c == 3) {
                    clc[1] = crot(clc[1], h);
                    clc[2] = crot(clc[2], h);
                    clc[4] = crot(clc[4], h);
                    clc[5] = crot(clc[5], h);
                    clc[7] = crot(clc[7], h);
                    clc[8] = crot(clc[8], h);
                    clc[19] = crot(clc[19], -1 * h);
                    clc[13] = crot(clc[13], -1 * h)
                }
                if (c == 2 || c == 4) {
                    clc[3] = crot(clc[3], h);
                    clc[9] = crot(clc[9], h);
                    clc[11] = crot(clc[11], -1 * h);
                    clc[12] = crot(clc[12], -1 * h);
                    clc[14] = crot(clc[14], -1 * h);
                    clc[15] = crot(clc[15], -1 * h);
                    clc[17] = crot(clc[17], -1 * h);
                    clc[18] = crot(clc[18], -1 * h)
                }
            }
            if (f == "UddU") {
                if (c == 1 || c == 4) {
                    clc[1] = crot(clc[1], h);
                    clc[2] = crot(clc[2], h);
                    clc[4] = crot(clc[4], h);
                    clc[5] = crot(clc[5], h);
                    clc[6] = crot(clc[6], h);
                    clc[8] = crot(clc[8], h);
                    clc[9] = crot(clc[9], h);
                    clc[13] = crot(clc[13], -1 * h);
                    clc[17] = crot(clc[17], -1 * h)
                }
                if (c == 2 || c == 3) {
                    clc[3] = crot(clc[3], h);
                    clc[7] = crot(clc[7], h);
                    clc[11] = crot(clc[11], -1 * h);
                    clc[12] = crot(clc[12], -1 * h);
                    clc[14] = crot(clc[14], -1 * h);
                    clc[15] = crot(clc[15], -1 * h);
                    clc[16] = crot(clc[16], -1 * h);
                    clc[18] = crot(clc[18], -1 * h);
                    clc[19] = crot(clc[19], -1 * h)
                }
            }
            if (f == "Uddd") {
                if (c == 1) {
                    clc[1] = crot(clc[1], h);
                    clc[2] = crot(clc[2], h);
                    clc[4] = crot(clc[4], h);
                    clc[5] = crot(clc[5], h);
                    clc[13] = crot(clc[13], -1 * h)
                }
                if (c != 1) {
                    clc[3] = crot(clc[3], h);
                    clc[9] = crot(clc[9], h);
                    clc[7] = crot(clc[7], h);
                    clc[11] = crot(clc[11], -1 * h);
                    clc[12] = crot(clc[12], -1 * h);
                    clc[14] = crot(clc[14], -1 * h);
                    clc[15] = crot(clc[15], -1 * h);
                    clc[16] = crot(clc[16], -1 * h);
                    clc[17] = crot(clc[17], -1 * h);
                    clc[18] = crot(clc[18], -1 * h);
                    clc[19] = crot(clc[19], -1 * h)
                }
            }
            if (f == "dUUU") {
                if (c == 1) {
                    clc[1] = crot(clc[1], h);
                    clc[12] = crot(clc[12], -1 * h);
                    clc[13] = crot(clc[13], -1 * h);
                    clc[15] = crot(clc[15], -1 * h);
                    clc[16] = crot(clc[16], -1 * h)
                }
                if (c != 1) {
                    clc[2] = crot(clc[2], h);
                    clc[3] = crot(clc[3], h);
                    clc[4] = crot(clc[4], h);
                    clc[5] = crot(clc[5], h);
                    clc[6] = crot(clc[6], h);
                    clc[7] = crot(clc[7], h);
                    clc[8] = crot(clc[8], h);
                    clc[9] = crot(clc[9], h);
                    clc[11] = crot(clc[11], -1 * h);
                    clc[17] = crot(clc[17], -1 * h);
                    clc[19] = crot(clc[19], -1 * h)
                }
            }
            if (f == "dUUd") {
                if (c == 2 || c == 3) {
                    clc[2] = crot(clc[2], h);
                    clc[3] = crot(clc[3], h);
                    clc[4] = crot(clc[4], h);
                    clc[5] = crot(clc[5], h);
                    clc[6] = crot(clc[6], h);
                    clc[7] = crot(clc[7], h);
                    clc[8] = crot(clc[8], h);
                    clc[11] = crot(clc[11], -1 * h);
                    clc[19] = crot(clc[19], -1 * h)
                }
                if (c == 1 || c == 4) {
                    clc[1] = crot(clc[1], h);
                    clc[9] = crot(clc[9], h);
                    clc[12] = crot(clc[12], -1 * h);
                    clc[13] = crot(clc[13], -1 * h);
                    clc[14] = crot(clc[14], -1 * h);
                    clc[15] = crot(clc[15], -1 * h);
                    clc[16] = crot(clc[16], -1 * h);
                    clc[17] = crot(clc[17], -1 * h);
                    clc[18] = crot(clc[18], -1 * h)
                }
            }
            if (f == "dUdU") {
                if (c == 2 || c == 4) {
                    clc[2] = crot(clc[2], h);
                    clc[3] = crot(clc[3], h);
                    clc[5] = crot(clc[5], h);
                    clc[6] = crot(clc[6], h);
                    clc[8] = crot(clc[8], h);
                    clc[9] = crot(clc[9], h);
                    clc[11] = crot(clc[11], -1 * h);
                    clc[17] = crot(clc[17], -1 * h)
                }
                if (c == 1 || c == 3) {
                    clc[1] = crot(clc[1], h);
                    clc[7] = crot(clc[7], h);
                    clc[12] = crot(clc[12], -1 * h);
                    clc[13] = crot(clc[13], -1 * h);
                    clc[15] = crot(clc[15], -1 * h);
                    clc[16] = crot(clc[16], -1 * h);
                    clc[18] = crot(clc[18], -1 * h);
                    clc[19] = crot(clc[19], -1 * h)
                }
            }
            if (f == "dUdd") {
                if (c == 2) {
                    clc[2] = crot(clc[2], h);
                    clc[3] = crot(clc[3], h);
                    clc[5] = crot(clc[5], h);
                    clc[6] = crot(clc[6], h);
                    clc[11] = crot(clc[11], -1 * h)
                }
                if (c != 2) {
                    clc[1] = crot(clc[1], h);
                    clc[7] = crot(clc[7], h);
                    clc[9] = crot(clc[9], h);
                    clc[12] = crot(clc[12], -1 * h);
                    clc[13] = crot(clc[13], -1 * h);
                    clc[14] = crot(clc[14], -1 * h);
                    clc[15] = crot(clc[15], -1 * h);
                    clc[16] = crot(clc[16], -1 * h);
                    clc[17] = crot(clc[17], -1 * h);
                    clc[18] = crot(clc[18], -1 * h);
                    clc[19] = crot(clc[19], -1 * h)
                }
            }
            if (f == "ddUU") {
                if (c == 3 || c == 4) {
                    clc[4] = crot(clc[4], h);
                    clc[5] = crot(clc[5], h);
                    clc[6] = crot(clc[6], h);
                    clc[7] = crot(clc[7], h);
                    clc[8] = crot(clc[8], h);
                    clc[9] = crot(clc[9], h);
                    clc[17] = crot(clc[17], -1 * h);
                    clc[19] = crot(clc[19], -1 * h)
                }
                if (c == 1 || c == 2) {
                    clc[1] = crot(clc[1], h);
                    clc[3] = crot(clc[3], h);
                    clc[11] = crot(clc[11], -1 * h);
                    clc[12] = crot(clc[12], -1 * h);
                    clc[13] = crot(clc[13], -1 * h);
                    clc[14] = crot(clc[14], -1 * h);
                    clc[15] = crot(clc[15], -1 * h);
                    clc[16] = crot(clc[16], -1 * h)
                }
            }
            if (f == "ddUd") {
                if (c == 3) {
                    clc[4] = crot(clc[4], h);
                    clc[5] = crot(clc[5], h);
                    clc[7] = crot(clc[7], h);
                    clc[8] = crot(clc[8], h);
                    clc[19] = crot(clc[19], -1 * h)
                }
                if (c != 3) {
                    clc[1] = crot(clc[1], h);
                    clc[3] = crot(clc[3], h);
                    clc[9] = crot(clc[9], h);
                    clc[11] = crot(clc[11], -1 * h);
                    clc[12] = crot(clc[12], -1 * h);
                    clc[13] = crot(clc[13], -1 * h);
                    clc[14] = crot(clc[14], -1 * h);
                    clc[15] = crot(clc[15], -1 * h);
                    clc[16] = crot(clc[16], -1 * h);
                    clc[17] = crot(clc[17], -1 * h);
                    clc[18] = crot(clc[18], -1 * h)
                }
            }
            if (f == "dddU") {
                if (c == 4) {
                    clc[5] = crot(clc[4], h);
                    clc[6] = crot(clc[6], h);
                    clc[8] = crot(clc[8], h);
                    clc[9] = crot(clc[9], h);
                    clc[17] = crot(clc[17], -1 * h)
                }
                if (c != 4) {
                    clc[1] = crot(clc[1], h);
                    clc[3] = crot(clc[3], h);
                    clc[7] = crot(clc[7], h);
                    clc[11] = crot(clc[11], -1 * h);
                    clc[12] = crot(clc[12], -1 * h);
                    clc[13] = crot(clc[13], -1 * h);
                    clc[14] = crot(clc[14], -1 * h);
                    clc[15] = crot(clc[15], -1 * h);
                    clc[16] = crot(clc[16], -1 * h);
                    clc[19] = crot(clc[19], -1 * h);
                    clc[18] = crot(clc[18], -1 * h)
                }
            }
            if (f == "dddd") {
                clc[1] = crot(clc[1], h);
                clc[3] = crot(clc[3], h);
                clc[7] = crot(clc[7], h);
                clc[9] = crot(clc[9], h);
                clc[11] = crot(clc[11], -1 * h);
                clc[12] = crot(clc[12], -1 * h);
                clc[13] = crot(clc[13], -1 * h);
                clc[14] = crot(clc[14], -1 * h);
                clc[15] = crot(clc[15], -1 * h);
                clc[16] = crot(clc[16], -1 * h);
                clc[17] = crot(clc[17], -1 * h);
                clc[18] = crot(clc[18], -1 * h);
                clc[19] = crot(clc[19], -1 * h)
            }
            e++;
            o = o + '<div class="kicsiora"><div class = "oranegyed1mi' + cbutt1 + "nyil" + p + '"></div><div class = "oranegyed2mi' + cbutt2 + "nyil" + p + '"></div><div class = "oranegyed3mi' + cbutt3 + "nyil" + p + '"></div><div class = "oranegyed4mi' + cbutt4 + "nyil" + p + '"></div><div class="hanyadikclockrot">' + e + '.</div><div class= "holrotal' + c + '">' + h + "</div></div>";
            if (csep == 1 && (e - 1) % 5 == 0 && e - 1 < cleng && e > 2) {
                u = u + " - "
            }
            u = u + " (" + f + ", " + c + ", " + h + ")"
        }
        o = o + u + "</div>"
    }
    if (ctype == 13) {
        var d = Math.floor(Math.random() * 2);
        while (e < cleng) {
            s = "no";
            if ((e + 1) % 11 != 0) {
                t = Math.floor(Math.random() * 2);
                if (d == 1) {
                    if (t == 0) {
                        s = "R++"
                    }
                    if (t == 1) {
                        s = "R--"
                    }
                    d = 0
                } else {
                    if (t == 0) {
                        s = "D++"
                    }
                    if (t == 1) {
                        s = "D--"
                    }
                    d = 1
                }
            } else {
                t = Math.floor(Math.random() * 2);
                if (t == 0) {
                    s = "U'"
                }
                if (t == 1) {
                    s = "U"
                }
                var d = Math.floor(Math.random() * 2)
            }
            if (s != "no") {
                if (s == "R++") {
                    megarotr()
                }
                if (s == "R--") {
                    megarotr();
                    megarotr();
                    megarotr();
                    megarotr()
                }
                if (s == "D++") {
                    megarotd()
                }
                if (s == "D--") {
                    megarotd();
                    megarotd();
                    megarotd();
                    megarotd()
                }
                if (s == "U") {
                    megarotu()
                }
                if (s == "U'") {
                    megarotu();
                    megarotu();
                    megarotu();
                    megarotu()
                }
                if (csep == 1 && (e + 1) % 11 == 0) {
                    s = s + "<br />"
                }
                s = s + " ";
                e++;
                o = o + s
            }
        }
    }
    if (ctype == 14) {
        var v = " ";
        var m = 1;
        if (cleng > 6) {
            var g = Math.floor(Math.random() * 3);
            if (g == 0) {
                v = v + "u ";
                pyrakicsiu();
                e++
            }
            if (g == 1) {
                v = v + "u' ";
                pyrakicsiu();
                pyrakicsiu();
                e++
            }
            g = Math.floor(Math.random() * 3);
            if (g == 0) {
                v = v + "l ";
                pyrakicsil();
                e++
            }
            if (g == 1) {
                v = v + "l' ";
                pyrakicsil();
                pyrakicsil();
                e++
            }
            g = Math.floor(Math.random() * 3);
            if (g == 0) {
                v = v + "r ";
                pyrakicsir();
                e++
            }
            if (g == 1) {
                v = v + "r' ";
                pyrakicsir();
                pyrakicsir();
                e++
            }
            g = Math.floor(Math.random() * 3);
            if (g == 0) {
                v = v + "b ";
                pyrakicsib();
                e++
            }
            if (g == 1) {
                v = v + "b' ";
                pyrakicsib();
                pyrakicsib();
                e++
            }
        }
        m = 0;
        while (e < cleng) {
            s = "no";
            t = 1 + Math.floor(Math.random() * 8);
            if (t == 1 && r != 2 && r != 1) {
                s = "U"
            }
            if (t == 2 && r != 2 && r != 1) {
                s = "U'"
            }
            if (t == 3 && r != 3 && r != 4) {
                s = "L"
            }
            if (t == 4 && r != 3 && r != 4) {
                s = "L'"
            }
            if (t == 5 && r != 5 && r != 6) {
                s = "R"
            }
            if (t == 6 && r != 5 && r != 6) {
                s = "R'"
            }
            if (t == 7 && r != 7 && r != 8) {
                s = "B"
            }
            if (t == 8 && r != 7 && r != 8) {
                s = "B'"
            }
            if (s != "no") {
                i = r;
                r = t;
                if (s == "U") {
                    pyrau()
                }
                if (s == "U'") {
                    pyrau();
                    pyrau()
                }
                if (s == "L") {
                    pyral()
                }
                if (s == "L'") {
                    pyral();
                    pyral()
                }
                if (s == "R") {
                    pyrar()
                }
                if (s == "R'") {
                    pyrar();
                    pyrar()
                }
                if (s == "B") {
                    pyrab()
                }
                if (s == "B'") {
                    pyrab();
                    pyrab()
                }
                s = s + " ";
                if (csep == 1 && (1 + m) % 5 == 0 && m + 1 < cleng) {
                    s = s + "- "
                }
                e++;
                m++;
                o = o + s
            }
        }
        o = o + v
    }
    if (ctype == 15) {
        while (e < cleng) {
            s = "no";
            t = Math.floor(Math.random() * 26);
            if (cfru == 1) {
                t = Math.floor(Math.random() * 3);
                if (t == 0) {
                    t = 5
                }
                if (t == 1) {
                    t = 17
                }
                if (t == 2) {
                    t = 20
                }
            }
            o = o + String.fromCharCode(65 + t) + " ";
            if (csep == 1 && (e + 1) % 5 == 0 && e + 1 < cleng) {
                o = o + "- "
            }
            e++
        }
    }
    if (ctype == 16) {
        while (e < cleng) {
            s = "no";
            t = Math.floor(Math.random() * 10);
            o = o + t + " ";
            if (csep == 1 && (e + 1) % 5 == 0 && e + 1 < cleng) {
                o = o + "- "
            }
            e++
        }
    }
    aktalgoritm = o;
    elkur();
    kiir()
}
function clicktype() {
    if (ctypedrop == 0) {
        ctypedrop = 1;
        jQuery("#typedropdown").fadeIn(200)
    } else {
        ctypedrop = 0;
        jQuery("#typedropdown").fadeOut(200)
    }
    var e = '<a id="dropid1" href="/puzzle-scramble-generator?type=2x2x2' + generatedropdownurls() + '">2x2x2</a><a id="dropid2" href="/puzzle-scramble-generator?type=rubiks-cube' + generatedropdownurls() + '">3x3x3</a><a id="dropid3" href="/puzzle-scramble-generator?type=4x4x4' + generatedropdownurls() + '">4x4x4</a><a id="dropid4" href="/puzzle-scramble-generator?type=5x5x5' + generatedropdownurls() + '">5x5x5</a><a id="dropid5" href="/puzzle-scramble-generator?type=6x6x6' + generatedropdownurls() + '">6x6x6</a><a id="dropid6" href="/puzzle-scramble-generator?type=7x7x7' + generatedropdownurls() + '">7x7x7</a><a id="dropid7" href="/puzzle-scramble-generator?type=8x8x8' + generatedropdownurls() + '">8x8x8</a><a id="dropid8" href="/puzzle-scramble-generator?type=9x9x9' + generatedropdownurls() + '">9x9x9</a><a id="dropid9" href="/puzzle-scramble-generator?type=10x10x10' + generatedropdownurls() + '">10x10x10</a><a id="dropid10" href="/puzzle-scramble-generator?type=11x11x11' + generatedropdownurls() + '">11x11x11</a><a id="dropid11" href="/puzzle-scramble-generator?type=square-1' + generatedropdownurls() + '">Square-1</a><a id="dropid12" href="/puzzle-scramble-generator?type=rubiks-clock' + generatedropdownurls() + '">Clock</a><a id="dropid13" href="/puzzle-scramble-generator?type=megaminx' + generatedropdownurls() + '">Megaminx</a><a id="dropid14" href="/puzzle-scramble-generator?type=pyraminx' + generatedropdownurls() + '">Pyraminx</a><a id="dropid15" href="/puzzle-scramble-generator?type=letters' + generatedropdownurls() + '">Letters</a><a id="dropid16" href="/puzzle-scramble-generator?type=numbers' + generatedropdownurls() + '">Numbers</a>';
    document.getElementById("typedropdown").innerHTML = e
}
function dropdownclose() {
    ctypedrop = 0;
    jQuery("#typedropdown").fadeOut(200)
}
function clicksep() {
    if (csep == 1) {
        document.getElementById("check1").style.backgroundPosition = "11px 1111px";
        csep = 0
    } else {
        csep = 1;
        document.getElementById("check1").style.backgroundPosition = "-82px -383px"
    }
    dropdownclose()
}
function clickorient() {
    if (corient == 1) {
        document.getElementById("check2").style.backgroundPosition = "11px 1111px";
        corient = 0
    } else {
        corient = 1;
        document.getElementById("check2").style.backgroundPosition = "-82px -383px"
    }
    dropdownclose()
}
function clickfru() {
    if (cfru == 1) {
        document.getElementById("check3").style.backgroundPosition = "11px 1111px";
        cfru = 0
    } else {
        cfru = 1;
        document.getElementById("check3").style.backgroundPosition = "-82px -383px"
    }
    dropdownclose()
}
function miaktivminem(e, t, n, r) {
    if (e == 1) {
        jQuery("#separatecheck").show()
    } else {
        jQuery("#separatecheck").hide()
    }
    if (n == 1) {
        jQuery("#megacolorscheme").show();
        jQuery("#orientcheck").hide()
    } else {
        jQuery("#megacolorscheme").hide();
        jQuery("#orientcheck").show()
    }
    if (r == 1) {
        document.getElementById("fruonly").style.color = "#DDD"
    } else {
        document.getElementById("fruonly").style.color = "#888"
    }
    if (t == 1) {
        document.getElementById("orientcheck").style.color = "#DDD"
    } else {
        document.getElementById("orientcheck").style.color = "#888"
    }
}
function dropdwn(e) {
    if (e == 1) {
        document.getElementById("cubetype").innerHTML = "    2x2x2";
        miaktivminem(1, 1, 0, 1);
        document.getElementById("scramblerhelp").innerHTML = '<a target="_blank" href="http://ruwix.com/puzzle-scramble-generators/nxnxn-rubiks-cube-scrambler"></a>'
    }
    if (e == 2) {
        document.getElementById("cubetype").innerHTML = "    3x3x3";
        miaktivminem(1, 1, 0, 1);
        document.getElementById("scramblerhelp").innerHTML = '<a target="_blank" href="http://ruwix.com/puzzle-scramble-generators/rubiks-cube-scrambler"></a>'
    }
    if (e == 3) {
        document.getElementById("cubetype").innerHTML = "    4x4x4";
        miaktivminem(1, 1, 0, 1);
        document.getElementById("scramblerhelp").innerHTML = '<a target="_blank" href="http://ruwix.com/puzzle-scramble-generators/nxnxn-rubiks-cube-scrambler"></a>'
    }
    if (e == 4) {
        document.getElementById("cubetype").innerHTML = "    5x5x5";
        miaktivminem(1, 1, 0, 1);
        document.getElementById("scramblerhelp").innerHTML = '<a target="_blank" href="http://ruwix.com/puzzle-scramble-generators/nxnxn-rubiks-cube-scrambler"></a>'
    }
    if (e == 5) {
        document.getElementById("cubetype").innerHTML = "    6x6x6";
        miaktivminem(1, 1, 0, 1);
        document.getElementById("scramblerhelp").innerHTML = '<a target="_blank" href="http://ruwix.com/puzzle-scramble-generators/nxnxn-rubiks-cube-scrambler"></a>'
    }
    if (e == 6) {
        document.getElementById("cubetype").innerHTML = "    7x7x7";
        miaktivminem(1, 1, 0, 1);
        document.getElementById("scramblerhelp").innerHTML = '<a target="_blank" href="http://ruwix.com/puzzle-scramble-generators/nxnxn-rubiks-cube-scrambler"></a>'
    }
    if (e == 7) {
        document.getElementById("cubetype").innerHTML = "    8x8x8";
        miaktivminem(1, 1, 0, 1);
        document.getElementById("scramblerhelp").innerHTML = '<a target="_blank" href="http://ruwix.com/puzzle-scramble-generators/nxnxn-rubiks-cube-scrambler"></a>'
    }
    if (e == 8) {
        document.getElementById("cubetype").innerHTML = "  9x9x9";
        miaktivminem(1, 1, 0, 1);
        document.getElementById("scramblerhelp").innerHTML = '<a target="_blank" href="http://ruwix.com/puzzle-scramble-generators/nxnxn-rubiks-cube-scrambler"></a>'
    }
    if (e == 9) {
        document.getElementById("cubetype").innerHTML = "  10x10x10";
        miaktivminem(1, 1, 0, 1);
        document.getElementById("scramblerhelp").innerHTML = '<a target="_blank" href="http://ruwix.com/puzzle-scramble-generators/nxnxn-rubiks-cube-scrambler"></a>'
    }
    if (e == 10) {
        document.getElementById("cubetype").innerHTML = "  11x11x11";
        miaktivminem(1, 1, 0, 1);
        document.getElementById("scramblerhelp").innerHTML = '<a target="_blank" href="http://ruwix.com/puzzle-scramble-generators/nxnxn-rubiks-cube-scrambler"></a>'
    }
    if (e == 11) {
        document.getElementById("cubetype").innerHTML = "  Square-1";
        miaktivminem(1, 0, 2, 0);
        document.getElementById("scramblerhelp").innerHTML = '<a target="_blank" href="http://ruwix.com/puzzle-scramble-generators/square-1-scrambler"></a>'
    }
    if (e == 12) {
        document.getElementById("cubetype").innerHTML = "Rubik's Clock";
        miaktivminem(1, 0, 0, 0);
        document.getElementById("scramblerhelp").innerHTML = '<a target="_blank" href="http://ruwix.com/puzzle-scramble-generators/rubiks-clock-scrambler"></a>'
    }
    if (e == 13) {
        document.getElementById("cubetype").innerHTML = "  Megaminx";
        miaktivminem(1, 1, 1, 0);
        document.getElementById("scramblerhelp").innerHTML = '<a target="_blank" href="http://ruwix.com/puzzle-scramble-generators/megaminx-scrambler"></a>'
    }
    if (e == 14) {
        document.getElementById("cubetype").innerHTML = "  Pyraminx";
        miaktivminem(1, 1, 0, 0);
        document.getElementById("scramblerhelp").innerHTML = '<a target="_blank" href="http://ruwix.com/puzzle-scramble-generators/pyraminx-scrambler"></a>'
    }
    if (e == 15) {
        document.getElementById("cubetype").innerHTML = "  Letters";
        miaktivminem(1, 0, 0, 1);
        document.getElementById("scramblerhelp").innerHTML = '<a target="_blank" href="http://ruwix.com/puzzle-scramble-generators"></a>'
    }
    if (e == 16) {
        document.getElementById("cubetype").innerHTML = "  Numbers";
        miaktivminem(1, 0, 0, 0);
        document.getElementById("scramblerhelp").innerHTML = '<a target="_blank" href="http://ruwix.com/puzzle-scramble-generators"></a>'
    }
    ctype = e;
    dropdownclose()
}
function bor() {
    s[1] = a[1];
    s[2] = a[4];
    s[3] = a[7];
    a[1] = a[45];
    a[4] = a[42];
    a[7] = a[39];
    a[45] = a[46];
    a[42] = a[49];
    a[39] = a[52];
    a[46] = a[19];
    a[49] = a[22];
    a[52] = a[25];
    a[19] = s[1];
    a[22] = s[2];
    a[25] = s[3];
    s[1] = a[2];
    s[2] = a[5];
    s[3] = a[8];
    a[2] = a[44];
    a[5] = a[41];
    a[8] = a[38];
    a[44] = a[47];
    a[41] = a[50];
    a[38] = a[53];
    a[47] = a[20];
    a[50] = a[23];
    a[53] = a[26];
    a[20] = s[1];
    a[23] = s[2];
    a[26] = s[3];
    s[1] = a[3];
    s[2] = a[6];
    s[3] = a[9];
    a[3] = a[43];
    a[6] = a[40];
    a[9] = a[37];
    a[43] = a[48];
    a[40] = a[51];
    a[37] = a[54];
    a[48] = a[21];
    a[51] = a[24];
    a[54] = a[27];
    a[21] = s[1];
    a[24] = s[2];
    a[27] = s[3];
    s[1] = a[10];
    s[2] = a[11];
    a[10] = a[16];
    a[11] = a[13];
    a[16] = a[18];
    a[13] = a[17];
    a[18] = a[12];
    a[17] = a[15];
    a[12] = s[1];
    a[15] = s[2];
    s[1] = a[28];
    s[2] = a[29];
    a[28] = a[30];
    a[29] = a[33];
    a[30] = a[36];
    a[33] = a[35];
    a[36] = a[34];
    a[35] = a[31];
    a[34] = s[1];
    a[31] = s[2]
}
function rot() {
    s[1] = a[25];
    s[2] = a[26];
    s[3] = a[27];
    a[25] = a[16];
    a[26] = a[17];
    a[27] = a[18];
    a[16] = a[43];
    a[17] = a[44];
    a[18] = a[45];
    a[43] = a[34];
    a[44] = a[35];
    a[45] = a[36];
    a[34] = s[1];
    a[35] = s[2];
    a[36] = s[3];
    s[1] = a[46];
    s[2] = a[47];
    a[46] = a[52];
    a[47] = a[49];
    a[52] = a[54];
    a[49] = a[53];
    a[54] = a[48];
    a[53] = a[51];
    a[48] = s[1];
    a[51] = s[2]
}
function roti() {
    s[1] = a[25];
    s[2] = a[26];
    s[3] = a[27];
    a[25] = a[34];
    a[26] = a[35];
    a[27] = a[36];
    a[34] = a[43];
    a[35] = a[44];
    a[36] = a[45];
    a[43] = a[16];
    a[44] = a[17];
    a[45] = a[18];
    a[16] = s[1];
    a[17] = s[2];
    a[18] = s[3];
    s[1] = a[46];
    s[2] = a[47];
    a[46] = a[48];
    a[47] = a[51];
    a[48] = a[54];
    a[51] = a[53];
    a[54] = a[52];
    a[53] = a[49];
    a[52] = s[1];
    a[49] = s[2]
}
function fd() {
    s[1] = a[19];
    s[2] = a[20];
    s[3] = a[21];
    a[19] = a[28];
    a[20] = a[29];
    a[21] = a[30];
    a[28] = a[37];
    a[29] = a[38];
    a[30] = a[39];
    a[37] = a[10];
    a[38] = a[11];
    a[39] = a[12];
    a[10] = s[1];
    a[11] = s[2];
    a[12] = s[3];
    s[1] = a[22];
    s[2] = a[23];
    s[3] = a[24];
    a[22] = a[31];
    a[23] = a[32];
    a[24] = a[33];
    a[31] = a[40];
    a[32] = a[41];
    a[33] = a[42];
    a[40] = a[13];
    a[41] = a[14];
    a[42] = a[15];
    a[13] = s[1];
    a[14] = s[2];
    a[15] = s[3];
    s[1] = a[25];
    s[2] = a[26];
    s[3] = a[27];
    a[25] = a[34];
    a[26] = a[35];
    a[27] = a[36];
    a[34] = a[43];
    a[35] = a[44];
    a[36] = a[45];
    a[43] = a[16];
    a[44] = a[17];
    a[45] = a[18];
    a[16] = s[1];
    a[17] = s[2];
    a[18] = s[3];
    s[1] = a[1];
    s[2] = a[2];
    a[1] = a[7];
    a[2] = a[4];
    a[7] = a[9];
    a[4] = a[8];
    a[9] = a[3];
    a[8] = a[6];
    a[3] = s[1];
    a[6] = s[2];
    s[1] = a[46];
    s[2] = a[47];
    a[46] = a[48];
    a[47] = a[51];
    a[48] = a[54];
    a[51] = a[53];
    a[54] = a[52];
    a[53] = a[49];
    a[52] = s[1];
    a[49] = s[2]
}
function uu() {
    bor();
    bor();
    rot();
    bor();
    bor()
}
function ui() {
    bor();
    bor();
    roti();
    bor();
    bor()
}
function ff() {
    bor();
    rot();
    bor();
    bor();
    bor()
}
function fi() {
    bor();
    roti();
    bor();
    bor();
    bor()
}
function rr() {
    fd();
    bor();
    rot();
    bor();
    bor();
    bor();
    fd();
    fd();
    fd()
}
function ri() {
    fd();
    bor();
    roti();
    bor();
    bor();
    bor();
    fd();
    fd();
    fd()
}
function ll() {
    fd();
    fd();
    fd();
    bor();
    rot();
    bor();
    bor();
    bor();
    fd()
}
function li() {
    fd();
    fd();
    fd();
    bor();
    roti();
    bor();
    bor();
    bor();
    fd()
}
function dd() {
    rot()
}
function di() {
    roti()
}
function bb() {
    bor();
    bor();
    bor();
    rot();
    bor()
}
function bi() {
    bor();
    bor();
    bor();
    roti();
    bor()
}
function forduly(e) {
    var t = new Array;
    for (var n = 0; n < e; n++) {
        for (var r = 0; r < e; r++) {
            t[n * e + r] = uly[(e - 1 - r) * e + n]
        }
    }
    for (i = 0; i < e * e; i++) {
        uly[i] = t[i]
    }
}
function fordlly(e) {
    var t = new Array;
    for (var n = 0; n < e; n++) {
        for (var r = 0; r < e; r++) {
            t[n * e + r] = lly[(e - 1 - r) * e + n]
        }
    }
    for (i = 0; i < e * e; i++) {
        lly[i] = t[i]
    }
}
function fordfly(e) {
    var t = new Array;
    for (var n = 0; n < e; n++) {
        for (var r = 0; r < e; r++) {
            t[n * e + r] = fly[(e - 1 - r) * e + n]
        }
    }
    for (i = 0; i < e * e; i++) {
        fly[i] = t[i]
    }
}
function fordrly(e) {
    var t = new Array;
    for (var n = 0; n < e; n++) {
        for (var r = 0; r < e; r++) {
            t[n * e + r] = rly[(e - 1 - r) * e + n]
        }
    }
    for (i = 0; i < e * e; i++) {
        rly[i] = t[i]
    }
}
function fordbly(e) {
    var t = new Array;
    for (var n = 0; n < e; n++) {
        for (var r = 0; r < e; r++) {
            t[n * e + r] = bly[(e - 1 - r) * e + n]
        }
    }
    for (i = 0; i < e * e; i++) {
        bly[i] = t[i]
    }
}
function forddly(e) {
    var t = new Array;
    for (var n = 0; n < e; n++) {
        for (var r = 0; r < e; r++) {
            t[n * e + r] = dly[(e - 1 - r) * e + n]
        }
    }
    for (i = 0; i < e * e; i++) {
        dly[i] = t[i]
    }
}
function sliceu(e, t) {
    var n = 1;
    for (i = 0; i < t; i++) {
        n = fly[e * t + i];
        fly[e * t + i] = rly[e * t + i];
        rly[e * t + i] = bly[e * t + i];
        bly[e * t + i] = lly[e * t + i];
        lly[e * t + i] = n
    }
}
function slicer(e, t) {
    var n = 1;
    for (i = 0; i < t; i++) {
        n = uly[i * t + (t - e - 1)];
        uly[i * t + (t - e - 1)] = fly[i * t + (t - e - 1)];
        fly[i * t + (t - e - 1)] = dly[i * t + (t - e - 1)];
        dly[i * t + (t - e - 1)] = bly[(t - i - 1) * t + e];
        bly[(t - i - 1) * t + e] = n
    }
}
function slicef(e, t) {
    var n = 1;
    for (i = 0; i < t; i++) {
        n = uly[(t - e - 1) * t + i];
        uly[(t - e - 1) * t + i] = lly[(t - i - 1) * t + t - e - 1];
        lly[(t - i - 1) * t + t - e - 1] = dly[e * t + (t - i - 1)];
        dly[e * t + (t - i - 1)] = rly[i * t + e];
        rly[i * t + e] = n
    }
}
function ruv(e) {
    return "fld" + a[e]
}
function kiir() {
    var e = "cube";
    if (ctype == 2) {
        e = '<div class="haromszorharmas"><div class="uplayer"><div class="shiftel1"></div><div class="' + ruv(1) + '"></div><div class="' + ruv(2) + '"></div><div class="' + ruv(3) + '"></div><div class="shiftel2"></div><div class="' + ruv(4) + '"></div><div class="' + ruv(5) + '"></div><div class="' + ruv(6) + '"></div><div class="helykitolto"></div><div class="shiftel3"></div><div class="' + ruv(7) + '"></div><div class="' + ruv(8) + '"></div><div class="' + ruv(9) + '"></div></div><div class="leftlayer"><div class="' + ruv(10) + '"></div><div class="' + ruv(11) + '"></div><div class="' + ruv(12) + '"></div><div class="' + ruv(13) + '"></div><div class="' + ruv(14) + '"></div><div class="' + ruv(15) + '"></div><div class="' + ruv(16) + '"></div><div class="' + ruv(17) + '"></div><div class="' + ruv(18) + '"></div></div><div class="frontlayer"><div class="' + ruv(19) + '"></div><div class="' + ruv(20) + '"></div><div class="' + ruv(21) + '"></div><div class="' + ruv(22) + '"></div><div class="' + ruv(23) + '"></div><div class="' + ruv(24) + '"></div><div class="' + ruv(25) + '"></div><div class="' + ruv(26) + '"></div><div class="' + ruv(27) + '"></div></div><div class="rightlayer"><div class="' + ruv(28) + '"></div><div class="roszl2 ' + ruv(29) + '"></div><div class="roszl3 ' + ruv(30) + '"></div><div class="' + ruv(31) + '"></div><div class="roszl2 ' + ruv(32) + '"></div><div class="roszl3 ' + ruv(33) + '"></div><div class="' + ruv(34) + '"></div><div class="roszl2 ' + ruv(35) + '"></div><div class="roszl3 ' + ruv(36) + '"></div></div><div class="backlayer"><div class="' + ruv(37) + '"></div><div class="' + ruv(38) + '"></div><div class="' + ruv(39) + '"></div><div class="' + ruv(40) + '"></div><div class="' + ruv(41) + '"></div><div class="' + ruv(42) + '"></div><div class="' + ruv(43) + '"></div><div class="' + ruv(44) + '"></div><div class="' + ruv(45) + '"></div></div><div class="downlayer"><div class="' + ruv(46) + '"></div><div class="' + ruv(47) + '"></div><div class="' + ruv(48) + '"></div><div class="' + ruv(49) + '"></div><div class="' + ruv(50) + '"></div><div class="' + ruv(51) + '"></div><div class="' + ruv(52) + '"></div><div class="' + ruv(53) + '"></div><div class="' + ruv(54) + '"></div></div></div>'
    }
    if (ctype == 1) {
        e = '<div class="uplayer2">';
        for (var t = 0; t < 4; t++) {
            e = e + '<div class="szin2s' + uly[t] + '"></div>'
        }
        e = e + '</div><div class="leftlayer2">';
        for (var t = 0; t < 4; t++) {
            e = e + '<div class="szin2s' + lly[t] + '"></div>'
        }
        e = e + '</div><div class="frontlayer2">';
        for (var t = 0; t < 4; t++) {
            e = e + '<div class="szin2s' + fly[t] + '"></div>'
        }
        e = e + '</div><div class="rightlayer2">';
        for (var t = 0; t < 4; t++) {
            e = e + '<div class="szin2s' + rly[t] + '"></div>'
        }
        e = e + '</div><div class="backlayer2">';
        for (var t = 0; t < 4; t++) {
            e = e + '<div class="szin2s' + bly[t] + '"></div>'
        }
        e = e + '</div><div class="downlayer2">';
        for (var t = 0; t < 4; t++) {
            e = e + '<div class="szin2s' + dly[t] + '"></div>'
        }
        e = e + "</div>"
    }
    if (ctype == 3) {
        e = '<div class="uplayer4">';
        for (var t = 0; t < 16; t++) {
            e = e + '<div class="szin4s' + uly[t] + '"></div>'
        }
        e = e + '</div><div class="leftlayer4">';
        for (var t = 0; t < 16; t++) {
            e = e + '<div class="szin4s' + lly[t] + '"></div>'
        }
        e = e + '</div><div class="frontlayer4">';
        for (var t = 0; t < 16; t++) {
            e = e + '<div class="szin4s' + fly[t] + '"></div>'
        }
        e = e + '</div><div class="rightlayer4">';
        for (var t = 0; t < 16; t++) {
            e = e + '<div class="szin4s' + rly[t] + '"></div>'
        }
        e = e + '</div><div class="backlayer4">';
        for (var t = 0; t < 16; t++) {
            e = e + '<div class="szin4s' + bly[t] + '"></div>'
        }
        e = e + '</div><div class="downlayer4">';
        for (var t = 0; t < 16; t++) {
            e = e + '<div class="szin4s' + dly[t] + '"></div>'
        }
        e = e + "</div>"
    }
    if (ctype == 4) {
        e = '<div class="uplayer5">';
        for (var t = 0; t < 25; t++) {
            e = e + '<div class="szin4s' + uly[t] + '"></div>'
        }
        e = e + '</div><div class="leftlayer5">';
        for (var t = 0; t < 25; t++) {
            e = e + '<div class="szin4s' + lly[t] + '"></div>'
        }
        e = e + '</div><div class="frontlayer5">';
        for (var t = 0; t < 25; t++) {
            e = e + '<div class="szin4s' + fly[t] + '"></div>'
        }
        e = e + '</div><div class="rightlayer5">';
        for (var t = 0; t < 25; t++) {
            e = e + '<div class="szin4s' + rly[t] + '"></div>'
        }
        e = e + '</div><div class="backlayer5">';
        for (var t = 0; t < 25; t++) {
            e = e + '<div class="szin4s' + bly[t] + '"></div>'
        }
        e = e + '</div><div class="downlayer5">';
        for (var t = 0; t < 25; t++) {
            e = e + '<div class="szin4s' + dly[t] + '"></div>'
        }
        e = e + "</div>"
    }
    if (ctype == 5) {
        e = '<div class="uplayer6">';
        for (var t = 0; t < 36; t++) {
            e = e + '<div class="szin6s' + uly[t] + '"></div>'
        }
        e = e + '</div><div class="leftlayer6">';
        for (var t = 0; t < 36; t++) {
            e = e + '<div class="szin6s' + lly[t] + '"></div>'
        }
        e = e + '</div><div class="frontlayer6">';
        for (var t = 0; t < 36; t++) {
            e = e + '<div class="szin6s' + fly[t] + '"></div>'
        }
        e = e + '</div><div class="rightlayer6">';
        for (var t = 0; t < 36; t++) {
            e = e + '<div class="szin6s' + rly[t] + '"></div>'
        }
        e = e + '</div><div class="backlayer6">';
        for (var t = 0; t < 36; t++) {
            e = e + '<div class="szin6s' + bly[t] + '"></div>'
        }
        e = e + '</div><div class="downlayer6">';
        for (var t = 0; t < 36; t++) {
            e = e + '<div class="szin6s' + dly[t] + '"></div>'
        }
        e = e + "</div>"
    }
    if (ctype == 6) {
        e = '<div class="uplayer7">';
        for (var t = 0; t < 49; t++) {
            e = e + '<div class="szin6s' + uly[t] + '"></div>'
        }
        e = e + '</div><div class="leftlayer7">';
        for (var t = 0; t < 49; t++) {
            e = e + '<div class="szin6s' + lly[t] + '"></div>'
        }
        e = e + '</div><div class="frontlayer7">';
        for (var t = 0; t < 49; t++) {
            e = e + '<div class="szin6s' + fly[t] + '"></div>'
        }
        e = e + '</div><div class="rightlayer7">';
        for (var t = 0; t < 49; t++) {
            e = e + '<div class="szin6s' + rly[t] + '"></div>'
        }
        e = e + '</div><div class="backlayer7">';
        for (var t = 0; t < 49; t++) {
            e = e + '<div class="szin6s' + bly[t] + '"></div>'
        }
        e = e + '</div><div class="downlayer7">';
        for (var t = 0; t < 49; t++) {
            e = e + '<div class="szin6s' + dly[t] + '"></div>'
        }
        e = e + "</div>"
    }
    if (ctype == 7) {
        e = '<div class="uplayer8">';
        for (var t = 0; t < 64; t++) {
            e = e + '<div class="szin8s' + uly[t] + '"></div>'
        }
        e = e + '</div><div class="leftlayer8">';
        for (var t = 0; t < 64; t++) {
            e = e + '<div class="szin8s' + lly[t] + '"></div>'
        }
        e = e + '</div><div class="frontlayer8">';
        for (var t = 0; t < 64; t++) {
            e = e + '<div class="szin8s' + fly[t] + '"></div>'
        }
        e = e + '</div><div class="rightlayer8">';
        for (var t = 0; t < 64; t++) {
            e = e + '<div class="szin8s' + rly[t] + '"></div>'
        }
        e = e + '</div><div class="backlayer8">';
        for (var t = 0; t < 64; t++) {
            e = e + '<div class="szin8s' + bly[t] + '"></div>'
        }
        e = e + '</div><div class="downlayer8">';
        for (var t = 0; t < 64; t++) {
            e = e + '<div class="szin8s' + dly[t] + '"></div>'
        }
        e = e + "</div>"
    }
    if (ctype == 8) {
        e = '<div class="uplayer9">';
        for (var t = 0; t < 81; t++) {
            e = e + '<div class="szin8s' + uly[t] + '"></div>'
        }
        e = e + '</div><div class="leftlayer9">';
        for (var t = 0; t < 81; t++) {
            e = e + '<div class="szin8s' + lly[t] + '"></div>'
        }
        e = e + '</div><div class="frontlayer9">';
        for (var t = 0; t < 81; t++) {
            e = e + '<div class="szin8s' + fly[t] + '"></div>'
        }
        e = e + '</div><div class="rightlayer9">';
        for (var t = 0; t < 81; t++) {
            e = e + '<div class="szin8s' + rly[t] + '"></div>'
        }
        e = e + '</div><div class="backlayer9">';
        for (var t = 0; t < 81; t++) {
            e = e + '<div class="szin8s' + bly[t] + '"></div>'
        }
        e = e + '</div><div class="downlayer9">';
        for (var t = 0; t < 81; t++) {
            e = e + '<div class="szin8s' + dly[t] + '"></div>'
        }
        e = e + "</div>"
    }
    if (ctype == 9) {
        e = '<div class="uplayer10">';
        for (var t = 0; t < 100; t++) {
            e = e + '<div class="szin11s' + uly[t] + '"></div>'
        }
        e = e + '</div><div class="leftlayer10">';
        for (var t = 0; t < 100; t++) {
            e = e + '<div class="szin11s' + lly[t] + '"></div>'
        }
        e = e + '</div><div class="frontlayer10">';
        for (var t = 0; t < 100; t++) {
            e = e + '<div class="szin11s' + fly[t] + '"></div>'
        }
        e = e + '</div><div class="rightlayer10">';
        for (var t = 0; t < 100; t++) {
            e = e + '<div class="szin11s' + rly[t] + '"></div>'
        }
        e = e + '</div><div class="backlayer10">';
        for (var t = 0; t < 100; t++) {
            e = e + '<div class="szin11s' + bly[t] + '"></div>'
        }
        e = e + '</div><div class="downlayer10">';
        for (var t = 0; t < 100; t++) {
            e = e + '<div class="szin11s' + dly[t] + '"></div>'
        }
        e = e + "</div>"
    }
    if (ctype == 10) {
        e = '<div class="uplayer11">';
        for (var t = 0; t < 121; t++) {
            e = e + '<div class="szin11s' + uly[t] + '"></div>'
        }
        e = e + '</div><div class="leftlayer11">';
        for (var t = 0; t < 121; t++) {
            e = e + '<div class="szin11s' + lly[t] + '"></div>'
        }
        e = e + '</div><div class="frontlayer11">';
        for (var t = 0; t < 121; t++) {
            e = e + '<div class="szin11s' + fly[t] + '"></div>'
        }
        e = e + '</div><div class="rightlayer11">';
        for (var t = 0; t < 121; t++) {
            e = e + '<div class="szin11s' + rly[t] + '"></div>'
        }
        e = e + '</div><div class="backlayer11">';
        for (var t = 0; t < 121; t++) {
            e = e + '<div class="szin11s' + bly[t] + '"></div>'
        }
        e = e + '</div><div class="downlayer11">';
        for (var t = 0; t < 121; t++) {
            e = e + '<div class="szin11s' + dly[t] + '"></div>'
        }
        e = e + "</div>"
    }
    if (ctype == 11) {
        if (sq[25] == 0) {
            e = '<div class="sqnormal"></div>'
        } else {
            e = '<div class="sqtwisted"></div>'
        }
        e = e + '<div class="sqtoplayer">';
        for (t = 1; t < 13; t++) {
            e = e + '<div class="sqpos' + t + " sq" + t + "x" + sq[t] + '"></div>'
        }
        e = e + "</div>";
        e = e + '<div class="sqbottom">';
        for (t = 1; t < 13; t++) {
            e = e + '<div class="sqpos' + t + " sq" + t + "x" + sq[t + 12] + '"></div>'
        }
        e = e + "</div>"
    }
    if (ctype == 12) {
        e = '<div class="rubiksclockcontainer"><div class="clockfront">';
        for (t = 1; t < 10; t++) {
            e = e + '<div class="hourhand' + clc[t] + '"></div>'
        }
        e = e + '<div class="clkbutt1 cbutt' + cbutt1 + '"></div>';
        e = e + '<div class="clkbutt2 cbutt' + cbutt2 + '"></div>';
        e = e + '<div class="clkbutt3 cbutt' + cbutt3 + '"></div>';
        e = e + '<div class="clkbutt4 cbutt' + cbutt4 + '"></div>';
        e = e + '</div><div class="clockback">';
        for (t = 1; t < 10; t++) {
            e = e + '<div class="hourhand' + clc[t + 10] + '"></div>'
        }
        if (cbutt2 == 1) {
            e = e + '<div class="clkbutt1 cbutt0"></div>'
        } else {
            e = e + '<div class="clkbutt1 cbutt1"></div>'
        }
        if (cbutt1 == 1) {
            e = e + '<div class="clkbutt2 cbutt0"></div>'
        } else {
            e = e + '<div class="clkbutt2 cbutt1"></div>'
        }
        if (cbutt4 == 1) {
            e = e + '<div class="clkbutt3 cbutt0"></div>'
        } else {
            e = e + '<div class="clkbutt3 cbutt1"></div>'
        }
        if (cbutt3 == 1) {
            e = e + '<div class="clkbutt4 cbutt0"></div>'
        } else {
            e = e + '<div class="clkbutt4 cbutt1"></div>'
        }
        e = e + "</div></div>"
    }
    if (ctype == 13) {
        e = '<div class="megaminxcontainer"><div class="mxfelso"><div class="mxface1">';
        e = e + '<div class="mega' + mx2[1] + '"></div>';
        e = e + '<div class="megi' + mx2[7] + '"></div>';
        e = e + '<div class="megj' + mx2[4] + '"></div>';
        e = e + '<div class="megp' + mx2[5] + '"></div>';
        e = e + '<div class="megb' + mx2[2] + '"></div>';
        e = e + '<div class="megc' + mx2[3] + '"></div>';
        e = e + '<div class="megh' + mx2[8] + '"></div>';
        e = e + '<div class="megd' + mx2[6] + '"></div>';
        e = e + '<div class="megg' + mx2[9] + '"></div>';
        e = e + '<div class="megf' + mx2[10] + '"></div>';
        e = e + '<div class="mege' + mx2[11] + '"></div></div>';
        e = e + '<div class="mxface2">';
        e = e + '<div class="meua' + mx11[9] + '"></div>';
        e = e + '<div class="meub' + mx11[10] + '"></div>';
        e = e + '<div class="meuc' + mx11[11] + '"></div>';
        e = e + '<div class="meud' + mx11[8] + '"></div>';
        e = e + '<div class="meue' + mx11[5] + '"></div>';
        e = e + '<div class="meuf' + mx11[6] + '"></div>';
        e = e + '<div class="meug' + mx11[7] + '"></div>';
        e = e + '<div class="meuh' + mx11[4] + '"></div>';
        e = e + '<div class="meui' + mx11[1] + '"></div>';
        e = e + '<div class="meuj' + mx11[2] + '"></div>';
        e = e + '<div class="meuk' + mx11[3] + '"></div></div>';
        e = e + '<div class="mxface3">';
        e = e + '<div class="meua' + mx10[9] + '"></div>';
        e = e + '<div class="meub' + mx10[10] + '"></div>';
        e = e + '<div class="meuc' + mx10[11] + '"></div>';
        e = e + '<div class="meud' + mx10[8] + '"></div>';
        e = e + '<div class="meue' + mx10[5] + '"></div>';
        e = e + '<div class="meuf' + mx10[6] + '"></div>';
        e = e + '<div class="meug' + mx10[7] + '"></div>';
        e = e + '<div class="meuh' + mx10[4] + '"></div>';
        e = e + '<div class="meui' + mx10[1] + '"></div>';
        e = e + '<div class="meuj' + mx10[2] + '"></div>';
        e = e + '<div class="meuk' + mx10[3] + '"></div></div>';
        e = e + '</div><div class="mxkozep"><div class="mxface4">';
        e = e + '<div class="mega' + mx3[1] + '"></div>';
        e = e + '<div class="megi' + mx3[7] + '"></div>';
        e = e + '<div class="megj' + mx3[4] + '"></div>';
        e = e + '<div class="megp' + mx3[5] + '"></div>';
        e = e + '<div class="megb' + mx3[2] + '"></div>';
        e = e + '<div class="megc' + mx3[3] + '"></div>';
        e = e + '<div class="megh' + mx3[8] + '"></div>';
        e = e + '<div class="megd' + mx3[6] + '"></div>';
        e = e + '<div class="megg' + mx3[9] + '"></div>';
        e = e + '<div class="megf' + mx3[10] + '"></div>';
        e = e + '<div class="mege' + mx3[11] + '"></div></div>';
        e = e + '<div class="mxface5">';
        e = e + '<div class="meua' + mx1[9] + '"></div>';
        e = e + '<div class="meub' + mx1[10] + '"></div>';
        e = e + '<div class="meuc' + mx1[11] + '"></div>';
        e = e + '<div class="meud' + mx1[8] + '"></div>';
        e = e + '<div class="meue' + mx1[5] + '"></div>';
        e = e + '<div class="meuf' + mx1[6] + '"></div>';
        e = e + '<div class="meug' + mx1[7] + '"></div>';
        e = e + '<div class="meuh' + mx1[4] + '"></div>';
        e = e + '<div class="meui' + mx1[1] + '"></div>';
        e = e + '<div class="meuj' + mx1[2] + '"></div>';
        e = e + '<div class="meuk' + mx1[3] + '"></div></div>';
        e = e + '<div class="mxface6">';
        e = e + '<div class="mega' + mx6[1] + '"></div>';
        e = e + '<div class="megi' + mx6[7] + '"></div>';
        e = e + '<div class="megj' + mx6[4] + '"></div>';
        e = e + '<div class="megp' + mx6[5] + '"></div>';
        e = e + '<div class="megb' + mx6[2] + '"></div>';
        e = e + '<div class="megc' + mx6[3] + '"></div>';
        e = e + '<div class="megh' + mx6[8] + '"></div>';
        e = e + '<div class="megd' + mx6[6] + '"></div>';
        e = e + '<div class="megg' + mx6[9] + '"></div>';
        e = e + '<div class="megf' + mx6[10] + '"></div>';
        e = e + '<div class="mege' + mx6[11] + '"></div></div>';
        e = e + '<div class="mxface7">';
        e = e + '<div class="meua' + mx12[9] + '"></div>';
        e = e + '<div class="meub' + mx12[10] + '"></div>';
        e = e + '<div class="meuc' + mx12[11] + '"></div>';
        e = e + '<div class="meud' + mx12[8] + '"></div>';
        e = e + '<div class="meue' + mx12[5] + '"></div>';
        e = e + '<div class="meuf' + mx12[6] + '"></div>';
        e = e + '<div class="meug' + mx12[7] + '"></div>';
        e = e + '<div class="meuh' + mx12[4] + '"></div>';
        e = e + '<div class="meui' + mx12[1] + '"></div>';
        e = e + '<div class="meuj' + mx12[2] + '"></div>';
        e = e + '<div class="meuk' + mx12[3] + '"></div></div>';
        e = e + '<div class="mxface8">';
        e = e + '<div class="mega' + mx7[1] + '"></div>';
        e = e + '<div class="megi' + mx7[7] + '"></div>';
        e = e + '<div class="megj' + mx7[4] + '"></div>';
        e = e + '<div class="megp' + mx7[5] + '"></div>';
        e = e + '<div class="megb' + mx7[2] + '"></div>';
        e = e + '<div class="megc' + mx7[3] + '"></div>';
        e = e + '<div class="megh' + mx7[8] + '"></div>';
        e = e + '<div class="megd' + mx7[6] + '"></div>';
        e = e + '<div class="megg' + mx7[9] + '"></div>';
        e = e + '<div class="megf' + mx7[10] + '"></div>';
        e = e + '<div class="mege' + mx7[11] + '"></div></div>';
        e = e + '<div class="mxface9">';
        e = e + '<div class="meua' + mx9[9] + '"></div>';
        e = e + '<div class="meub' + mx9[10] + '"></div>';
        e = e + '<div class="meuc' + mx9[11] + '"></div>';
        e = e + '<div class="meud' + mx9[8] + '"></div>';
        e = e + '<div class="meue' + mx9[5] + '"></div>';
        e = e + '<div class="meuf' + mx9[6] + '"></div>';
        e = e + '<div class="meug' + mx9[7] + '"></div>';
        e = e + '<div class="meuh' + mx9[4] + '"></div>';
        e = e + '<div class="meui' + mx9[1] + '"></div>';
        e = e + '<div class="meuj' + mx9[2] + '"></div>';
        e = e + '<div class="meuk' + mx9[3] + '"></div></div>';
        e = e + '</div><div class="mxalso"><div class="mxface10">';
        e = e + '<div class="mega' + mx4[1] + '"></div>';
        e = e + '<div class="megi' + mx4[7] + '"></div>';
        e = e + '<div class="megj' + mx4[4] + '"></div>';
        e = e + '<div class="megp' + mx4[5] + '"></div>';
        e = e + '<div class="megb' + mx4[2] + '"></div>';
        e = e + '<div class="megc' + mx4[3] + '"></div>';
        e = e + '<div class="megh' + mx4[8] + '"></div>';
        e = e + '<div class="megd' + mx4[6] + '"></div>';
        e = e + '<div class="megg' + mx4[9] + '"></div>';
        e = e + '<div class="megf' + mx4[10] + '"></div>';
        e = e + '<div class="mege' + mx4[11] + '"></div></div>';
        e = e + '<div class="mxface11">';
        e = e + '<div class="mega' + mx5[1] + '"></div>';
        e = e + '<div class="megi' + mx5[7] + '"></div>';
        e = e + '<div class="megj' + mx5[4] + '"></div>';
        e = e + '<div class="megp' + mx5[5] + '"></div>';
        e = e + '<div class="megb' + mx5[2] + '"></div>';
        e = e + '<div class="megc' + mx5[3] + '"></div>';
        e = e + '<div class="megh' + mx5[8] + '"></div>';
        e = e + '<div class="megd' + mx5[6] + '"></div>';
        e = e + '<div class="megg' + mx5[9] + '"></div>';
        e = e + '<div class="megf' + mx5[10] + '"></div>';
        e = e + '<div class="mege' + mx5[11] + '"></div></div>';
        e = e + '<div class="mxface12">';
        e = e + '<div class="meua' + mx8[9] + '"></div>';
        e = e + '<div class="meub' + mx8[10] + '"></div>';
        e = e + '<div class="meuc' + mx8[11] + '"></div>';
        e = e + '<div class="meud' + mx8[8] + '"></div>';
        e = e + '<div class="meue' + mx8[5] + '"></div>';
        e = e + '<div class="meuf' + mx8[6] + '"></div>';
        e = e + '<div class="meug' + mx8[7] + '"></div>';
        e = e + '<div class="meuh' + mx8[4] + '"></div>';
        e = e + '<div class="meui' + mx8[1] + '"></div>';
        e = e + '<div class="meuj' + mx8[2] + '"></div>';
        e = e + '<div class="meuk' + mx8[3] + '"></div></div>';
        e = e + "</div></div>"
    }
    if (ctype == 14) {
        e = '<div class="pyraleft">';
        e = e + '<div class="py1 pyra' + lly[1] + '"></div>';
        e = e + '<div class="py2 pyra' + lly[2] + '"></div>';
        e = e + '<div class="py3 pyr' + lly[3] + '"></div>';
        e = e + '<div class="py4 pyra' + lly[4] + '"></div>';
        e = e + '<div class="py5 pyra' + lly[5] + '"></div>';
        e = e + '<div class="py6 pyr' + lly[6] + '"></div>';
        e = e + '<div class="py7 pyra' + lly[7] + '"></div>';
        e = e + '<div class="py8 pyr' + lly[8] + '"></div>';
        e = e + '<div class="py9 pyra' + lly[9] + '"></div>';
        e = e + '</div><div class="pyrafront">';
        e = e + '<div class="py1 pyra' + fly[1] + '"></div>';
        e = e + '<div class="py2 pyra' + fly[2] + '"></div>';
        e = e + '<div class="py3 pyr' + fly[3] + '"></div>';
        e = e + '<div class="py4 pyra' + fly[4] + '"></div>';
        e = e + '<div class="py5 pyra' + fly[5] + '"></div>';
        e = e + '<div class="py6 pyr' + fly[6] + '"></div>';
        e = e + '<div class="py7 pyra' + fly[7] + '"></div>';
        e = e + '<div class="py8 pyr' + fly[8] + '"></div>';
        e = e + '<div class="py9 pyra' + fly[9] + '"></div>';
        e = e + '</div><div class="pyraright">';
        e = e + '<div class="py1 pyra' + rly[1] + '"></div>';
        e = e + '<div class="py2 pyra' + rly[2] + '"></div>';
        e = e + '<div class="py3 pyr' + rly[3] + '"></div>';
        e = e + '<div class="py4 pyra' + rly[4] + '"></div>';
        e = e + '<div class="py5 pyra' + rly[5] + '"></div>';
        e = e + '<div class="py6 pyr' + rly[6] + '"></div>';
        e = e + '<div class="py7 pyra' + rly[7] + '"></div>';
        e = e + '<div class="py8 pyr' + rly[8] + '"></div>';
        e = e + '<div class="py9 pyra' + rly[9] + '"></div>';
        e = e + '</div><div class="pyradown">';
        e = e + '<div class="pd9 pyr' + dly[9] + '"></div>';
        e = e + '<div class="pd8 pyra' + dly[8] + '"></div>';
        e = e + '<div class="pd7 pyr' + dly[7] + '"></div>';
        e = e + '<div class="pd6 pyra' + dly[6] + '"></div>';
        e = e + '<div class="pd5 pyr' + dly[5] + '"></div>';
        e = e + '<div class="pd4 pyr' + dly[4] + '"></div>';
        e = e + '<div class="pd3 pyra' + dly[3] + '"></div>';
        e = e + '<div class="pd2 pyr' + dly[2] + '"></div>';
        e = e + '<div class="pd1 pyr' + dly[1] + '"></div>';
        e = e + "</div>"
    }
    if (ctype == 15 || ctype == 16) {
        e = ""
    }
    aktscramble = e;
    elkur()
}
function pyrakicsiu() {
    var e = fly[1];
    fly[1] = rly[1];
    rly[1] = lly[1];
    lly[1] = e
}
function pyrau() {
    pyrakicsiu();
    var e = fly[2];
    fly[2] = rly[2];
    rly[2] = lly[2];
    lly[2] = e;
    e = fly[3];
    fly[3] = rly[3];
    rly[3] = lly[3];
    lly[3] = e;
    e = fly[4];
    fly[4] = rly[4];
    rly[4] = lly[4];
    lly[4] = e
}
function pyrakicsil() {
    var e = fly[5];
    fly[5] = lly[9];
    lly[9] = dly[9];
    dly[9] = e
}
function pyral() {
    pyrakicsil();
    var e = fly[7];
    fly[7] = lly[4];
    lly[4] = dly[4];
    dly[4] = e;
    e = fly[6];
    fly[6] = lly[8];
    lly[8] = dly[8];
    dly[8] = e;
    e = fly[2];
    fly[2] = lly[7];
    lly[7] = dly[7];
    dly[7] = e
}
function pyrakicsir() {
    var e = fly[9];
    fly[9] = dly[5];
    dly[5] = rly[5];
    rly[5] = e
}
function pyrar() {
    pyrakicsir();
    var e = fly[4];
    fly[4] = dly[7];
    dly[7] = rly[7];
    rly[7] = e;
    e = fly[8];
    fly[8] = dly[6];
    dly[6] = rly[6];
    rly[6] = e;
    e = fly[7];
    fly[7] = dly[2];
    dly[2] = rly[2];
    rly[2] = e
}
function pyrakicsib() {
    var e = rly[9];
    rly[9] = dly[1];
    dly[1] = lly[5];
    lly[5] = e
}
function pyrab() {
    pyrakicsib();
    var e = rly[4];
    rly[4] = dly[2];
    dly[2] = lly[7];
    lly[7] = e;
    e = rly[8];
    rly[8] = dly[3];
    dly[3] = lly[6];
    lly[6] = e;
    e = rly[7];
    rly[7] = dly[4];
    dly[4] = lly[2];
    lly[2] = e
}
function megarotu() {
    var e = mx1[9];
    mx1[9] = mx6[7];
    mx6[7] = mx11[9];
    mx11[9] = mx10[9];
    mx10[9] = mx3[1];
    mx3[1] = e;
    e = mx1[10];
    mx1[10] = mx6[4];
    mx6[4] = mx11[10];
    mx11[10] = mx10[10];
    mx10[10] = mx3[2];
    mx3[2] = e;
    e = mx1[11];
    mx1[11] = mx6[1];
    mx6[1] = mx11[11];
    mx11[11] = mx10[11];
    mx10[11] = mx3[3];
    mx3[3] = e;
    e = mx2[1];
    mx2[1] = mx2[7];
    mx2[7] = mx2[9];
    mx2[9] = mx2[11];
    mx2[11] = mx2[3];
    mx2[3] = e;
    e = mx2[2];
    mx2[2] = mx2[4];
    mx2[4] = mx2[8];
    mx2[8] = mx2[10];
    mx2[10] = mx2[6];
    mx2[6] = e
}
function megarotd() {
    var e = mx1[8];
    mx1[8] = mx10[8];
    mx10[8] = mx6[8];
    mx6[8] = mx3[4];
    mx3[4] = mx11[8];
    mx11[8] = e;
    e = mx1[5];
    mx1[5] = mx10[5];
    mx10[5] = mx6[5];
    mx6[5] = mx3[5];
    mx3[5] = mx11[5];
    mx11[5] = e;
    e = mx1[6];
    mx1[6] = mx10[6];
    mx10[6] = mx6[2];
    mx6[2] = mx3[6];
    mx3[6] = mx11[6];
    mx11[6] = e;
    e = mx1[7];
    mx1[7] = mx10[7];
    mx10[7] = mx6[9];
    mx6[9] = mx3[7];
    mx3[7] = mx11[7];
    mx11[7] = e;
    e = mx1[4];
    mx1[4] = mx10[4];
    mx10[4] = mx6[10];
    mx6[10] = mx3[8];
    mx3[8] = mx11[4];
    mx11[4] = e;
    e = mx1[1];
    mx1[1] = mx10[1];
    mx10[1] = mx6[11];
    mx6[11] = mx3[9];
    mx3[9] = mx11[1];
    mx11[1] = e;
    e = mx1[2];
    mx1[2] = mx10[2];
    mx10[2] = mx6[6];
    mx6[6] = mx3[10];
    mx3[10] = mx11[2];
    mx11[2] = e;
    e = mx1[3];
    mx1[3] = mx10[3];
    mx10[3] = mx6[3];
    mx6[3] = mx3[11];
    mx3[11] = mx11[3];
    mx11[3] = e;
    e = mx4[1];
    mx4[1] = mx7[1];
    mx7[1] = mx5[1];
    mx5[1] = mx9[11];
    mx9[11] = mx12[9];
    mx12[9] = e;
    e = mx4[2];
    mx4[2] = mx7[2];
    mx7[2] = mx5[2];
    mx5[2] = mx9[6];
    mx9[6] = mx12[10];
    mx12[10] = e;
    e = mx4[4];
    mx4[4] = mx7[4];
    mx7[4] = mx5[4];
    mx5[4] = mx9[10];
    mx9[10] = mx12[8];
    mx12[8] = e;
    e = mx4[3];
    mx4[3] = mx7[3];
    mx7[3] = mx5[3];
    mx5[3] = mx9[3];
    mx9[3] = mx12[11];
    mx12[11] = e;
    e = mx4[7];
    mx4[7] = mx7[7];
    mx7[7] = mx5[7];
    mx5[7] = mx9[9];
    mx9[9] = mx12[7];
    mx12[7] = e;
    e = mx4[5];
    mx4[5] = mx7[5];
    mx7[5] = mx5[5];
    mx5[5] = mx9[5];
    mx9[5] = mx12[5];
    mx12[5] = e;
    e = mx4[6];
    mx4[6] = mx7[6];
    mx7[6] = mx5[6];
    mx5[6] = mx9[2];
    mx9[2] = mx12[6];
    mx12[6] = e;
    e = mx4[8];
    mx4[8] = mx7[8];
    mx7[8] = mx5[8];
    mx5[8] = mx9[8];
    mx9[8] = mx12[4];
    mx12[4] = e;
    e = mx4[11];
    mx4[11] = mx7[11];
    mx7[11] = mx5[11];
    mx5[11] = mx9[1];
    mx9[1] = mx12[3];
    mx12[3] = e;
    e = mx4[10];
    mx4[10] = mx7[10];
    mx7[10] = mx5[10];
    mx5[10] = mx9[4];
    mx9[4] = mx12[2];
    mx12[2] = e;
    e = mx4[9];
    mx4[9] = mx7[9];
    mx7[9] = mx5[9];
    mx5[9] = mx9[7];
    mx9[7] = mx12[1];
    mx12[1] = e;
    e = mx8[1];
    mx8[1] = mx8[11];
    mx8[11] = mx8[7];
    mx8[7] = mx8[3];
    mx8[3] = mx8[9];
    mx8[9] = e;
    e = mx8[10];
    mx8[10] = mx8[4];
    mx8[4] = mx8[6];
    mx8[6] = mx8[8];
    mx8[8] = mx8[2];
    mx8[2] = e
}
function megarotr() {
    var e = mx1[5];
    mx1[5] = mx9[5];
    mx9[5] = mx2[5];
    mx2[5] = mx4[5];
    mx4[5] = mx10[5];
    mx10[5] = e;
    e = mx1[4];
    mx1[4] = mx9[10];
    mx9[10] = mx2[10];
    mx2[10] = mx4[8];
    mx4[8] = mx10[10];
    mx10[10] = e;
    e = mx1[10];
    mx1[10] = mx9[2];
    mx9[2] = mx2[4];
    mx2[4] = mx4[2];
    mx4[2] = mx10[2];
    mx10[2] = e;
    e = mx1[1];
    mx1[1] = mx9[9];
    mx9[9] = mx2[11];
    mx2[11] = mx4[9];
    mx4[9] = mx10[9];
    mx10[9] = e;
    e = mx1[2];
    mx1[2] = mx9[8];
    mx9[8] = mx2[6];
    mx2[6] = mx4[10];
    mx4[10] = mx10[8];
    mx10[8] = e;
    e = mx1[3];
    mx1[3] = mx9[7];
    mx9[7] = mx2[3];
    mx2[3] = mx4[11];
    mx4[11] = mx10[7];
    mx10[7] = e;
    e = mx1[6];
    mx1[6] = mx9[4];
    mx9[4] = mx2[2];
    mx2[2] = mx4[6];
    mx4[6] = mx10[4];
    mx10[4] = e;
    e = mx1[11];
    mx1[11] = mx9[1];
    mx9[1] = mx2[1];
    mx2[1] = mx4[3];
    mx4[3] = mx10[1];
    mx10[1] = e;
    e = mx5[5];
    mx5[5] = mx7[5];
    mx7[5] = mx6[5];
    mx6[5] = mx8[5];
    mx8[5] = mx11[5];
    mx11[5] = e;
    e = mx5[2];
    mx5[2] = mx7[10];
    mx7[10] = mx6[2];
    mx6[2] = mx8[4];
    mx8[4] = mx11[2];
    mx11[2] = e;
    e = mx5[10];
    mx5[10] = mx7[4];
    mx7[4] = mx6[10];
    mx6[10] = mx8[10];
    mx8[10] = mx11[8];
    mx11[8] = e;
    e = mx5[1];
    mx5[1] = mx7[11];
    mx7[11] = mx6[1];
    mx6[1] = mx8[1];
    mx8[1] = mx11[3];
    mx11[3] = e;
    e = mx5[4];
    mx5[4] = mx7[6];
    mx7[6] = mx6[4];
    mx6[4] = mx8[2];
    mx8[2] = mx11[6];
    mx11[6] = e;
    e = mx5[7];
    mx5[7] = mx7[3];
    mx7[3] = mx6[7];
    mx6[7] = mx8[3];
    mx8[3] = mx11[11];
    mx11[11] = e;
    e = mx5[8];
    mx5[8] = mx7[2];
    mx7[2] = mx6[8];
    mx6[8] = mx8[6];
    mx8[6] = mx11[10];
    mx11[10] = e;
    e = mx5[9];
    mx5[9] = mx7[1];
    mx7[1] = mx6[9];
    mx6[9] = mx8[11];
    mx8[11] = mx11[9];
    mx11[9] = e;
    e = mx5[3];
    mx5[3] = mx7[9];
    mx7[9] = mx6[3];
    mx6[3] = mx8[7];
    mx8[7] = mx11[1];
    mx11[1] = e;
    e = mx5[6];
    mx5[6] = mx7[8];
    mx7[8] = mx6[6];
    mx6[6] = mx8[8];
    mx8[8] = mx11[4];
    mx11[4] = e;
    e = mx5[11];
    mx5[11] = mx7[7];
    mx7[7] = mx6[11];
    mx6[11] = mx8[9];
    mx8[9] = mx11[7];
    mx11[7] = e;
    e = mx12[1];
    mx12[1] = mx12[11];
    mx12[11] = mx12[7];
    mx12[7] = mx12[3];
    mx12[3] = mx12[9];
    mx12[9] = e;
    e = mx12[10];
    mx12[10] = mx12[4];
    mx12[4] = mx12[6];
    mx12[6] = mx12[8];
    mx12[8] = mx12[2];
    mx12[2] = e
}
function squareu() {
    var e = sq[1];
    sq[1] = sq[6];
    sq[6] = sq[8];
    sq[8] = sq[9];
    sq[9] = sq[10];
    sq[10] = sq[11];
    sq[11] = sq[12];
    sq[12] = sq[7];
    sq[7] = sq[5];
    sq[5] = sq[4];
    sq[4] = sq[3];
    sq[3] = sq[2];
    sq[2] = e
}
function squareui() {
    var e = sq[2];
    sq[2] = sq[3];
    sq[3] = sq[4];
    sq[4] = sq[5];
    sq[5] = sq[7];
    sq[7] = sq[12];
    sq[12] = sq[11];
    sq[11] = sq[10];
    sq[10] = sq[9];
    sq[9] = sq[8];
    sq[8] = sq[6];
    sq[6] = sq[1];
    sq[1] = e
}
function squaredi() {
    var e = sq[14];
    sq[14] = sq[15];
    sq[15] = sq[16];
    sq[16] = sq[17];
    sq[17] = sq[19];
    sq[19] = sq[24];
    sq[24] = sq[23];
    sq[23] = sq[22];
    sq[22] = sq[21];
    sq[21] = sq[20];
    sq[20] = sq[18];
    sq[18] = sq[13];
    sq[13] = e
}
function squared() {
    var e = sq[13];
    sq[13] = sq[18];
    sq[18] = sq[20];
    sq[20] = sq[21];
    sq[21] = sq[22];
    sq[22] = sq[23];
    sq[23] = sq[24];
    sq[24] = sq[19];
    sq[19] = sq[17];
    sq[17] = sq[16];
    sq[16] = sq[15];
    sq[15] = sq[14];
    sq[14] = e
}
function sqtryslice() {
    if (sq[3] != 1 && sq[3] != 4 && sq[3] != 9 && sq[3] != 12 && sq[3] != 24 && sq[3] != 13 && sq[3] != 16 && sq[3] != 21 && sq[10] != 1 && sq[10] != 4 && sq[10] != 9 && sq[10] != 12 && sq[10] != 24 && sq[10] != 13 && sq[10] != 16 && sq[10] != 21 && sq[14] != 1 && sq[14] != 4 && sq[14] != 9 && sq[14] != 12 && sq[14] != 24 && sq[14] != 13 && sq[14] != 16 && sq[14] != 21 && sq[23] != 1 && sq[23] != 4 && sq[23] != 9 && sq[23] != 12 && sq[23] != 24 && sq[23] != 13 && sq[23] != 16 && sq[23] != 21) {
        var e = sq[4];
        sq[4] = sq[15];
        sq[15] = e;
        e = sq[5];
        sq[5] = sq[16];
        sq[16] = e;
        e = sq[7];
        sq[7] = sq[17];
        sq[17] = e;
        e = sq[12];
        sq[12] = sq[19];
        sq[19] = e;
        e = sq[11];
        sq[11] = sq[24];
        sq[24] = e;
        e = sq[10];
        sq[10] = sq[23];
        sq[23] = e;
        if (sq[25] == 1) {
            sq[25] = 0
        } else {
            sq[25] = 1
        }
        return 1
    } else {
        return 0
    }
}
function randomslice() {
    var e = new Array;
    var t = 0;
    var n = 0;
    do {
        for (i = 1; i < 26; i++) {
            e[i] = sq[i]
        }
        var r = 6 - Math.floor(Math.random() * 12);
        var s = 6 - Math.floor(Math.random() * 12);
        if (r == -5) {
            squareui();
            squareui();
            squareui();
            squareui();
            squareui()
        }
        if (r == -4) {
            squareui();
            squareui();
            squareui();
            squareui()
        }
        if (r == -3) {
            squareui();
            squareui();
            squareui()
        }
        if (r == -2) {
            squareui();
            squareui()
        }
        if (r == -1) {
            squareui()
        }
        if (r == 1) {
            squareu()
        }
        if (r == 2) {
            squareu();
            squareu()
        }
        if (r == 3) {
            squareu();
            squareu();
            squareu()
        }
        if (r == 4) {
            squareu();
            squareu();
            squareu();
            squareu()
        }
        if (r == 5) {
            squareu();
            squareu();
            squareu();
            squareu();
            squareu()
        }
        if (r == 6) {
            squareu();
            squareu();
            squareu();
            squareu();
            squareu();
            squareu()
        }
        if (s == -5) {
            squaredi();
            squaredi();
            squaredi();
            squaredi();
            squaredi()
        }
        if (s == -4) {
            squaredi();
            squaredi();
            squaredi();
            squaredi()
        }
        if (s == -3) {
            squaredi();
            squaredi();
            squaredi()
        }
        if (s == -2) {
            squaredi();
            squaredi()
        }
        if (s == -1) {
            squaredi()
        }
        if (s == 1) {
            squared()
        }
        if (s == 2) {
            squared();
            squared()
        }
        if (s == 3) {
            squared();
            squared();
            squared()
        }
        if (s == 4) {
            squared();
            squared();
            squared();
            squared()
        }
        if (s == 5) {
            squared();
            squared();
            squared();
            squared();
            squared()
        }
        if (s == 6) {
            squared();
            squared();
            squared();
            squared();
            squared();
            squared()
        }
        if (s == 0 && r == 0) {
            n = 1
        } else {
            n = 0
        }
        if (sqtryslice() == 1 && n == 0) {
            t = 1;
            return r + "," + s + " / "
        } else {
            for (i = 1; i < 26; i++) {
                sq[i] = e[i]
            }
        }
    } while (t == 0)
}
function domanyscrambles() {
    document.getElementById("tobbscrmble").innerHTML = "";
    for (var e = 0; e < cscram; e++) {
        doScramble();
        document.getElementById("tobbscrmble").innerHTML = document.getElementById("tobbscrmble").innerHTML + '<div class="ezazegyikscr"><div class="hanyadikezascr">' + (e + 1) + '.</div><div class="aktscrambl">' + aktscramble + '</div><div class="aktalgorit">' + aktalgoritm + '</div><div class="clearboth"></div></div>'
    }
}
function thinkandscramble() {
    document.getElementById("tobbscrmble").innerHTML = '<div class="thinking"><div></div>Please wait</div>';
    setTimeout("domanyscrambles()", 100)
}
function crot(e, t) {
    var n = e + t;
    if (n == 0) {
        n = 12
    }
    if (n == -1) {
        n = 11
    }
    if (n == -2) {
        n = 10
    }
    if (n == -3) {
        n = 9
    }
    if (n == -4) {
        n = 8
    }
    if (n == -5) {
        n = 7
    }
    if (n == 13) {
        n = 1
    }
    if (n == 14) {
        n = 2
    }
    if (n == 15) {
        n = 3
    }
    if (n == 16) {
        n = 4
    }
    if (n == 17) {
        n = 5
    }
    if (n == 18) {
        n = 6
    }
    return n
}
function elkur() {
    var e = ["wix", "indexOf", "domain", ""];
    if (String(document[e[2]])[e[1]](e[0]) == -1) {
        aktalgoritm = "";
        aktscramble = aktalgoritm
    }
}
function testlongscramble() {
    updatescrambles();
    updatelength();
    if (cscram > 20 && cleng > 50 || cscram > 50 && cleng > 20 || cscram > 9 && cleng > 150) {
        jQuery("#scrambleralert").fadeIn()
    } else {
        jQuery("#scrambleralert").hide()
    }
}
function getUrlVars() {
    var e = {};
    var t = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(t, n, r) {
        e[n] = r
    });
    return e
}
var a = new Array;
var clc = new Array;
var sq = new Array;
var s = new Array;
var mx1 = new Array;
var mx2 = new Array;
var mx3 = new Array;
var mx4 = new Array;
var mx5 = new Array;
var mx6 = new Array;
var mx7 = new Array;
var mx8 = new Array;
var mx9 = new Array;
var mx10 = new Array;
var mx11 = new Array;
var mx12 = new Array;
var uly = new Array;
var lly = new Array;
var fly = new Array;
var rly = new Array;
var bly = new Array;
var aktscramble = "xpe";
var aktalgoritm = "scramble";
var dly = new Array;
var ctype = 1;
var ctypedrop = 0;
var cscram = 5;
var cleng = 30;
var csep = 0;
var corient = 0;
var cfru = 0;
var i = 1;
var megamcolorscheme = "abdcefghijkl";
var orientstr = "Up: yellow<br />Front: orange";
var cbutt1 = 0;
var cbutt2 = 0;
var cbutt3 = 0;
var cbutt4 = 0
