<script setup>
const { label = "-", value } = defineProps({
  label: String,
  value: String,
});
</script>

<template>
  <div class="statistics__line">
    <div class="statistics__name">{{ label }}</div>
    <div class="statistics__value">{{ value }}</div>
  </div>
</template>

<style scoped>
.statistics__line {
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
  font-weight: 400;
}
</style>
