import { fromEvent, throttleTime } from 'rxjs'

function popSound() {
  const audio = new Audio('/pop_sound.mp3')

  const icon = document.querySelector('#linux-icon')

  if (icon) {
    const clicks$ = fromEvent(icon, 'click')

    clicks$.pipe(throttleTime(140)).subscribe(event => {
      event.stopPropagation()

      audio.currentTime = 0
      audio.volume = 0.2
      audio.play().catch(error => {
        console.error('Error playing sound:', error)
      })
    })
  }
}

document.addEventListener('DOMContentLoaded', popSound)

document.addEventListener('astro:page-load', popSound)
