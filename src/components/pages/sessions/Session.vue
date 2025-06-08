<template>
    <section class="session">
        <div class="session__container">
            <h2 class="session__title">{{ $t("zoomSession.title") }}</h2>
            <p class="session__description">{{ $t("zoomSession.desc") }}</p>
            <div class="session__content">
                <div class="session__item" v-for="session in sessions" :key="session">
                    <SessionCard :session="session" :mentors="mentors" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
//import mentors from '@/store/mentors/mentors';
import profile from '@/store/profile/profile';
import SessionCard from './SessionCard.vue';

import { mapActions, mapGetters } from 'vuex';

export default {
    data: () => ({
        sessions: [],
        mentors: [],
        profile: null
    }),

    computed: {
        ...mapGetters(['getSessions', 'getMentors', 'getProfile']),
    },

    methods: {
        ...mapActions(['fetchSessions', 'fetchMentors', 'fetchProfile']),
    },

    async mounted () {
        await this.fetchSessions();
        await this.fetchMentors();
        await this.fetchProfile();

        const allSessions = this.getSessions.data.rows;
        const userEmail = this.getProfile.data.email;

        console.log(allSessions);
        console.log(userEmail);
        
        
        this.mentors = this.getMentors.rows;
        this.sessions = allSessions.filter(session => session.user_email === userEmail);

        console.log(this.sessions);
    },


    components: {
        SessionCard
    }
}

</script>