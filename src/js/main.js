import '../css/style.css';
import { darkModeHandle } from './utils.js';
import { startGame } from './game';

darkModeHandle();

const startGameButton = document.getElementById('startGame');

startGameButton.addEventListener('click', startGame)

