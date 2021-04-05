<template lang="pug">
nav.px-4.py-4
  ul.p-0.m-0.flex
    li.list-none.mr-4(v-for="navLink in navLinks")
      router-link(class="text-lg block p-2 text-purple-500 hover:bg-gray-400 hover:bg-opacity-90 hover:text-gray-50 hover:no-underline" :to="navLink.link")
        | {{ navLink.title }}
main
  router-view(v-slot="{ Component }")
    template(v-if="Component")
        keep-alive
          suspense
            component(:is="Component")
            template(#fallback)
              div Loading...
</template>

<script lang="ts" setup>
// console.log(1)
ref: navLinks = [
  {
    link: "/",
    title: "Home",
  },
  {
    link: "/about",
    title: "About",
  },
  {
    link: "/todomvc",
    title: "todomvc",
  },
  // {
  //   link: "/pixi",
  //   title: "pixi-playground",
  // },
];

// const log = console.log;
</script>

<style scoped>
#app {
}
</style>
