const cl = console.log;

const purchasePrice = document.getElementById("purchase-price");
const currentPrice = document.getElementById("current-price");
const stockQuantity = document.getElementById("stock-quantity");

const outputSection = document.getElementById("output-section");

const checkBtn = document.getElementById("checkBtn");
const errorMsg = document.getElementById("errorMsg");

const makeVisible = (element) => {
  element.classList.remove("notVisible");
};

const notVisible = (element) => {
  element.classList.add("notVisible");
};

checkBtn.addEventListener("click", function () {
  notVisible(outputSection);
  notVisible(errorMsg);
  document.body.style.background = `url("../Assets/bg-4.jpg") no-repeat center center/cover`;

  const purchase = purchasePrice.value;
  const quantity = stockQuantity.value;
  const current = currentPrice.value;

  if (purchase < 1) {
    errorMsg.textContent = "Check Purchase Price Input ";
    makeVisible(errorMsg);
    return;
  } else if (quantity < 1) {
    errorMsg.textContent = "Check Stock Quantity Input ";
    makeVisible(errorMsg);
    return;
  } else if (current < 1) {
    errorMsg.textContent = "Check Current Stock Price Input ";
    makeVisible(errorMsg);
    return;
  }

  const totalPurchase = purchase * quantity;
  const currentTotal = current * quantity;
  let ans, percent;

  if (totalPurchase > currentTotal) {
    percent = ((totalPurchase - currentTotal) / totalPurchase) * 100;

    ans = ` "${percent.toFixed(2)}%" loss i.e Total LOSS is "${
      totalPurchase - currentTotal
    }" Rs`;
  } else {
    percent = ((currentTotal - totalPurchase) / totalPurchase) * 100;

    ans = ` "${percent.toFixed(2)}%" profit i.e Total PROFIT is "${
      currentTotal - totalPurchase
    }" Rs `;
  }

  if (percent >= Number(50) && ans.includes("LOSS")) {
    document.body.style.background = `url("../Assets/bg-sad.gif") no-repeat center center/cover`;
  } 
  else if (percent >= Number(50) && ans.includes("PROFIT")) {
    document.body.style.background = `url("../Assets/bg-happy.gif") no-repeat center center/cover`;
  }

  makeVisible(outputSection);
  outputSection.querySelector("h2").textContent = ans;
});
