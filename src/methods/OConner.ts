/**
 * Calculate 1 Repetition Maximum (1RM) using O'Conner Method.
 * @param weightLifted - Weight lifted during the set (in kilograms).
 * @param repetitions - Number of repetitions performed.
 * @returns The estimated 1RM.
 */
export const calculate_oconner_1rm = (
  weight_lifted: number,
  repetitions: number
): number => {
  if (weight_lifted <= 0 || repetitions <= 0) {
    throw new Error("Weight and repetitions must be greater than zero.")
  }

  const one_rep_max = weight_lifted * (1 + 0.025 * repetitions)

  return one_rep_max
}
