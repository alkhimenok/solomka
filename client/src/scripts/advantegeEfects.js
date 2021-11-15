export const $advantage = document.querySelector('.advantage')

export const startEfect = (e) => {
  const {target} = e
  
  if (target.dataset.advantageIcon) {
    const $icon = document.querySelector(`[data-advantage-icon=${target.dataset.advantageIcon}]`)
    const $message = document.querySelector(`[data-advantage-message=${target.dataset.advantageIcon}]`)

    $icon.classList.add('_hovered')
    $message.classList.add('_hovered')

    $icon.addEventListener('mouseout', e => {
      $icon.classList.remove('_hovered')
      $message.classList.remove('_hovered')
    })
  } else if (target.dataset.advantageMessage) {
    const $icon = document.querySelector(`[data-advantage-icon=${target.dataset.advantageMessage}]`)
    const $message = document.querySelector(`[data-advantage-message=${target.dataset.advantageMessage}]`)

    $icon.classList.add('_hovered')
    $message.classList.add('_hovered')

    $message.addEventListener('mouseout', e => {
      $icon.classList.remove('_hovered')
      $message.classList.remove('_hovered')
    })
  } else {
    return
  }
}