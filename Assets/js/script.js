const cells = document.querySelectorAll('td:not(:empty)');

cells.forEach(cell => {
  cell.addEventListener('mouseenter', showDetails);
  cell.addEventListener('mouseleave', hideDetails);
});

function showDetails(event) {
  const cell = event.target;
  const courseName = cell.innerText;
  alert(`即将开始课程：${courseName}`);
}

function hideDetails(event) {
  const cell = event.target;
  // do nothing
}