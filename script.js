alert("Welcome to my portfolio website!");

function darkMode(){
document.body.classList.toggle("dark");
}
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.querySelector('input[name="name"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const message = document.querySelector('textarea[name="message"]').value;

  fetch("http://localhost:5000/api/leads", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name,
      email,
      source: "portfolio",
      notes: message
    })
  })
  .then(res => res.json())
  .then(() => {
    alert("Message sent to CRM 🚀");
  })
  .catch(() => {
    alert("Error sending message ❌");
  });
});