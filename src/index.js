import GenerateRandomNumber from '../utils/GenerateRandomNumbers.js';

export default class BaseballGame {
  #computerNumbers;
  #userInputNumbers;

  constructor() {
    this.init();
  }
  init() {
    this.#computerNumbers = GenerateRandomNumbers();
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

  play(computerInputNumbers, userInputNumbers) {}
}
