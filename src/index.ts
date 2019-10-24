import config from "./config";
import Board from "./Board";

const [rows, columns] = config.squaresNumber;
const board = new Board(rows, columns || rows);
board.draw();
