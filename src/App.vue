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

const arr = ref(["anton", "vasia", "anna"]);
const obj = ref({
  name: "anton",
  age: 18,
});
</script>

<template>
  <main>
    <div class="main">
      <ul>
        <li v-for="(item, index) in arr" :key="item">{{ index }} {{ item }}</li>
      </ul>
      <ul>
        <li v-for="(value, key, index) in obj" :key="key">
          {{ value }}{{ key }}{{ index }}
        </li>
      </ul>
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
