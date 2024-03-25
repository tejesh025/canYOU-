const limitnumber = localStorage.getItem('unumber');
const username = localStorage.getItem('nameofuser');


document.getElementById('gamehead').textContent= ` YO WHATS UP , ${username}`;
document.getElementById('slctnum').textContent= `selected num between 1 - ${limitnumber}`;


let check = document.getElementById('check');
let randomNumber = [Math.floor(Math.random() * 100) ];
let attempts = 0;

check.addEventListener('click',function(){
    let input= document.getElementById('num2').value;
    attempts++
    document.getElementById('tries').textContent = `tries : ${attempts} `
    if(input == randomNumber){
        document.getElementById('hint').textContent= `hint: congrats`;
        document.getElementById('outputtxt').textContent= `Status:you guesed right ${attempts}`;
        document.getElementById('gamehead').style.color = 'green';
        document.getElementById('hint').style.color = 'green';
    }
    else {
        if (input < randomNumber){
        document.getElementById('hint').textContent= `hint: num is low`;
        document.getElementById('outputtxt').textContent= `Status:try again`;}
        else if(input > randomNumber) 
        {
        document.getElementById('hint').textContent= `hint: num is high`;
        document.getElementById('outputtxt').textContent= `Status:try again`;}
    }
});
