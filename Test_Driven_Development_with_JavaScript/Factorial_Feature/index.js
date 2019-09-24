const Calculate = {
  factorial (arg) {
    if (arg === 0) {
      return 1;
    } else {
      let result = 1;
      for (let i = 1; i <= arg; i++) {
        result *= i;
      }
      return result;
    }
  }
}

module.exports = Calculate;