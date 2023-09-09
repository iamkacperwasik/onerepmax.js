import {calculate_oconner_1rm} from "../../src/methods/OConner"

describe("O'Conner Method", () => {
  it("should calculate 1RM correctly for valid input values", () => {
    const testCases = [
      {weightLifted: 100, repetitions: 5, expected1RM: 112.5},
      {weightLifted: 80, repetitions: 8, expected1RM: 96},
      {weightLifted: 120, repetitions: 3, expected1RM: 129},
    ]

    for (const {weightLifted, repetitions, expected1RM} of testCases) {
      const result = calculate_oconner_1rm(weightLifted, repetitions)

      expect(result).toBeCloseTo(expected1RM, 2)
    }
  })

  it("should throw an error for zero or negative input values", () => {
    const invalidTestCases = [
      {weightLifted: 0, repetitions: 5},
      {weightLifted: 100, repetitions: 0},
      {weightLifted: -50, repetitions: 8},
      {weightLifted: 80, repetitions: -3},
    ]

    for (const {weightLifted, repetitions} of invalidTestCases) {
      expect(() => calculate_oconner_1rm(weightLifted, repetitions)).toThrow()
    }
  })
})
