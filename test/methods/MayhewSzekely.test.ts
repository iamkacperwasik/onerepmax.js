import {calculate_mayhew_szekely_1rm} from "methods/MayhewSzekely"

describe("Mayhew-Szekely Method", () => {
  describe("valid input values", () => {
    it("should calculate 1RM correctly for weight=100, reps=5", () => {
      expect(calculate_mayhew_szekely_1rm(100, 5)).toBeCloseTo(119.01, 2)
    })

    it("should calculate 1RM correctly for weight=80, reps=8", () => {
      expect(calculate_mayhew_szekely_1rm(80, 8)).toBeCloseTo(101.03, 2)
    })

    it("should calculate 1RM correctly for weight=120, reps=3", () => {
      expect(calculate_mayhew_szekely_1rm(120, 3)).toBeCloseTo(136.79, 2)
    })
  })

  describe("invalid input values", () => {
    it("should throw an error for zero weight lifted (weight=0, reps=5)", () => {
      expect(() => calculate_mayhew_szekely_1rm(0, 5)).toThrow()
    })

    it("should throw an error for zero repetitions (weight=100, reps=0)", () => {
      expect(() => calculate_mayhew_szekely_1rm(100, 0)).toThrow()
    })

    it("should throw an error for negative weight lifted (weight=-50, reps=8)", () => {
      expect(() => calculate_mayhew_szekely_1rm(-50, 8)).toThrow()
    })

    it("should throw an error for negative repetitions (weight=80, reps=-3)", () => {
      expect(() => calculate_mayhew_szekely_1rm(80, -3)).toThrow()
    })
  })
})
