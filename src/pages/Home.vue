<template>
    <ContentBody>
        <div class="section">
            <header class="section-top message-block">
                <h2 class="h2 regular greeting message-block__item">
                    Hey there! My name is Drix.
                </h2>
                <h3 class="h3 regular message-block__item fade">
                    Born and raised in Cebu, Philippines
                </h3>
                <h3 class="h3 regular message-block__item fade">
                    Currently designing interfaces at
                        <a
                            class="h1-alt t-upper fade"
                            href="https://hqzen.com/"
                            target="blank"
                        >
                            HQZen.com
                        </a>
                </h3>
            </header>
            <main class="section-main">
                <div class="message-block">
                    <h4 class="h4 regular message-block__item fade">
                        Take a look at some of my works!
                    </h4>
                </div>
                <ul class="work-list">
                    <li
                        v-for="i in imageLinks"
                        :key="i"
                        class="work-list__item"
                    >
                        <div class="work-list__item-image">
                            <!-- @dev TODO: Dynamic image and alt should be contextual -->
                            <img :src="i">
                        </div>
                        <p class="work-list__item-title semibold">
                            ElevateEase: Streamlining User Journeys for Seamless Experiences and Lorem ipsum dolor sit amet
                        </p>
                        <p class="work-list__item-description t-semi-sm">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore do eiusmod tempor incididunt ut labore
                        </p>
                        <div class="work-list__item-tags">
                            <p
                                v-for="tag in tags"
                                :key="tag"
                                class="tag t-tiny"
                            >
                                {{ tag }}
                            </p>
                        </div>
                    </li>
                </ul>
                <Button
                    @click="changeRoute('/works')"
                    class="primary"
                >
                    Click here to see more!
                </Button>
                <div class="message-block bottom">
                    <h2 class="h2 message-block__item semibold">
                        Your feedback is appreciated!
                    </h2>
                    <h4 class="h4 regular message-block__item fade">
                        You can send them here <u>hello@drix.dev</u>.
                    </h4>
                </div>
            </main>
        </div>
    </ContentBody>
</template>

<script>
    import ContentBody from '/src/components/generics/ContentBody.vue';
    import Button from '/src/components/generics/Button.vue';

    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'Home',

        components: {
            ContentBody,
            Button
        },

        data() {
            return {
                imageLinks: [
                    'https://via.placeholder.com/800x600',
                    'https://via.placeholder.com/1200x800',
                    'https://via.placeholder.com/600x400',
                    'https://avatars.githubusercontent.com/u/50797860?v=4',
                    'https://via.placeholder.com/1000x500',
                    'https://via.placeholder.com/400x800'
                ],
                tags: [
                    'UX Design',
                    'Design',
                    'UI/UX',
                    '2 more...',
                    // 'Case Study',
                    // 'CSS',
                    // 'Frontend Development',
                    // 'Graphic Design',
                    // 'Branding Design'
                ]
            };
        },

        methods: {
            changeRoute(route) {
                this.$router.push(route);
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import 'src/stylesheets/styles.scss';

    .section {
        display: flex;
        flex-direction: column;
        gap: 60px;

        // .section responsiveness
        @media #{$mobile} {
            width: 100%;
            gap: 40px;
        }

        .message-block {
            @include flex-column();
            gap: 8px;

            &__item {
                text-align: center;

                &.fade {
                    color: rgba(255, 255, 255, 0.5);
                }

                @media #{$tablet} {
                    font-size: 16px;
                }
            }

            &.bottom {
                margin-top: 36px;
            }

            a {
                // color: $white;
                color: rgba(255, 255, 255, 0.5);
                text-decoration: underline;
            }
        }

        &-main {
            @include flex-column();
            align-items: center;
            gap: 40px;

            .nav-list {
                @include flex-column();
                gap: 16px;
                width: 50%;

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

    .work-list {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 120px;
        grid-row-gap: 40px;
        line-height: 1.5;

        @media #{$tablet} {
            @include flex-column();
        }

        &__item {
            @include flex-column();
            gap: 16px;
            padding: 16px;
            cursor: pointer;
            border-radius: 8px;

            &:hover {
                background: rgba(255, 255, 255, 0.1);
                transition: .2s all ease-in-out;
            }

            &-image {
                @include flex-align-center();
                height: 200px;
                background: $gray-50;
                overflow: hidden;
                border-radius: 8px;

                img {
                    object-fit: cover;
                    width: 100%;
                    height: 100%;
                }
            }

            &-title,
            &-description {
                @include clamp-line(2);
            }

            &-tags {
                display: flex;
                flex-wrap: wrap;
                gap: 8px;

                .tag {
                    background:rgba(255,255,255, 0.5);
                    color: $white;
                    border-radius: 4px;
                    padding: 4px 8px;
                    width: max-content;
                    white-space: no-wrap;
                }
            }

        }
    }
</style>
