<script setup>
const props = defineProps(["value"]);
const emit = defineEmits(["update:value"]);
</script>

<template>
  <input
    class="input"
    :value="props.value"
    type="text"
    placeholder="Введите город"
    @input="emit('update:value', $event.target.value)"
  />
</template>

<style scoped>
.input {
  width: 100%;
  height: 53px;
  background-color: var(--color-bg-element);
  box-shadow: 1px 2px 4px 0px var(--color-bg-main);
  padding: 15px 19px;
  border: none;
  border-radius: 10px;
  font-family: var(--font);
  color: var(--color-primary);
  font-size: 18px;
  line-height: 120%;
}

.input::placeholder {
  color: var(--color-text-placeholder);
}
</style>
