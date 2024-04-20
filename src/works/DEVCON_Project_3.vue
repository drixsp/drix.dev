<template>
    <WorkDetailsContainer>
        <template #image>
            <img src="/assets/devcon/dc-09-2023-geek-up.png" alt="DEVCON Cebu 2023">
        </template>

        <template #title>
            Connecting Through Tech: DEVCON Cebu September 2023 Geek Up
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
                On September 9, 2023, DEVCON Cebu hosted an engaging online Geek Up event, aiming to foster connections
                among professionals. This session featured Mr. Jacob Silva, an esteemed tech expert, who delved into essential cybersecurity concepts.
            </p>
            <p class="main__text t-regular">
                As per my usual role as VP Creatives, I created posters and online ads to generate buzz around the event.
                I also kicked off the event with an ice breaker activity. It was a success because we had a lot of people attend, and many were interested in future DEVCON events.
            </p>
        </template>
    </WorkDetailsContainer>
</template>

<script>
    import WorkDetailsContainer from '/src/components/generics/WorkDetailsContainer.vue';

    export default {
        name: 'DEVCON_Project_3',

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