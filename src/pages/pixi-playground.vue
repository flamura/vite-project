<template lang="pug">
div 
  | pixi
canvas#pixi-app(ref="canvasRef")
</template>
<script lang="ts" setup>
import { onMounted, ref, useContext } from "@vue/runtime-core";


const ctx = useContext()
const canvasRef = ref<HTMLCanvasElement>()
type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T;
let PIXI: Awaited<typeof import('pixi.js')>
onMounted(() => {
  // console.log(canvasRef)
  new PIXI.Application({
    view: canvasRef.value,
    transparent: true,
  })
})
const pixi_load_promise = import('pixi.js')
PIXI = await pixi_load_promise
const fullHeight = window.innerHeight + 'px'

</script>
<style scoped="">
#pixi-app {
  position: fixed;
  width: 100vw;
  height: v-bind(fullHeight);
}
</style>