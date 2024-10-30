// *******SET YOUR DEFAULT VALUES HERE*******
var singleGN=298;
var doubleGN=320;
var BPM=150;
var ignoreScreenLimit=false;
var currentStyle = 10;
var invertWheel = true;
var sensitivity = 0.5;
// ******************************************
document.getElementById("ignoreSL").checked=ignoreScreenLimit;
document.getElementById("styleSelect").value = currentStyle;
document.getElementById("bpminput").value = BPM;
var curPlaystyle="SP";
if (curPlaystyle=="SP") {
    document.getElementById("currentPlaystyleText").innerHTML = `Single = ${singleGN}`;
} else {
    document.getElementById("currentPlaystyleText").innerHTML = `Double = ${doubleGN}`;
}

class HiSpeed {
    constructor(name,speedMultiplier) {
        this.name=name;
        this.speedMultiplier=speedMultiplier;
    }
}

class Style {
    constructor(name, screenlimit, availableHS) {
        this.name = name;
        this.screenlimit = screenlimit;
        this.availableHS = availableHS;
    }

    getScreenlimit() {
        return ignoreScreenLimit ? 50 : this.screenlimit;
    }
}

var styles = new Array();
styles[0] = new Style("3rd Style",75,new Array(new HiSpeed("LS2",0.33),
                                                new HiSpeed("LS1",0.5),
                                                new HiSpeed("HS0",1),
                                                new HiSpeed("HS1",2),
                                                new HiSpeed("HS2",3),
                                                new HiSpeed("HS3",4)));
styles[1] = new Style("4th Style",75,new Array(new HiSpeed("LS2",0.33),
                                                new HiSpeed("LS1",0.5),
                                                new HiSpeed("HS0",1),
                                                new HiSpeed("HS1",2),
                                                new HiSpeed("HS2",2.75),
                                                new HiSpeed("HS3",3.5)));
styles[2] = new Style("5th Style",75,new Array(new HiSpeed("LS2",0.33),
                                                new HiSpeed("LS1",0.5),
                                                new HiSpeed("HS0",1),
                                                new HiSpeed("HS1",2),
                                                new HiSpeed("HS2",2.5),
                                                new HiSpeed("HS3",3)));
styles[3] = new Style("6th Style",75,new Array(new HiSpeed("LS1",0.5),
                                                new HiSpeed("HS0",1),
                                                new HiSpeed("HS1",2),
                                                new HiSpeed("HS2",2.5),
                                                new HiSpeed("HS3",3),
                                                new HiSpeed("HS4",3.5)));
styles[4] = new Style("7th Style",70,new Array(new HiSpeed("HS0",1),
                                                new HiSpeed("HS1",2),
                                                new HiSpeed("HS2",2.5),
                                                new HiSpeed("HS3",3),
                                                new HiSpeed("HS4",3.5)));
styles[5] = new Style("8th Style",70,new Array(new HiSpeed("HS0",1),
                                                new HiSpeed("HS1",2),
                                                new HiSpeed("HS2",2.5),
                                                new HiSpeed("HS3",3),
                                                new HiSpeed("HS4",3.5)));
styles[6] = new Style("9th Style",46,new Array(new HiSpeed("HS0",1),
                                                new HiSpeed("HS1",2),
                                                new HiSpeed("HS2",2.5),
                                                new HiSpeed("HS3",3),
                                                new HiSpeed("HS4",3.5)));
styles[7] = new Style("10th Style",46,new Array(new HiSpeed("HS0",1),
                                                new HiSpeed("HS0.5",1.5),
                                                new HiSpeed("HS1",2),
                                                new HiSpeed("HS1.5",2.25),
                                                new HiSpeed("HS2",2.5),
                                                new HiSpeed("HS2.5",2.75),
                                                new HiSpeed("HS3",3),
                                                new HiSpeed("HS3.5",3.25),
                                                new HiSpeed("HS4",3.5)));
