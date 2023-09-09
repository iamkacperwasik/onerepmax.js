/**
 * Calculate 1 Repetition Maximum (1RM) using Lombardi Method.
 * @param weight_lifted Weight used in the training (can be in any unit).
 * @param repetitions Number of repetitions performed.
 * @returns The estimated 1RM.
 */
export const calculate_lombardi_1rm = (
  weight_lifted: number,
  repetitions: number
): number => {
  if (weight_lifted <= 0 || repetitions <= 0) {
    throw new Error("Weight and repetitions must be greater than zero.")
  }

  // Lombardi Method formula for calculating 1RM:
  const one_rep_max = weight_lifted * repetitions ** 0.1

  // Return the calculated 1RM value.
  return one_rep_max
}
