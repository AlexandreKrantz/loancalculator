document.getElementById("loan-form").addEventListener("submit", function (e) {
  e.preventDefault();

  document.getElementById("results").style.display = "none";
  document.getElementById("loading").style.display = "block";
  setTimeout(calculateResults, 1500);
});

const card = document.querySelector(".card");
const heading = document.querySelector(".heading");

function calculateResults() {
  document.getElementById("loading").style.display = "none";

  // UI vars
  const amountEL = document.getElementById("amount");
  const interestEL = document.getElementById("interest");
  const yearsEL = document.getElementById("years");
  const monthlyPaymentEL = document.getElementById("monthly-payment");
  const totalPaymentEL = document.getElementById("total-payment");
  const totalInterestEL = document.getElementById("total-interest");

  const principal = parseFloat(amountEL.value);
  const calculatedInterest = parseFloat(interest.value / 100 / 12);
  const calculatedPayments = parseFloat(years.value) * 12;

  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal * x * calculatedInterest) / (x - 1);

  if (isFinite(monthly)) {
    document.getElementById("results").style.display = "none";
    monthlyPaymentEL.value = monthly.toFixed(2);
    totalPaymentEL.value = (monthly * calculatedPayments).toFixed(2);
    totalInterestEL.value = (monthly * calculatedPayments - principal).toFixed(
      2
    );
  } else {
    showError("Please check your numbers");
  }
}

function showError(errorMessage) {
  const errorDiv = document.createElement("div");
  errorDiv.className = "alert alert-danger";
  errorDiv.appendChild(document.createTextNode(errorMessage));

  card.insertBefore(errorDiv, heading);
  const clearError = () => errorDiv.remove();
  setTimeout(clearError, 5000);
}
