<script setup>
import IconLocation from "../icons/IconLocation.vue";
import IconSun from "../icons/weather/IconSun.vue";
</script>
<template>
  <div class="day-panel">
    <div class="day-panel__header">
      <div class="day-panel__weekday">Вторник</div>
      <div class="day-panel__date">20 июня 2025</div>
      <div class="day-panel__location"><IconLocation />Москва</div>
    </div>
    <div class="day-panel__forecast">
      <IconSun class="day-panel__icon" />
      <div class="day-panel__temperature">29 °C</div>
      <div class="day-panel__condition">Солнечно</div>
    </div>
  </div>
</template>

<style scoped>
.day-panel {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 48px 32px 84px 32px;
  margin-left: -70px;
  margin-top: -20px;
  width: 493px;
  height: 666px;
  background: linear-gradient(
    152.19deg,
    rgba(136, 235, 239, 0.9) -0.04%,
    rgba(83, 91, 230, 0.9) 100%
  );
  border-radius: 30px;
  overflow: hidden;
  z-index: 0;
}

.day-panel::before {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-image: url("../assets/day-panel-bg.jpg");
  opacity: 0.2;
  pointer-events: none;
  z-index: -1;
  content: "";
  background-repeat: no-repeat;
  background-size: cover;
}

.day-panel__header {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.day-panel__weekday {
  font-size: 37px;
  line-height: 120%;
  font-weight: var(--fw-bold);
}

.day-panel__date {
  font-size: 22px;
  line-height: 120%;
  font-weight: var(--fw-medium);
}

.day-panel__location {
  display: flex;
  gap: 8px;
  font-size: 20px;
  line-height: 120%;
  font-weight: var(--fw-semi-bold);
}

.day-panel__forecast {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.day-panel__icon {
  height: 95px;
  width: 95px;
}

.day-panel__temperature {
  font-size: 50px;
  line-height: 120%;
  font-weight: var(--fw-bold);
}

.day-panel__condition {
  font-size: 30px;
  line-height: 120%;
  font-weight: var(--fw-bold);
}
</style>
