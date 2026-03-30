<script setup>
const { error } = defineProps({
  error: String,
});
</script>
<template>
  <div class="error">{{ error }}</div>
</template>

<style>
.error {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--color-bg-element);
  padding: 15px;
  width: 403px;
  color: var(--color-primary);
  font-size: 18px;
  line-height: 120%;
  text-align: center;
  border-radius: 0 0 25px 25px;
}
</style>
