<template>
    <nav id="nav">
        <ul>
            <li>
                <p>
                    DP
                </p>
            </li>
            <li>
                <Button
                    @click="$emit('toggle-menu')"
                    class="transparent"
                >
                    Menu
                </Button>
            </li>
        </ul>
    </nav>
</template>

<script>
    import Button from '../components/generics/Button.vue';

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
        background: rgba(247, 250, 252, .05);
        backdrop-filter: blur(50px);
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

            p {
                font-size: 20px;
            }
        }

        .circle {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: $white;
            cursor: pointer;
        }
    }
</style>