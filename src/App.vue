<script setup>
import Button from "./components/Button.vue";
const id = "blue";
</script>

<template>
  <header></header>
  <Button>
    <!-- <template v-slot:icon>+</template> -->
    <template #[id]>-</template>
    <template #icon>+</template>
    Сохранить</Button
  >
  <main></main>
</template>

<style scoped></style>
