<script setup>
defineProps({
    text: {
        type: String,
        required: true
    },
    classType: {
        type: String,
        default: 'principal',
        validator(value) {
            return ['principal', 'secundario', 'error'].includes(value);
        }
    }
})

defineEmits(['click'])

</script>

<template>
    <button @click="$emit('click')" :class="`btn-${classType}`">{{ text }}</button>
</template>

<style scoped>
button {
    width: 100%;
    transition: background-color 0.3s ease;
    color: white;
    cursor: pointer;
    border-radius: 10px;
    border: none;
    color: white;
}


.btn-secundario {
    background-color: rgb(6, 131, 91);
}

.btn-error {
    background-color: rgb(131, 6, 6);
}

.btn-secundario:hover {
    background-color: rgb(3, 83, 58);
}

.btn-error:hover {
    background-color: rgb(83, 3, 3);
}

.btn-principal {
    background-color: rgb(24, 0, 122);
    border: 3px solid rgb(0, 110, 255);
}

.btn-principal:hover {
    background-color: rgb(67, 44, 159);
}
</style>