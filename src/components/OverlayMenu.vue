<template>
    <div class="overlay-menu">
        <ul class="menu-list">
            <li class="menu-list__item">
                <p class="p-h1 regular">Works</p>
                <!-- <i class="mdi mdi-arrow-right" /> -->
            </li>
            <li class="menu-list__item">
                <p class="p-h1 regular">Resume</p>
                <!-- <i class="mdi mdi-arrow-right" /> -->
            </li>
            <li class="menu-list__item">
                <p class="p-h1 regular">Contact</p>
                <!-- <i class="mdi mdi-arrow-right" /> -->
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'OverlayMenu'
    }
</script>

<style lang="scss" scoped>
    @import 'src/stylesheets/styles.scss';

    .overlay-menu {
        position: absolute;
        left: 0;
        right: 0;
        z-index: 1000;
        height: calc(100vw - 60px);
        background: rgba(0,0,0,8);

        .menu-list {
            @include flex-column();
            gap: 24px;
            margin: 40px auto 0;
            width: 320px;
            border: 2px dashed red;

            &__item {
                display: flex;
                justify-content: space-between;
                align-items: center;
                color: $white;
            }
        }
    }
</style>
