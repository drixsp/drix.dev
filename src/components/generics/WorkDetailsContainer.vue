<template>
    <ContentBody>
        <!-- Header Content -->
        <header class="cover">
            <!-- Project Image -->
            <slot class="image" name="image"></slot>
            <!-- Project Title -->
            <h2 class="title semibold">
                <slot name="title"></slot>
            </h2>
            <!-- Project Tags -->
            <div class="tags-container">
                <slot name="tags"></slot>
            </div>
        </header>

        <!-- Main Content -->
        <main class="main">
            <slot name="content"></slot>
        </main>
    </ContentBody>
</template>

<script>
    import ContentBody from '/src/components/generics/ContentBody.vue';

    export default {
        name: 'WorkDetailsContainer',

        components: {
            ContentBody
        },

        data() {
            return {
                data: {},
                tags: [
                    'UX Design',
                    'Design',
                    'UI/UX',
                    '2 more...',
                    'Case Study',
                    'CSS',
                    'Frontend Development',
                    'Graphic Design',
                    'Branding Design'
                ]
            };
        },
    }
</script>

<style lang="scss" scoped>
    @import 'src/stylesheets/styles.scss';

    $navbar-height: 60px;
    $cover-height: 400px;
    $cover-height-mobile: 240px;

    .cover {
        @include flex-column();
        justify-content: flex-end;
        position: absolute;
        left: 0;
        right: 0;
        top: $navbar-height;
        max-width: 1600px;
        height: 400px;
        overflow: hidden;
        padding: 40px 150px;
        border-radius: 0 0 24px 24px;
        margin: auto;
        background: rgba(0,0,0,0.4);

        @media #{$tablet} {
            height: 240px;
            padding: 12px 20px;
        }

        h2 {
            width: 100%;
            max-width: 600px;
        }

        ::v-deep img {
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            object-fit: cover;
            width: 100%;
            height: 100%;
            z-index: -1;
            pointer-events: none;
            opacity: .3;
            filter: blur(5px);
        }

        .tags-container {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-top: 8px;
            max-width: 80%;

            ::-webkit-scrollbar {
                display: none;
            }

            @media #{$tablet} {
                overflow-x: scroll;
                flex-wrap: unset;
                max-width: unset;
                width: 100%;
            }

            ::v-deep .tag {
                background:rgba(255,255,255, 0.5);
                color: $white;
                border-radius: 4px;
                padding: 4px 8px;
                width: max-content;
                white-space: nowrap;
            }
        }
    }

    .container {
        padding-top: calc($navbar-height + $cover-height);
        min-height: calc(100vh - 60px);
        // border: 4px dashed red;

        @media #{$tablet} {
            padding-top: calc($navbar-height + $cover-height-mobile);
        }

        .main {
            @include flex-column();
            gap: 40px;
            align-items: center;
            margin: 0 120px;

            @media #{$tablet} {
                margin: 0;
            }

            &__image-attachment {
                @include flex-align-justify-center;
                width: 100%;
                height: 300px;
                padding: 0 20%;
                overflow: hidden;

                @media #{$tablet} {
                    padding: 0;
                }

                img {
                    margin: 0;
                    object-fit: cover;
                    width: 100%;
                    height: 100%;
                    border-radius: 8px;
                    pointer-events: none;
                }
            }
        }
    }

    ::v-deep .main p {
        line-height: 1.5;
        text-align: justify;
    }
</style>
