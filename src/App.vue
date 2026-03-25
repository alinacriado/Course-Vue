<script setup>
import { reactive, ref } from "vue";
import CitySelect from "./components/CitySelect.vue";
import StatisticsLine from "./components/StatisticsLine.vue";

let savedCity = ref("Moscow");

let statistics = reactive({
  label: "ВЛАЖНОСТЬ",
  value: "90%",
});

// есть unwrap
const counter = reactive({
  count: ref(0),
});
counter.count++; // для ref не нужен доп .value, это автоматический unwrap
console.log(counter.count);

// нет unwrap
const map = reactive(new Map([["count", ref(0)]]));
map.get("count").value;

// нет unwrap
const arr = reactive([ref(0)]);
arr[0].value;

const obj = { id: ref(1) };
const id = obj.id;

function getCity(city) {
  savedCity.value = city; // для ref нужен доп .value
  statistics.value = "20%"; // для reactive не нужен доп .value
}

// автоматический unwrap работает только для reactive объектов и в шаблоне
</script>

<template>
  <main>
    <div class="main" :class="savedCity">
      <!-- // автоматический unwrap -->
      {{ savedCity + "sn" }}
      {{ obj.id }}
      <!-- при вложенности и взаимодействии надо value -->
      {{ obj.id.value + 1 }}
      <!-- или -->
      {{ id + 1 }}

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
