
const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

function runTheClock(){


  var date = new Date(); //date object

  //get hour, minutes and seconds from date object
  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  console.log("Hour: " + hr + " Minute: " + min + " Second: " + sec);

 
  let hrPosition = (hr*30)+(min*30/60); // divide 1 hour segment by 60 minutes
  let minPosition = (min*6)+(sec*6/60); // divide 1 min section by 60 seconds
  let secPosition = sec*6;


  HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
  MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
  SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}


var interval = setInterval(runTheClock, 1000); //1000 milliseconds is 1 second.
