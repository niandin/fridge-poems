function openAbout() {
  document.getElementById('aboutOverlay').classList.add('open');
}

function closeAbout() {
  document.getElementById('aboutOverlay').classList.remove('open');
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeAbout();
});
