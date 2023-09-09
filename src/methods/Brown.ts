/**
 * Calculate 1 Repetition Maximum (1RM) using Brown's Method.
 * @param weight_lifted - Weight lifted during the set (in kilograms).
 * @param repetitions - Number of repetitions performed.
 * @returns The estimated 1RM.
 */
export const calculate_brown_1rm = (
  weight_lifted: number,
  repetitions: number
): number => {
  if (weight_lifted <= 0 || repetitions <= 0) {
    throw new Error("Weight and repetitions must be greater than zero.")
  }

  const one_rep_max = weight_lifted * (0.9849 + 0.0328 * repetitions)

  return one_rep_max
}
