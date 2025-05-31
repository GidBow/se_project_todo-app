import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super({ popupSelector });
    this._popupForm = this._popupEl.querySelector(".popup__form");
    this._submitButton = this._popupForm.querySelector(".popup__submit");
    this._inputs = this._popupForm.querySelectorAll(".popup__input");
    this._handleFormSubmit = handleFormSubmit;
  }

  _getInputValues() {
    const values = {};
    this._inputs.forEach((input) => {
      values[input.name] = input.value;
    });
    return values;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupEl.addEventListener("submit", (event) => {
      event.preventDefault();
      const values = this._getInputValues();
      this._handleFormSubmit(values);
      this._popupForm.reset(); // Reset the form after submission
    });
  }
}
export default PopupWithForm;
