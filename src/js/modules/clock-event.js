export default function clockEvent() {
  const timeText = document.querySelector('.time')
  let newTime

  setInterval(() => {
    const newDate = new Date()
    newTime = newDate.toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    })
    timeText.innerHTML = newTime
  }, 1000)
}
