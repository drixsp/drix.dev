<template>
    <div
        :class="showDiv ? 'show' : ''"
        class="avatar-sticky-container"
    >
        <div class="avatar-sticky">
            <img
                alt="Drix"
                src="https://avatars.githubusercontent.com/u/50797860?v=4"
            >
            <div class="avatar-sticky__information">
                <h4 class="bold">
                    Drix Lloyd Ponteres
                </h4>
                <p class="t-sm">
                    hello@drix.dev
                </p>
            </div>
        </div>
    </div>
    <ContentBody v-scroll="handleScroll">
        <main class="two-grid">
            <section class="left">
                <div class="avatar">
                    <img
                        alt="Drix"
                        src="https://avatars.githubusercontent.com/u/50797860?v=4"
                    >
                    <div class="avatar-information">
                        <h3 class="bold">
                            Drix Lloyd Ponteres
                        </h3>
                        <p class="t-regular">
                            UX Engineer
                        </p>
                        <p class="t-sm c-tertiary">
                            hello@drixsp.com
                        </p>
                    </div>
                </div>
                <p class="description t-semi-sm">
                    An individual who has a passion for design and front-end technologies with a meticulous attention to detail who is constantly looking further to improve technical and creative skills.
                </p>
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
                <div class="reference__container">
                    <h2 class="p-h2 reference__container-name semibold">
                        Character Reference
                    </h2>
                    <ul class="reference__container-list">
                        <li
                            v-for="reference in references"
                            :key="reference"
                            class="t-sm c-quaternary reference__container-list--item"
                        >
                            <p class="t-md"> {{ reference.name }} </p>
                            <p class="t-sm c-tertiary"> {{ reference.position }}, {{ reference.company }} </p>
                            <p class="t-sm c-tertiary"> {{ reference.contact }} </p>
                        </li>
                    </ul>
                </div>
            </section>
            <section class="right">
                <ul class="company-list">
                    <li
                        v-for="company in companies"
                        :key="company"
                        class="company-list__item"
                    >
                        <h1
                            class="h1-alt company-list__item-name"
                            @click="goToLink(company.link)"
                        >
                            {{ company.name }}
                        </h1>
                        <ul class="company-list__item-content">
                            <li
                                v-for="role in company.roles"
                                :key="role"
                                class="role"
                            >
                                <p class="role__name t-md bold">
                                    {{ role.name }}
                                </p>
                                <p class="role__duration t-regular">
                                    {{ role.duration }}
                                </p>
                                <ul class="role__duties">
                                    <li
                                        v-for="duty in role.duties"
                                        :key="duty"
                                    >
                                        <p class="t-regular c-tertiary">
                                            {{ duty }}
                                        </p>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
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
                    'Logo Design', 'Graphic Design','Adobe Suite Tools','MJML','Email Design','Bootstrap','Vuetify'
                ],
                others: [
                    'Planning','Leadership','Product Vision','Agile Practices','Continuous Learning'
                ],
                info: [
                    {
                        name: 'Drix Lloyd Ponteres',
                        position: 'UX Engineer',
                        email: 'hello@drixsp.com'
                    }
                ],
                references: [
                    {
                        name: 'Generil de los Santos',
                        company: 'BPOSeats',
                        contact: 'generil@bposeats.com',
                        position: 'UX Designer'
                    },
                    {
                        name: 'Louie Jay Rivas',
                        company: 'BPOSeats',
                        contact: 'louie@bposeats.com',
                        position: 'Project Manager'
                    },
                    {
                        name: 'Jarrhey de la Pena',
                        company: 'Symph',
                        contact: 'jarrhey@symph.co',
                        position: 'CTO'
                    }
                ],
                companies: [
                    {
                        name: 'HQZen.com',
                        link: 'https://hqzen.com/',
                        roles: [
                            {
                                name: 'Product Design Lead',
                                duration: '2022 - Present',
                                duties: [
                                    'In charge of overall product design direction.',
                                    'Facilitate team members progress such as appraisals, team initiatives, and activities.'
                                ]
                            },
                            {
                                name: 'Front-end Designer / UX Engineer',
                                duration: '2021 - 2022',
                                duties: [
                                    'Focused on fixing UI bugs, design inconsistencies, and improving overall app based on operational feedback.',
                                ]
                            }
                        ]
                    },
                    {
                        name: '24Strats',
                        link: 'https://www.linkedin.com/company/24strats/about/',
                        roles: [
                            {
                                name: 'Designer',
                                duration: '2022',
                                duties: [
                                    'Designed a website for a Turkish parish church.',
                                    'Created logo and branding for Protein Partner PH.',
                                ]
                            }
                        ]
                    },
                    {
                        name: 'DEVCON Cebu',
                        link: 'https://www.facebook.com/devconcebu/',
                        roles: [
                            {
                                name: 'VP Creatives',
                                duration: '2022-2024',
                                duties: [
                                    'Design pubmats and event posters to be posted in social media.',
                                    'Volunteered in code camps and workshops.',
                                ]
                            }
                        ]
                    },
                    {
                        name: 'RideHero, Inc.',
                        link: 'https://www.facebook.com/rideheroph/',
                        roles: [
                            {
                                name: 'UI/UX Designer',
                                duration: '2020',
                                duties: [
                                    'Collaborated with RideHero design team to build multiple products.',
                                    'Designed RideHero - a ride hailing app targeted to buses and jeepneys.',
                                    'Designed Aguila - an item delivery app to compete with top delivery apps in Cebu.',
                                    'Designed Discover Cebu - a mobile app that promotes tourism in Cebu, Philippines.'
                                ]
                            }
                        ]
                    },
                    {
                        name: 'Symph',
                        link: 'https://www.symph.co/',
                        roles: [
                            {
                                name: 'Web Design Intern',
                                duration: '2019',
                                duties: [
                                'Studied fundamentals of web development and UI design.',
                                    'Worked on MATA Project – facial recognition application with a team of developers and project managers.'
                                ]
                            }
                        ]
                    },
                    {
                        name: 'University of San Carlos',
                        link: 'https://www.usc.edu.ph/academics/schools/school-of-engineering/department-of-computer-engineering',
                        roles: [
                            {
                                name: 'Bachelor of Science in Computer Engineering',
                                duration: '2015 - 2020',
                                duties: [
                                    'Studied hardware concepts and software fundamentals.',
                                    'Volunteered in various school organizations and help spearhead university-wide events.'
                                ]
                            }
                        ]
                    }
                ],
                showDiv: false,
                yPositionToShowDiv: 120
            };
        },

        methods: {
            goToLink(href) {
                window.open(href, '_blank');
            },

            handleScroll() {
                const y = window.scrollY;
                if (y >= this.yPositionToShowDiv) {
                    this.showDiv = true;
                } else {
                    this.showDiv = false;
                }
            }
        },

        mounted() {
            window.addEventListener("scroll", this.handleScroll);
        },

        beforeUnmount() {
            window.removeEventListener("scroll", this.handleScroll);
        },

        computed: {
            isMobile() {
                // Check if the viewport width is less than a certain breakpoint (e.g., 768px for common mobile devices)
                return window.innerWidth < 768; // Adjust the breakpoint as needed
            }
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

    .left {
        @include flex-column();
        gap: 32px;
        height: max-content;
        position: sticky;
        top: 140px;

        @media #{$tablet} {
            position: unset;
        }

        .avatar {
            display: flex;
            align-items: center;
            gap: 12px;

            img {
                width: 60px;
                height: 60px;
                border-radius: 50%;
            }

            &-information {
                @include flex-column;
                gap: 2px;
            }
        }

        .skills {
            &__container {
                @include flex-column();
                gap: 12px;

                &-list {
                    display: flex;
                    flex-wrap: wrap;
                    // gap: 12px;
                    // column-gap: 28px;
                    // row-gap: 12px;
                    column-gap: 20px;
                    row-gap: 4px;

                    .bullet {
                        color: rgba(255,255,255,.2)
                    }
                }
            }
        }

        .reference__container {
            @include flex-column();
            gap: 12px;

            &-list {
                @include flex-column();
                gap: 12px;

                &--item {
                    @include flex-column();
                    gap: 4px;
                }
            }
        }
    }

    .right {

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
                    color: $white;
                    font-size: 24px;
                    cursor: pointer;
                    width: max-content;
                    transition: .2s all ease-in-out;

                    @media #{$tablet} {
                        font-size: 20px;
                    }

                    &:hover {
                        color: $gray-500;
                    }
                }

                &-content {
                    @include flex-column();
                    gap: 24px;
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
    }

    .avatar-sticky-container {
        position: sticky;
        top: 0;
        z-index: 1000;
        display: none;
        opacity: 0;
        transition: .2s all ease-in-out;

        @media #{$tablet} {
            display: block;
        }

        &.show {
            opacity: 1;
        }
    }

    .avatar-sticky {
        display: flex;
        align-items: center;
        gap: 12px;
        background: $white;
        padding: 12px 150px;
        position: absolute;
        top: 60px;
        left: 0;
        right: 0;
        width: 100%;
        transition: .1s all ease-in-out;

        @media #{$mobile} {
            padding: 12px 20px;
        }

        img {
            width: 40px;
            height: 40px;
            border-radius: 50%;
        }

        &__information {
            @include flex-column;
            gap: 2px;
        }
    }

</style>
