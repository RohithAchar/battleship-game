import dom from './DOM/dom'
import './styles/style.css'
import instruction from './DOM/instruction';

const startBtn = document.getElementById('start-btn');
startBtn.addEventListener('click', () => {
    dom();
    startBtn.style.display = 'none';
});

const resetBtn = document.getElementById('reset');
resetBtn.addEventListener('click', () => {
    const enemyBoard = document.querySelector('#enemy-board');
    const playerBoard = document.querySelector('#player-board');
    const enemyShip = document.getElementById('enemy-ship-info');
    enemyShip.innerHTML = '';
    const player = document.getElementById('player-ship-info');
    player.innerHTML = '';
    enemyBoard.textContent = '';
    playerBoard.textContent = '';
    enemyBoard.style.backgroundColor = 'white';
    playerBoard.style.backgroundColor = 'white';
    startBtn.style.display = 'inline-block';
});