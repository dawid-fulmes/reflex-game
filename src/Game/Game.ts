import Board from "./Board";
import Counter from "./Counter";

class Game {
  private board: Board;
  private livesCounter: Counter;
  private pointsCounter: Counter;
  private timeCounter: Counter;

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
  }

  init() {
    this.board.draw();
  }
}

export default Game;
