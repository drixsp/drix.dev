<template>
    <ContentBody>
        <div class="section">
            <header class="section-top">
                <h3 class="h3 regular greeting">
                    Welcome! I'm Drix.
                </h3>
                <h1 class="h1 regular">
                    Product Designer at
                        <a href="https://hqzen.com/" target="blank">HQZen</a>
                </h1>
                <h1 class="h1 regular">
                    Born and raised in Cebu, Philippines.
                </h1>
            </header>
            <main class="section-main">
                <ul class="nav-list">
                    <li
                        @click="goToWorks()"
                    >
                        <div class="nav-list__item">
                            <h2 class="regular">Works</h2>
                            <i class="mdi mdi-arrow-right"></i>
                        </div>
                    </li>
                    <li>
                        <div class="nav-list__item">
                            <h2 class="regular">Resume</h2>
                            <i class="mdi mdi-arrow-right"></i>
                        </div>
                    </li>
                    <li>
                        <div class="nav-list__item">
                            <h2 class="regular">Contact</h2>
                            <i class="mdi mdi-arrow-right"></i>
                        </div>
                    </li>
                </ul>
            </main>
            <!-- <footer class="section-footer">
                <p class="c-tertiary">
                    Designed and developed by yours truly.
                </p>
            </footer> -->
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
        },

        methods: {
            goToWork() {
                this.$router.push('works')
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import 'src/stylesheets/styles.scss';

    .section {
        display: flex;
        flex-direction: column;
        gap: 80px;

        // .section responsiveness
        @media #{$mobile} {
            width: 100%;
        }

        a {
            text-decoration: none;
            color: $white;
        }

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
                gap: 16px;
                width: 50%;

                // &__nav-list responsiveness
                @media #{$mobile} {
                    width: 100%;
                }

                &__item {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 12px;
                    cursor: pointer;
                    border-radius: 4px;
                    transition: .2s all ease-in-out;

                    i {
                        font-size: 24px;
                    }

                    &:hover {
                        background: rgba(255, 255, 255, 0.1);
                        transition: .2s all ease-in-out;

                        i {
                            transition: .2s all ease-in-out;
                            transform: translateX(4px);
                        }
                    }
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
