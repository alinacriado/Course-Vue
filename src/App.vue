<script setup>
import { ref } from "vue";

import { useFetchWeatherByCity } from "./composables";
import DayPanel from "./components/DayPanel.vue";
import NavigationPanel from "./components/NavigationPanel.vue";

const { data, errorMessage, fetchWeatherByCity } = useFetchWeatherByCity();

const activeIndex = ref(0);
</script>

<template>
  <main>
    <div class="main">
      <DayPanel :weatherData="data || {}" :active-index="activeIndex" />
      <NavigationPanel
        :data="data"
        :error-message="errorMessage"
        :active-index="activeIndex"
        @select-city="fetchWeatherByCity"
        @select-index="(index) => (activeIndex = index)"
      />
    </div>
  </main>
</template>

<style scoped>
.main {
  display: flex;
  justify-content: space-between;
  width: 944px;
  height: 623px;
  background-color: var(--color-bg-main);
  border-radius: 25px;
}
</style>
