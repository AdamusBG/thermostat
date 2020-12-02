class Thermostat {
  constructor() {
    this.set_temperature = 20;
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
    if (this.set_temperature - amount >= 10) {
      this.set_temperature -= amount;
    };
  };

  toggle_power_saving() {
    this.power_saving = !this.power_saving;
  };

  reset() {
    this.set_temperature = 20;
  };

  energy_usage() {
    if (this.set_temperature < 18) {
      return "low-usage";
    } else if (this.set_temperature <= 25) {
      return "medium-usage";
    } else {
      return "high-usage";
    };
  };

}
