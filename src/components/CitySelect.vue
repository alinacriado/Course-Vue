<script setup>
import IconLocation from "../icons/IconLocation.vue";
import BaseButton from "./BaseButton.vue";
import CityInput from "./CityInput.vue";

function log() {
  console.log("log function call");
}

const logArrow = () => {
  console.log("logArrow");
};
</script>

<template>
  <div class="city-select">
    <BaseButton @click="logArrow()">
      <IconLocation />
      Изменить город
    </BaseButton>
    <CityInput class="city-select__input" />
    <BaseButton @click="log()">Сохранить</BaseButton>
  </div>
</template>

<style scoped></style>
