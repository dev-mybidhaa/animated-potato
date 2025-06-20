// Multi-step signup/login logic for Kalamu
const totalSteps = 5;
const funFacts = [
  "Did you know? Octopuses have three hearts!",
  "Tip: Take short breaks while studying to help your brain!",
  "Fun Fact: Honey never spoils. Archaeologists have found 3000-year-old honey in ancient tombs!",
  "Tip: Draw a picture to help you remember new things!",
  "Did you know? Bananas are berries, but strawberries aren't!",
  "Tip: Ask questions if you're curious. That's how you learn!"
];
function showStep(step, mode) {
  // Hide all steps
  document.querySelectorAll('.signup-step').forEach(el => el.style.display = 'none');
  // Progress bar
  updateProgressBar(step);
  if (mode === 'login') {
    document.querySelector('.step-login').style.display = 'block';
    return;
  }
  if (step === 2 && mode === 'signup') {
    document.querySelector('.step-2').style.display = 'block';
    return;
  }
  if (step === 3) {
    document.querySelector('.step-3').style.display = 'block';
    return;
  }
  if (step === 4) {
    document.querySelector('.step-4').style.display = 'block';
    return;
  }
  if (step === 5) {
    document.querySelector('.step-5').style.display = 'block';
    // Add a fun bounce to the mascot
    document.querySelectorAll('.kalamu-mascot-animation').forEach(mascot => {
      mascot.style.animation = 'mascot-bounce 1s infinite';
    });
    return;
  }
  // Default to step 1
  document.querySelector('.step-1').style.display = 'block';
}
function updateProgressBar(step) {
  const progress = document.getElementById('signupProgress');
  if (progress) {
    let percent = 0;
    if (step === 'login') percent = 100;
    else if (step >= 1 && step <= totalSteps) percent = (step-1)/(totalSteps-1)*100;
    progress.style.width = percent + '%';
  }
}
// Show/hide password toggle
window.addEventListener('DOMContentLoaded', function() {
  showStep(1);
  const showPassword = document.getElementById('showPasswordToggle');
  if (showPassword) {
    showPassword.addEventListener('change', function() {
      const pw = document.getElementById('loginPassword');
      if (pw) pw.type = this.checked ? 'text' : 'password';
    });
  }
  // Fun fact rotation
  const funFactArea = document.getElementById('funFactArea');
  if (funFactArea) {
    let idx = Math.floor(Math.random()*funFacts.length);
    funFactArea.textContent = funFacts[idx];
    setInterval(() => {
      idx = (idx+1)%funFacts.length;
      funFactArea.textContent = funFacts[idx];
    }, 8000);
  }
});
// On page load, show step 1
window.onload = function() {
  showStep(1);
}; 