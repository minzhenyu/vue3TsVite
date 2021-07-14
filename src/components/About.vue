<template>
  <img
    alt="Vue logo"
    src="../assets/logo.png"
  />
  <h1>{{ msg }}</h1>
  {{a}}
</template>

<script lang="ts">
import { defineComponent, onMounted, ref} from 'vue'

export default defineComponent({
  name: 'About',
  data() {
    return {
      msg: 'Hello Vue 3.0 + Vite!'
    }
  },
  
  setup() {
      let a = ref([1,2,3])
      setTimeout(()=>{
          a.value=[2,221,3]
      },5000)
      return{
          a
      }

  },
  onMounted(){
      this.a=[111]
  }
})
</script>