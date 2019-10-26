import Box from "./Box";
import Game from "./Game";

class Board {
  private game: Game;
  private element: HTMLElement;
  private rows: number;
  private columns: number;
  private boxes: Array<Box>;
  private boxesActivationTimeout: number;

  constructor(game: Game, rows: number, columns: number) {
    this.game = game;
    this.rows = rows;
    this.columns = columns;
    this.element = document.querySelector(".board");
    this.boxes = [];
    this.boxesActivationTimeout = null;
    this.draw();
  }

  private draw(): void {
    this.element.style.gridTemplateColumns = `repeat(${this.columns}, 1fr)`;
    this.element.style.gridTemplateRows = `repeat(${this.rows}, 1fr)`;

    for (let i = 0; i < this.rows * this.columns; i++) {
      const box = new Box(this.game, i);
      this.boxes.push(box);
      this.element.appendChild(box.getElement());
    }
  }

  activateRandomBox(): void {
    const boxesNumber = this.boxes.length;
    const randomId = Math.floor(Math.random() * boxesNumber);
    this.boxes[randomId].activate();
    this.boxesActivationTimeout = window.setTimeout(
      () => this.activateRandomBox(),
      3000
    );
  }

  clearBoxesActivationTimeout(): void {
    window.clearTimeout(this.boxesActivationTimeout);
    this.boxesActivationTimeout = null;
  }

  deactivateAllBoxes(): void {
    this.boxes.forEach(box => {
      box.clearDeactivationTimeout();
      box.deactivate();
    });
  }
}

export default Board;
