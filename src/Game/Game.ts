import Board from "./Board";

class Game {
  private board: Board;

  constructor(boardRows: number = 5, boardColumns: number = 5) {
    this.board = new Board(boardRows, boardColumns || boardRows);
  }

  init() {
    this.board.draw();
  }
}

export default Game;
