/**
 * Calculate 1 Repetition Maximum (1RM) using Epley Method.
 * @param weight_lifted Weight used in the training (can be in any unit).
 * @param repetitions Number of repetitions performed.
 * @returns The estimated 1RM.
 */
export const calculate_epley_1rm = (
  weight_lifted: number,
  repetitions: number
): number => {
  if (weight_lifted <= 0 || repetitions <= 0) {
    throw new Error("Weight and repetitions must be greater than zero.")
  }

  // Epley Method formula for calculating 1RM:
  // 1RM = weight used * (1 + 0.0333 * repetitions)
  const one_rep_max = weight_lifted * (1 + 0.0333 * repetitions)

  // Return the calculated 1RM value.
  return one_rep_max
}
