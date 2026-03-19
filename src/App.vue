<script setup>
const color = "blue";
const id = "red";
</script>

<template>
  <header>Лого</header>
  <!-- <main v-bind:class="color">Контент</main> -->
  <main :class="color">Контент</main>
  <!-- <div :id="id">Контент</div> -->
  <div :id>Контент</div>
</template>

<style scoped></style>
