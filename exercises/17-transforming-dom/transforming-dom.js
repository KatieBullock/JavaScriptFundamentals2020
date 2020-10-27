/**
 * You will follow the instructions in the exercises/17-transforming-dom/transforming-dom.html
 * to transform various elements on the page in different ways.
 * You may modify the HTML to add ids, classes, data attributes, etc.
 */

(function() {

  let firstAlert = document.querySelector(".alert-danger");
  firstAlert.setAttribute("role", "alert");
  console.log(firstAlert);
  
  let linkAlert = document.querySelector("[data-link]");
  linkAlert.href = ("https://developer.mozilla.org/en-US/docs/Web/JavaScript");
  
  let successAlert = document.querySelector(".alert-success");
  successAlert.textContent = "I am victorious!";
  
  let changeBackground = document.querySelector(".alert-info");
  changeBackground.style.backgroundColor = ("turquoise");
  
  let changeTextColor = document.querySelector("[data-change-text]");
  changeTextColor.classList.add("alert-warning");
  changeTextColor.classList.remove("alert-danger");
  
  let hiddenDiv = document.querySelector("[data-hide]");
  hiddenDiv.style.display = ("none");
  
  let showDiv = document.querySelector("[data-peek]");
  console.log(showDiv);
  showDiv.classList.remove("hidden");
  
  let button = document.querySelector(".btn");
  let checkBlue = document.querySelector("[data-check-blue]");
  if (button.classList.contains("btn-primary")) {
    checkBlue.textContent = ("✓ blue");
  }
  
})(); 