/**
 * Calculate 1 Repetition Maximum (1RM) using Brown's Method.
 * @param weight_lifted Weight lifted during the set (can be in any unit).
 * @param repetitions Number of repetitions performed.
 * @returns The estimated 1RM.
 */
export const calculate_brown_1rm = (
  weight_lifted: number,
  repetitions: number
): number => {
  if (weight_lifted <= 0 || repetitions <= 0) {
    throw new Error("Weight and repetitions must be greater than zero.")
  }

  // Brown's Method formula for calculating 1RM:
  // 1RM = weight lifted * (0.9849 + 0.0328 * repetitions)
  const one_rep_max = weight_lifted * (0.9849 + 0.0328 * repetitions)

  // Return the calculated 1RM value.
  return one_rep_max
}
