import { fromEvent, throttleTime } from 'rxjs'

let initialized = false

function popSound() {
  if (initialized) return

  const audio = new Audio('/pop_sound.mp3')
  const icon = document.querySelector('#linux-icon')

  if (icon) {
    icon.replaceWith(icon.cloneNode(true))

    const refreshedIcon = document.querySelector('#linux-icon')

    if (refreshedIcon) {
      const clicks$ = fromEvent(refreshedIcon, 'pointerdown')

      clicks$.pipe(throttleTime(200)).subscribe(event => {
        event.stopPropagation()
        event.preventDefault()

        audio.volume = 0.2

        audio.play().catch(error => {
          console.error('Error playing sound:', error)
        })
      })

      initialized = true
    }
  }
}

function cleanupAndReinitialize() {
  initialized = false
  popSound()
}

document.addEventListener('DOMContentLoaded', popSound)
document.addEventListener('astro:page-load', cleanupAndReinitialize)
