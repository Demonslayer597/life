var race = "", grade = "";
function setRace(newRace) {
    race = newRace;
    console.log(race);
}

function setGrade(newGrade) {
    grade = newGrade;
    console.log(grade)
}

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
        document.getElementById("selection").innerHTML += "<p>Failure! You could have done better!</p>"; 
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