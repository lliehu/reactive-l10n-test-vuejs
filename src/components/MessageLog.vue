<template>
<div class="message-log">
    <p>{{ $t('message_log.title') }}</p>
    <p v-for="(message, index) in messages" v-bind:key="index">
        [{{ new Intl.DateTimeFormat(language, {
            dateStyle: 'medium',
            timeStyle: 'medium'
        }).format(message.time) }}]
        {{ $t(message.messageId) }}
    </p>
</div>
</template>

<script>
export default {
    name: 'MessageLog',
    computed: {
        language() {
            return this.$root.$data.language;
        },
        messages() {
            return this.$root.$data.messageLog.messageList;
        }
    }
}
</script>

<style>
.message-log {
    border: solid 1px green;
}
.message-log :first-child {
    font-weight: bold;
}
</style>