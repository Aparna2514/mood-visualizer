const moodConfigs = require('../config/moodConfigs');

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function buildMoodResponse(mood) {
  const config = moodConfigs[mood];

  if (!config) {
    return null;
  }

  return {
    mood,
    visuals: {
      colors: config.colors.sort(() => Math.random() - 0.5).slice(0, 2),
      particleCount: Math.floor(randomBetween(
        config.particleCount.min,
        config.particleCount.max
      )),
      speed: parseFloat(randomBetween(config.speed.min, config.speed.max).toFixed(2)),
      turbulence: parseFloat(randomBetween(config.turbulence.min, config.turbulence.max).toFixed(3)),
      behavior: config.behavior,
    },
    music: {
      scale: config.music.scale,
      bpm: Math.floor(randomBetween(config.music.bpm.min, config.music.bpm.max)),
      reverb: parseFloat(randomBetween(config.music.reverb.min, config.music.reverb.max).toFixed(2)),
      brightness: config.music.brightness,
    }
  };
}

module.exports = { buildMoodResponse };

