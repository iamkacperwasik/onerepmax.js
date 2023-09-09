/**
 * Calculate 1 Repetition Maximum (1RM) using Lombardi Method.
 * @param weight_used - Weight used in the training (in kilograms).
 * @param repetitions - Number of repetitions performed.
 * @returns The estimated 1RM.
 */
export const calculate_lombardi_1rm = (
  weight_used: number,
  repetitions: number
): number => {
  if (weight_used <= 0 || repetitions <= 0) {
    throw new Error("Weight and repetitions must be greater than zero.")
  }

  const one_rep_max = weight_used * repetitions ** 0.1

  return one_rep_max
}
