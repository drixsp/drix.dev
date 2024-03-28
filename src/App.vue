<template>
    <div class="content">
        <Navbar />
        <WorksDetails />
    </div>
</template>

<script>
    import Navbar from './components/Navbar.vue'
    import WorksDetails from './pages/WorksDetails.vue'

    export default {
        name: 'App',
        components: {
            Navbar,
            WorksDetails,
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
