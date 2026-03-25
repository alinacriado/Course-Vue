<script setup>
import { computed, ref } from "vue";
import CitySelect from "./components/CitySelect.vue";
import StatisticsLine from "./components/StatisticsLine.vue";

let savedCity = ref("Moscow");

let data = ref({
  humidity: 90,
});

const dataModified = computed(() => {
  return {
    label: "ВЛАЖНОСТЬ",
    value: data.value.humidity + "%",
  };
});

function getCity(city) {
  savedCity.value = city;
  data.value.humidity = 20;
}
</script>

<template>
  <main>
    <div class="main">
      <div id="city">{{ savedCity }}</div>
      <StatisticsLine v-bind="dataModified" />
      <StatisticsLine label="ОСАДКИ" value="0%" />
      <StatisticsLine label="ВЕТЕР" value="3 м/ч" />
      <CitySelect @select-city="getCity" />
    </div>
  </main>
</template>

<style scoped>
.main {
  width: 944px;
  height: 623px;
  background-color: var(--color-bg-main);
  border-radius: 25px;
  padding: 50px 50px 60px;
}
</style>
