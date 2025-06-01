import TodoCounter from "./TodoCounter.js";

class Todo {
  constructor(data, selector, handleCheck, handleDelete) {
    this._data = data;
    this._templateElement = document.querySelector(selector);
    this._handleCheck = handleCheck;
    this._handleDelete = handleDelete;
  }

  _setEventListeners() {
    this._todoCheckboxEl.addEventListener("change", () => {
      this._data.completed = !this._data.completed;
      this._handleCheck(this._data.completed);
    });

    this._todoDeleteBtn.addEventListener("click", () => {
      this._handleDelete(this._data.completed);
      this._todoElement.remove();
    });
  }

  _generateCheckboxEl() {
    this._todoCheckboxEl = this._todoElement.querySelector(".todo__completed");
    this._todoLabel = this._todoElement.querySelector(".todo__label");
    this._todoCheckboxEl.checked = this._data.completed;
    this._todoCheckboxEl.id = `todo-${this._data.id}`;
    this._todoLabel.setAttribute("for", `todo-${this._data.id}`);
  }

  _remove = () => {
    this._todoElement.remove();
    this._todoElement = null;
  };

  _generateDateEl() {
    this._todoDate = this._todoElement.querySelector(".todo__date");
    const dueDate = new Date(this._data.date);
    if (!isNaN(dueDate)) {
      this._todoDate.textContent = `Due: ${dueDate.toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })}`;

      this._todoDate.classList.add("todo__date_visible");
    } else {
      this._todoDate.classList.remove("todo__date_visible");

      this._todoDate.textContent = "";
    }
  }

  _generateNameEl() {
    this._todoName = this._todoElement.querySelector(".todo__name");
    this._todoName.textContent = this._data.name;
  }

  _generateDeleteEl() {
    this._todoDeleteBtn = this._todoElement.querySelector(".todo__delete-btn");
  }

  getView() {
    this._todoElement =
      this._templateElement.content.firstElementChild.cloneNode(true);

    this._generateCheckboxEl();
    this._generateDateEl();
    this._generateNameEl();
    this._generateDeleteEl();
    this._setEventListeners();

    return this._todoElement;
  }
}

export default Todo;
