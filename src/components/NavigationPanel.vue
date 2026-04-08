<script setup>
import CitySelect from "./CitySelect.vue";
import StatisticsLine from "./StatisticsLine.vue";
import ErrorLine from "./ErrorLine.vue";
import DaysList from "./DaysList.vue";
import { computed } from "vue";

const { data, errorMessage, activeIndex } = defineProps({
  data: Object,
  errorMessage: String,
  activeIndex: Number,
});

const emit = defineEmits(["select-city", "select-index"]);

const isToday = computed(() => {
  return activeIndex === 0;
});

const forecastSource = computed(() => {
  return isToday.value
    ? data.current
    : data.forecast.forecastday[activeIndex].day;
});

const weatherStatisticsForDay = computed(() => {
  if (!data) {
    return [];
  }

  return [
    {
      label: "ВЛАЖНОСТЬ",
      value:
        (forecastSource.value.humidity ?? forecastSource.value.avghumidity) +
        " %",
    },
    {
      label: "ОСАДКИ",
      value:
        data.forecast.forecastday[activeIndex].day.daily_chance_of_rain + " %",
    },
    {
      label: "ВЕТЕР",
      value:
        (forecastSource.value.wind_kph ?? forecastSource.value.maxwind_kph) +
        " км/ч",
    },
  ];
});
</script>

<template>
  <div class="navigation-panel">
    <ErrorLine v-if="errorMessage" :error="errorMessage" />
    <ul class="statistics__list">
      <li
        v-for="(weatherStatistics, index) in weatherStatisticsForDay"
        :key="index"
      >
        <StatisticsLine v-bind="weatherStatistics" />
      </li>
    </ul>
    <DaysList
      :forecast="data?.forecast?.forecastday || []"
      :active-index="activeIndex"
      @select-index="(index) => emit('select-index', index)"
    />
    <CitySelect @select-city="(city) => emit('select-city', city)" />
  </div>
</template>

<style scoped>
.navigation-panel {
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 50px 50px 60px;
  width: 520px;
}

.statistics__list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
