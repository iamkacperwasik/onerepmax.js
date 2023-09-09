import {calculate_lander_1rm} from "../../src/methods/Lander"

describe("Lander Method", () => {
  it("should calculate 1RM correctly for valid input values", () => {
    const test_cases = [
      {weight_used: 100, repetitions: 5, expected_1rm: 113.7},
      {weight_used: 80, repetitions: 8, expected_1rm: 100.08},
      {weight_used: 120, repetitions: 3, expected_1rm: 128.63},
    ]

    for (const {weight_used, repetitions, expected_1rm} of test_cases) {
      const result = calculate_lander_1rm(weight_used, repetitions)

      expect(result).toBeCloseTo(expected_1rm, 1)
    }
  })

  it("should throw an error for zero or negative input values", () => {
    const invalid_test_cases = [
      {weight_used: 0, repetitions: 5},
      {weight_used: 100, repetitions: 0},
      {weight_used: -50, repetitions: 8},
      {weight_used: 80, repetitions: -3},
    ]

    for (const {weight_used, repetitions} of invalid_test_cases) {
      expect(() => calculate_lander_1rm(weight_used, repetitions)).toThrow()
    }
  })
})
