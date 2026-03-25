<script setup>
import { nextTick, reactive, ref } from "vue";
import CitySelect from "./components/CitySelect.vue";
import StatisticsLine from "./components/StatisticsLine.vue";

let savedCity = ref("Moscow");

let statistics = reactive({
  label: "ВЛАЖНОСТЬ",
  value: "90%",
});

// function getCity(city) {
//   console.log(savedCity.value); // Moscow
//   savedCity.value = city;
//   console.log(savedCity.value); // London
//   console.log(document.querySelector("#city").innerHTML); // Moscow
//   statistics.value = "20%";
// }
async function getCity(city) {
  savedCity.value = city;
  console.log(document.querySelector("#city").innerHTML); // Moscow
  await nextTick();
  console.log(document.querySelector("#city").innerHTML); // London
  statistics.value = "20%";
}
</script>

<template>
  <main>
    <div class="main" :class="savedCity">
      <div id="city">{{ savedCity }}</div>
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
