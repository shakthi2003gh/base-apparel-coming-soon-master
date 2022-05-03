const button = document.querySelector(".button");

button.addEventListener("click", (e) => {
  const inputBlock = e.target.closest(".input-block");
  let input = inputBlock
    .querySelector('input[type="email"]')
    .value.trim()
    .toLowerCase();
  console.log(input);

  if (input.includes("@") && input.endsWith(".com")) {
    inputBlock.classList.remove("invalid");
    inputBlock.querySelector('input[type="email"]').value = "";
  } else inputBlock.classList.add("invalid");
});
