import {calculate_adams_1rm} from "./methods/Adams"
import {calculate_baechle_1rm} from "./methods/Baechle"
import {calculate_berger_1rm} from "./methods/Berger"
import {calculate_brown_1rm} from "./methods/Brown"
import {calculate_brzycki_1rm} from "./methods/Brzycki"
import {calculate_epley_1rm} from "./methods/Epley"
import {calculate_kemmler_1rm} from "./methods/Kemmler"
import {calculate_lander_1rm} from "./methods/Lander"
import {calculate_lombardi_1rm} from "./methods/Lombardi"
import {calculate_mayhew_szekely_1rm} from "./methods/MayhewSzekely"
import {calculate_naclerio_1rm} from "./methods/Naclerio"
import {calculate_oconner_1rm} from "./methods/OConner"
import {calculate_wathan_1rm} from "./methods/Wathan"

export const calculate1RM = {
  epley: calculate_epley_1rm,
  brzycki: calculate_brzycki_1rm,
  adams: calculate_adams_1rm,
  baechle: calculate_baechle_1rm,
  berger: calculate_berger_1rm,
  brown: calculate_brown_1rm,
  kemmler: calculate_kemmler_1rm,
  lander: calculate_lander_1rm,
  lombardi: calculate_lombardi_1rm,
  mayhew_szekely: calculate_mayhew_szekely_1rm,
  naclerio: calculate_naclerio_1rm,
  oconner: calculate_oconner_1rm,
  wathan: calculate_wathan_1rm,
}
