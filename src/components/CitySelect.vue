<script setup>
import IconLocation from "../icons/IconLocation.vue";
import BaseButton from "./BaseButton.vue";
import CityInput from "./CityInput.vue";
</script>

<template>
  <div class="city-select">
    <BaseButton><IconLocation />Изменить город</BaseButton>
    <CityInput class="city-select__input" />
    <BaseButton>Сохранить</BaseButton>
  </div>
</template>

<style scoped></style>
