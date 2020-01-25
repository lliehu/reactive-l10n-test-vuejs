<template>
  <v-card width="600px" class="mx-auto">
    <v-card-title>{{ $t('message_log.title') }}</v-card-title>
    <v-card-text>
      <div style="height: 300px; overflow: auto">
        <p v-for="(message, index) in messages" v-bind:key="index">
          [{{
            new Intl.DateTimeFormat(language, {
              year: 'numeric',
              month: 'numeric',
              day: 'numeric',
              hour: 'numeric',
              minute: 'numeric',
              second: 'numeric'
            }).format(message.time)
          }}]
          {{ $t(message.messageId, message.parameters) }}
        </p>
      </div>
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
