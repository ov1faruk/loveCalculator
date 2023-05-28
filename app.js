const loveForm = document.querySelector('#love-form');
const loveScore = document.querySelector('#love-score');

function calculateLoveScore() {
  const yourName = document.querySelector('#your-name').value;
  const partnerName = document.querySelector('#partner-name').value;
  const loveScoreValue = Math.floor(Math.random() * 100) + 1;
  
  loveScore.textContent = `${yourName} and ${partnerName}'s love score is ${loveScoreValue}%`;
}

loveForm.addEventListener('submit', (e) => {
  e.preventDefault();
  calculateLoveScore();
});

const toggleButton = document.querySelector('#toggle-button');

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
