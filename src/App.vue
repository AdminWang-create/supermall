<template>
  <div id="app">
    <h2>abc</h2>
    {{person}}
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      person:{name:'kobe',age:25,height:1.8}
    }
  }
}
</script>

<style>
@import "assets/css/base.css";
</style>
