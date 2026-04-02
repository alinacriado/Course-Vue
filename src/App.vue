<script setup>
import { computed } from "vue";
import CitySelect from "./components/CitySelect.vue";
import StatisticsLine from "./components/StatisticsLine.vue";
import ErrorLine from "./components/ErrorLine.vue";
import { useFetchWeatherByCity } from "./composables";
import DaysList from "./components/DaysList.vue";

const { data, errorMessage, fetchWeatherByCity } = useFetchWeatherByCity();

const weatherStatisticsForToday = computed(() => {
  if (!data.value) {
    return [];
  }

  console.log(data.value);

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
</script>

<template>
  <main>
    <div class="main">
      <ErrorLine v-if="errorMessage" :error="errorMessage" />
      <ul class="statistics__list">
        <li
          v-for="(weatherStatistics, index) in weatherStatisticsForToday"
          :key="index"
        >
          <StatisticsLine v-bind="weatherStatistics" />
        </li>
      </ul>
      <DaysList :forecast="data?.forecast?.forecastday || []" />
      <CitySelect @select-city="fetchWeatherByCity" />
    </div>
  </main>
</template>

<style scoped>
.main {
  position: relative;
  width: 944px;
  min-height: 623px;
  background-color: var(--color-bg-main);
  border-radius: 25px;
  padding: 50px 50px 60px;
}

.statistics__list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
