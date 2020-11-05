(function () {
  /**
   * As a user, I should be able to click on the a button to see random dog images.
   * Please use fetch in this example.
   *
   * You will be making an HTTP request to this API:
   * https://dog.ceo/api/breeds/image/random
   *
   * You should expect this as a response:
   * {
   *    "status": "success",
   *    "message": "https://images.dog.ceo/breeds/poodle-toy/n02113624_9550.jpg"
   * }
   */
let randomizer = document.querySelector("#randomizer");
let image = document.querySelector("#image");
image.src = "https://images.dog.ceo/breeds/poodle-toy/n02113624_9550.jpg";

const dogPictures = () => {

  fetch("https://dog.ceo/api/breeds/image/random", {
    method: "GET"
  })
  .then(response => response.json())
  .then(response => {
    image.src = response.message;
  })
  .catch(() => {
   let dogPicturePara = document.querySelector("#dogPicturePara");
   const htmlStr = '<div class="text-danger">We\'re sorry, but an unexpected error occurred</div>';
   dogPicturePara.insertAdjacentHTML('beforeend', htmlStr);
  });

};

randomizer.addEventListener("click", dogPictures);

})();
