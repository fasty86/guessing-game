class GuessingGame {
  min = 0
  max = 0
  constructor() {}

  setRange(min, max) {
    this.min = min
    this.max = max
  }

  guess() {
    this.candidate = Math.ceil((this.max - this.min) / 2) + this.min
    // console.log(this.candidate)
    return this.candidate
  }

  lower() {
    this.setRange(this.min, this.candidate)
  }

  greater() {
    this.setRange(this.candidate, this.max)
  }
}

module.exports = GuessingGame
