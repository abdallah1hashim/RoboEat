let btn = document.querySelectorAll(".btn");
let form = document.forms[0];

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

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (!$("input[name=name]").val()) {
    alert("Name field is required.");
    return;
  }
  if (!$("input[name=email]").val()) {
    alert("Email field is required.");
    return;
  }

  if (!$("input[name=phone]").val()) {
    alert("Phone field is required.");
    return;
  }
  if (!$("textarea[name=message]").val()) {
    alert("Message field is required.");
    return;
  }
  $("#success_message").show();
});
