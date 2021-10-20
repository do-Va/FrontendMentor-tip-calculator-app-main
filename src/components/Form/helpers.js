export const isValid = value => {
  if (/^\d*\.?\d*$/.test(value) && value > 0) {
    return true;
  } else {
    return false;
  }
};
