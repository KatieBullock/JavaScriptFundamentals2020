/**
 * You have three challenges to solve below with Vanilla JavaScript.
 * You are allowed to make changes to the HTML and CSS.
 */

/**
 * Challenge 1: Alert Me
 * When the clicks on the button that says "Alert Me!", it should display an alert.
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Window/alert
 */

/**
 * Challenge 2: Disable a button that will charge a credit card.
 *
 * To prevent users from charging the credit card more than once:
 * 1. Disable the button when it is clicked.
 * 2. Change the text to say e.g. "Loading ..." once it is clicked.
 */

/**
 * Challenge 3: Show comments for the news story.
 *
 * When the user clicks on the "View Comments" button, the comment section should appear.
 * Right now, the comments are hidden because they have the class ".hidden",
 * but you can switch up the HTML so that it uses inline styles if you like.
 *
 * BONUS: Clicking on the button should toggle instead of just show the comments.
 * If the comments are open, change the button text from "View Comments" to "Hide Comments".
 */

/**
 * Challenge 4: Rendering what a user is typing on the page.
 *
 * When the user types inside the textbook labeled "Enter mystery text here",
 * it should display what the user is typing in the <div></div> tags below.
 */

/**
 * Challenge 5: Display the results of the world's most pointless search engine.
 *
 * When the user types in the textbook and either clicks "Search" button or hits the enter key,
 * display the message "No results for ___ found" inside of this <p></p> below.
 * For example, if the user searches for "Indian Ocean", display "No results for Indian Ocean found".
 * (Since there are no oceans near Albany, NY, the search engine should
 * display the "No results for ___ found" message every time.)
 *
 * The exercise must be completed with a form handler
 * and you must prevent the page from refreshing when the form is submitted.
 */

/**
 * Challenge 6: Agree to the terms and conditions
 *
 * Whenever the user clicks the "Continue" button, if she has not agreed to the terms,
 * the error "You must agree to the terms and conditions" should appear
 * and the label "I Agree to the Terms and Conditions" should turn red.
 * If she has, then display "Thank you for signing up".
 *
 * To start, you will need to hide some element on the page and change the input's classes.
 */

/**
 * Challenge 7: Add pagination to the student table.
 *
 * First, when the page initially loads, only the first 10 students should be visible.
 * (That is, every student row that has data-group="1"). You can just use CSS / HTML to do this.
 *
 * Second, clicking on the pagination below should show and hide different students in the table:
 * - Clicking on the "«" and "1" buttons should show everything in data-group="1" and hide everything in data-group="2".
 * - Clicking on the "2" and "»" buttons should show everything in data-group="2" and hide everything in data-group="1".
 */


(function() {
  // Challenge 1: Alert Me
  let alertButton = document.querySelector(`[data-target="alert-me"]`);
  alertButton.addEventListener("click", () => {
    window.alert("Alert Me!");
  });

  // Challenge 2: Disable a button that will charge a credit card
  let creditCardButton = document.querySelector(`[data-target="credit-card"]`);
  creditCardButton.addEventListener("click", () => {
    creditCardButton.disabled = "disabled";
    creditCardButton.textContent = "Loading...";
  });

  // Challenge 3: Show comments for the news story
  let viewCommentsButton = document.querySelector(`[data-target="comments"]`);
  let toggleComments = () => {
    let commentSection = document.querySelector(`[data-target="comment-section"]`);
    if (commentSection.classList.contains("hidden")) {
      commentSection.classList.remove("hidden");
      viewCommentsButton.textContent = "Hide Comments";
    } else {
      commentSection.classList.add("hidden");
      viewCommentsButton.textContent = "View Comments";
    }
  };
  viewCommentsButton.addEventListener("click", toggleComments);

  // Challenge 4: Rendering what a user is typing on the page
  let mysteryText = document.querySelector(`[data-target="mystery-text"]`);
  mysteryText.addEventListener("input", (event) => {
    let mysteryTextDiv = document.querySelector(`[data-target="mystery-text-div"]`);
    mysteryTextDiv.textContent = event.target.value;
  });

  // Challenge 5: Display the results of the world's most pointless search engine
  let form = document.querySelector(".form-group");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let searchDisplay = document.querySelector(`[data-target="search-result"]`);
    let searchBox = document.querySelector("#searchBox");
    searchDisplay.textContent = `No results for ${searchBox.value} found`;
  });

  //Challenge 6: Agree to the terms and conditions
  let checkbox = document.querySelector("#terms");
  let continueButton = document.querySelector("#continueButton");
  continueButton.addEventListener("click", (event) => {
    event.preventDefault();
    if (checkbox.checked) {
      document.querySelector("#sign-up-success").classList.remove("hidden");
      document.querySelector("#sign-up-failure").classList.add("hidden");
      checkbox.classList.remove("is-invalid");
      continueButton.disabled = "disabled";
    } else {
      document.querySelector("#sign-up-failure").classList.remove("hidden");
      document.querySelector("#sign-up-success").classList.add("hidden");
      checkbox.classList.add("is-invalid");
    }
  });

  // Challenge 7: Add pagination to the student table
  let pageOne = Object.values(document.querySelectorAll(`[data-group="1"]`));
  let pageTwo = Object.values(document.querySelectorAll(`[data-group="2"]`));
  
  pageTwo.forEach((cell) => {
    cell.classList.add("hidden");
  });

  document.querySelector("#back-button").addEventListener("click", () => {
    pageTwo.forEach((cell) => {
      cell.classList.add("hidden");
    });
    pageOne.forEach((cell) => {
      cell.classList.remove("hidden");
    });
  });
  document.querySelector("#one-button").addEventListener("click", () => {
    pageTwo.forEach((cell) => {
      cell.classList.add("hidden");
    });
    pageOne.forEach((cell) => {
      cell.classList.remove("hidden");
    });
  });
  document.querySelector("#two-button").addEventListener("click", () => {
    pageOne.forEach((cell) => {
      cell.classList.add("hidden");
    });
    pageTwo.forEach((cell) => {
      cell.classList.remove("hidden");
    });
  });
  document.querySelector("#forward-button").addEventListener("click", () => {
    pageOne.forEach((cell) => {
      cell.classList.add("hidden");
    });
    pageTwo.forEach((cell) => {
      cell.classList.remove("hidden");
    });
  });
})();