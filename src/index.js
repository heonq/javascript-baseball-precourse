import { generateRandomNumbers } from '../utils/GenerateRandomNumbers.js';
import { CONSTANTS } from '../utils/Constants.js';

export default class BaseballGame {
  #computerNumbers;
  #userInputNumbers;

  constructor() {
    this.init();
  }
  init() {
    this.#computerNumbers = generateRandomNumbers();
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
