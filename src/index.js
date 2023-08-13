import { generateRandomNumbers } from '../utils/GenerateRandomNumbers.js';
import { CONSTANTS } from '../utils/Constants.js';
import { DOM } from '../utils/DOM.js';
import { $ } from '../utils/index.js';
import { Validator } from '../utils/Validator.js';
import { MESSAGE } from '../utils/Message.js';

export default class BaseballGame {
  #computerNumbers;
  #userInputNumbers;
  start() {
    this.init();
    this.handleEvent();
  }
  init() {
    this.#computerNumbers = generateRandomNumbers();
    this.toggleRetryButtonDisplay();
  }

  handleEvent() {
    $('form').addEventListener('submit', (e) => e.preventDefault());
    DOM.submitButton.addEventListener('click', this.handleInput.bind(this));
    DOM.restartButton.addEventListener('click', this.handleRestart.bind(this));
  }

  handleInput() {
    this.#userInputNumbers = DOM.input.value;
    if (!Validator.validateInput(this.#userInputNumbers.split(''))) return;
    DOM.result.innerText = this.printResult();
    if (DOM.result.innerText === CONSTANTS.winStrike) this.handleSuccess();
  }

  handleSuccess() {
    this.printSucess();
    this.toggleRetryButtonDisplay();
  }
  printSucess() {
    DOM.result.innerHTML = MESSAGE.success;
  }

  printResult() {
    return this.getResult(this.#computerNumbers.split(''), this.#userInputNumbers.split(''));
  }

  handleRestart() {
    this.init();
    DOM.result.innerText = '';
  }
  toggleRetryButtonDisplay() {
    DOM.restartButton.style.display = DOM.restartButton.style.display !== 'none' ? 'none' : 'block';
  }
  countBall(computerInputNumbers, userInputNumbers) {
    return userInputNumbers.filter(
      (number, index) =>
        computerInputNumbers.includes(number) && computerInputNumbers[index] !== number,
    ).length;
  }
  countStrike(computerInputNumbers, userInputNumbers) {
    return userInputNumbers.filter((number, index) => computerInputNumbers[index] === number)
      .length;
  }
  getResult(computerInputNumbers, userInputNumbers) {
    const ball = this.countBall(computerInputNumbers, userInputNumbers);
    const strike = this.countStrike(computerInputNumbers, userInputNumbers);
    const answer = [];
    answer.push(ball === 0 ? '' : ball + CONSTANTS.ball);
    answer.push(strike === 0 ? '' : strike + CONSTANTS.strike);
    return answer.join('') === '' ? CONSTANTS.nothing : answer.join(' ');
  }

  play(computerInputNumbers, userInputNumbers) {}
}

const baseballGame = new BaseballGame();
baseballGame.start();
