import Counter from "./Counter";
import Game from "./Game";
import Alert from "./Alert";

class TimeCounter extends Counter {
  private timeout: number;
  private game: Game;
  private alert: Alert;

  constructor(initialValue: number = 0, game, alert) {
    super("time", initialValue);
    this.timeout = null;
    this.game = game;
    this.alert = alert;
  }

  private tickTime(): void {
    this.decrement();
    if (this.getValue() > 0) {
      this.timeout = window.setTimeout(() => this.tickTime(), 1000);
    } else {
      this.alert.show("TIME_END");
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
