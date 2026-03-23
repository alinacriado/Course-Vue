<script setup>
import BaseButton from "./components/BaseButton.vue";
import StatisticsLine from "./components/StatisticsLine.vue";

const statistics = {
  label: "ВЛАЖНОСТЬ",
  value: "90%",
};
</script>

<template>
  <main>
    <div class="main">
      <BaseButton>Сохранить</BaseButton>
      <!-- <StatisticsLine :label="statistics.label" :value="statistics.value" /> -->
      <StatisticsLine v-bind="statistics" />
      <StatisticsLine label="ОСАДКИ" value="0%" />
      <StatisticsLine label="ВЕТЕР" value="3 м/ч" />
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
