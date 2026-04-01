import { ref } from "vue";
import { API_ERROR_CODE, ENDPOINTS, FETCH_WEATHER_ERROR_MESSAGES } from "../../constants";
import { isAPIError } from "../../utils";

export const useFetchWeatherByCity = () => {
  const data = ref(null);
  const errorMessage = ref(null);

  const fetchWeatherByCity = async (city) => {
    try {
      const response = await fetch(ENDPOINTS.getWeatherByCity(city));

      if (!response?.ok) {
        data.value = null;

        const result = await response.json();

        const apiError = new Error(API_ERROR_CODE);
        apiError.details = result?.error || {};

        throw apiError;
      }

      const result = await response.json();
      errorMessage.value = null;
      data.value = result;
    } catch (error) {
      if (isAPIError(error.message)) {
        const apiErrorResult = await error.details;

        errorMessage.value =
          FETCH_WEATHER_ERROR_MESSAGES[apiErrorResult.code] ??
          (apiErrorResult.code
            ? `Ошибка ${apiErrorResult.message} (${apiErrorResult.code})`
            : "Неизвестная ошибка API");

        return;
      }

      errorMessage.value = "Неизвестная ошибка";
    }
  };

  return {data, errorMessage, fetchWeatherByCity}
};