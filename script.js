
//niz
const words = ["Plan", "Book", "Go!"];
document.getElementById("pasus1").innerHTML = words;



//for
const kontinenti = ["Europe",  "Asia", "Africa"];
let i, len, text;
for (i = 0, len = kontinenti.length, text = ""; i < len; i++) {
  text += kontinenti[i] + "<br>";
}
document.getElementById("pasus2").innerHTML = text;



 //promena stila
 let destinacija = document.querySelector('h2');
 destinacija.style.color = 'red';
 


 //funkcija1
 function kvadrirajBroj(broj) {
  return broj * broj;
}
document.getElementById("funkcija1").innerHTML=kvadrirajBroj(1);



//dogadjaj1 
function bookNow() {
    const btns = document.getElementsByTagName("button");
    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
            btns[i].style.backgroundColor = "#4CAF50";
            btns[i].textContent = "Booked!";
        });
    }
}



//funckija2
function myFunction(p1, p2) {
  return p1 * p2;
}
document.getElementById("funkcija2").innerHTML = myFunction(2, 1);



 //preuzimanje podataka iz forme
let fname = document.getElementById('fname').value;
let lname = document.getElementById('lname').value;
   
console.log('first name: ' + fname);
console.log('last name: ' + lname); 


 
 const formName = kontakt.elements['fname'].value;
 const formlastname = kontakt.elements['lname'].value;
 
 
 console.log(`Name: ${formName}`);
console.log(`Last name: ${formlastname}`);
 
  



    //dogadjaj2
    let button = document.querySelector('input[type="submit"]');
 button.addEventListener('click', function() {
   alert('Hvala Vam sto ste se prijavili!');
 });



//if
const time = new Date().getHours();
let greeting;
if (time < 10) {
  greeting = "Enjoy the rest of your morning!";
} else if (time < 20) {
  greeting = "Enjoy the rest of your day!";
} else {
  greeting = "Enjoy the rest of your evening!";
}
document.getElementById("pasus3").innerHTML = greeting;





 
 
