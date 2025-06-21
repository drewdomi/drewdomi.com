import { PowerGlitch } from 'powerglitch'

function setupGlitch() {
  PowerGlitch.glitch('.imgGlitch', {
    playMode: 'hover',
    createContainers: true,
    optimizeSeo: true,
    timing: {
      duration: 1200,
      iterations: Infinity,
    },
  })
}

document.addEventListener('DOMContentLoaded', setupGlitch)

document.addEventListener('astro:page-load', setupGlitch)
