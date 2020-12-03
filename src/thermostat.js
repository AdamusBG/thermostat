class Thermostat {
  constructor() {
    this.DEFAULT_TEMPERATURE = 20;
    this.MINIMUM_TEMPERATURE = 10;
    this.LOW_USAGE = 18;
    this.MEDIUM_USAGE = 25;
    this.MAXIMUM_TEMPERATURE_PSM_OFF = 32;
    this.MAXIMUM_TEMPERATURE_PSM_ON = 25;
    this.setTemperature = this.DEFAULT_TEMPERATURE;
    this.powerSaving = true;
  };

  increaseTemp(amount = 1) {
    if (this.isBelowMaximum(amount)) {
      this.setTemperature += amount;
    };
  };

  decreaseTemp(amount = 1) {
    if (this.isAboveMinimum(amount)) {
      this.setTemperature -= amount;
    };
  };

  togglePowerSaving() {
    this.powerSaving = !this.powerSaving;
  };

  reset() {
    this.setSetTemperature(this.DEFAULT_TEMPERATURE);
  };

  energyUsage() {
    if (this.setTemperature < this.LOW_USAGE) {
      return "low-usage";
    } else if (this.setTemperature <= this.MEDIUM_USAGE) {
      return "medium-usage";
    } else {
      return "high-usage";
    };
  };

  isBelowMaximum(amount) {
    if (this.powerSaving && this.setTemperature + amount <= this.MAXIMUM_TEMPERATURE_PSM_ON) {
      return true;
    };
    if (!this.powerSaving && this.setTemperature + amount <= this.MAXIMUM_TEMPERATURE_PSM_OFF) {
      return true;
    };
    return false;
  };

  isAboveMinimum(amount) {
    if (this.setTemperature - amount >= this.MINIMUM_TEMPERATURE) {
      return true;
    };
    return false;
  };

  getSetTemperature() {
    return this.setTemperature;
  };

  getPowerSaving() {
    return this.powerSaving;
  };

  setSetTemperature(temp) {
    this.setTemperature = temp;
  }

}

// refactor tests
