<template>
    <nav id="nav">
        <ul>
            <li>
                DP
            </li>
            <li>
                <div class="circle"></div>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: 'MainNavbar'
    }
</script>

<style lang="scss">
    #nav {
        padding: 0 150px;
        height: 60px;
        // background: rgba(247, 250, 252, 0.01);
        backdrop-filter: blur(50px);
        border: 1px solid red;
        display: flex;
        align-items: center;
        background: pink;

        ul {
            width: 100%;
            list-style: none;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .circle {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: red;
        }
    }
</style>