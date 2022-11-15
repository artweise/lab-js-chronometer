class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if (typeof printTimeCallback === "function") {
        printTimeCallback();
      }
    }, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    let newValue = value.toString();
    if (value < 10) {
      newValue = newValue.padStart(2, "0");
    }
    return newValue;
  }

  // another approach with slice.method

  // computeTwoDigitNumber(value) {
  //   let newValue = value.toString();
  //   if (newValue.length === 1) {
  //     return "0" + newValue.slice(0); // we can also return "0" + newValue, without slice. Why do we need slice??
  //   }
  //   return newValue;
  // }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
  }
}
