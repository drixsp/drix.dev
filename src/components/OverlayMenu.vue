<template>
    <div :class="['overlay-menu', showMenu ? 'show' : 'hide']">
        <ul class="menu-list">
            <li>
                <p class="p-h3 regular c-tertiary">Menu</p>
            </li>
            <li
                class="menu-list__item"
                @click="changeRoute('/works')"
            >
                <p class="p-h1 regular">Works</p>
                <i class="fa-solid fa-arrow-right"></i>
            </li>
            <li
                class="menu-list__item"
                @click="changeRoute('/resume')"
            >
                <p class="p-h1 regular">Resume</p>
                <i class="fa-solid fa-arrow-right"></i>
            </li>
            <li
                class="menu-list__item"
                @click="changeRoute('/')"
            >
                <p class="p-h1 regular">Contact</p>
                <i class="fa-solid fa-arrow-right"></i>
            </li>
        </ul>
    </div>
</template>

<script>

    export default {
        name: 'OverlayMenu',

        props: {
            showMenu: Boolean
        },

        methods: {
            changeRoute(route) {
                this.$router.push(route);
                this.$emit('close')
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import 'src/stylesheets/styles.scss';

    .show {
        opacity: 1;
        visibility: visible;
    }

    .hide {
        opacity: 0;
        visibility: hidden;
    }

    .overlay-menu {
        transition: 0.3s all ease-in-out;
        position: absolute;
        left: 0;
        right: 0;
        z-index: 1000;
        height: calc(100vh - 60px);
        backdrop-filter: blur(100px);
        background: rgba(0,0,0,.2);

        .menu-list {
            @include flex-column();
            gap: 24px;
            margin: 40px auto 0;
            width: 320px;

            @media #{$mobile} {
                width: calc(100vw - 60px);
            }

            &__item {
                display: flex;
                justify-content: space-between;
                align-items: center;
                cursor: pointer;
                border-radius: 4px;
                transition: .2s all ease-in-out;
                color: $white;
                padding: 12px;

                i {
                    font-size: 24px;
                    transform: translateX(-12px);
                }

                &:hover {
                    background: rgba(255, 255, 255, 0.1);

                    i {
                        transition: .2s all ease-in-out;
                        transform: translateX(4px);
                    }
                }
            }
        }
    }
</style>
