import GenerateRandomNumber from '../utils/GenerateRandomNumbers.js';

export default class BaseballGame {
  #computerNumbers;

  constructor() {
    this.init();
  }
  init() {
    this.#computerNumbers = GenerateRandomNumbers();
  }

  play(computerInputNumbers, userInputNumbers) {}
}
