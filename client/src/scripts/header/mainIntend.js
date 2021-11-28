export const $body = document.body
export const $header = document.querySelector('.header')

export const setMarginForBody = () => {
  const headerHeight =  getComputedStyle($header).height

  $body.style.marginTop = headerHeight
  $body.style.opacity = 1
}
