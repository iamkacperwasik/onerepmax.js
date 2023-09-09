/**
 * Calculate 1 Repetition Maximum (1RM) using Mayhew-Szekely Method.
 * @param weight_lifted Weight lifted during the set (can be in any unit).
 * @param repetitions Number of repetitions performed.
 * @returns The estimated 1RM.
 */
export const calculate_mayhew_szekely_1rm = (
  weight_lifted: number,
  repetitions: number
): number => {
  if (weight_lifted <= 0 || repetitions <= 0) {
    throw new Error("Weight and repetitions must be greater than zero.")
  }

  const e = 2.71828
  // Mayhew-Szekely Method formula for calculating 1RM:
  const one_rep_max =
    (weight_lifted * 100) / (52.2 + 41.9 * Math.pow(e, -0.055 * repetitions))

  // Return the calculated 1RM value.
  return one_rep_max
}
