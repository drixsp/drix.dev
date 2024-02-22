<template>
    <nav id="nav">
        <ul>
            <li>
                Logo
            </li>
            <li>
                Item 1
            </li>
            <li>
                Item 2
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: 'NavBar'
    }
</script>

<style lang="scss">
    #nav {
        padding: 12px;
        background: pink;

        ul {
            list-style: none;
            display: flex;
            align-content: center;
            gap: 12px;
        }
    }
</style>