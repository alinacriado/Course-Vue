<script setup>
import { onUpdated, onWatcherCleanup, ref, watch, watchEffect } from "vue";
import IconLocation from "../icons/IconLocation.vue";
import BaseButton from "./BaseButton.vue";
import CityInput from "./CityInput.vue";

const emit = defineEmits({
  selectCity(payload) {
    return payload;
  },
});

let city = ref("Moscow");
let isEditing = ref(false);

// onUpdated(() => {
//   console.log(city.value);
// });

// watch(
//   city,
//   (newValue, oldValue) => {
//     console.log(newValue, oldValue);
//   },
//   // { immediate: true }, //выполнится сразу при рендере элемента и продолжит как надо
//   { once: true }, // отработает только один раз при первом изменении
// );

// watchEffect(() => {
//   console.log(city.value);
//   console.log(isEditing.value);
// });

watch(city, () => {
  console.log(city.value);
  onWatcherCleanup(() => {
    console.log("cleanup");
  });
});

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
    {{ city }}
    <div v-if="isEditing" class="city-select__input">
      <CityInput v-model="city" />
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
