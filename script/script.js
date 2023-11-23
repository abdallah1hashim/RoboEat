let btn = document.querySelectorAll(".btn");
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    if (btn[i].classList.contains("like")) {
      btn[i].innerHTML = `<i class="fa-solid fa-thumbs-down"></i>
      <span>Dislike</span>`;
      btn[i].classList.remove("like");
      btn[i].classList.add("dislike");
    } else {
      btn[i].innerHTML = `<i class="fa-solid fa-thumbs-up"></i>
      <span>Like</span>`;
      btn[i].classList.remove("dislike");
      btn[i].classList.add("like");
    }
  });
}
