'use strict';

describe("thermostat", function() {

  var myThermostat;

  beforeEach(function() {
    myThermostat = new Thermostat();
  });

  it("Is at 20 by default", function() {
    expect(myThermostat.getSetTemperature()).toEqual(20);
  });

  it("Calling .increaseTemp with no param will increase temperature by one", function() {
    myThermostat.increaseTemp();
    expect(myThermostat.getSetTemperature()).toEqual(21);
  });

  it("Calling .increaseTemp with param will increase temperature by that amount", function() {
    myThermostat.increaseTemp(5);
    expect(myThermostat.getSetTemperature()).toEqual(25);
  });

  it("Trying to increase temperature above 25 but below 32 will result in no change when power saving on", function() {
    myThermostat.increaseTemp(10);
    expect(myThermostat.getSetTemperature()).toEqual(20);
  });

  it("Trying to increase temperature above 32 will result in no change even when power saving off", function() {
    myThermostat.togglePowerSaving();
    myThermostat.increaseTemp(100);
    expect(myThermostat.getSetTemperature()).toEqual(20);
    expect(myThermostat.getPowerSaving()).toEqual(false);
  });

  it("Calling .decreaseTemp with no param will decrease temperature by one", function() {
    myThermostat.decreaseTemp();
    expect(myThermostat.getSetTemperature()).toEqual(19);
  });

  it("Calling .decreaseTemp with param will decrease temperature by that amount", function() {
    myThermostat.decreaseTemp(5);
    expect(myThermostat.getSetTemperature()).toEqual(15);
  });

  it("Trying to decrease temperature below 10 will result in no change", function() {
    myThermostat.decreaseTemp(100);
    expect(myThermostat.getSetTemperature()).toEqual(20);
  });

  it("Calling .togglePowerSaving once will cause power saving to be off", function() {
    myThermostat.togglePowerSaving();
    expect(myThermostat.getPowerSaving()).toEqual(false);
  });

  it("Calling .togglePowerSaving twice will cause power saving to be on", function() {
    myThermostat.togglePowerSaving();
    myThermostat.togglePowerSaving();
    expect(myThermostat.getPowerSaving()).toEqual(true);
  });

  it("Calling .reset will cause the temperature to return to 20", function() {
    myThermostat.increaseTemp(4);
    myThermostat.decreaseTemp(7);
    myThermostat.reset();
    expect(myThermostat.getSetTemperature()).toEqual(20);
  });

  it("Calling .energyUsage when temp < 18 will return low-useage", function() {
    myThermostat.decreaseTemp(5);
    expect(myThermostat.energyUsage()).toEqual("low-usage");
  });

  it("Calling .energyUsage when 18 < temp <= 25 will return medium-useage", function() {
    expect(myThermostat.energyUsage()).toEqual("medium-usage");
  });

  it("Calling .energyUsage when temp > 25 will return high-useage", function() {
    myThermostat.togglePowerSaving();
    myThermostat.increaseTemp(10);
    expect(myThermostat.energyUsage()).toEqual("high-usage");
  });


})
