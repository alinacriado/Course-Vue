<script setup>
import { onMounted, ref } from "vue";
import IconLocation from "../icons/IconLocation.vue";
import BaseButton from "./BaseButton.vue";
import CityInput from "./CityInput.vue";

const emit = defineEmits({
  selectCity(payload) {
    return payload;
  },
});

let city = ref("Нью Йорк");
let isEditing = ref(false);

onMounted(() => {
  emit("selectCity", city.value);
});

function select() {
  isEditing.value = false;
  emit("selectCity", city.value);
}

function edit() {
  isEditing.value = true;
}
</script>

<template>
  <div class="city-select">
    <div v-if="isEditing" class="city-select__input">
      <CityInput v-model="city" @keyup.enter="select()" />
      <BaseButton @click="select()">Сохранить</BaseButton>
    </div>
    <BaseButton v-else class="button__edit" @click="edit()">
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
