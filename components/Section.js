class Section {
  constructor({ items, renderer, containerSelector }) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(".todos__list");
  }

  renderItems() {
    this._items.forEach((item) => {
      this._renderer(item);
    });
  }

  addItem(item) {
    this._container.append(item);
  }

  _clear() {
    this._container.innerHTML = "";
  }
  setItems(items) {
    this.clear();
    this.renderItems();
  }
}

export default Section;
