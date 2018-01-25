class SidebarItem {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  generate() {
    const div = document.createElement("div");
    div.classList.add("sidebar-item");

    const name = document.createElement("div");
    name.textContent = this.name;
    div.appendChild(name);

    const price = document.createElement("div");
    price.textContent = `${this.price} SEK`;
    div.appendChild(price);

    return div;
  }
}

export default SidebarItem;
