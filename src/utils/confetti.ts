import party from 'party-js'
import { fromEvent, throttleTime } from 'rxjs'

function createConfettiHandler(
  cssSelector = '#footer-logo',
  options?: Partial<party.ConfettiConfiguration>,
) {
  options = options || {
    count: party.variation.range(10, 20),
    spread: 70,
  }
  const selectedTag = document.querySelector(cssSelector)

  selectedTag.classList.add('confetti-enabled', 'interactive-element')

  if (selectedTag) {
    const click$ = fromEvent(selectedTag, 'click')

    click$.pipe(throttleTime(250)).subscribe(event => {
      event.stopPropagation()

      const target = event.currentTarget as HTMLElement
      party.confetti(target, options)
    })
  }
}

document.addEventListener('DOMContentLoaded', () => createConfettiHandler())
document.addEventListener('astro:page-load', () => createConfettiHandler())

export { createConfettiHandler }
