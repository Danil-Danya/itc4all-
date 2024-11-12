<template>
    <section class="session">
        <div class="session__container">
            <h2 class="session__title">Мои сессии в Zoom</h2>
            <p class="session__description">В данном разделе вам показано расписание ваших занятий в системе Zoom.</p>
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
import SessionCard from './SessionCard.vue';

import { mapActions, mapGetters } from 'vuex';

export default {
    data: () => ({
        sessions: [],
        mentors: []
    }),

    computed: {
        ...mapGetters(['getSessions', 'getMentors']),
    },

    methods: {
        ...mapActions(['fetchSessions', 'fetchMentors'])
    },

    async mounted () {
        await this.fetchSessions();
        await this.fetchMentors();
        console.log(this.getSessions.data.rows);

        this.mentors = this.getMentors.rows
        
        this.sessions = this.getSessions.data.rows;
    },

    components: {
        SessionCard
    }
}

</script>