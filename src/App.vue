<script setup>
import BaseButton from "./components/BaseButton.vue";
import StatisticsLine from "./components/StatisticsLine.vue";
</script>

<template>
  <main>
    <div class="main">
      <BaseButton>Сохранить</BaseButton>
      <StatisticsLine />
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
