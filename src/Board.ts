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
      const square: HTMLElement = document.createElement("div");
      square.className = "board__box";
      this.element.appendChild(square);
    }
  }
}

export default Board;
