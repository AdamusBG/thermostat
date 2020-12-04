$(document).ready(function () {

  let thermostat = new Thermostat();

  function updateTemperature() {
    $('.temperature').text(thermostat.setTemperature);
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
  };

  updateTemperature();
  updateEnergyUse();
  updatePowerSaving("On");

  $('.fa-arrow-alt-circle-up').on("click", function() {
    thermostat.increaseTemp();
    updateTemperature();
    updateEnergyUse();
  });

  $('.fa-arrow-alt-circle-down').on("click", function() {
    thermostat.decreaseTemp();
    updateTemperature();
    updateEnergyUse();
  });

  $('.power-saving-button').on("click", function() {
    console.log("I am being clicked");
    on = thermostat.togglePowerSaving();
    if (on) {
      updatePowerSaving("On");
    } else {
      updatePowerSaving("Off");
    };
  });

});


// add logic to reduce temp to 25 if over and power saving turned back on
