
var team = localStorage.getItem("typeTeam");

var commons = localStorage.getItem("commons");
var supers = localStorage.getItem("supers");
var rares = localStorage.getItem("rares");
var legendarys = localStorage.getItem("legendarys");

var cars = (commons * 18) + (supers * 23) + (rares * 28) + (legendarys * 33);

const getSlpCheap = async () => {
    fetch('https://min-api.cryptocompare.com/data/price?fsym=SLP&tsyms=USD')
   .then(response => response.json())
   .then(data => {
     console.log(data);
     document.getElementById("earnDay").innerHTML = (data.USD * 150).toFixed(2)
     document.getElementById("earnWeek").innerHTML = (data.USD * (150 * 7)).toFixed(2)
     document.getElementById("earnMonth").innerHTML = (data.USD * (150 * 30)).toFixed(2)
   });
 }
 const getSlpGood = async () => {
    fetch('https://min-api.cryptocompare.com/data/price?fsym=SLP&tsyms=USD')
   .then(response => response.json())
   .then(data => {
     console.log(data);
     document.getElementById("earnDay").innerHTML = (data.USD * 200).toFixed(2)
     document.getElementById("earnWeek").innerHTML = (data.USD * (200 * 7)).toFixed(2)
     document.getElementById("earnMonth").innerHTML = (data.USD * (200 * 30)).toFixed(2)
   });
 }
 const getSlpMeta = async () => {
    fetch('https://min-api.cryptocompare.com/data/price?fsym=SLP&tsyms=USD')
   .then(response => response.json())
   .then(data => {
     console.log(data);
     document.getElementById("earnDay").innerHTML = (data.USD * 300).toFixed(2)
     document.getElementById("earnWeek").innerHTML = (data.USD * (300 * 7)).toFixed(2)
     document.getElementById("earnMonth").innerHTML = (data.USD * (300 * 30)).toFixed(2)
   });
 }

const getCcar = async () => {
  fetch('https://min-api.cryptocompare.com/data/price?fsym=CCAR&tsyms=USD')
 .then(response => response.json())
 .then(data => {
   console.log(data);
   document.getElementById("earnDay").innerHTML = (data.USD * cars).toFixed(2)
   document.getElementById("earnWeek").innerHTML = (data.USD * (cars * 7)).toFixed(2)
   document.getElementById("earnMonth").innerHTML = (data.USD * (cars * 30)).toFixed(2)
 });
}

 if (team == "cheap")
 {
    getSlpCheap();
 }
 else if (team == "good")
 {
    getSlpGood();
 }
 else if (team == "meta")
 {
    getSlpMeta();
 }
 else if (team == "car")
 {
   getCcar();
 }
