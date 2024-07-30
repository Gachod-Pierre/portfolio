export function initCustomCursor() {
  console.log('Initializing custom cursor...')

  const cursor = document.createElement('div')
  cursor.classList.add('custom-cursor')
  document.body.appendChild(cursor)

  document.addEventListener('mousemove', (e) => {
    cursor.setAttribute('style', `top: ${e.pageY - 10}px; left: ${e.pageX - 10}px;`)
  })

  document.addEventListener('click', () => {
    if (!cursor.classList.contains('expand')) {
      cursor.classList.add('expand')

      // Force reflow to restart the animation
      cursor.offsetWidth // Reading this property causes reflow

      setTimeout(() => {
        cursor.classList.remove('expand')
      }, 500)
    }
  })
}
