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