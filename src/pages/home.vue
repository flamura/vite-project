<script setup lang="ts">
import { useHead } from "@vueuse/head";
import { computed, defineEmit, defineProps } from "vue";
import { useTodos } from "~/store";

const props = defineProps({
  msg: String,
});
const emit = defineEmit(["count-update"]);
// declare const props: { msg: string }

useHead({
  title: '主页'
})

// store.
</script>

<template lang="pug">
div 
  |主页
</template>
<style scoped lang="scss">

</style>
