import config from "./config";
import Game from "./Game";

const [rows, columns] = config.boxNumber;
const game = new Game(rows, columns || rows);
game.init();
