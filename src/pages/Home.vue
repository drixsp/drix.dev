<template>
    <ContentBody>
        <div class="top">
            <h3 class="h3 regular c-tertiary">
                Lorem ipsum dolor sit amet consectetur
            </h3>
            <h1 class="h1 regular">
                Lorem ipsum dolor sit amet consectetur adipisicing elit
            </h1>
            <h1 class="h1 regular">
                Lorem ipsum dolor sit amet
            </h1>
        </div>
        <main>
            <ul class="nav-list">
                <li>
                    <div class="nav-list__item">
                        <p>Item</p>
                        <p>Icon</p>
                    </div>
                </li>
                <li>
                    <div class="nav-list__item">
                        <p>Item</p>
                        <p>Icon</p>
                    </div>
                </li>
                <li>
                    <div class="nav-list__item">
                        <p>Item</p>
                        <p>Icon</p>
                    </div>
                </li>
            </ul>
        </main>
        <footer class="footer">
            <p class="c-tertiary">
                Designed and developed by yours truly.
            </p>
        </footer>
    </ContentBody>
</template>

<script>
    import ContentBody from '../components/generics/ContentBody.vue'

    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'Home',

        components: {
            ContentBody
        }
    }
</script>

<style lang="scss" scoped>
    .top {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    .nav-list {
        display: flex;
        flex-direction: column;
        gap: 24px;
        margin-top: 80px;
        width: 50%;

        &__item {
            display: flex;
            justify-content: space-between;
            font-size: 36px;
        }
    }

    .footer {
        position: absolute;
        display: flex;
        align-items: center;
        width: 100%;
        height: 64px;
        bottom: 0;
        left: 0;
        padding: 0 24px;
    }
</style>
