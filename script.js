const form1=document.getElementById("form1");
const usernameinput=document.getElementById("usernameinput");
const total=document.getElementById("total");

form1.addEventListener('submit',function(e){
    e.preventDefault();
 
    const unum = total.value;
    const uname = usernameinput.value;
   

    localStorage.setItem('nameofuser',uname);
    localStorage.setItem('unumber',unum);

    window.location.href="game.html";

})