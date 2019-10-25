import config from "./config/config";
import Game from "./Game/Game";

const { maxLives, maxTime } = config;
const [rows, columns] = config.boxNumber;

const game = new Game(rows, columns || rows, maxLives, maxTime);
game.init();

document.getElementById("start").addEventListener("click", () => game.start());
document.getElementById("reset").addEventListener("click", () => game.reset());
