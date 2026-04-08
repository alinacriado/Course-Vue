<script setup>
import { computed } from "vue";
import DayCard from "./DayCard.vue";
import { getWeekDay, getWeatherConditionIcon } from "../utils";

const { forecast, activeIndex } = defineProps({
  forecast: Array,
  activeIndex: Number,
});

const emit = defineEmits(["select-index"]);

const weatherConditions = computed(() => {
  return forecast.map((dayForecast) => ({
    icon: getWeatherConditionIcon(dayForecast.day.condition.code),
    weekDay: getWeekDay(dayForecast.date, "short"),
    temperature: dayForecast.day.avgtemp_c,
  }));
});
</script>

<template>
  <div class="days-list">
    <DayCard
      v-for="(weatherCondition, index) in weatherConditions"
      :key="index"
      v-bind="weatherCondition"
      :is-active="activeIndex == index"
      @click="() => emit('select-index', index)"
    />
  </div>
</template>

<style scoped>
.days-list {
  display: flex;
  gap: 1px;
  margin-top: 80px;
}
</style>
