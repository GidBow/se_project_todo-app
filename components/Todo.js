class Todo {
  constructor(data, selector) {
    this._data = data;
    this._templateElement = document.querySelector(selector);
  }

  _setEventListeners() {
    this._todoCheckboxEl.addEventListener("change", () => {
      this._data.completed = !this._data.completed;
    });

    this._todoDeleteBtn.addEventListener("click", () => {
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

  _todoDateEl() {
    console.log("Date value:", this._data.date);
    console.log("Todo element:", this._todoElement);
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
    return this._todoDate;
  }

  _todoNameEl() {
    // const nameEl = element.querySelector(".todo__name");
    // nameEl.textContent = this._data.name;
    // this._todoNameEl = this._todoElement.querySelector(".todo__name");
    // this._todoNameEl.textContent = this._data.name;
    this._todoName = this._todoElement.querySelector(".todo__name");
    this._todoName.textContent = this._data.name;
    return this._todoName;
  }

  _todoDeleteEl() {
    this._todoDeleteBtn = this._todoElement.querySelector(".todo__delete-btn");
    // this._todoDeleteBtn.addEventListener("click", () => {
    //   this._todoElement.remove();
    // });
    return this._todoDeleteBtn;
  }

  getView() {
    this._todoElement =
      this._templateElement.content.firstElementChild.cloneNode(true);

    this._generateCheckboxEl();
    this._todoDateEl();
    this._todoDeleteEl();
    this._todoNameEl();
    this._setEventListeners();

    return this._todoElement;
  }
}

export default Todo;
