class Alert {
  private element: HTMLElement;
  private timeout: number;

  constructor() {
    this.element = document.querySelector(".alert");
    this.timeout = null;
  }

  show(msg: "LIFE_LOST" | "GAME_LOST" | "TIME_END"): void {
    if (this.timeout !== null) {
      window.clearTimeout(this.timeout);
      this.timeout = null;
    }

    let text: string = "";
    switch (msg) {
      case "LIFE_LOST":
        text = "Straciłeś życie!";
        break;
      case "GAME_LOST":
        text = "Straciłeś wszystkie życia!";
        break;
      case "TIME_END":
        text = "Koniec czasu!";
        break;
    }
    this.element.textContent = text;
    this.element.className = "alert";
  }

  hide(): void {
    this.element.className = "alert alert--hidden";
    this.timeout = null;
  }

  flash(msg: "LIFE_LOST" | "GAME_LOST" | "TIME_END"): void {
    this.show(msg);
    this.timeout = window.setTimeout(() => this.hide(), 2000);
  }
}

export default Alert;
