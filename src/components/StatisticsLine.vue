<script setup></script>

<template>
  <div class="statistics">
    <div class="statistics__name">Влажность</div>
    <div class="statistics__value">90%</div>
  </div>
</template>

<style scoped>
.statistics {
  display: flex;
  justify-content: space-between;
  gap: 40px;
  align-items: center;
  font-size: 28px;
  line-height: 120%;
}

.statistics__name {
  text-transform: uppercase;
  font-weight: 700;
}

.statistics__value {
  font-weight: 500;
}
</style>
