const infoBtn = document.getElementById("info-button")
const aboutSection = document.getElementById("about")
const beliBtn = document.querySelectorAll(".beli-button")
const timer = document.querySelector(".timer")
let promoTimer = 10800

infoBtn.addEventListener("click", () => {
  aboutSection.scrollIntoView()
})

beliBtn.forEach((button) => {
  button.addEventListener("click", () => {
    alert("Terimakasih sudah membeli, tapi fiturnya tidak ada xixixi.")
  })
})

const timerOperation = () => {
  const hours = Math.floor(promoTimer / 3600)
  const minutes = Math.floor((promoTimer % 3600) / 60)
  const seconds = Math.floor(promoTimer % 60)
  timer.textContent = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`

  if (promoTimer <= 0) {
    clearInterval(updateTimer)
    timer.textContent = "Waktu Promo Habis!"
  } else {
    promoTimer--
  }
}

const updateTimer = setInterval(timerOperation, 1000)
