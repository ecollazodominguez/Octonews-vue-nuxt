<script setup>
defineProps({
    modelValue: {
        type: [String, Number],
        default: '',
        required: true
    }
})

defineEmits(['update:modelValue'])

</script>

<template>
    <input type="email" :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)" />
</template>

<style scoped>
    input {
        width: 100%;
        padding-left: 0.3rem;
        }
</style>
