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
  <!-- накидывает display: none, перегружает DOM, но быстрее чем v-if -->
  <div v-show="isEditing">
    <CityInput class="city-select__input" />
    <BaseButton @click="select()">Сохранить</BaseButton>
  </div>
  <BaseButton v-show="!isEditing" @click="edit()">
    <IconLocation />
    Изменить город
  </BaseButton>
</template>

<style scoped></style>
