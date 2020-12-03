'use strict';

describe("thermostat", function() {

  var my_thermostat;

  beforeEach(function() {
    my_thermostat = new Thermostat();
  });

  it("Is at 20 by default", function() {
    expect(my_thermostat.get_set_temperature()).toEqual(20);
  });

  it("Calling .increase_temp with no param will increase temperature by one", function() {
    my_thermostat.increase_temp();
    expect(my_thermostat.get_set_temperature()).toEqual(21);
  });

  it("Calling .increase_temp with param will increase temperature by that amount", function() {
    my_thermostat.increase_temp(5);
    expect(my_thermostat.get_set_temperature()).toEqual(25);
  });

  it("Trying to increase temperature above 25 but below 32 will result in no change when power saving on", function() {
    my_thermostat.increase_temp(10);
    expect(my_thermostat.get_set_temperature()).toEqual(20);
  });

  it("Trying to increase temperature above 32 will result in no change even when power saving off", function() {
    my_thermostat.toggle_power_saving();
    my_thermostat.increase_temp(100);
    expect(my_thermostat.get_set_temperature()).toEqual(20);
    expect(my_thermostat.get_power_saving()).toEqual(false);
  });

  it("Calling .decrease_temp with no param will decrease temperature by one", function() {
    my_thermostat.decrease_temp();
    expect(my_thermostat.get_set_temperature()).toEqual(19);
  });

  it("Calling .decrease_temp with param will decrease temperature by that amount", function() {
    my_thermostat.decrease_temp(5);
    expect(my_thermostat.get_set_temperature()).toEqual(15);
  });

  it("Trying to decrease temperature below 10 will result in no change", function() {
    my_thermostat.decrease_temp(100);
    expect(my_thermostat.get_set_temperature()).toEqual(20);
  });

  it("Calling .toggle_power_saving once will cause power saving to be off", function() {
    my_thermostat.toggle_power_saving();
    expect(my_thermostat.get_power_saving()).toEqual(false);
  });

  it("Calling .toggle_power_saving twice will cause power saving to be on", function() {
    my_thermostat.toggle_power_saving();
    my_thermostat.toggle_power_saving();
    expect(my_thermostat.get_power_saving()).toEqual(true);
  });

  it("Calling .reset will cause the temperature to return to 20", function() {
    my_thermostat.increase_temp(4);
    my_thermostat.decrease_temp(7);
    my_thermostat.reset();
    expect(my_thermostat.get_set_temperature()).toEqual(20);
  });

  it("Calling .energy_usage when temp < 18 will return low-useage", function() {
    my_thermostat.decrease_temp(5);
    expect(my_thermostat.energy_usage()).toEqual("low-usage");
  });

  it("Calling .energy_usage when 18 < temp <= 25 will return medium-useage", function() {
    expect(my_thermostat.energy_usage()).toEqual("medium-usage");
  });

  it("Calling .energy_usage when temp > 25 will return high-useage", function() {
    my_thermostat.toggle_power_saving();
    my_thermostat.increase_temp(10);
    expect(my_thermostat.energy_usage()).toEqual("high-usage");
  });


})
