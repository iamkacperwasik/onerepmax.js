/**
 * Calculate 1 Repetition Maximum (1RM) using Baechle Method.
 * @param {number} weight_lifted - Weight lifted during the set (can be in any unit).
 * @param {number} repetitions - Number of repetitions performed.
 * @returns {number} The estimated 1RM.
 */
export const calculate_baechle_1rm = (
  weight_lifted: number,
  repetitions: number
): number => {
  // Ensure that the weight lifted and repetitions are both greater than zero.
  if (weight_lifted <= 0 || repetitions <= 0) {
    throw new Error("Weight and repetitions must be greater than zero.")
  }

  // Baechle Method formula for calculating 1RM:
  // 1RM = 0.0333 * weight lifted * repetitions + weight lifted
  const one_rep_max = 0.0333 * weight_lifted * repetitions + weight_lifted

  // Return the calculated 1RM value.
  return one_rep_max
}
