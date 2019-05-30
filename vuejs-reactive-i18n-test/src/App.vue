<template>
  <div id="app">
    <h1>{{ $t('app.name') }}</h1>
    <List/>
    <TargetPronounChanger/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import List from './components/List.vue'
import TargetPronounChanger from './components/TargetPronounChanger'

export default {
  name: 'app',
  components: {
    HelloWorld,
    List,
    TargetPronounChanger
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
