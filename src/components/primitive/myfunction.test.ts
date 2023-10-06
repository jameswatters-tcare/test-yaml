import { add } from "./myfunction";
import { describe, it, expect } from "vitest";

// Write a test suite using Jest
describe('add function', () => {
    it('should add two numbers correctly', () => {
      // Arrange: Define input values
      const num1 = 5;
      const num2 = 3;
  
      // Act: Call the 'add' function
      const result = add(num1, num2);
  
      // Assert: Check if the result is as expected
      expect(result).toBe(8); // 5 + 3 should equal 8
    });
  
    // Add more test cases as needed
  });