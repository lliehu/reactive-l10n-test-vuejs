<template>
  <div id="app">
    <h1>{{ $t('app.name') }}</h1>
    <List/>
    <CatCountInput/>
    <TargetPronounChanger/>
    <LanguageSwitcher/>
    <Map/>
  </div>
</template>

<script>
import List from './components/List.vue'
import TargetPronounChanger from './components/TargetPronounChanger.vue'
import LanguageSwitcher from './components/LanguageSwitcher.vue'
import CatCountInput from "@/components/CatCountInput";
import Map from './components/Map.vue'

export default {
  name: 'app',
  components: {
    CatCountInput,
    List,
    TargetPronounChanger,
    LanguageSwitcher,
    Map
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
