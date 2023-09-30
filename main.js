function submit() {
  const input = {
    username: document.getElementById("input-name"),
    email: document.getElementById("input-email"),
    message: document.getElementById("input-text"),
  };

  for (let i = 0; i < 3; i++) {
    if (Object.values(input)[i].value == "") {
      Object.values(input)[i].classList.add("error");
    } else {
      Object.values(input)[i].classList.remove("error");
    }
  }
  if (document.querySelectorAll(".error").length == 0) {
    success();
  }
}

function success() {
  const SENT = '<h2>Success!</h2><p>Thank you!</p>';
  const ALERT = document.querySelector('.col1');
  
  ALERT.innerHTML = SENT;
  ALERT.classList.add('center');
}

const SUBMIT = document.getElementById("submit");

SUBMIT.addEventListener("click", submit);
