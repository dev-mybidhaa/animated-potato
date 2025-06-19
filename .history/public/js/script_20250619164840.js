function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

function showFeature(feature) {
  alert(`This is a placeholder for the ${feature} feature. More interactivity coming soon!`);
} 