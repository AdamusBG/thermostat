class Thermostat {
  constructor() {
    this.DEFAULT_TEMPERATURE = 20;
    this.MINIMUM_TEMPERATURE = 10;
    this.LOW_USAGE = 18;
    this.MEDIUM_USAGE = 25;
    this.MAXIMUM_TEMPERATURE_PSM_ON = 32;
    this.MAXIMUM_TEMPERATURE_PSM_OFF = 25;
    this.set_temperature = this.DEFAULT_TEMPERATURE;
    this.power_saving = true;
  };

  increase_temp(amount = 1) {
    if (!this.power_saving && this.set_temperature + amount <= 32) {
      this.set_temperature += amount;
    } else if(this.power_saving && this.set_temperature + amount <= 25) {
      this.set_temperature += amount;
    };
  };

  decrease_temp(amount = 1) {
    if (this.set_temperature - amount >= this.MINIMUM_TEMPERATURE) {
      this.set_temperature -= amount;
    };
  };

  toggle_power_saving() {
    this.power_saving = !this.power_saving;
  };

  reset() {
    this.set_set_temperature(this.DEFAULT_TEMPERATURE);
  };

  energy_usage() {
    if (this.set_temperature < this.LOW_USAGE) {
      return "low-usage";
    } else if (this.set_temperature <= this.MEDIUM_USAGE) {
      return "medium-usage";
    } else {
      return "high-usage";
    };
  };

  get_set_temperature() {
    return this.set_temperature;
  };

  get_power_saving() {
    return this.power_saving;
  };

  set_set_temperature(temp) {
    this.set_temperature = temp;
  }

}
// create getter and setter methods
// change to camel case
// below maximum method
