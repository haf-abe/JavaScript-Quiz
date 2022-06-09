
window.onload = function() {
    document.getElementById("Intro").style.display = "inline-block";
    document.getElementById("question1").style.display = "none";
    document.getElementById("question2").style.display = "none";
    document.getElementById("question3").style.display = "none";
    document.getElementById("question4").style.display = "none";
    document.getElementById("Endofq").style.display = "none";
}

function question1() {
    document.getElementById("Intro").style.display = "none";
    document.getElementById("question1").style.display = "inline-block";
}

function question2() {
    document.getElementById("question1").style.display = "none";
    document.getElementById("question2").style.display = "inline-block";
}

function question3() {
    document.getElementById("question2").style.display = "none";
    document.getElementById("question3").style.display = "inline-block";
}

function question4() {
    document.getElementById("question3").style.display = "none";
    document.getElementById("question4").style.display = "inline-block";
}

function Endofq() {
    document.getElementById("question4").style.display = "none";
    document.getElementById("Endofq").style.display = "inline-block";
}

    function result(){
    var score =0;
    if(document.getElementById("correct answer 1").checked){
        score++;
    }
    if(document.getElementById("correct answer 2").checked){
        score++;
    }
    if(document.getElementById("correct answer 3").checked){
        score++;
    }
    if(document.getElementById("correct answer 4").checked){
        score++;
    }
    alert ("Your score is " + score + " /4")
}
