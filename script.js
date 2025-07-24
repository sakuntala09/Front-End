document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (name.length < 3) {
    alert("Name must be at least 3 characters!");
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert("Please enter a valid email!");
    return;
  }

  if (message.length < 10) {
    alert("Message must be at least 10 characters!");
    return;
  }

  alert("Form submitted successfully!");
  this.reset();
});

document.getElementById("addTaskBtn").addEventListener("click", function() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  if (taskInput.value.trim() === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `
    <span>${taskInput.value}</span>
    <button class="delete-btn">Delete</button>
  `;

  taskList.appendChild(li);
  taskInput.value = "";

  li.querySelector(".delete-btn").addEventListener("click", function() {
    li.remove();
  });
});