styles[8] = new Style("IIDX RED",46,new Array(new HiSpeed("HS0",1),
                                                new HiSpeed("HS0.5",1.5),
                                                new HiSpeed("HS1",2),
                                                new HiSpeed("HS1.5",2.25),
                                                new HiSpeed("HS2",2.5),
                                                new HiSpeed("HS2.5",2.75),
                                                new HiSpeed("HS3",3),
                                                new HiSpeed("HS3.5",3.25),
                                                new HiSpeed("HS4",3.5),
                                                new HiSpeed("HS4.5",3.75),
                                                new HiSpeed("HS5",4)));
styles[9] = new Style("HAPPY SKY",59,new Array(new HiSpeed("HS0",1),
                                                new HiSpeed("HS0.5",1.5),
                                                new HiSpeed("HS1",2),
                                                new HiSpeed("HS1.5",2.25),
                                                new HiSpeed("HS2",2.5),
                                                new HiSpeed("HS2.5",2.75),
                                                new HiSpeed("HS3",3),
                                                new HiSpeed("HS3.5",3.25),
                                                new HiSpeed("HS4",3.5),
                                                new HiSpeed("HS4.5",3.75),
                                                new HiSpeed("HS5",4)));
styles[10] = new Style("DistorteD",46,new Array(new HiSpeed("HS0",1),
                                                new HiSpeed("HS0.5",1.5),
                                                new HiSpeed("HS1",2),
                                                new HiSpeed("HS1.5",2.25),
                                                new HiSpeed("HS2",2.5),
                                                new HiSpeed("HS2.5",2.75),
                                                new HiSpeed("HS3",3),
                                                new HiSpeed("HS3.5",3.25),
                                                new HiSpeed("HS4",3.5),
                                                new HiSpeed("HS4.5",3.75),
                                                new HiSpeed("HS5",4)));
styles[11] = new Style("GOLD-EMPRESS",46,new Array(new HiSpeed("HS0",1),
                                                new HiSpeed("HS0.5",1.5),
                                                new HiSpeed("HS1",2),
                                                new HiSpeed("HS1.5",2.25),
                                                new HiSpeed("HS2",2.5),
                                                new HiSpeed("HS2.5",2.75),
                                                new HiSpeed("HS3",3),
                                                new HiSpeed("HS3.5",3.25),
                                                new HiSpeed("HS4",3.5),
                                                new HiSpeed("HS4.5",3.75),
                                                new HiSpeed("HS5",4)));
styles[12] = new Style("Sakura",70,new Array(new HiSpeed("HS0",1),
                                                new HiSpeed("HS1",1.5),
                                                new HiSpeed("HS2",2),
                                                new HiSpeed("HS3",2.5),
                                                new HiSpeed("HS4",3)));
styles[13] = new Style("PSM",46,new Array(new HiSpeed("HS0",1),
                                                new HiSpeed("HS1",1.5),
                                                new HiSpeed("HS2",2),
                                                new HiSpeed("HS3",2.5),
                                                new HiSpeed("HS4",3)));
styles[14] = new Style("MODERN?",0,new Array(new HiSpeed("HS0",1),
                                                new HiSpeed("HS0.5",1.5),
                                                new HiSpeed("HS1",2),
                                                new HiSpeed("HS1.5",2.25),
                                                new HiSpeed("HS2",2.5),
                                                new HiSpeed("HS2.5",2.75),
                                                new HiSpeed("HS3",3),
                                                new HiSpeed("HS3.5",3.25),
                                                new HiSpeed("HS4",3.5),
                                                new HiSpeed("HS4.5",3.75),
                                                new HiSpeed("HS5",4)));                                          

function togglePlaystyle(id) {
    if (curPlaystyle=="SP") {
        curPlaystyle="DP";
        document.getElementById("currentPlaystyleText").innerHTML = `Double = ${doubleGN}`;
    } else {
        curPlaystyle="SP";
        document.getElementById("currentPlaystyleText").innerHTML = `Single = ${singleGN}`;
    }
    tableUpdate();
}

function getCurrentGN() {
    if (curPlaystyle=="SP") {
        return singleGN;
    } else {
        return doubleGN;
    }
}

