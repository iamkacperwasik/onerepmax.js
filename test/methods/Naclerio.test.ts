import {calculate_naclerio_1rm} from "src/methods/Naclerio"

describe("Naclerio Method", () => {
  it("should calculate 1RM correctly for valid input values", () => {
    const testCases = [
      {weightLifted: 100, repetitions: 5, expected1RM: 116.79},
      {weightLifted: 80, repetitions: 8, expected1RM: 99.51},
      {weightLifted: 120, repetitions: 3, expected1RM: 134.39},
    ]

    for (const {weightLifted, repetitions, expected1RM} of testCases) {
      const result = calculate_naclerio_1rm(weightLifted, repetitions)

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
      expect(() => calculate_naclerio_1rm(weightLifted, repetitions)).toThrow()
    }
  })
})
