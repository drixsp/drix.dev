<template>
    <Navbar />
</template>

<script>
    import Navbar from './components/Navbar.vue'

    export default {
        name: 'App',
        components: {
            Navbar
        }
    }
</script>

<style lang="scss">
    #app {
        width: 100%;
        height: 100vh;
        background: rgb(35, 34, 36) !important;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
</style>
