const toggleBtn = document.createElement("button");
toggleBtn.textContent = "Toggle Dark Mode";
toggleBtn.style.margin = "1rem";
document.body.prepend(toggleBtn);

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const location = document.getElementById("location").value.trim();
  const date = document.getElementById("date").value.trim();
  const guests = document.getElementById("guests").value.trim();

  if (!location || !date || !guests) {
    alert("Please fill in all the fields before searching");
    return;
  }

  alert(`Searching for ${guests} guest(s) in ${location} on ${date}`);
});
