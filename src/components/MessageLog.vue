<template>
<div class="message-log">
    <p>{{ $t('message_log.title') }}</p>
    <p v-for="(message, index) in messages" v-bind:key="index">
        {{ message }}
    </p>
</div>
</template>

<script>
export default {
    name: 'app',
    computed: {
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