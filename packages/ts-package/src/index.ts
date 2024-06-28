// calculate function
export function calculate(operator: string, num1: number, num2: number): number {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 === 0) {
        throw new Error("Division by zero is not allowed");
      }
      return num1 / num2;
    default:
      throw new Error("Invalid operator");
  }
}

export const ROOT_2 = Math.SQRT2;
