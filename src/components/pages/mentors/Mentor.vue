<template>
    <section class="mentor">
        <div class="container">
            <div class="mentor__container">
                <h2 class="title mentor__title">{{ $t('mentors.title') }}</h2>
                <div class="mentor__content">
                    <MentorCard v-for=" item in mentors" :mentor="item" :key="item"/>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

import mentors from '@/store/mentors/mentors';
import MentorCard from './MentorCard.vue';

import { mapActions, mapGetters } from 'vuex';

export default {
    data: () => ({
        mentors: []
    }),

    components: {
        MentorCard
    },

    computed: {
        ...mapGetters(['getMentors'])
    },

    methods: {
        ...mapActions(['fetchMentors'])
    },

    async mounted () {
        await this.fetchMentors({ page: 1, limit: 100 });
        this.mentors = this.getMentors.rows;
        console.log(this.mentors);
        
    }
}

</script>