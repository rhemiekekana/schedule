
//Creating a 2D array 365 days with four days in each array
const daysArray = [];
for (let i = 1; i <= 365; i += 4) {
  daysArray.push([i, i + 1, i + 2, i + 3]);
}
console.log(`Days array: ${daysArray}`);

// setting search date
let dateSearch = document.querySelector('input[type="date"]');
let stat = document.getElementById('status');
let date = document.getElementById('date');
let remaining = document.getElementById('remaining');
let message = document.getElementById('message');
let image = document.getElementById('displayImage');
let quoteText = document.getElementById('quote');
let author = document.getElementById('author');
let startDay = new Date("2024/05/05");
let today = new Date();
let Difference_In_Time;
let Difference_In_Days;
let remainingDays;
let daysIndex;
let quotes = [];

calculateDays(startDay, today);

function getDate(){
  let searchDate = dateSearch.value;
  console.log(`Search date: ${searchDate}`);
  today =  new Date(searchDate);
  calculateDays(startDay, today);
  console.log(`Today: ${today}`)
  return today;
}

function calculateDays(){
  Difference_In_Time =  today.getTime() - startDay.getTime();
  Difference_In_Days = Math.round(Difference_In_Time / (1000 * 3600 * 24));
  //find index of number of days from daysArray
  let searchNumber = Difference_In_Days;
  console.log(`SearchNumber: ${searchNumber}`);
  let index = daysArray.findIndex((subArray) => subArray.includes(searchNumber));
  console.log(`Index: ${index}`);
  daysIndex = daysArray[index].indexOf(searchNumber);
  console.log(`DaysIndex: ${daysIndex}`);
  remainingDays = daysArray[index].length - (daysIndex);
  console.log(`RemainingDays: ${remainingDays}`);
  printResults(index);
  console.log(daysArray);
  console.log(index);
  return index;
}

function printResults(index){
  if (index % 2) {
    stat.innerHTML = "We are off!";
    date.innerHTML = `${today.toLocaleDateString('en-ZA', { weekday: 'short' })} ${today.getDate()}/${(today.getMonth() + 1).toString().padStart(2, '0')}/${today.getFullYear()}`;
    remaining.innerHTML = `${remainingDays} days left`;
    message.innerHTML = "Breathe. Relax. Pull yourself towards yourself.";
    image.src="./1694_U1RVRElPIEtBVCAzOTItMTg.jpg";
} else {
   //check if it's the third or fourth day first
   if (daysIndex > 1){
    stat.innerHTML = "We are working night shift!";
    date.innerHTML = `${today.toLocaleDateString('en-ZA', { weekday: 'short' })} ${today.getDate()}/${(today.getMonth() + 1).toString().padStart(2, '0')}/${today.getFullYear()}`;
    remaining.innerHTML = `${remainingDays} days left`;
    message.innerHTML = "Time to tackle the daily grind."
    image.src = "./night-shift.png";
   } else {
    stat.innerHTML = "We are working!";
    date.innerHTML = `${today.toLocaleDateString('en-ZA', { weekday: 'short' })} ${today.getDate()}/${(today.getMonth() + 1).toString().padStart(2, '0')}/${today.getFullYear()}`;
    remaining.innerHTML = `${remainingDays} days left`;
    message.innerHTML = "Time to tackle the daily grind."
    image.src = "./Businessman run for going back work.jpg";
   }
}
}

//Quote generator

async function getQuotes () {
  fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    quotes.push(data);
    generateQuote();
  });
}


getQuotes();



//Generate random quote
function generateQuote() {
  let randomQuote = quotes[0][Math.floor(Math.random() * quotes[0].length)];
  
  quoteText.innerHTML = `${randomQuote.text}`;
  author.innerHTML = `- ${randomQuote.author.slice(0, -10)}`;
  console.log(randomQuote);
}





