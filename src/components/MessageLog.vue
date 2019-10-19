<template>
  <v-card width="600px" class="mx-auto">
    <v-card-title>{{ $t('message_log.title') }}</v-card-title>
    <v-card-text>
        <p v-for="(message, index) in messages" v-bind:key="index">
            [{{ new Intl.DateTimeFormat(language, {
                dateStyle: 'medium',
                timeStyle: 'medium'
            }).format(message.time) }}]
            {{ $t(message.messageId) }}
        </p>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'MessageLog',
  computed: {
    language() {
      return this.$root.$data.language
    },
    messages() {
      return this.$root.$data.messageLog.messageList
    }
  }
}
</script>

<style></style>
