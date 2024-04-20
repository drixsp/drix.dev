<template>
    <nav id="nav">
        <ul>
            <li class="nav-item">
                <h1 class="h1-alt nav-item__left">
                    hello@drix.dev
                </h1>
            </li>
            <li>
                <Button
                    @click="$emit('toggle-menu')"
                    class="transparent nav-item__right"
                >
                    Menu
                </Button>
            </li>
        </ul>
    </nav>
</template>

<script>
    import Button from '/src/components/generics/Button.vue';

    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'Navbar',

        components: {
            Button
        }
    }
</script>

<style lang="scss" scoped>
    @import 'src/stylesheets/styles.scss';

    #nav {
        padding: 0 150px;
        height: 60px;
        // background: rgba(247, 250, 252, .1);
        background: rgb(31, 31, 31, .7);
        backdrop-filter: blur(10px);
        display: flex;
        align-items: center;
        position: sticky;
        top: 0;
        z-index: 999;

        @media only screen and (max-width: 744px) {
            padding: 0 20px;
        }

        ul {
            width: 100%;
            list-style: none;
            display: flex;
            align-items: center;
            justify-content: space-between;
            color: white;

            h1 {
                font-size: 12px;
                text-transform: uppercase;
            }
        }
    }
</style>