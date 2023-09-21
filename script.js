const smtpMailKey = process.env.SMTP_MAIL_KEY;

window.addEventListener("scroll", function () {
  let navbar = document.querySelector(".navigation-bar");
  let scrollPosition = window.scrollY;
  let pageAccueilSection = document.getElementById("page-accueil");

  if (scrollPosition > pageAccueilSection.offsetHeight) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

function sendEmail() {
  Email.send({
    SecureToken: smtpMailKey,
    To: "magueth18@gmail.com",
    From: "magueth18@hotmail.com",
    Subject: document.getElementById("pnumber").value,
    Body:
      document.getElementById("message").value +
      document.getElementById("name").value,
  }).then((message) => alert(message));
}