function editGN() {
    newGN=prompt("Enter your new Green Number",getCurrentGN());
    if (newGN!=null&&newGN!="") {
        if (curPlaystyle=="SP") {
            singleGN = newGN;
            document.getElementById("currentPlaystyleText").innerHTML = `Single = ${singleGN}`;
        } else {
            doubleGN = newGN;
            document.getElementById("currentPlaystyleText").innerHTML = `Double = ${doubleGN}`;
        }
        tableUpdate();
    }  
}

function toggleScreenLimit() {
    ignoreScreenLimit = ignoreScreenLimit ? false : true;
    document.getElementById("ignoreSL").checked=ignoreScreenLimit;
    tableUpdate();
}

bpminput = document.getElementById('bpminput');
bpminput.addEventListener('input', () => {
    if (bpminput.value.endsWith('.') && bpminput.value.indexOf('.') == bpminput.value.lastIndexOf('.')) {
    } else {
        if (bpminput.value.endsWith('.') && bpminput.value.indexOf('.') != bpminput.value.lastIndexOf('.')) {
            bpminput.value = bpminput.value.substring(0, bpminput.value.length-1);
        } else {
            value = parseFloat(bpminput.value);
            if (!isNaN(value)) {
                bpminput.value = value;
            } else {
                bpminput.value = '';
            }
        }
    }
});
bpminput.addEventListener('wheel', (e) => {
    e.preventDefault();
    value = parseFloat(bpminput.value);
    if (isNaN(value)) {
        value = 0;
    }

    if (invertWheel) {
        value += -e.deltaY + e.deltaX > 0 ? -1 : 1;
    } else {
        value += e.deltaY + e.deltaX > 0 ? -1 : 1;
    }
    

    bpminput.value = value < 0 ? 0 : value;
    BPM = bpminput.value;
    tableUpdate();
});

document.addEventListener('keydown', (event) => {
    if (event.key === '=') {
        BPMbuttons(1);
    }
    if (event.key === '-') {
        BPMbuttons(-1);
    }
    if (event.key === ']') {
        BPMbuttons(10);
    }
    if (event.key === '[') {
        BPMbuttons(-10);
    }
});

bpminput.onmousedown = function(e) {
    startXpos = e.clientX;
    startYpos = e.clientY;
    startval = parseFloat(bpminput.value);
    if (isNaN(startval)) startval = 0;
    document.onmousemove = function(e) {
        delta = Math.ceil((e.clientX - startXpos)-(e.clientY - startYpos));
        startXpos = e.clientX;
        startYpos = e.clientY;
        tmpbpm = Math.round(parseFloat(bpminput.value) + delta/(1/sensitivity));
        bpminput.value = tmpbpm<0 ? 0: tmpbpm;
        BPM = bpminput.value;
        tableUpdate();
    }
    document.onmouseup = function() {
        document.onmousemove = null;
        tableUpdate();
    }
}


function BPMbuttons(x) {
    curBPM=parseFloat(document.getElementById("bpminput").value);
    // curBPM+=x;
    // curBPM = (curBPM<0) ? 0 : curBPM;
    curBPM = (curBPM+x<0) ? 0 : curBPM+x;
    BPM=curBPM;
    document.getElementById("bpminput").value = BPM;
    tableUpdate();
    // BPM+=x;
    // document.getElementById("bpminput").value = BPM;
    // tableUpdate();
}

function update() {
    BPM = document.getElementById("bpminput").value;
    tableUpdate();
}

function changeStyle() {
    s = document.getElementById("styleSelect").value;
    currentStyle = parseInt(s);
    tableUpdate();
}

function roundWhiteNumber(whiteNumber) {
    wn=50;
    while(true) {
        if (wn+(25/8)>=whiteNumber) {
            return wn
        } else {
            wn+=25/8;
        }
    }
}

function displayWhiteNumber(whiteNumber) {
    if (roundWhiteNumber(whiteNumber)==1000) {
        return 999;
    }
    return Math.floor(roundWhiteNumber(whiteNumber));
}


