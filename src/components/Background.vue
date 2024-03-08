<template>
    <!-- <div class="overlay"></div> -->
    <div class="background">
        <div class="background__circle-1"></div>
        <div class="background__circle-2"></div>
        <!-- <div class="background__circle-3"></div> -->
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

    .overlay {
        background: #000;
        opacity: 50%;
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 1;
    }

    .background {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 0;

        &__circle {

            &-1 {
                position: absolute;
                background: #F8630C;
                width: 1000px;
                height: 900px;
                border-radius: 50%;
                filter: blur(300px);

                @media only screen and (max-width: 375px) {
                    top: -70%;
                    left: -125%;
                }

                @media only screen and (min-width: 380px) {
                    top: -60%;
                    left: -100%;
                }

                @media only screen and (min-width: 744px) {
                    top: -40%;
                    left: -30%;
                }

                @media only screen and (min-width: 1024px) {
                    top: -50%;
                    left: -40%;
                }
            }

            &-2 {
                position: absolute;
                background: linear-gradient(#158DE1, #0CA0F3);
                width: 600px;
                height: 200px;
                border-radius: 50%;
                rotate: -135deg;
                filter: blur(150px);

                @media only screen and (max-width: 375px) {
                    top: 0;
                    right: -90%;
                }

                @media only screen and (min-width: 380px) {
                    top: 0;
                    right: -40%;
                }

                @media only screen and (min-width: 744px) {
                    top: 0;
                    right: -15%;
                }

                @media only screen and (min-width: 1024px) {
                    top: 0  ;
                    right: -5%;
                }
            }
        }
    }
</style>