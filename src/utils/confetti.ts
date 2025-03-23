import party from 'party-js'
import { fromEvent, throttleTime } from 'rxjs'

function setupFooterConfetti() {
  const footerLogo = document.querySelector('#footer-logo')

  if (footerLogo) {
    const click$ = fromEvent(footerLogo, 'click')

    click$.pipe(throttleTime(250)).subscribe(event => {
      event.stopPropagation()

      const target = event.currentTarget as HTMLElement
      party.confetti(target, {
        count: party.variation.range(10, 20),
      })
    })
  }
}

document.addEventListener('DOMContentLoaded', setupFooterConfetti)

document.addEventListener('astro:page-load', setupFooterConfetti)
