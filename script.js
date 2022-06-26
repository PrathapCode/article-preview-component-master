function showhide() {

  var x = document.getElementById("direction");

  if (share.style.visibility === "hidden") {
    share.style.visibility = "visible";
    direction.style.backgroundColor = "hsl(214, 17%, 51%)";
    arrow.style.filter = "brightness(500%)"
  } else {
    share.style.visibility = "hidden";
    direction.style.backgroundColor = "hsl(210, 46%, 95%)";
    arrow.style.filter = "none"
  }

}
