<script setup></script>

<template>
  <button class="button">
    <div>
      <slot name="icon"></slot>
      <slot name="blue"></slot>
    </div>
    <slot />
  </button>
</template>

<style scoped>
.button {
  background: var(--gradient);
  padding: 14px;
  border: none;
  border-radius: 10px;
  color: var(--color-primary);
  font-family: var(--font);
  font-weight: var(--fw-semi-bold);
  font-size: 20px;
  line-height: 120%;
  cursor: pointer;
}

.button:hover {
  background: var(--gradient-inverted);
}
</style>
