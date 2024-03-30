<template>
    <div class="content">
        <Navbar @toggle-menu="menuHandler"/>
        <OverlayMenu
            :show-menu="showMenu"
            @close="closeMenu"
        />
        <router-view />
    </div>
</template>

<script>
    import Navbar from './components/Navbar.vue'
    import OverlayMenu from '/src/components/OverlayMenu.vue';

    export default {
        name: 'App',

        components: {
            Navbar,
            OverlayMenu
        },

        data() {
            return {
                showMenu: false
            };
        },

        methods: {
            menuHandler() {
                this.showMenu = !this.showMenu;
                if (this.showMenu) {
                    document.body.style.overflow = 'hidden';
                } else {
                    document.body.style.overflow = 'auto';
                }
            },

            closeMenu() {
                this.showMenu = false;
                document.body.style.overflow = 'auto';
            }
        }
    }
</script>

<style lang="scss">

    html {
        background: #171923 !important;
    }

    .content {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        position: absolute;
        width: 100%;
        z-index: 2;
    }
</style>
