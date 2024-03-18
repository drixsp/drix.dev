<template>
    <div class="content">
        <Navbar />
        <router-view />
        <!-- <Home /> -->
    </div>
    <!-- <Background /> -->
</template>

<script>
    import Navbar from './components/Navbar.vue'
    // import Background from './components/Background.vue'
    // import Home from './pages/Home.vue'
    // import Works from './pages/Works.vue'

    export default {
        name: 'App',
        components: {
            Navbar,
            // Background,
            // Home,
            // Works,
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
