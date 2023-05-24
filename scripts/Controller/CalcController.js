class CalcController {
  constructor() {
    this._locale = 'pt-BR'
    this._displayCalcEl = document.querySelector('#display')
    this._dateEl = document.querySelector('#data')
    this._timeEl = document.querySelector('#hora')
    this._currentDate
    this.initialize()
  }

  initialize() {
    this.setDisplayDateTime()
    setInterval(() => {
      this.setDisplayDateTime()
    }, 1000)
  }

  setDisplayDateTime() {
    this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    })
    this.displayTime = this.currentDate.toLocaleTimeString(this._locale)
  }

  get displayTime() {
    return this._timeEl.innerHTML
  }

  get displayDate() {
    return this._dateEl.innerHTML
  }

  set displayTime(value) {
    return (this._timeEl.innerHTML = value)
  }

  set displayDate(value) {
    return (this._dateEl.innerHTML = value)
  }

  get displayCalc() {
    return this.displayCalcEl.innerHTML
  }

  set displayCalc(value) {
    this.displayCalcEl.innerHTML = value
  }

  get currentDate() {
    return new Date()
  }

  set dataAtual(value) {
    this._currentDate = value
  }
}
