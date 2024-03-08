<template>
    <div class="content">
        <Navbar />
        <Home />
    </div>
    <Background />
</template>

<script>
    import Navbar from './components/Navbar.vue'
    import Background from './components/Background.vue'
    import Home from './pages/Home.vue'

    export default {
        name: 'App',
        components: {
            Navbar,
            Background,
            Home
        }
    }
</script>

<style lang="scss">
    #app {
        width: 100%;
        height: 100vh;
        background: #171923 !important;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .content {
        position: absolute;
        width: 100%;
        z-index: 2;
    }
</style>
