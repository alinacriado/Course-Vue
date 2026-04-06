<script setup>
import { computed, provide, ref } from "vue";
import DayCard from "./DayCard.vue";
import { getWeekDay, getWeatherConditionIcon } from "../utils";

const { forecast } = defineProps({
  forecast: Array,
});

const activeIndex = ref(0);
provide("num", activeIndex);

const weatherConditions = computed(() => {
  return forecast.map((dayForecast) => ({
    icon: getWeatherConditionIcon(dayForecast.day.condition.code),
    weekDay: getWeekDay(dayForecast.date),
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
      @click="() => (activeIndex = index)"
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
