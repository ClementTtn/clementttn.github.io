let bouton_desactiver = document.getElementById("bouton_desactiver");
bouton_desactiver.addEventListener("click", (e) => {
  if(getComputedStyle(e.currentTarget).visibility != "hidden"){
    e.currentTarget.style.visibility = "hidden";
  } else {
    e.currentTarget.style.visibility = "visible";
  }
})