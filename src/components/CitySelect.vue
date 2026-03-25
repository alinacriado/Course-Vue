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
  <div class="city-select">
    <div v-if="isEditing" class="city-select__input">
      <CityInput />
      <BaseButton @click="select()">Сохранить</BaseButton>
    </div>
    <BaseButton class="button__edit" v-else @click="edit()">
      <IconLocation />
      Изменить город
    </BaseButton>
  </div>
</template>

<style scoped>
.city-select {
  margin-top: 70px;
}

.city-select__input {
  display: flex;
  gap: 12px;
}

.button__edit {
  width: 100%;
}
</style>
