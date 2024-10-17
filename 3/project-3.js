// Variables

const accordion = document.getElementsByClassName("content-container");

// Event Listeners
for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}
