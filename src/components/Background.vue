<template>
    <!-- <div class="overlay"></div> -->
    <div class="background">
        <div class="background__circle-1"></div>
        <div class="background__circle-2"></div>
        <div class="background__circle-3"></div>
    </div>
</template>

<script>
    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'Background'
    }
</script>

<style lang="scss" scoped>
    @import 'src/stylesheets/styles.scss';

    .background {
        position: absolute;
        margin: auto;
        width: 100vw;
        top: 0;
        height: 100%;
        overflow: hidden;
        z-index: -1;

        &__circle {

            &-1 {
                position: absolute;
                background: #7013E5;
                opacity: 0.5;
                top: -300px;
                right: calc(80vw - 200px);
                width: 1200px;
                height: 1000px;
                border-radius: 50%;
                transition: .3s all ease-in-out;
                filter: blur(400px);
            }

            &-2 {
                position: absolute;
                background: #0C23F3;
                opacity: 0.5;
                top: -100px;
                left: calc(80vw - 200px);
                width: 1300px;
                height: 950px;
                rotate: -125deg;
                border-radius: 50%;
                transition: .3s all ease-in-out;
                filter: blur(400px);
            }

            &-3 {
                position: absolute;
                background: rgba($color: #1B1818, $alpha: 0.8);
                opacity: 0.5;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 1300px;
                height: 570px;
                rotate: 35deg;
                border-radius: 50%;
                transition: .3s all ease-in-out;
                filter: blur(400px);
            }
        }
    }
</style>