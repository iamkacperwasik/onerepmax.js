/**
 * Calculate 1 Repetition Maximum (1RM) using Adams Method.
 * @param {number} weight_lifted - Weight lifted during the set (can be in any unit).
 * @param {number} repetitions - Number of repetitions performed.
 * @returns {number} The estimated 1RM.
 */
export const calculate_adams_1rm = (
  weight_lifted: number,
  repetitions: number
): number => {
  // Ensure that the weight lifted and repetitions are both greater than zero.
  if (weight_lifted <= 0 || repetitions <= 0) {
    throw new Error("Weight and repetitions must be greater than zero.")
  }

  // Adams Method formula for calculating 1RM:
  // 1RM = weight lifted / (1 - 0.02 * repetitions)
  const one_rep_max = weight_lifted / (1 - 0.02 * repetitions)

  // Return the calculated 1RM value.
  return one_rep_max
}
