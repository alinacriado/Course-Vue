<script setup>
import CitySelect from "./components/CitySelect.vue";
import StatisticsLine from "./components/StatisticsLine.vue";

const statistics = {
  label: "ВЛАЖНОСТЬ",
  value: "90%",
};

function getCity(city) {
  console.log(city);
}

const user = {
  name: "Alina",
};

const handler = {
  get(target, prop, receiver) {
    console.log("get value");
    // return "Vasia";
    return target[prop];
  },
  set(obj, prop, value) {
    if (prop == "name") {
      console.log("set value");
      obj[prop] = value;
      return true;
    }
  },
};

const proxy = new Proxy(user, handler);
console.log(proxy.name);
proxy.name = "snjkasbc";
console.log(proxy.name);
</script>

<template>
  <main>
    <div class="main">
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
