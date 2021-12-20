let a1 = document.getElementById(a1);
let a2 = document.getElementById(a2);
let a3 = document.getElementById(a3);
let a4 = document.getElementById(a4);

document.getElementById("a1").addEventListener("click", wrongAnswer);
document.getElementById("a2").addEventListener("click", wrongAnswer);
document.getElementById("a3").addEventListener("click", correctAnswer);
document.getElementById("a4").addEventListener("click", wrongAnswer);

function wrongAnswer(){
    button.style.background = 'red';
    let message = document.getElementById("message").innerHTML = "Incorrect!";
}

function correctAnswer(){
    button.style.background = 'green';
    let message = document.getElementById("message").innerHTML = "Correct!";
}
