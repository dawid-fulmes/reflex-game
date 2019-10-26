import Counter from "./Counter";
import Game from "./Game";

class TimeCounter extends Counter {
  private timeout: number;
  private game: Game;

  constructor(initialValue: number = 0, game) {
    super("time", initialValue);
    this.timeout = null;
    this.game = game;
  }

  private tickTime(): void {
    this.decrement();
    if (this.getValue() > 0) {
      this.timeout = window.setTimeout(() => this.tickTime(), 1000);
    } else {
      this.game.finish();
    }
  }

  start(): void {
    this.timeout = window.setTimeout(() => this.tickTime(), 1000);
  }

  stop(): void {
    window.clearTimeout(this.timeout);
    this.timeout = null;
  }
}

export default TimeCounter;
