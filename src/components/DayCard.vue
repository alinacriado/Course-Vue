<script setup>
import { computed } from "vue";

const { icon, weekDay, temperature, isActive } = defineProps({
  icon: [Object, Function],
  weekDay: String,
  temperature: Number,
  isActive: Boolean,
});

const iconColor = computed(() => {
  return isActive ? "var(--color-primary-inverted)" : "var(--color-primary)";
});
</script>

<template>
  <div class="day-card" :class="{ active: isActive }" @click="toggleActive">
    <component :is="icon" :color="iconColor" />
    <div class="day-card__day">{{ weekDay }}</div>
    <div class="day-card__temperature">{{ temperature + " °C" }}</div>
  </div>
</template>

<style scoped>
.day-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  width: 103px;
  height: 165px;
  gap: 14px;
  padding: 14px 10px 20px;
  background-color: var(--color-bg-element);
  color: var(--color-primary);
  border-radius: 10px;
  font-size: 20px;
  line-height: 120%;
  cursor: pointer;
}

.day-card:not(.active):hover {
  background-color: var(--color-bg-element-hover);
}

.day-card.active {
  background-color: var(--color-primary);
  color: var(--color-primary-inverted);
  pointer-events: none;
}

.day-card__temperature {
  font-weight: var(--fw-bold);
}
</style>
