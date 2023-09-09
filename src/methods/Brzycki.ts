/**
 * Calculate 1 Repetition Maximum (1RM) using Brzycki Method.
 * @param weight_lifted Weight used in the training (can be in any unit).
 * @param repetitions Number of repetitions performed.
 * @returns The estimated 1RM.
 */
export const calculate_brzycki_1rm = (
  weight_lifted: number,
  repetitions: number
): number => {
  if (weight_lifted <= 0 || repetitions <= 0) {
    throw new Error("Weight and repetitions must be greater than zero.")
  }

  // Brzycki Method formula for calculating 1RM:
  // 1RM = weight used / (1.0278 - 0.0278 * repetitions)
  const one_rep_max = weight_lifted / (1.0278 - 0.0278 * repetitions)

  // Return the calculated 1RM value.
  return one_rep_max
}
