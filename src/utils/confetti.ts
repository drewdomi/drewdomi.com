import party from 'party-js'
import { fromEvent, throttleTime } from 'rxjs'

export function setupFooterConfetti() {
  const footerLogo = document.querySelector('#footer-logo')
  if (footerLogo) {
    const footerLogo = document.querySelector('#footer-logo')

    if (footerLogo) {
      const click$ = fromEvent(footerLogo, 'click')
      click$.pipe(throttleTime(300)).subscribe(event => {
        event.stopPropagation()

        const target = event.currentTarget as HTMLElement
        party.confetti(target, {
          count: party.variation.range(20, 40),
        })
      })
    }
  }
}

document.addEventListener('DOMContentLoaded', setupFooterConfetti)
