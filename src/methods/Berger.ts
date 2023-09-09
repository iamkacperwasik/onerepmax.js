/**
 * Calculate 1 Repetition Maximum (1RM) using Berger Method.
 * @param weight_lifted - Weight lifted during the set (in kilograms).
 * @param repetitions - Number of repetitions performed.
 * @returns The estimated 1RM.
 */
export const calculate_berger_1rm = (
  weight_lifted: number,
  repetitions: number
): number => {
  if (weight_lifted <= 0 || repetitions <= 0) {
    throw new Error("Weight and repetitions must be greater than zero.")
  }

  const one_rep_max = weight_lifted * repetitions * 0.033 + weight_lifted

  return one_rep_max
}
