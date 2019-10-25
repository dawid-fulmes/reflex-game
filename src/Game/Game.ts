import Board from "./Board";
import Counter from "./Counter";

class Game {
  private board: Board;
  private livesCounter: Counter;
  private pointsCounter: Counter;
  private timeCounter: Counter;
  private timeout: number;

  constructor(
    boardRows: number,
    boardColumns: number,
    maxLives: number,
    maxTime: number
  ) {
    this.board = new Board(boardRows, boardColumns || boardRows);
    this.livesCounter = new Counter("lives", maxLives);
    this.pointsCounter = new Counter("points");
    this.timeCounter = new Counter("time", maxTime);
    this.timeout = null;
  }

  init(): void {
    this.board.draw();
  }

  start(): void {
    if (this.timeout !== null) {
      return;
    }

    const tickTime = (): void => {
      this.timeCounter.decrement();
      if (this.timeCounter.getValue() > 0) {
        this.timeout = window.setTimeout(tickTime, 1000);
      } else {
        //End Game
      }
    };
    this.timeout = window.setTimeout(tickTime, 1000);
  }

  reset(): void {
    if (this.timeout === null) {
      return;
    }

    window.clearTimeout(this.timeout);
    this.timeout = null;
  }
}

export default Game;
