<template>
    <ContentBody>
        <header class="cover">
            <img src="https://picsum.photos/id/2/900/1900" alt="">
            <h2 class="title semibold">
                ElevateEase: Streamlining User Journeys for Seamless Experiences
            </h2>
        </header>
        <main class="main">
            <p class="main__text t-regular">
                With this project, I embarked on a creative journey to seamlessly blend innovation and functionality. From concept to execution, I meticulously crafted a solution that not only meets the client's objectives but also surpasses expectations. Through strategic decision-making and a keen eye for design, I successfully navigated challenges, delivering a final product that stands as a testament to my commitment to excellence. This portfolio showcases not only my technical skills but also my ability to translate ideas into tangible, impactful results. Explore the diverse range of projects within, each telling a unique story of problem-solving, creativity, and a relentless pursuit of quality.

                With this project, I embarked on a creative journey to seamlessly blend innovation and functionality. From concept to execution, I meticulously crafted a solution that not only meets the client's objectives but also surpasses expectations. Through strategic decision-making and a keen eye for design, I successfully navigated challenges, delivering a final product that stands as a testament to my commitment to excellence. This portfolio showcases not only my technical skills but also my ability to translate ideas into tangible, impactful results. Explore the diverse range of projects within, each telling a unique story of problem-solving, creativity, and a relentless pursuit of quality.
            </p>
            <div class="main__image-attachment">
                <img src="https://picsum.photos/id/123/456" alt="">
            </div>
            <p class="main__text t-regular">
                With this project, I embarked on a creative journey to seamlessly blend innovation and functionality. From concept to execution, I meticulously crafted a solution that not only meets the client's objectives but also surpasses expectations. Through strategic decision-making and a keen eye for design, I successfully navigated challenges, delivering a final product that stands as a testament to my commitment to excellence. This portfolio showcases not only my technical skills but also my ability to translate ideas into tangible, impactful results. Explore the diverse range of projects within, each telling a unique story of problem-solving, creativity, and a relentless pursuit of quality.

                With this project, I embarked on a creative journey to seamlessly blend innovation and functionality. From concept to execution, I meticulously crafted a solution that not only meets the client's objectives but also surpasses expectations. Through strategic decision-making and a keen eye for design, I successfully navigated challenges, delivering a final product that stands as a testament to my commitment to excellence. This portfolio showcases not only my technical skills but also my ability to translate ideas into tangible, impactful results. Explore the diverse range of projects within, each telling a unique story of problem-solving, creativity, and a relentless pursuit of quality.
            </p>
            <div class="main__image-attachment">
                <img src="https://picsum.photos/id/8/600/200" alt="">
            </div>
        </main>
    </ContentBody>
</template>

<script>
    import ContentBody from '/src/components/generics/ContentBody.vue';

    export default {
        name: 'WorksDetails',

        components: {
            ContentBody
        }
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

        img {
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            object-fit: cover;
            width: 100%;
            height: 100%;
            z-index: -1;
            pointer-events: none;
        }
    }

    .container {
        padding-top: calc($navbar-height + $cover-height);

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

    p {
        line-height: 1.5;
        text-align: justify;
    }
</style>
