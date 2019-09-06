// Stocks API

const key = "7VBLZ89I6SVAI9PE";
const symbol01 = document.querySelector("#symbol01").innerText.toUpperCase();
const symbol01Amount = 5.192;
const symbolValue = document.querySelector("#symbol01-value");
const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol01}&interval=10min&apikey=7VBLZ89I6SVAI9PE`;

// fetch(url)
// .then(data => {return data.json()})
// .then(res => {
//   symbolValue.innerText = (parseFloat(res["Global Quote"]["05. price"]) * symbol01Amount).toFixed(3);
//   console.log(res);
// });