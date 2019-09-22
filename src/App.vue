<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        {{ $t('app.name') }}
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <v-card width="600px" class="mx-auto">
        <v-card-text>
          <List/>
          <CatCountInput/>
        </v-card-text>
        <v-card-actions>
          <TargetPronounChanger/>
          <LanguageSwitcher/>
        </v-card-actions>
      </v-card>
      <Map/>
      <MessageLog/>
      <HelloWorld/>
    </v-content>
  </v-app>
</template>

<script>
import List from './components/List.vue'
import TargetPronounChanger from './components/TargetPronounChanger.vue'
import LanguageSwitcher from './components/LanguageSwitcher.vue'
import CatCountInput from "@/components/CatCountInput";
import Map from './components/Map.vue'
import MessageLog from './components/MessageLog.vue'
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',
  components: {
    CatCountInput,
    List,
    TargetPronounChanger,
    LanguageSwitcher,
    Map,
    MessageLog,
    HelloWorld,
  },
  data: () => ({
    //
  }),
};
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