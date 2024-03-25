const limitnumber = localStorage.getItem('unumber');
const username = localStorage.getItem('nameofuser');


document.getElementById('gamehead').textContent= ` YO WHATS UP , ${username}`;
document.getElementById('slctnum').textContent= `selected num between 1 - ${limitnumber}`;


let check = document.getElementById('check');
let x = [Math.floor(Math.random() * limitnumber) ];
let attempts = 0;

check.addEventListener('click',function(){
    let input=parseInt( document.getElementById('num2').value);
    attempts++
    document.getElementById('tries').textContent = `tries : ${attempts} `;
    if(tries==10){ document.getElementById('tries').style.color = 'red';}
    if(input == x){
        document.getElementById('hint').textContent= `hint: congrats`;
        document.getElementById('outputtxt').textContent= `Status:you guesed right `;
        document.getElementById('gamehead').style.color = 'green';
        document.getElementById('hint').style.color = 'green';
        document.getElementById('gamepara').style.color = 'green';
        document.getElementById('tries').style.color = 'green';
    }
    else {
        if (input < x){
        document.getElementById('hint').textContent= `hint: ${input} is low`;
        document.getElementById('outputtxt').textContent= `Status:try again`;}
        else if(input > x) 
        {
        document.getElementById('hint').textContent= `hint: ${input} is high`;
        document.getElementById('outputtxt').textContent= `Status:try again`;}
    }
});
