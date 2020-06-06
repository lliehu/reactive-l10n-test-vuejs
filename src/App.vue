<template>
  <v-app>
    <v-app-bar>
      <v-toolbar-title class="headline text-uppercase">
        {{ $t('app.name') }}
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <LanguageSwitcher />
    </v-app-bar>

    <v-content>
      <v-container>
        <v-row>
          <v-col cols="6">
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-card width="600px" class="mx-auto">
                    <v-card-text>
                      <v-carousel height="10em">
                        <v-carousel-item>
                          <v-sheet color="purple" height="100%">☆☆☆☆☆</v-sheet>
                        </v-carousel-item>
                        <v-carousel-item>
                          <v-sheet color="green" height="100%">★★★★★</v-sheet>
                        </v-carousel-item>
                      </v-carousel>
                      <List />
                      <CatCountInput />
                    </v-card-text>
                    <v-card-actions>
                      <v-btn color="light-green" @click="testAlert">
                        {{ $t('alert_test.button') }}
                      </v-btn>
                      <TargetPronounChanger />
                    </v-card-actions>
                  </v-card>
                </v-col>
                <v-col cols="12">
                  <MapNavigator @navigate-map="navigateMap" />
                </v-col>
              </v-row>
            </v-container>
          </v-col>

          <v-col cols="6">
            <MessageLog />
          </v-col>

          <v-col cols="12">
            <v-card>
              <v-card-text>
                <Map :bus="mapBus" />
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Vue from 'vue'
import List from './components/List.vue'
import TargetPronounChanger from './components/TargetPronounChanger.vue'
import LanguageSwitcher from './components/LanguageSwitcher.vue'
import CatCountInput from '@/components/CatCountInput'
import Map from './components/Map.vue'
import MapNavigator from './components/MapNavigator'
import MessageLog from './components/MessageLog.vue'

export default {
  name: 'App',
  components: {
    CatCountInput,
    List,
    TargetPronounChanger,
    LanguageSwitcher,
    Map,
    MapNavigator,
    MessageLog
  },
  data: () => ({
    mapBus: new Vue()
  }),
  methods: {
    navigateMap(position) {
      this.mapBus.$emit('fly-to', {
        latlng: position
      })
    },
    testAlert() {
      alert(this.$i18n.i18next.t('alert_test.message'))
    }
  }
}
</script>

<style></style>
