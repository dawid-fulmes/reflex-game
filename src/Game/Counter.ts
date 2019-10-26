class Counter {
  private element: HTMLElement;
  private value: number;
  private initialValue: number;

  constructor(type: "lives" | "points" | "time", initialValue: number = 0) {
    this.element = document.getElementById(type);
    this.initialValue = initialValue;
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

  reset(): void {
    this.value = this.initialValue;
    this.element.textContent = this.value.toString();
  }
}

export default Counter;
