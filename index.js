// Stocks API

const key = "7VBLZ89I6SVAI9PE";
const symbol01 = document.querySelector("#symbol01").innerText;
const symbol01Amount = 5.192;
const symbolValue = document.querySelector("#symbol01-value");
const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol01}&interval=10min&apikey=7VBLZ89I6SVAI9PE`;

fetch(url)
.then(data => {return data.json()})
.then(res => {
  // console.log(res);
  symbolValue.innerText = (parseFloat(res["Global Quote"]["05. price"]) * symbol01Amount).toFixed(3);
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

// (function renderSavings() {
//   let totalSavings = 1600,
//   totalInvestments = 460.188,
//   totalEquity = 612.87,
//   totalWorking = 738.282;

//   let savingsElem = document.querySelector("#total-savings");
//   let InvestmentsElem = document.querySelector("#total-investments");
//   let equityElem = document.querySelector("#total-equity");
//   let workingElem = document.querySelector("#total-working");


//   let savingsCount = 0;
//   let investmentsCount = 0;
//   let equityCount = 0;
//   let workingCount = 0;

//   setInterval(() => {
//     if (savingsCount <= totalSavings) {
//       savingsElem.innerText = savingsCount;
//       savingsCount += 20;
//     }
//     if (investmentsCount <= Math.floor(totalInvestments)) {
//       InvestmentsElem.innerText = investmentsCount;
//       investmentsCount += 20;
//     } else if (investmentsCount <= totalInvestments) {
//       InvestmentsElem.innerText = investmentsCount;
//       investmentsCount += .1;
//     }
//     if (equityCount <= totalEquity) {
//       equityElem.innerText = equityCount;
//       equityCount += 20;
//     }
//     if (workingCount <= totalWorking) {
//       workingElem.innerText = workingCount;
//       workingCount += 20;
//     }  
//   }, 20);
// })();

// Handle Nav Buttons

navButtons.forEach(b => {
  b.addEventListener("click", focusNavButton);
});

function focusNavButton() {

  navButtons.forEach(b => b.classList.remove("focused"));
  this.classList.add("focused");
}
