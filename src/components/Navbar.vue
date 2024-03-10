<template>
    <nav id="nav">
        <ul>
            <li>
                <p>
                    DP
                </p>
            </li>
            <li>
                <div class="circle"></div>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'Navbar'
    }
</script>

<style lang="scss" scoped>
    #nav {
        padding: 0 150px;
        height: 60px;
        background: rgba(247, 250, 252, .05);
        backdrop-filter: blur(50px);
        display: flex;
        align-items: center;
        position: sticky;
        top: 0;

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
            background: white;
        }
    }
</style>