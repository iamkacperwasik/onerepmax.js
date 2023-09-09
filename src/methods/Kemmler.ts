/**
 * Calculate 1 Repetition Maximum (1RM) using Kemmler Method.
 * @param weight_lifted Weight lifted during the set (can be in any unit).
 * @param repetitions Number of repetitions performed.
 * @returns The estimated 1RM.
 */
export const calculate_kemmler_1rm = (
  weight_lifted: number,
  repetitions: number
): number => {
  if (weight_lifted <= 0 || repetitions <= 0) {
    throw new Error("Weight and repetitions must be greater than zero.")
  }

  // Kemmler Method formula for calculating 1RM:
  const one_rep_max =
    weight_lifted *
    (0.988 +
      0.0104 * repetitions +
      0.0019 * repetitions ** 2 -
      0.0000584 * repetitions ** 3)

  // Return the calculated 1RM value.
  return one_rep_max
}
