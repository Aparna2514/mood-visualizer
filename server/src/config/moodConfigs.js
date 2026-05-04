const moodConfigs = {
  happy: {
    colors: ['#FFD700', '#FF8C00', '#FFB347', '#FFF44F'],
    particleCount: { min: 600, max: 1000 },
    speed: { min: 2.0, max: 3.5 },
    turbulence: { min: 0.1, max: 0.4 },
    behavior: 'burst',
    music: {
      scale: 'major',
      bpm: { min: 110, max: 130 },
      reverb: { min: 0.1, max: 0.3 },
      brightness: 'high'
    }
  },

  sad: {
    colors: ['#1a1a4e', '#4a4a8a', '#6a6aaa', '#2a2a6e'],
    particleCount: { min: 200, max: 400 },
    speed: { min: 0.2, max: 0.6 },
    turbulence: { min: 0.0, max: 0.1 },
    behavior: 'drift',
    music: {
      scale: 'minor',
      bpm: { min: 50, max: 70 },
      reverb: { min: 0.7, max: 0.9 },
      brightness: 'low'
    }
  },

  angry: {
    colors: ['#FF0000', '#8B0000', '#FF4500', '#DC143C'],
    particleCount: { min: 800, max: 1200 },
    speed: { min: 4.0, max: 6.0 },
    turbulence: { min: 0.7, max: 1.0 },
    behavior: 'collide',
    music: {
      scale: 'diminished',
      bpm: { min: 140, max: 170 },
      reverb: { min: 0.0, max: 0.2 },
      brightness: 'harsh'
    }
  },

  calm: {
    colors: ['#7EB8C9', '#A8D8EA', '#B5EAD7', '#C7CEEA'],
    particleCount: { min: 300, max: 500 },
    speed: { min: 0.3, max: 0.8 },
    turbulence: { min: 0.0, max: 0.05 },
    behavior: 'wave',
    music: {
      scale: 'pentatonic',
      bpm: { min: 60, max: 75 },
      reverb: { min: 0.5, max: 0.7 },
      brightness: 'soft'
    }
  },

  excited: {
    colors: ['#FF69B4', '#00FFFF', '#FF1493', '#7FFF00'],
    particleCount: { min: 900, max: 1400 },
    speed: { min: 3.5, max: 5.5 },
    turbulence: { min: 0.4, max: 0.7 },
    behavior: 'spiral',
    music: {
      scale: 'major',
      bpm: { min: 128, max: 150 },
      reverb: { min: 0.2, max: 0.4 },
      brightness: 'high'
    }
  },

  anxious: {
    colors: ['#556B2F', '#6B8E23', '#8FBC8F', '#2E4A1E'],
    particleCount: { min: 500, max: 800 },
    speed: { min: 1.5, max: 4.0 },
    turbulence: { min: 0.5, max: 0.9 },
    behavior: 'erratic',
    music: {
      scale: 'chromatic',
      bpm: { min: 100, max: 140 },
      reverb: { min: 0.3, max: 0.6 },
      brightness: 'mid'
    }
  },

  overwhelmed: {
    colors: ['#4B0082', '#800080', '#9400D3', '#301934'],
    particleCount: { min: 1000, max: 1500 },
    speed: { min: 1.0, max: 2.5 },
    turbulence: { min: 0.6, max: 0.9 },
    behavior: 'implode',
    music: {
      scale: 'minor',
      bpm: { min: 80, max: 100 },
      reverb: { min: 0.6, max: 0.8 },
      brightness: 'low'
    }
  },

  scattered: {
    colors: ['#FFD700', '#FF6347', '#00CED1', '#FF69B4'],
    particleCount: { min: 700, max: 1100 },
    speed: { min: 2.0, max: 5.0 },
    turbulence: { min: 0.8, max: 1.0 },
    behavior: 'random',
    music: {
      scale: 'whole_tone',
      bpm: { min: 90, max: 160 },
      reverb: { min: 0.2, max: 0.5 },
      brightness: 'mid'
    }
  },

  irritable: {
    colors: ['#FF6600', '#CC3300', '#FF3300', '#990000'],
    particleCount: { min: 600, max: 900 },
    speed: { min: 2.5, max: 4.5 },
    turbulence: { min: 0.5, max: 0.8 },
    behavior: 'jitter',
    music: {
      scale: 'phrygian',
      bpm: { min: 110, max: 135 },
      reverb: { min: 0.1, max: 0.3 },
      brightness: 'harsh'
    }
  },

  empty: {
    colors: ['#C0C0C0', '#808080', '#A9A9A9', '#D3D3D3'],
    particleCount: { min: 100, max: 250 },
    speed: { min: 0.1, max: 0.3 },
    turbulence: { min: 0.0, max: 0.05 },
    behavior: 'dissolve',
    music: {
      scale: 'minor',
      bpm: { min: 40, max: 55 },
      reverb: { min: 0.8, max: 1.0 },
      brightness: 'low'
    }
  },

  nostalgic: {
    colors: ['#D2691E', '#DEB887', '#F4A460', '#8B4513'],
    particleCount: { min: 400, max: 650 },
    speed: { min: 0.5, max: 1.2 },
    turbulence: { min: 0.1, max: 0.3 },
    behavior: 'drift',
    music: {
      scale: 'major',
      bpm: { min: 65, max: 85 },
      reverb: { min: 0.6, max: 0.8 },
      brightness: 'warm'
    }
  },

  lonely: {
    colors: ['#191970', '#000080', '#00008B', '#0a0a2e'],
    particleCount: { min: 150, max: 300 },
    speed: { min: 0.2, max: 0.5 },
    turbulence: { min: 0.0, max: 0.08 },
    behavior: 'drift',
    music: {
      scale: 'minor',
      bpm: { min: 45, max: 65 },
      reverb: { min: 0.8, max: 1.0 },
      brightness: 'low'
    }
  }
};

module.exports = moodConfigs;

