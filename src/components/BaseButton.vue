<script setup></script>

<template>
  <button class="button">
    <slot />
  </button>
</template>

<style scoped>
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  background: var(--gradient);
  height: 53px;
  padding: 10px 14px;
  border: none;
  border-radius: 10px;
  color: var(--color-primary);
  font-family: var(--font);
  font-weight: var(--fw-semi-bold);
  font-size: 20px;
  line-height: 120%;
  text-align: center;
  cursor: pointer;
}

.button:hover {
  background: var(--gradient-inverted);
}
</style>
