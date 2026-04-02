import IconSun from "../icons/weather/IconSun.vue";
import IconCloud from "../icons/weather/IconCloud.vue";
import IconRain from "../icons/weather/IconRain.vue";

export const DEFAULT_WEATHER_CONDITION_ICON = IconCloud;

export const WEATHER_CONDITION_CODES = {
  SUNY_CODES: [1000],
  CLOUDY_CODES: [1003, 1006, 1009],
  RAINY_CODES: [
    1063, 1072, 1150, 1153, 1168, 1171, 1180, 1183, 1186, 1189, 1192, 1195,
    1198, 1201, 1240, 1243, 1246, 1273, 1276,
  ],
};

export const WEATHER_CONDITION_ICONS = new Map([
  [IconSun, WEATHER_CONDITION_CODES.SUNY_CODES],
  [IconCloud, WEATHER_CONDITION_CODES.CLOUDY_CODES],
  [IconRain, WEATHER_CONDITION_CODES.RAINY_CODES],
]);