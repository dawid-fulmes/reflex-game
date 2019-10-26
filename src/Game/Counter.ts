class Counter {
  private element: HTMLElement;
  private value: number;
  private initialValue: number;
  private isColorful: boolean;

  constructor(type: "lives" | "points" | "time", initialValue: number = 0) {
    this.element = document.getElementById(type);
    this.initialValue = initialValue;
    this.value = initialValue;
    this.element.textContent = this.value.toString();
    if (type === "points") {
      this.isColorful = false;
    } else {
      this.isColorful = true;
    }
    this.updateColor();
  }

  private updateColor(): void {
    if (!this.isColorful) {
      return;
    }
    let color: string;
    if (this.value > (this.initialValue * 2) / 3) {
      color = "green";
    } else if (this.value > this.initialValue / 3) {
      color = "orange";
    } else {
      color = "red";
    }

    this.element.style.color = color;
  }

  getValue(): number {
    return this.value;
  }

  decrement(): void {
    this.value = this.value - 1;
    this.element.textContent = this.value.toString();
    this.updateColor();
  }

  increment(): void {
    this.value = this.value + 1;
    this.element.textContent = this.value.toString();
    this.updateColor();
  }

  reset(): void {
    this.value = this.initialValue;
    this.element.textContent = this.value.toString();
    this.updateColor();
  }
}

export default Counter;
