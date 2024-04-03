export default function wikiAnimations() {
  const wikis = document.querySelectorAll('.wiki__box')
  const wikiObj = Array.from(wikis).map((wiki) => {
    const compuStyles = window.getComputedStyle(wiki)
    const translateAmount = compuStyles.getPropertyValue('transform')
    const button = wiki.querySelector('.wiki__button')

    console.log(translateAmount)
  })
}
