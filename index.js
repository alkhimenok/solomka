import { rewriteNumber } from './src/setNumber.js'
import { burgerIcon, showNav } from './src/burger.js'

const start = () => {
  rewriteNumber()

  burgerIcon.addEventListener('click', showNav)
}

window.addEventListener('load', start)
