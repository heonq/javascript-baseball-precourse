import { ERROR_MESSAGE } from './ErrorMessage.js';
import { CONSTANTS } from './Constants.js';

export const Validator = {
  validateInput(numbers) {
    if (numbers.length !== CONSTANTS.validLength) {
      alert(ERROR_MESSAGE.invalidLength);
      return false;
    }
    if (new Set(numbers).size !== CONSTANTS.validLength) {
      alert(ERROR_MESSAGE.duplicated);
      return false;
    }
    if (
      !numbers.every((number) => CONSTANTS.minNumber <= number && number <= CONSTANTS.maxNumber)
    ) {
      alert(ERROR_MESSAGE.outOfRange);
      return false;
    }
    return true;
  },
};
