<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        {{ $t('app.name') }}
      </v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container>
        <v-row>
          <v-col cols="6">
            <v-card width="600px" class="mx-auto">
              <v-card-text>
                <List />
                <CatCountInput />
              </v-card-text>
              <v-card-actions>
                <TargetPronounChanger />
                <LanguageSwitcher />
              </v-card-actions>
            </v-card>
          </v-col>

          <v-col cols="6">
            <MessageLog />
          </v-col>

          <v-col cols="12">
            <v-card>
              <v-card-text>
                <Map />
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import List from './components/List.vue'
import TargetPronounChanger from './components/TargetPronounChanger.vue'
import LanguageSwitcher from './components/LanguageSwitcher.vue'
import CatCountInput from '@/components/CatCountInput'
import Map from './components/Map.vue'
import MessageLog from './components/MessageLog.vue'

export default {
  name: 'App',
  components: {
    CatCountInput,
    List,
    TargetPronounChanger,
    LanguageSwitcher,
    Map,
    MessageLog
  },
  data: () => ({
    //
  })
}
</script>

<style></style>
