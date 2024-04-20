<template>
    <WorkDetailsContainer>
        <template #image>
            <img src="https://i.postimg.cc/gkwWd92z/devcon-cebu-officers-graphic.png" alt="DEVCON Cebu 2023">
        </template>

        <template #title>
            Kickstarting DEVCON Cebu 2023: Showcasing Chapter Officers
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
                As a preview of the officers of DEVCON Cebu for the year 2023, I designed a pubmat graphic highlighting each officer's anticipated role within the organization, providing a comprehensive overview of the team set to lead DEVCON Cebu in that year.
            </p>
            <p class="main__text t-regular">
                These materials were shared on the official Facebook page and received a lot of engagement from the tech community. The overall aim is to reintroduce DEVCON Cebu to the tech community after its hiatus during the pandemic.
            </p>
        </template>
    </WorkDetailsContainer>
</template>

<script>
    import WorkDetailsContainer from '/src/components/generics/WorkDetailsContainer.vue';

    export default {
        name: 'DEVCON_Project_1',

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