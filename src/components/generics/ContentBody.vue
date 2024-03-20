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
        margin: 0 auto;
        padding-block: 80px;
        width: min(calc(100vw - 120px), 1000px);
        height: inherit;
        color: white;

        @media #{$mobile} {
            padding: 40px 20px;
            width: 100%;
        }
    }
</style>
