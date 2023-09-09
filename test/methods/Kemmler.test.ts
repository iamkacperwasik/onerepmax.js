import {calculate_kemmler_1rm} from "src/methods/Kemmler"

describe("Kemmler Method", () => {
  it("should calculate 1RM correctly for valid input values", () => {
    const test_cases = [
      {weight_lifted: 100, repetitions: 5, expected_1rm: 108.02},
      {weight_lifted: 80, repetitions: 8, expected_1rm: 93.034},
      {weight_lifted: 120, repetitions: 3, expected_1rm: 124.17},
    ]

    for (const {weight_lifted, repetitions, expected_1rm} of test_cases) {
      const result = calculate_kemmler_1rm(weight_lifted, repetitions)

      expect(result).toBeCloseTo(expected_1rm, 2)
    }
  })

  it("should throw an error for zero or negative input values", () => {
    const invalid_test_cases = [
      {weight_lifted: 0, repetitions: 5},
      {weight_lifted: 100, repetitions: 0},
      {weight_lifted: -50, repetitions: 8},
      {weight_lifted: 80, repetitions: -3},
    ]

    for (const {weight_lifted, repetitions} of invalid_test_cases) {
      expect(() => calculate_kemmler_1rm(weight_lifted, repetitions)).toThrow()
    }
  })
})
