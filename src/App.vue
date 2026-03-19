<script setup>
const color = "blue";
const id = "red";
const isAdmin = true;
</script>

<template>
  <header :class="`color-${id}`">Лого</header>
  <main :class="color">Контент</main>
  <div :id>Контент</div>
  <footer>{{ isAdmin ? "Админ" : "Пользователь" }}</footer>
</template>

<style scoped></style>
