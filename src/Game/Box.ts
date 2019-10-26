import Game from "./Game";

class Box {
  private element: HTMLElement;
  private id: number;
  private isActive: boolean;
  private game: Game;
  private deactivationTimeout: number;

  constructor(game: Game, id: number) {
    this.game = game;
    this.id = id;
    this.element = document.createElement("div");
    this.element.className = "board__box";
    this.isActive = false;
    this.deactivationTimeout = null;
    this.element.addEventListener("click", () => this.handleClick());
  }

  getElement(): HTMLElement {
    return this.element;
  }

  activate(): void {
    this.isActive = true;
    this.element.style.backgroundColor = "green";
    this.deactivationTimeout = window.setTimeout(() => {
      this.game.loseLife();
      this.deactivate();
    }, 2000);
  }

  deactivate(): void {
    this.isActive = false;
    this.element.style.backgroundColor = "white";
  }

  handleClick(): void {
    if (this.game.getState() !== "GAME") {
      return;
    }

    if (this.isActive) {
      this.clearDeactivationTimeout();
      this.deactivate();
      this.game.scorePoint();
    } else {
      this.game.loseLife();
    }
  }

  clearDeactivationTimeout(): void {
    window.clearTimeout(this.deactivationTimeout);
    this.deactivationTimeout = null;
  }
}

export default Box;
