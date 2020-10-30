(function () {
  const container = document.querySelector(".container");
  const button = document.querySelector("#button");
  
  button.addEventListener("click", () => {
    const textbox = document.querySelector("#textbox");
    const alert = document.createElement("p");
    alert.textContent = `Searching for ${textbox.value}...`;
    container.appendChild(alert);
    button.disabled = "disabled";
  });
})();