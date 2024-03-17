<template>
    <div class="content">
        <Navbar />
        <Works />
    </div>
    <!-- <Background /> -->
</template>

<script>
    import Navbar from './components/Navbar.vue'
    // import Background from './components/Background.vue'
    // import Home from './pages/Home.vue'
    import Works from './pages/Works.vue'

    export default {
        name: 'App',
        components: {
            Navbar,
            // Background,
            Works,
        }
    }
</script>

<style lang="scss">
    // #app {
    //     width: 100%;
    //     height: 100vh;
    //     background: #171923 !important;
    //     -webkit-font-smoothing: antialiased;
    //     -moz-osx-font-smoothing: grayscale;
    // }

    .content {
        position: absolute;
        width: 100%;
        // height: calc(100vh - 60px);
        // height: 100vh;
        z-index: 2;
        width: 100%;
        background: #171923 !important;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
</style>
