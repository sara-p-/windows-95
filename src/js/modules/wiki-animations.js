export default function wikiAnimations() {
  const wikis = document.querySelectorAll('.wiki__box')

  const wikiArray = Array.from(wikis).map((wiki) => {
    const compuStyles = window.getComputedStyle(wiki)
    const zIndex = compuStyles.zIndex
    const lag = wiki.getAttribute('data-lag')
    return { wiki, zIndex, lag }
  })

  // console.log(wikiArray)

  wikiArray.forEach(({ wiki, zIndex, lag }, index) => {
    const button = wiki.querySelector('button')

    button.addEventListener('click', (e) => {})
  })
}
