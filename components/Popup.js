class Popup {
  constructor({ popupSelector }) {
    this._popupEl = document.querySelector(popupSelector);
    this._popupCloseBtn = this._popupEl.querySelector(".popup__close");
  }

  _handleEscapeClose = (event) => {
    if (event.key === "Escape") {
      this.close();
    }
  };

  open() {
    this._popupEl.classList.add("popup_visible");
    document.addEventListener("keyup", this._handleEscapeClose);
  }

  close() {
    this._popupEl.classList.remove("popup_visible");
    document.removeEventListener("keyup", this._handleEscapeClose);
  }

  setEventListeners() {
    // Close popup on overlay click
    this._popupEl.addEventListener("mousedown", (event) => {
      if (event.target === this._popupEl) {
        this.close();
      }
    });
    this._popupCloseBtn.addEventListener("click", () => {
      this.close();
    });
  }
}
export default Popup;
