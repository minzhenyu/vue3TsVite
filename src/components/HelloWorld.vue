<template>
  <h1>{{ msg }}</h1>
    
  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button type="button" @click="state.count++">count is: {{ state.count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
  <Layout msg="Hello Vue 3 + Vite"></Layout>
</template>

<script  lang="ts">
import {  reactive ,defineComponent} from 'vue'
import Layout from './layout/index.vue'
export default defineComponent({
  name:'HellowWorld',
  data(){
    return{
        state:{
          count:1
        }
    }
  },
  components:{Layout},
  props:{
    count:Number,
    msg:String
  }
})
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
