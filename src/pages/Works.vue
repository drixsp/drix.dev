<template>
    <ContentBody>
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
            </li>
        </ul>
    </ContentBody>
</template>

<script>
    import ContentBody from '../components/generics/ContentBody.vue'

    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'Works',

        components: {
            ContentBody
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
                imageUrl: []
            };
        },
    }
</script>

<style lang="scss" scoped>
    @import 'src/stylesheets/styles.scss';

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

        }
    }
</style>
