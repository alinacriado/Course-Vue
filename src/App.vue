<script setup>
import { computed, ref } from "vue";
import CitySelect from "./components/CitySelect.vue";
import StatisticsLine from "./components/StatisticsLine.vue";

const API_ENDPOINT = "https://api.weatherapi.com/v1";

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

async function getCity(city) {
  const params = new URLSearchParams({
    q: city,
    lang: "ru",
    key: "eb99c505641040bab77194323262703",
    days: 3,
  });
  const res = await fetch(`${API_ENDPOINT}/forecast.json?${params.toString()}`);
  const data = await res.json();
  console.log(data);
}
</script>

<template>
  <main>
    <div class="main">
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
