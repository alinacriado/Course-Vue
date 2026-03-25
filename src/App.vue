<script setup>
import { reactive, ref } from "vue";
import CitySelect from "./components/CitySelect.vue";
import StatisticsLine from "./components/StatisticsLine.vue";

let savedCity = ref("Moscow"); // да
// let savedCity = reactive("Moscow"); нет

let statistics = reactive({
  label: "ВЛАЖНОСТЬ",
  value: "90%",
});
// let { value } = reactive({ нельзя деструктурировать
//   label: "ВЛАЖНОСТЬ",
//   value: "90%",
// });

// value = "30%"; нельзя

let arr = reactive([1]);

function getCity(city) {
  savedCity.value = city;

  statistics.value = "20%";
  arr.push(2);

  // value = "20%"; нельзя
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
