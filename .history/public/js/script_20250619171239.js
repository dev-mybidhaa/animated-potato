// Short Notes Modal Logic
function openNotesModal() {
  document.getElementById('notesModal').classList.remove('hidden');
  loadNotes();
}
function closeNotesModal() {
  document.getElementById('notesModal').classList.add('hidden');
}
function saveNote() {
  const input = document.getElementById('notesInput');
  const note = input.value.trim();
  if (!note) return;
  let notes = JSON.parse(localStorage.getItem('kalamuNotes') || '[]');
  notes.push(note);
  localStorage.setItem('kalamuNotes', JSON.stringify(notes));
  input.value = '';
  loadNotes();
}
function clearNotes() {
  localStorage.removeItem('kalamuNotes');
  loadNotes();
}
function loadNotes() {
  const notesList = document.getElementById('notesList');
  notesList.innerHTML = '';
  let notes = JSON.parse(localStorage.getItem('kalamuNotes') || '[]');
  notes.forEach((note, idx) => {
    const li = document.createElement('li');
    li.textContent = note;
    notesList.appendChild(li);
  });
}

// Games Modal Logic (Click Counter)
let clickCount = 0;
function openGamesModal() {
  document.getElementById('gamesModal').classList.remove('hidden');
  resetClick();
}
function closeGamesModal() {
  document.getElementById('gamesModal').classList.add('hidden');
}
function incrementClick() {
  clickCount++;
  document.getElementById('clickCount').textContent = clickCount;
}
function resetClick() {
  clickCount = 0;
  document.getElementById('clickCount').textContent = clickCount;
}

// Existing functions
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}
function showFeature(feature) {
  alert(`This is a placeholder for the ${feature} feature. More interactivity coming soon!`);
} 