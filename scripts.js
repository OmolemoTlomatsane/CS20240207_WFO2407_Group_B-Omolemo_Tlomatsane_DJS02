const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  result.innerText = dividend / divider;

  
  // Error handling
  try {
    // Check if inputs are empty
    if (dividend.trim() === "" || divider.trim() === "") {
      throw new Error("Input boxes are empty. Please enter numbers.");
    }

    // Check if inputs are valid numbers
    if (isNaN(dividend) || isNaN(divider)) {
      throw new Error("Please enter valid numbers.");
    }

    // Convert inputs to numbers
    let dividendNum = parseInt(dividend);
    let dividerNum = parseInt(divider);

    // Convert negative values to positive
    dividendNum = Math.abs(dividendNum);
    dividerNum = Math.abs(dividerNum);

    // Perform the division
    if (dividerNum === 0) {
      throw new Error("Divider cannot be zero.");
    }

    result.innerText = dividendNum / dividerNum;

  } catch (error) {
    // Display the error message in a pop-up
    alert(error.message);
  }
});