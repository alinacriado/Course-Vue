const API_BASE_URL = "https://api.weatherapi.com";

const API_VERSIONS = {
  V1: 'v1'
}

const API_URL_V1 = `${API_BASE_URL}/${API_VERSIONS.V1}`;

const API_AUTH_TOKEN = 'eb99c505641040bab77194323262703';

export const ENDPOINTS = {
  getWeatherByCity: (city, lang = 'ru', days = 4) => `${API_URL_V1}//forecast.json?${
    new URLSearchParams({
      q: city,
      lang,
      key: API_AUTH_TOKEN,
      days
    }).toString()}`,
}