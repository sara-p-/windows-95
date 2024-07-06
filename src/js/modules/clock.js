export default function clock() {
  const timeText = document.querySelector('.time')
  const newDate = new Date()
  const newTime = newDate.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  })
  timeText.innerHTML = newTime

  setInterval(() => {
    timeText.innerHTML = newTime
  }, 1000)
}
