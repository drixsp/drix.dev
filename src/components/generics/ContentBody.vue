<template>
    <div class="container">
        <slot />
    </div>
</template>

<script>
    export default {
        name: 'ContentBody',
    }
</script>

<style lang="scss" scoped>
    .container {
        width: 100%;
        height: calc(100vh - 60px);
        margin: 0 auto;
        padding-block: 80px;
        width: min(calc(100vw - 120px), 1000px);
        color: white;
    }
</style>
