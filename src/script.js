$(document).ready(function () {

  let thermostat = new Thermostat();

  function updateTemperature() {
    $('.temperature').text(thermostat.setTemperature);
    updateEnergyUse()
  };

  function updateEnergyUse() {
    energyUse = thermostat.energyUsage();
    if (energyUse === "high-usage") {
      replaceEnergyClass('high');
      $('#energy-text').text("High");
    } else if (energyUse === "medium-usage") {
      replaceEnergyClass('medium');
      $('#energy-text').text("Medium");
    } else if (energyUse === "low-usage") {
      replaceEnergyClass('low');
      $('#energy-text').text("Low");
    };
  };

  function replaceEnergyClass(className) {
    $('.energy-usage').removeClass('low');
    $('.energy-usage').removeClass('medium');
    $('.energy-usage').removeClass('high');
    $('.energy-usage').addClass(className);
  };

  function updatePowerSaving(state) {
    $('#psmd').text(state);
    updateTemperature();
  };

  updateTemperature();
  updatePowerSaving("On");

  $('.fa-arrow-alt-circle-up').on("click", function() {
    thermostat.increaseTemp();
    updateTemperature();
  });

  $('.fa-arrow-alt-circle-down').on("click", function() {
    thermostat.decreaseTemp();
    updateTemperature();
  });

  $('.power-saving-button').on("click", function() {
    on = thermostat.togglePowerSaving();
    if (on) {
      updatePowerSaving("On");
    } else {
      updatePowerSaving("Off");
    };
  });

  $('.reset-button').on("click", function() {
    thermostat.reset();
    updateTemperature();
  });

});


// add logic to reduce temp to 25 if over and power saving turned back on
