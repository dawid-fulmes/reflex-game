import Box from "./Box";

class Board {
  private element: HTMLElement;
  private rows: number;
  private columns: number;

  constructor(rows: number, columns: number) {
    this.rows = rows;
    this.columns = columns;
    this.element = document.querySelector(".board");
  }

  draw(): void {
    this.element.style.gridTemplateColumns = `repeat(${this.columns}, 1fr)`;
    this.element.style.gridTemplateRows = `repeat(${this.rows}, 1fr)`;

    for (let i = 0; i < this.rows * this.columns; i++) {
      const box = new Box(i);
      this.element.appendChild(box.getElement());
    }
  }
}

export default Board;
