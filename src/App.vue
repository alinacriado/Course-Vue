<script setup>
import { computed, ref } from "vue";
import CitySelect from "./components/CitySelect.vue";
import StatisticsLine from "./components/StatisticsLine.vue";

let savedCity = ref("Moscow");

let data = ref({
  humidity: 90,
  rainfall: 0,
  wind: 3,
});

const dataModified = computed(() => {
  return [
    {
      label: "ВЛАЖНОСТЬ",
      value: data.value.humidity + "%",
    },
    { label: "ОСАДКИ", value: data.value.rainfall + "%" },
    { label: "ВЕТЕР", value: data.value.wind + " км/ч" },
  ];
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
  width: 944px;
  height: 623px;
  background-color: var(--color-bg-main);
  border-radius: 25px;
  padding: 50px 50px 60px;
}
</style>
