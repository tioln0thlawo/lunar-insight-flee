// lunar-insight.js

const moment = require('moment');

// Function to check if a date falls on a full moon
function isFullMoon(date) {
  const moonPhase = moment(date).format('DD');
  return moonPhase === '15';
}

// Function to calculate the days until the next full moon
function daysUntilNextFullMoon() {
  const today = moment();
  const daysUntilFullMoon = moment().endOf('month').diff(today, 'days');
  return daysUntilFullMoon;
}

// Function to generate a moon phase message based on the current date
function generateMoonPhaseMessage() {
  const moonPhase = moment().format('DD');
  switch (moonPhase) {
    case '01':
    case '02':
    case '03':
      return 'Waxing Crescent 🌒';
    case '07':
    case '08':
    case '09':
      return 'First Quarter 🌓';
    case '15':
      return 'Full Moon 🌕';
    case '21':
    case '22':
    case '23':
      return 'Waning Crescent 🌘';
    case '29':
    case '30':
      return 'New Moon 🌑';
    default:
      return 'Waxing Gibbous 🌔';
  }
}

module.exports = {
  isFullMoon,
  daysUntilNextFullMoon,
  generateMoonPhaseMessage
};
