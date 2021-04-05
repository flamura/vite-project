<script setup lang="ts">
import { useHead } from "@vueuse/head";
import { computed, defineEmit, defineProps, onMounted } from "vue";
import { onBeforeRouteLeave, useRoute, useRouter } from "vue-router";
import { useTodos } from "~/store";

const props = defineProps({

});

const emit = defineEmit(['test']);
// declare const props: { msg: string }

useHead({
  title: '关于'
})

// store.
</script>

<template lang="pug">
div 测试文本
</template>
<style scoped lang="scss">

</style>
