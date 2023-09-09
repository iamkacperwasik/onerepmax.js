/**
 * Calculate 1 Repetition Maximum (1RM) using Lander Method.
 * @param weight_used - Weight used in the training (in kilograms).
 * @param repetitions - Number of repetitions performed.
 * @returns The estimated 1RM.
 */
export const calculate_lander_1rm = (
  weight_used: number,
  repetitions: number
): number => {
  if (weight_used <= 0 || repetitions <= 0) {
    throw new Error("Weight and repetitions must be greater than zero.")
  }

  const one_rep_max = (100 * weight_used) / (101.3 - 2.67123 * repetitions)

  return one_rep_max
}
