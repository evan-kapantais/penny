// Stocks API

const key = "7VBLZ89I6SVAI9PE";
const symbol01 = document.querySelector("#symbol01").innerText.toUpperCase();
const symbol01Amount = 5.192;
const symbolValue = document.querySelector("#symbol01-value");
const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol01}&interval=10min&apikey=7VBLZ89I6SVAI9PE`;

fetch(url)
.then(data => {return data.json()})
.then(res => {
  // symbolValue.innerText = (parseFloat(res["Global Quote"]["05. price"]) * symbol01Amount).toFixed(3);
  console.log(res);
});

// Init Feather Icons

feather.replace();

// Handle Tab Change

const navButtons = document.querySelectorAll(".nav-button");

navButtons.forEach(n => {
  n.addEventListener("click", showTab);
});

function showTab() {
  const tabs = document.querySelectorAll(".tabcontent");
  tabs.forEach(tab => {
    tab.style.display = "none";
  });

  const tabToShow = this.querySelector("span").innerText.toLowerCase();
  const tab = document.querySelector(`#${tabToShow}`);

  tab.style.display = "block";
}

// TODO: Format Numbers

// TODO: Assets Class

// TODO: Render Count Up

// Handle Nav Buttons

navButtons.forEach(b => {
  b.addEventListener("click", focusNavButton);
});

function focusNavButton() {
  navButtons.forEach(b => b.classList.remove("focused"));
  this.classList.add("focused");
}

(function setActiveTab() {
  navButtons[1].classList.add("focused");
  document.querySelector("#investments").style.display = "block";
})();

var ctx = document.getElementById('ttwo-chart').getContext('2d');

var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['April', 'May', 'June', 'July', 'August', 'September'],
        datasets: [{
            label: 'Day',
            data: [6, 2, 5, 3, 6, 9],
            backgroundColor: [
                'rgba(255, 99, 132, .2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {

    }
});