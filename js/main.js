let bouton_desactiver = document.getElementById("bouton_desactiver");
bouton_desactiver.addEventListener("click", (e) => {
  if(getComputedStyle(e.currentTarget).visibility != "false"){
    e.currentTarget.disabled = "true";
  } else {
    e.currentTarget.style.visibility = "false";
  }
})