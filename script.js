document.getElementById("next").onclick = function () {
  let lists = document.querySelectorAll(".hero");
  document.getElementsByClassName("hero-list").appendChild(lists[0]);
};
document.getElementById("prev").onclick = function () {
  let lists = document.querySelectorAll(".hero");
  document.getElementsByClassName("hero-list").prepend(lists[lists.length - 1]);
};
