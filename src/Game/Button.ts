import Game from "./Game";

class Button {
  private element: HTMLElement;

  constructor(game, type: "start" | "reset") {
    this.element = document.getElementById(type);
    switch (type) {
      case "start":
        this.element.addEventListener("click", () => game.start());
        break;
      case "reset":
        this.element.addEventListener("click", () => game.reset());
        this.disable();
        break;
    }
  }

  enable(): void {
    this.element.removeAttribute("disabled");
  }

  disable(): void {
    this.element.setAttribute("disabled", "true");
  }
}

export default Button;
