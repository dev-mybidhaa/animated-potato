// Multi-step signup/login logic for Kalamu
function showStep(step, mode) {
  // Hide all steps
  document.querySelectorAll('.signup-step').forEach(el => el.style.display = 'none');
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
    // Add a fun bounce to the mascot
    document.querySelectorAll('.kalamu-mascot-animation').forEach(mascot => {
      mascot.style.animation = 'mascot-bounce 1s infinite';
    });
    return;
  }
  // Default to step 1
  document.querySelector('.step-1').style.display = 'block';
}
// On page load, show step 1
window.onload = function() {
  showStep(1);
}; 