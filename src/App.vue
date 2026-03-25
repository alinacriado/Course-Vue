<script setup>
import { ref } from "vue";
import CitySelect from "./components/CitySelect.vue";
import StatisticsLine from "./components/StatisticsLine.vue";

const savedCity = ref("Moscow");

let statistics = ref({
  label: "ВЛАЖНОСТЬ",
  value: "90%",
});
let arr = ref([1]);

function getCity(city) {
  console.log(city);
  savedCity.value = city;
  statistics.value.value = "20%";
  arr.value.push(2);
}
</script>

<template>
  <main>
    <div class="main">
      {{ savedCity }}
      {{ arr }}
      <StatisticsLine v-bind="statistics" />
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
