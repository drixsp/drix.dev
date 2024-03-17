<template>
    <ContentBody>
        <div class="section">
            <header class="section-top">
                <h3 class="h3 regular greeting">
                    Welcome! I'm Drix.
                </h3>
                <h1 class="h1 regular">
                    Born and raised in Cebu, Philippines.
                </h1>
                <h1 class="h1 regular">
                    Product Designer at HQZen
                </h1>
            </header>
            <main class="section-main">
                <ul class="nav-list">
                    <li>
                        <div class="nav-list__item">
                            <p class="h2">Works</p>
                            <i class="mdi mdi-arrow-right"></i>
                        </div>
                    </li>
                    <li>
                        <div class="nav-list__item">
                            <p class="h2">Resume</p>
                            <i class="mdi mdi-arrow-right"></i>
                        </div>
                    </li>
                    <li>
                        <div class="nav-list__item">
                            <p class="h2">Contact</p>
                            <i class="mdi mdi-arrow-right"></i>
                        </div>
                    </li>
                </ul>
            </main>
            <footer class="section-footer">
                <p class="c-tertiary">
                    Designed and developed by yours truly.
                </p>
            </footer>
        </div>
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
    @import 'src/stylesheets/styles.scss';

    .section {
        display: flex;
        flex-direction: column;
        gap: 80px;

        &-top {
            @include flex-column();
            display: flex;
            flex-direction: column;
            gap: 12px;

            h3 {
                color: rgba(255, 255, 255, 0.5);
            }
        }

        &-main {
            .nav-list {
                @include flex-column();
                gap: 24px;
                width: 50%;

                &__item {
                    display: flex;
                    justify-content: space-between;
                    font-size: 36px;
                }
            }
        }

        &-footer {
            position: absolute;
            display: flex;
            align-items: center;
            width: 100%;
            height: 64px;
            bottom: 0;
            left: 0;
            padding: 0 24px;
        }
    }
</style>
