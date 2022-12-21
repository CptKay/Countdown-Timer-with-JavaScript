"use strict";

function getInput() {
  const input = document.getElementById("input").value;
  const deadline = new Date(input);
  return deadline;
}

function initializeClock() {
  const deadline = getInput();
  (deadline < Date.now()) 
 
  {
    const timerId = setInterval(() => {
      const now = new Date().getTime();
      const timeDiff = deadline - now;
      let february = 0;
     

      
      let days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      let months = Math.floor(days / days[deadline.getMonth()]);
      
      days %= days[deadline.getMonth()];
      

      const currentDate = new Date();
      if (currentDate.getMonth() < deadline.getMonth() && currentDate.getDate() === deadline.getDate()) {
        days = 0;
        const monthDiff = deadline.getMonth() - currentDate.getMonth();
        months = monthDiff;
      } else if (currentDate.getDate() < deadline.getDate() && currentDate.getMonth() === deadline.getMonth()) {
        const daysDiff = deadline.getDate() - currentDate.getDate();
        days = daysDiff;
        months = 0;
      } else if (currentDate.getMonth() < deadline.getMonth() && currentDate.getDate() < deadline.getDate()) {
        const daysDiff = deadline.getDate() - currentDate.getDate();
        const monthsDiff = deadline.getMonth() - currentDate.getMonth();
        days = daysDiff;
        months = monthsDiff;
      }
      
      const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
      document.getElementById("day").textContent = days;
      document.getElementById("month").textContent = months;
      document.getElementById("hour").textContent = hours;
      document.getElementById("minute").textContent = minutes;
      document.getElementById("second").textContent = seconds;
      if (timeDiff < 0) {
        clearInterval(timerId);
        const event = document.getElementById("event");
        document.getElementById("is-it-time").textContent = `${event} is here!`;
        document.getElementById("month").textContent = "0";
        document.getElementById("day").textContent = "0";
        document.getElementById("hour").textContent = "0";
        document.getElementById("minute").textContent = "0";
        document.getElementById("second").textContent = "0";
      }

      const stopBtn = document.getElementById("stop-btn");
      stopBtn.addEventListener("click", function() {
        clearInterval(timerId)
      });
    }, 1000);
  }
}

const startBtn = document.getElementById("start-btn");
startBtn.addEventListener("click", initializeClock);