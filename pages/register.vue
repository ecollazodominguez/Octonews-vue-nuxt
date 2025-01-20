<script setup>
onBeforeMount(() => {
    const router = useRouter();
    const authStore = useAuthStore();
    authStore.updateToken();
    console.log(authStore.getToken)
    if (authStore.getToken) {
        router.push('/');
    }
});
</script>

<template>
    <p>WIP</p>
</template>