<template>
    <ContentBody>
        <ul class="work-list">
            <li
                v-for="i in 6"
                :key="i"
                class="work-list__item"
            >
                <div class="work-list__item-image"></div>
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
        }
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

        &__item {
            @include flex-column();
            gap: 16px;
            // border: 2px dashed red;
            padding: 12px;
            cursor: pointer;
            border-radius: 4px;

            &:hover {
                background: rgba(255, 255, 255, 0.1);
                transition: .2s all ease-in-out;
            }

            &-image {
                width: 100%;
                height: 200px;
                background: $gray-50;
            }

            &-title,
            &-description {
                @include clamp-line(2);
            }
        }
    }
</style>
