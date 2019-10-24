class Box {
  private element: HTMLElement;
  private id: number;

  constructor(id: number) {
    this.id = id;
    this.element = document.createElement("div");
    this.element.className = "board__box";
    this.element.addEventListener("click", () => {
      console.log(this.id);
    });
  }

  getElement(): HTMLElement {
    return this.element;
  }
}

export default Box;
