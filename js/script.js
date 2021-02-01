var theme = document.querySelector("section").classList;
var toggle = document.querySelector(".slider");
var isToggle = document.querySelector("#toggle-check");
toggle.addEventListener("click", function () {
  if (isToggle.checked) {
    isToggle.checked = false;
    theme.remove("light-theme");
    theme.add("dark-theme");
  } else {
    isToggle.checked = true;
    theme.remove("dark-theme");
    theme.add("light-theme");
  }
});
