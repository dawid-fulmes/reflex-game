class Counter {
  private element: HTMLElement;
  private value: number;

  constructor(type: "lives" | "points" | "time", initialValue: number = 0) {
    this.element = document.getElementById(type);
    this.value = initialValue;
    this.element.textContent = this.value.toString();
  }

  getValue(): number {
    return this.value;
  }

  decrement(): void {
    this.value = this.value - 1;
    this.element.textContent = this.value.toString();
  }
}

export default Counter;
