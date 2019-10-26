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
    if (this.state === "INITIAL") {
      return;
    }

    this.finish();
    this.timeCounter.reset();
    this.livesCounter.reset();
    this.pointsCounter.reset();
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

  scorePoint(): void {
    this.pointsCounter.increment();
  }

  loseLife(): void {
    this.livesCounter.decrement();
    if (this.livesCounter.getValue() < 1) {
      this.finish();
    }
  }
}

export default Game;
