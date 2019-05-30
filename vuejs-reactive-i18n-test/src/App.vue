<template>
  <div id="app">
    <h1>{{ $t('app.name') }}</h1>
    <List/>
    <TargetPronounChanger/>
    <LanguageSwitcher/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import List from './components/List.vue'
import TargetPronounChanger from './components/TargetPronounChanger.vue'
import LanguageSwitcher from './components/LanguageSwitcher.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    List,
    TargetPronounChanger,
    LanguageSwitcher
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
