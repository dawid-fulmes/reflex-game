import config from "./config/config";
import Game from "./Game/Game";

const [rows, columns] = config.boxNumber;
const game = new Game(rows, columns || rows);
game.init();
