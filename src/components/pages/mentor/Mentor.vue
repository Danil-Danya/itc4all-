<template>
    <div class="mentor__container">
        <div class="container">
            <h2 class="mentor__title title">Биография ментора</h2>
            <div class="mentor__once-content" v-if="mentor">
                <Profile
                    :firstName="mentor.first_name"
                    :lastName="mentor.last_name"
                    :avatar="mentor.mentors_previews.path"
                    :speciality="mentor.speciality"
                />
                <Description 
                    :firstName="mentor.first_name"
                    :lastName="mentor.last_name"
                    :description="mentor.biography"
                    :gmail="mentor.email"
                    :instagram="mentor.mentros_social.instagram"
                    :telegram="mentor.mentros_social.telegram"
                    :github="mentor.mentros_social.github"
                    :linkedin="mentor.mentros_social.linkedin"
                />
                <Calendar />
            </div>
        </div>
    </div>
</template>


<script>
import Calendar from '@/components/pages/mentor/Calendar.vue';
import Description from '@/components/pages/mentor/Description.vue';
import Profile from '@/components/pages/mentor/Profile.vue';

import { mapActions, mapGetters } from 'vuex';

export default {
    data: () => ({
        mentor: null
    }),

    computed: {
        ...mapGetters(['getMentor'])
    },

    methods: {
        ...mapActions(['fetchMentor'])
    },

    components: {
        Profile,
        Description,
        Calendar,
    },

    async mounted () {
        const id = this.$route.query.mentor_id;
        await this.fetchMentor(id);
        
        this.mentor = this.getMentor;
    }
}

</script>