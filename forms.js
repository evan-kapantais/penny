// Handle Label - Input Behaviour

const inputs = document.querySelectorAll("form input");

inputs.forEach(input => {
  input.addEventListener("focus", handleInputFocus);
  input.addEventListener("blur", handleInputBlur);
});

function handleInputFocus() {
  const ownLabel = this.parentNode.querySelector("label");

  ownLabel.classList.add("label-top");
}

function handleInputBlur() {
  const ownLabel = this.parentNode.querySelector("label");

  if (this.value == "") {
    ownLabel.classList.remove("label-top");
  } else {
    ownLabel.classList.add("label-top");
  }
}

const addSymbolForm = document.querySelector("#add-stock");
addSymbolForm.addEventListener("submit", addNewSymbol);

function addNewSymbol(e) {
  e.preventDefault();
  
  const symbolValue = addSymbolForm.querySelector("#symbol-input").value.toUpperCase(),
  stockAmount = addSymbolForm.querySelector("#amount-input").value,
  investmentsTab = document.querySelector("#investments"),
  firstSymbolContainer = document.querySelector(".form-container");

  setTimeout(() => {
    firstSymbolContainer.style.display = "none";
    investmentsTab.classList.remove("no-overflow");
  }, 500);

  firstSymbolContainer.style.transform = "translateY(100vh)";
}