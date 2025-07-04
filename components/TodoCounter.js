class TodoCounter {
  // todos should be the array of initial todos
  // selector is the selector for the counter text element
  constructor(todos, selector) {
    this._element = document.querySelector(selector); // select the appropriate element
    this._completed = todos.filter((todos) => todos.completed).length; // number of completed todos
    this._total = todos.length; // the total number of todos
    this._updateText();
  }

  // Call this when a checkbox is clicked, and when a completed
  // to-do is deleted.
  updateCompleted = (increment) => {
    // if increment is true, add 1 to this._completed. Otherwise,
    // subtract 1. In either case, call the method to update
    // the text content.
    this._completed += increment ? 1 : -1;
    // Ensure that completed does not go below zero
    if (this._completed < 0) {
      this._completed = 0;
    }
    this._updateText();
  };

  // Call this when a to-do is deleted, or when a to-do is
  // created via the form.
  updateTotal = (increment) => {
    // if increment is true, add 1 to this._total. Otherwise,
    // subtract 1. In either case, call the method to update the
    // text content.
    this._total += increment ? 1 : -1;
    // Ensure that total does not go below zero
    if (this._total < 0) {
      this._total = 0;
    }
    // Call the method to update the text content
    this._updateText();
  };

  // Call the method to update the text content
  _updateText() {
    // Sets the text content of corresponding text element.
    // Call this in the constructor, and whenever the counts get updated.
    this._element.textContent = `Showing ${this._completed} out of ${this._total} completed`;
  }
}

export default TodoCounter;
