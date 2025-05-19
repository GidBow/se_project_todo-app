class FormValidator {
  constructor(settings, formEl) {
    this._formEl = formEl;
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._errorClass = settings.errorClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._submitButton = this._formEl.querySelector(this._submitButtonSelector);
    this._inputList = Array.from(
      this._formEl.querySelectorAll(this._inputSelector)
    );
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formEl.querySelector(
      `#${inputElement.id}-error`
    );
    inputElement.classList.add(this._inputErrorClass);
    errorElement.classList.add(this._errorClass);
    errorElement.textContent = errorMessage;
  }

  _hideInputError(inputElement) {
    const errorElement = this._formEl.querySelector(
      `#${inputElement.id}-error`
    );
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = "";
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  toggleButtonState() {
    const isValid = this._inputList.every((input) => {
      return input.validity.valid;
    });

    if (isValid) {
      this._submitButton.classList.remove(this._inactiveButtonClass);
      this._submitButton.disabled = false;
    } else {
      this._submitButton.classList.add(this._inactiveButtonClass);
      this._submitButton.disabled = true;
    }
  }

  _setEventListeners() {
    this._inputList = Array.from(
      this._formEl.querySelectorAll(this._inputSelector)
    );

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this.toggleButtonState();
      });
    });
    this.toggleButtonState(); // Set initial button state
  }

  enableValidation() {
    this._formEl.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  }

  resetValidation() {
    this._formEl.reset();
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
    this.toggleButtonState();
  }
}

export default FormValidator;
