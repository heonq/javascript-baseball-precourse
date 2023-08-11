import { ERROR_MESSAGE } from './ErrorMessage.js';
import { CONSTANTS } from './Constants.js';

export const Validator = {
  validateInput(numbers) {
    if (numbers.length !== CONSTANTS.validLength) return ERROR_MESSAGE.invalidLength;
    if (new Set(numbers).size !== CONSTANTS.validLength) return ERROR_MESSAGE.duplicated;
    if (!numbers.every((number) => CONSTANTS.minNumber <= number && number <= CONSTANTS.maxNumber))
      return ERROR_MESSAGE.outOfRange;
  },
};
