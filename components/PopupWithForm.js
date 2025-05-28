import Popup from "./Popup.js";

class PopupWithForms extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super({ popupSelector });
    // this.form = this.popup.querySelector(formSelector);
    // this.submitButton = this.form.querySelector(".popup__submit");
    // this.init();
  }
}
export default PopupWithForms;
