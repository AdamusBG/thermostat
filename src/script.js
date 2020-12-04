$(document).ready(function () {

  let thermostat = new Thermostat();

  function updateTemperature() {
    $('.temperature').text(thermostat.setTemperature);
  };

  updateTemperature();

  $('.fa-arrow-alt-circle-up').on("click", function() {
    thermostat.increaseTemp();
    updateTemperature();
  });

  $('.fa-arrow-alt-circle-down').on("click", function() {
    thermostat.decreaseTemp();
    updateTemperature();
  });

});


// event watcher for up arrow press
// should increase temp by one (given max conditions) - both increase objects temp and update on page
// should check if new temp changes energy usage state - call object energy use function and update on page

// event watcher for down arrow press
// should decrease temp by one (given max conditions) - both decrease objects temp and update on page
// should check if new temp changes energy usage state - call object energy use function and update on page

// event watcher for power save mode press - update object state and update on page

// if energy usage changes, remove and add css classes
