/**
 *
 * As a user, I should be able to a pick Rick and Morty character from a drop-down, and it should display an image of that character.
 *
 * For this exercise, use the API to populate the dropdown.
 * After the dropdown has been populated, if the user selects a character an image should appear displaying the correct character.
 *
 *
 * Create a list of characters using the API
 * This is the URL for the API you will be using. The method should be GET.
 * To get all characters use this
 * https://rickandmortyapi.com/documentation/#get-all-characters
 * To get an individual character use this:
 * https://rickandmortyapi.com/documentation/#get-a-single-character
 *
 * Use the AXIOS library to make AJAX requests.
 */
(function () {
  const dropdown = document.querySelector("#dropdown");
  const picture = document.querySelector("#get-schwifty");
  const title = document.querySelector("#title-head");
  picture.src = "https://i.ytimg.com/vi/UFFi9PWKDjg/maxresdefault.jpg";

  axios({
    url: "https://rickandmortyapi.com/api/character/?page=1",
    method: "GET",
  })
    .then((response) => {
      let characters = response.data.results;
      characters.forEach((character) => {
        const { name } = character;
        let option = document.createElement("option");
        option.textContent = name;
        option.value = name;
        dropdown.appendChild(option);
      });
      dropdown.addEventListener("change", () => {
        let characterOption = document.querySelector("#dropdown").value;
        characters.find((character) => {
          if (character["name"] === characterOption) {
            picture.src = character.image;
            title.textContent = characterOption;
          }
        });
      });
    })
    .catch((error) => {
      console.log(error);
    });
})();
