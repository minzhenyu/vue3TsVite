<template>
 <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" />
 
</template>

<script lang="ts">
import HelloWorld from './components/HelloWorld.vue'

import { defineComponent } from 'vue'
console.log(process)
export default defineComponent({
  name: 'App',
  data() {
    return {
      msg: 'Hello Vue 3.0 + Vite!'
    }
  },
  components:{
    HelloWorld
  },
  setup() {}
})
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
