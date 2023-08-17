
class InfoPopup extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.innerHTML = this.getAnchorElement()
    this.addEventListener('pointerenter', this.showPopup)
    this.addEventListener('pointerleave', this.hidePopup)
  }

  getDescription() {
    return this.getAttribute('desc')
  }

  getAnchorElement() {
    return `<span>${this.getAttribute('anchorText')}</span>`
  }

  showPopup() {
    const descElement = document.createElement('span')
    descElement.setAttribute('id', 'desc')
    descElement.style.background = 'red'
    descElement.innerText = this.getDescription()
    this.appendChild(descElement)
  }

  hidePopup() {
    document.getElementById('desc').remove()
  }

}

customElements.define('info-popup', InfoPopup)