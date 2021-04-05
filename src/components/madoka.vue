<script setup lang="ts">
import canvas from '~/components/madoka.vue'
import { useHead } from "@vueuse/head";
import { computed, defineEmit, defineProps } from "vue";
import { useTodos } from "~/store";

const props = defineProps({
  msg: String,
});
const emit = defineEmit(["count-update"]);

ref: count = 1;

// store.
</script>

<template lang="pug">
input(@input="")
</template>
<style scoped lang="scss">

</style>
