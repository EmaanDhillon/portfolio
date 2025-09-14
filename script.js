function showSection(sectionId) {
  // Hide all sections
  const sections = document.querySelectorAll('.section');
  sections.forEach(sec => sec.style.display = "none");

  // Show the clicked section
  document.getElementById(sectionId).style.display = "block";
}
