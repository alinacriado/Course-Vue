<script setup>
import { computed, ref } from "vue";
import CitySelect from "./components/CitySelect.vue";
import StatisticsLine from "./components/StatisticsLine.vue";
import ErrorLine from "./components/ErrorLine.vue";

const API_ENDPOINT = "https://api.weatherapi.com/v1";

const API_ERROR_CODE = "API ERROR";

const FETCH_WEATHER_ERRORS = {
  CITY_NOT_FOUND: 1006,
};

const FETCH_WEATHER_ERROR_MESSAGES = {
  [FETCH_WEATHER_ERRORS.CITY_NOT_FOUND]: "Указанный город не найден",
};

let data = ref();
let errorMessage = ref(null);

const isAPIError = (apiCode) => {
  return API_ERROR_CODE === apiCode;
};

const dataModified = computed(() => {
  if (!data.value) {
    return [];
  }

  return [
    {
      label: "ВЛАЖНОСТЬ",
      value: data.value.current.humidity + " %",
    },
    {
      label: "ОСАДКИ",
      value: data.value.forecast.forecastday[0].day.daily_chance_of_rain + " %",
    },
    { label: "ВЕТЕР", value: data.value.current.wind_kph + " км/ч" },
  ];
});

const getCity = async (city) => {
  try {
    const params = new URLSearchParams({
      q: city,
      lang: "ru",
      key: "eb99c505641040bab77194323262703",
      days: 4,
    });

    const response = await fetch(
      `${API_ENDPOINT}/forecast.json?${params.toString()}`,
    );

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
</script>

<template>
  <main>
    <div class="main">
      <ErrorLine v-if="errorMessage" :error="errorMessage" />
      <ul class="statistics">
        <li v-for="(item, index) in dataModified" :key="index">
          <StatisticsLine v-bind="item" />
        </li>
      </ul>
      <CitySelect @select-city="getCity" />
    </div>
  </main>
</template>

<style scoped>
.main {
  position: relative;
  width: 944px;
  height: 623px;
  background-color: var(--color-bg-main);
  border-radius: 25px;
  padding: 50px 50px 60px;
}
</style>
