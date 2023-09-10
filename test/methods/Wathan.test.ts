import {calculate_wathan_1rm} from "methods/Wathan"

describe("Wathan Method", () => {
  describe("valid input values", () => {
    it("should calculate 1RM correctly for weight=100, reps=5", () => {
      expect(calculate_wathan_1rm(100, 5)).toBeCloseTo(116.58)
    })

    it("should calculate 1RM correctly for weight=80, reps=8", () => {
      expect(calculate_wathan_1rm(80, 8)).toBeCloseTo(102.14)
    })

    it("should calculate 1RM correctly for weight=120, reps=3", () => {
      expect(calculate_wathan_1rm(120, 3)).toBeCloseTo(130.78)
    })
  })

  describe("invalid input values", () => {
    it("should throw an error for zero weight lifted (weight=0, reps=5)", () => {
      expect(() => calculate_wathan_1rm(0, 5)).toThrow()
    })

    it("should throw an error for zero repetitions (weight=100, reps=0)", () => {
      expect(() => calculate_wathan_1rm(100, 0)).toThrow()
    })

    it("should throw an error for negative weight lifted (weight=-50, reps=8)", () => {
      expect(() => calculate_wathan_1rm(-50, 8)).toThrow()
    })

    it("should throw an error for negative repetitions (weight=80, reps=-3)", () => {
      expect(() => calculate_wathan_1rm(80, -3)).toThrow()
    })
  })
})
