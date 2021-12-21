a1.addEventListener("click", wrongAnswer);
document.getElementById("a2").addEventListener("click", wrongAnswer);
document.getElementById("a3").addEventListener("click", correctAnswer);
document.getElementById("a4").addEventListener("click", wrongAnswer);
document.getElementById("check").addEventListener("click", question2);


function wrongAnswer(e){
    e.preventDefault();
    const a1 = document.getElementById('a1');
    const a2 = document.getElementById('a2');
    const a4 = document.getElementById('a4');
    if(e.target === a1 || a2 ||a4){
        e.target.style.background = 'red';
    }
       const message = document.getElementById("message1").innerHTML = "Incorrect!";
}

function correctAnswer(e){
    e.preventDefault();
    const a3 = document.getElementById('a3');
    if(e.target === a3){
        e.target.style.background = 'green';
    }
    const message = document.getElementById("message1").innerHTML = "Correct!";
}

function question2(e){
    e.preventDefault();
    const answer2 = document.getElementById("q2").value;
    const expected = '1995';
    if(answer2 === expected){
        const message = document.getElementById("message2").innerHTML = "Correct!";
    }else{
        const message = document.getElementById("message2").innerHTML = "Incorrect!";
    }
}