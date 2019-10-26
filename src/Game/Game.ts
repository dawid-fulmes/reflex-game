import Board from "./Board";
import Counter from "./Counter";

class Game {
  private board: Board;
  private livesCounter: Counter;
  private pointsCounter: Counter;
  private timeCounter: Counter;
  private timeout: number;
  private state: "INITIAL" | "GAME" | "END";
  private highlightedBoxId: number;

  constructor(
    boardRows: number,
    boardColumns: number,
    maxLives: number,
    maxTime: number
  ) {
    this.board = new Board(this, boardRows, boardColumns || boardRows);
    this.livesCounter = new Counter("lives", maxLives);
    this.pointsCounter = new Counter("points");
    this.timeCounter = new Counter("time", maxTime);
    this.timeout = null;
    this.state = "INITIAL";
  }

  init(): void {
    this.board.draw();
  }

  start(): void {
    if (this.state !== "INITIAL") {
      return;
    }

    this.state = "GAME";
    const tickTime = (): void => {
      this.timeCounter.decrement();
      if (this.timeCounter.getValue() > 0) {
        this.timeout = window.setTimeout(tickTime, 1000);
      } else {
        this.finish();
      }
    };
    this.timeout = window.setTimeout(tickTime, 1000);
    this.board.activateRandomBox();
  }

  reset(): void {
    console.log("reset");
    if (this.state === "INITIAL") {
      return;
    }

    window.clearTimeout(this.timeout);
    this.timeout = null;
    this.board.clearBoxesActivationTimeout();
    this.board.deactivateAllBoxes();
    this.state = "INITIAL";
  }

  finish(): void {
    this.state = "END";
    if (this.timeout !== null) {
      window.clearTimeout(this.timeout);
    }
    this.board.deactivateAllBoxes();
    this.board.clearBoxesActivationTimeout();
  }

  getState(): "INITIAL" | "GAME" | "END" {
    return this.state;
  }
}

export default Game;
