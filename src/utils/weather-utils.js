import { WEATHER_CONDITION_ICONS, DEFAULT_WEATHER_CONDITION_ICON, } from "../constants";

export const getWeatherConditionIcon = (weatherConditionCode) => {
  for (const [icon, codes] of WEATHER_CONDITION_ICONS.entries()) {
    if (codes.includes(weatherConditionCode)) {
      return icon;
    }
  }

  return DEFAULT_WEATHER_CONDITION_ICON;
};