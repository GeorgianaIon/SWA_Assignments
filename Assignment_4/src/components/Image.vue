<script setup lang="ts">
  const props = defineProps<{
    src: string
  }>()
</script>

<template>
  <img :src="props.src.replace('../images', '../..')" alt="Image" />
</template>