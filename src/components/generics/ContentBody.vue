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
    @import 'src/stylesheets/styles.scss';

    .container {
        width: 100%;
        margin: 0 auto;
        padding-block: 80px;
        width: min(calc(100vw - 120px), 1000px);
        color: white;

        @media #{$mobile} {
            padding: 40px 36px;
            width: 100%;
        }
    }
</style>
