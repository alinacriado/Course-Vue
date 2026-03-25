<script setup>
import { ref } from "vue";
import IconLocation from "../icons/IconLocation.vue";
import BaseButton from "./BaseButton.vue";
import CityInput from "./CityInput.vue";

const emit = defineEmits({
  selectCity(payload) {
    return payload;
  },
});

let isEditing = ref(false);

function select() {
  isEditing.value = false;
  emit("selectCity", "London");
}

function edit() {
  isEditing.value = true;
}
</script>

<template>
  <div v-if="isEditing">
    <CityInput class="city-select__input" />
    <BaseButton @click="select()">Сохранить</BaseButton>
  </div>
  <!-- <BaseButton v-else-if="!isEditing" @click="edit()">
    <IconLocation />
    Изменить город
  </BaseButton> -->
  <BaseButton v-else @click="edit()">
    <IconLocation />
    Изменить город
  </BaseButton>
</template>

<style scoped></style>