function findWhiteNumber(bpm,speedMultiplier,greenNumber) {
    return 1000-((bpm*speedMultiplier*greenNumber)/174);
}

function findGreenNumber(bpm,speedMultiplier,whiteNumber) {
    return 174000/(bpm*speedMultiplier*(1000/(1000-whiteNumber)));
}

function findTowel(whiteNumber,screenLimit) {
    return ((whiteNumber-screenLimit)/(1000-screenLimit))*1000;
}

function findBPM(greenNumber,speedMultiplier,screenLimit) {
    return 174000/(greenNumber*speedMultiplier*(1000/(1000-screenLimit)));
}

function calculateWN(hispeed) {
    output=""
    greenNumber = (curPlaystyle=="SP") ? singleGN : doubleGN;
    whiteNumber = findWhiteNumber(BPM,hispeed.speedMultiplier,greenNumber);
    if (whiteNumber>=Math.max(50,styles[currentStyle].getScreenlimit())) {
        output+=displayWhiteNumber(whiteNumber);
    } else {
        output+="<span class='greenNumber'>";
        output+=Math.round(findGreenNumber(BPM,hispeed.speedMultiplier,styles[currentStyle].getScreenlimit()));
        output+="</span>";
    }
    return output;

}

function calculateTowel(hispeed) {
    output=""
    greenNumber = (curPlaystyle=="SP") ? singleGN : doubleGN;
    whiteNumber = findWhiteNumber(BPM,hispeed.speedMultiplier,greenNumber);
    if (whiteNumber>=styles[currentStyle].getScreenlimit()) {
        output+=Math.round(findTowel(whiteNumber,styles[currentStyle].getScreenlimit()));
    } else {
        // output+="<span style='color:green;'>";
        output+="<span class='greenNumber'>";
        output+=Math.round(findGreenNumber(BPM,hispeed.speedMultiplier,styles[currentStyle].getScreenlimit()));
        output+="</span>";
    }
    return output;
}

function calculateBPM(hispeed) {
    output="";
    greenNumber = (curPlaystyle=="SP") ? singleGN : doubleGN;
    return findBPM(greenNumber,hispeed.speedMultiplier,styles[currentStyle].getScreenlimit());
}

function hsrow(tableid,hispeed) {
    var table = document.getElementById(tableid);
    var newRow = table.insertRow(-1);
    var HiSpeedCell = newRow.insertCell(0);
    var MultiplierCell = newRow.insertCell(1);
    var MaxBPMCell = newRow.insertCell(2);
    var wnCell = newRow.insertCell(3);
    var towelCell = newRow.insertCell(4);

    HiSpeedCell.className = 'hiSpeedCell'
    HiSpeedCell.innerHTML = hispeed.name;
    MultiplierCell.innerHTML = hispeed.speedMultiplier
    MaxBPMCell.innerHTML = calculateBPM(hispeed).toFixed(2);
    wnCell.innerHTML = calculateWN(hispeed);
    towelCell.innerHTML = calculateTowel(hispeed);
    // var table = document.getElementById('myTable');
    //         var newRow = table.insertRow(-1);
    //         var newCell1 = newRow.insertCell(0);
    //         var newCell2 = newRow.insertCell(1);

    //         newCell1.innerHTML = "New row text";
    //         newCell2.innerHTML = "New row 2nd Cell";
}

tableUpdate();

function tableUpdate() {
    var mytbl = document.getElementById("hstable");
    // console.log(mytbl.rows[0].innerHTML);
    mytbl.getElementsByTagName("tbody")[0].innerHTML = mytbl.rows[0].innerHTML;
    
    for (i=0; i<styles[currentStyle].availableHS.length; i++) {
        hsrow('hstable',styles[currentStyle].availableHS[i]);
    }
}
// function togglePlaystyle(id) {
//     if (curPlaystyle==0) {
//         id.innerHTML = `Single = ${singleGN}`;
//         curPlaystyle=1;
//     } else {
//         id.innerHTML = `Double = ${doubleGN}`;
//         curPlaystyle=0;
//     }

// }