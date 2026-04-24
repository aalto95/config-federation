<template>
  <p>Hello {{ name }}!</p>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true
  }
});
</script>
