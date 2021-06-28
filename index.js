
const btns = document.querySelectorAll(".num-button");
const allBtns = document.querySelectorAll(".button");
const resultBox = document.querySelector("#result-box");
const clearBtn = document.querySelector("#clear")
const total = document.querySelector("#total");
const btnSpread = [...btns];
const allBtnSpread = [...allBtns];

// For Number Inputs
btnSpread.forEach((button, i) => {
  button.addEventListener("click", () => {
    // Inner Values for calculator
    if (resultBox.innerHTML == "0") {
      resultBox.innerHTML = "";
    }
    let value = btns[i].innerHTML;
    resultBox.innerHTML += value;
  });
});

// Function to evalute Strings
function evaluate(fn) {
  return new Function("return " + fn)();
}
// To calculate All Input
total.addEventListener("click", () => {
  let allInputs = resultBox.innerHTML;
  resultBox.innerHTML = evaluate(allInputs);
});

// Clear all Inputs
clearBtn.addEventListener("click", () => {
  resultBox.innerHTML = "0";
});

// Add Css Style Animation
allBtnSpread.forEach((button, i) => {
  button.addEventListener("click", () => {
    let element = allBtns[i];
    element.style.boxShadow =
      "inset -6px -6px 16px 0 rgba(255, 255, 255, .5), inset 6px 6px 16px 0 rgba(209, 205, 199, .5)";

    setTimeout(function () {
      element.style.boxShadow =
        " 6px 6px 16px 0 rgba(209, 205, 199, .5),-6px -6px 16px 0 rgba(255, 255, 255, .5)";
    }, 0300);
  });
});
