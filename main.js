
//Creating a 2D array 365 days with four days in each array
const daysArray = [];
for (let i = 1; i <= 365; i += 4) {
  daysArray.push([i, i + 1, i + 2, i + 3]);
}

// setting search date
let dateSearch = document.querySelector('input[type="date"]');
let stat = document.getElementById('status');
let date = document.getElementById('date');
let remaining = document.getElementById('remaining');
let message = document.getElementById('message');
let image = document.getElementById('displayImage');
let startDay = new Date("2024/05/05");
let today = new Date();
let Difference_In_Time;
let Difference_In_Days;
let remainingDays;

calculateDays(startDay, today);

function getDate(){
  let searchDate = dateSearch.value;
  console.log(searchDate);
  today =  new Date(searchDate);
  calculateDays(startDay, today);
  return today;
}

function calculateDays(){
  Difference_In_Time =  today.getTime() - startDay.getTime();
  Difference_In_Days = Math.round(Difference_In_Time / (1000 * 3600 * 24));
  //find index of number of days from daysArray
  let searchNumber = Difference_In_Days;
  let index = daysArray.findIndex((subArray) => subArray.includes(searchNumber));
  let daysIndex = daysArray[index].indexOf(searchNumber);
  remainingDays = daysArray[index].length - (daysIndex);
  printResults(index);
  return index;
}

function printResults(index){
  if (index % 2) {
    console.log("We are off");
    stat.innerHTML = "We are off!";
    date.innerHTML = `${today.toLocaleDateString('en-ZA', { weekday: 'short' })} ${today.getDate()}/${(today.getMonth() + 1).toString().padStart(2, '0')}/${today.getFullYear()}`;
    remaining.innerHTML = `${remainingDays} days left`;
    message.innerHTML = "Breathe. Relax. Pull yourself towards yourself.";
    image.src="./1694_U1RVRElPIEtBVCAzOTItMTg.jpg";
} else {
    console.log("We are working");
    stat.innerHTML = "We are working!";
    date.innerHTML = `${today.toLocaleDateString('en-ZA', { weekday: 'short' })} ${today.getDate()}/${(today.getMonth() + 1).toString().padStart(2, '0')}/${today.getFullYear()}`;
    remaining.innerHTML = `${remainingDays} days left`;
    message.innerHTML = "Time to tackle the daily grind."
    image.src = "./Businessman run for going back work.jpg";
}
}


