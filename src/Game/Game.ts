import Board from "./Board";
import Counter from "./Counter";
import TimeCounter from "./TimeCounter";
import Alert from "./Alert";
import Button from "./Button";

class Game {
  private board: Board;
  private livesCounter: Counter;
  private pointsCounter: Counter;
  private timeCounter: TimeCounter;
  private state: "INITIAL" | "GAME" | "END";
  private startButton: Button;
  private resetButton: Button;
  public alert: Alert;

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
    this.alert = new Alert();
    this.startButton = new Button(this, "start");
    this.resetButton = new Button(this, "reset");
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
    this.startButton.disable();
    this.resetButton.enable();
  }

  reset(): void {
    if (this.state === "INITIAL") {
      return;
    }

    this.finish();
    this.timeCounter.reset();
    this.livesCounter.reset();
    this.pointsCounter.reset();
    this.alert.hide();
    this.state = "INITIAL";
    this.startButton.enable();
    this.resetButton.disable();
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
      this.alert.show("GAME_LOST");
      this.finish();
    } else {
      this.alert.flash("LIFE_LOST");
    }
  }
}

export default Game;
