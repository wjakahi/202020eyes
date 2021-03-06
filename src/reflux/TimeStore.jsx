var Reflux = require('reflux');
var Actions = require('./actions.jsx');

var TimeStore = Reflux.createStore({
  listenables: [Actions],
  init: function() {
    this.bBreak = false;
  },
  onSetMinutes: function(minutes) {
    this.minutes = minutes;
    this.defaultMinutes = minutes;
    this.trigger('change', this);
  },
  onToggleTimer: function(bCountdown) {
    this.bCountdown = bCountdown;
    if (bCountdown) {
      this.bgColor = 'green';
    }
    else {
      this.bgColor = 'white';
    }
    this.trigger('change', this);
  },
  onBreak: function(bBreak) {
    this.bBreak = !bBreak;
    if (this.bBreak) {
      this.minutes = .3333;    // 20 seconds
      this.bgColor = 'red';
    }
    else {
      this.minutes = this.defaultMinutes;
      this.bCountdown = true;
      this.bgColor = 'green';
    }
    this.trigger('change', this);
  }
});

module.exports = TimeStore;
