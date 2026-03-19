<script setup>
const a = 10;
let b = 20;
const d = { a: 30 };
let e = "<a href='/'>link</a>";
</script>

<template>
  <header>{{ a }}</header>
  <main>{{ b }}</main>
  <div v-html="e"></div>
  <footer>{{ d.a }}</footer>
</template>

<style scoped></style>
