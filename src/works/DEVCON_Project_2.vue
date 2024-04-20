<template>
    <WorkDetailsContainer>
        <template #image>
            <img src="https://i.postimg.cc/QxWLBRKf/dc-04-2023-code-camp.png" alt="DEVCON Cebu 2023">
        </template>

        <template #title>
            Designing for DEVCON Kids April 2023 Code Camp
        </template>

        <template #tags>
            <p
                v-for="tag in tags"
                :key="tag"
                class="tag t-tiny">
                {{ tag }}
            </p>
        </template>

        <template #content>
            <p class="main__text t-regular">
                Taking place on Saturday, April 22, 2023, this DEVCON event was designed to immerse children aged 6 to 10 in the world of computer science and programming through the interactive platform of Undersea Arcade. Spearheaded by DEVCON Cebu officers, the event not only facilitated gameplay but also served as an educational avenue for teaching programming fundamentals in an engaging manner.
            </p>
            <p class="main__text t-regular">
                As Vice President of Creatives, I designed teasers, event posters, and video backgrounds for the event. My aim was to create a consistent look that captured the fun and educational spirit of the Code Camp. Through graphic design, I aimed to captivate children's imaginations while reinforcing the event's educational goals.
            </p>
        </template>
    </WorkDetailsContainer>
</template>

<script>
    import WorkDetailsContainer from '/src/components/generics/WorkDetailsContainer.vue';

    export default {
        name: 'DEVCON_Project_2',

        components: {
            WorkDetailsContainer
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