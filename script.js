// Alert Button
document.getElementById('Button').addEventListener('click', function() {
  alert('Hello! You clicked the button!');
});

// Form Submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevents page reload
  const name = this.querySelector('input[type="text"]').value;
  const email = this.querySelector('input[type="email"]').value;
  console.log(`Form submitted by ${name} (${email})`);
  alert(`Thanks, ${name}! We'll contact you soon.`);
  this.reset(); // Clears the form
});