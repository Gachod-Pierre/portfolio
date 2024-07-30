export function initCustomCursor() {
  console.log('Initializing custom cursor...')

  const cursor = document.createElement('div')
  cursor.classList.add('custom-cursor')
  document.body.appendChild(cursor)

  document.addEventListener('mousemove', (e) => {
    cursor.style.top = `${e.pageY - 10}px`
    cursor.style.left = `${e.pageX - 10}px`
  })

  document.addEventListener('click', () => {
    if (!cursor.classList.contains('click-effect')) {
      cursor.classList.add('click-effect')

      setTimeout(() => {
        cursor.classList.remove('click-effect')
      }, 500)
    }
  })
}
