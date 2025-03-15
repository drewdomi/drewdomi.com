import { fromEvent, throttleTime } from 'rxjs'

const icon = document.querySelector('#linux-icon')
const audio = new Audio('/pop_sound.mp3')

function popSound() {
  if (icon) {
    const clicks$ = fromEvent(icon, 'click')

    clicks$.pipe(throttleTime(450)).subscribe(event => {
      event.stopPropagation()

      audio.currentTime = 0
      audio.play().catch(error => {
        console.error('Error playing sound:', error)
      })
    })
  }
}

popSound()
