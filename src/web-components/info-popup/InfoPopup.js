
class InfoPopup extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.attachShadow({ mode: 'open' })
    this.attachShadowDomStyle()
    this.shadowRoot.appendChild(this.getAnchorElement())
    this.addEventListener('pointerenter', this.showPopup)
    this.addEventListener('pointerleave', this.hidePopup)
  }

  attachShadowDomStyle() {
    this.shadowRoot.appendChild(this.getStyleChild())
  }

  getStyleChild() {
    const style = document.createElement("style");
    style.textContent = `
      span {
        color: green;
        font-weight: bold;
      }`

    return style
  }

  getDescription() {
    return this.getAttribute('desc')
  }

  getAnchorElement() {
    const ele = document.createElement('span')
    ele.textContent = this.getAttribute('anchorText')
    ele.setAttribute('id', 'anchorEle')
    return ele
  }

  showPopup() {
    const descElement = document.createElement('span')
    descElement.setAttribute('id', 'desc')
    descElement.style.background = 'red'
    descElement.innerText = this.getDescription()
    this.shadowRoot.getElementById('anchorEle').appendChild(descElement)
  }

  hidePopup() {
    this.shadowRoot.getElementById('desc').remove()
  }
}

customElements.define('info-popup', InfoPopup)
