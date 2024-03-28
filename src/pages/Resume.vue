<template>
    <ContentBody>
        <main class="two-grid">
            <section>
                <ul class="company-list">
                    <!-- @dev TODO: Dynamic list -->
                    <li
                        v-for="i in 4"
                        :key="i"
                        class="company-list__item"
                    >
                        <h1 class="h1-alt company-list__item-name">
                            HQZen.com
                        </h1>
                        <div class="role">
                            <p class="role__name t-md bold">
                                Product Design Lead
                            </p>
                            <p class="role__duration t-regular">
                                2022 - Present
                            </p>
                            <ul class="role__duties">
                                <li>
                                    <p class="t-regular c-tertiary">
                                        In charge of overall product design direction.
                                    </p>
                                </li>
                                <li>
                                    <p class="t-regular c-tertiary">
                                        Facilitate team members progress such as appraisals, team initiatives, and activities
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <!-- <div class="role">
                            <p class="role__name t-md bold">
                                Product Design Lead
                            </p>
                            <p class="role__duration t-regular">
                                2022 - Present
                            </p>
                            <ul class="role__duties">
                                <li>
                                    <p class="t-regular c-tertiary">
                                        In charge of overall product design direction.
                                    </p>
                                </li>
                                <li>
                                    <p class="t-regular c-tertiary">
                                        In charge of overall product design direction.
                                    </p>
                                </li>
                            </ul>
                        </div> -->
                    </li>
                </ul>
            </section>
            <section class="skills">
                <div class="skills__container">
                    <h2 class="p-h2 skills__container-name semibold">
                        Specialties
                    </h2>
                    <div class="skills__container-list">
                        <ul class="skills__container-list">
                            <li
                                v-for="specialty in specialties"
                                :key="specialty"
                                class="t-sm c-quaternary"
                            >
                                <p>
                                    {{ specialty }}
                                </p>
                            </li>
                            <!-- <li class="t-sm bullet">
                                •
                            </li> -->
                        </ul>
                    </div>
                </div>
                <div class="skills__container">
                    <h2 class="p-h2 skills__container-name semibold">
                        Others
                    </h2>
                    <ul class="skills__container-list">
                        <li
                            v-for="other in others"
                            :key="other"
                            class="t-sm c-quaternary"
                        >
                            <p>
                                {{ other }}
                            </p>
                        </li>
                    </ul>
                </div>
            </section>
        </main>
    </ContentBody>
</template>

<script>
    import ContentBody from '../components/generics/ContentBody.vue';

    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'Resume',

        components: {
            ContentBody
        },

        data() {
            return {
                specialties: [
                    'Vue.js','HTML','CSS','Figma','UI Design','User Experience',
                    'Adobe Suite Tools','MJML','Email Design','Bootstrap','Vuetify'
                ],
                others: [
                    'Planning','Leadership','Product Vision','Agile Practices','Continuous Learning'
                ]
            };
        }
    }
</script>

<style lang="scss" scoped>
    @import 'src/stylesheets/styles.scss';

    p {
        line-height: 1.5;
    }

    .two-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 10%;

        @media #{$tablet} {
            @include flex-column();
            gap: 80px;
        }
    }

    .skills {
        @include flex-column();
        gap: 32px;
        position: sticky;

        &__container {
            @include flex-column();
            gap: 12px;

            &-list {
                display: flex;
                flex-wrap: wrap;
                // gap: 12px;
                column-gap: 28px;
                row-gap: 12px;

                .bullet {
                    color: rgba(255,255,255,.2)
                }
            }
        }
    }

    .company-list {
        @include flex-column();
        gap: 64px;

        &__item {
            display: flex;
            flex-direction: column;
            gap: 24px;

            &-name {
                text-decoration: underline;
                text-transform: uppercase;
            }

            .role {
                @include flex-column();
                gap: 8px;

                &__duration {
                    color: $gray-300;
                }

                &__duties {
                    @include flex-column();
                    gap: 12px;
                }
            }
        }
    }

</style>
