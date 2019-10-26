import Board from "./Board";
import Counter from "./Counter";
import TimeCounter from "./TimeCounter";

class Game {
  private board: Board;
  private livesCounter: Counter;
  private pointsCounter: Counter;
  private timeCounter: TimeCounter;
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
    this.timeCounter = new TimeCounter(maxTime, this);
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
    this.timeCounter.start();
    this.board.activateRandomBox();
  }

  reset(): void {
    console.log("reset");
    if (this.state === "INITIAL") {
      return;
    }

    this.timeCounter.stop();
    this.board.deactivateAllBoxes();
    this.board.clearBoxesActivationTimeout();
    this.state = "INITIAL";
  }

  finish(): void {
    this.state = "END";
    this.timeCounter.stop();
    this.board.deactivateAllBoxes();
    this.board.clearBoxesActivationTimeout();
  }

  getState(): "INITIAL" | "GAME" | "END" {
    return this.state;
  }
}

export default Game;
