import {calculate_baechle_1rm} from "../../src/methods/Baechle"

describe("Baechle Method", () => {
  it("should calculate 1RM correctly for valid input values", () => {
    const test_cases = [
      {weight_lifted: 100, repetitions: 5, expected_1rm: 116.65},
      {weight_lifted: 80, repetitions: 8, expected_1rm: 101.31},
      {weight_lifted: 120, repetitions: 3, expected_1rm: 131.99},
    ]

    for (const {weight_lifted, repetitions, expected_1rm} of test_cases) {
      const result = calculate_baechle_1rm(weight_lifted, repetitions)

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
      expect(() => calculate_baechle_1rm(weight_lifted, repetitions)).toThrow()
    }
  })
})
