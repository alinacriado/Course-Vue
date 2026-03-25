<script setup>
import IconLocation from "../icons/IconLocation.vue";
import BaseButton from "./BaseButton.vue";
import CityInput from "./CityInput.vue";

const emit = defineEmits(["select-city"]);

function select() {
  emit("select-city", "London");
}
</script>

<template>
  <div class="city-select">
    <BaseButton @click="select()">
      <IconLocation />
      Изменить город
    </BaseButton>
    <CityInput class="city-select__input" />
    <BaseButton>Сохранить</BaseButton>
  </div>
</template>

<style scoped></style>
