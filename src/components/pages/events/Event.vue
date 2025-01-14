<template>
    <div class="container">
        <div class="events__container">
            <h1 class="title events__title">{{ $t('events.title') }}</h1>
            <div class="events__content">
                <div class="events__item" v-for="item in events" :key="item">
                    <EventsCard :card="item" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import EventsCard from './EventCard.vue';

import ProgrammerImage from '@/assets/images/events/Programmer.jpg';
import LessonImage from '@/assets/images/events/Lessson.jpg';

import { mapGetters, mapActions } from 'vuex';
import events from '@/store/events/events';

export default {
    data: () => ({
        events: []
    }),

    methods: {
        ...mapActions(['fetchEvents'])
    },

    computed: {
        ...mapGetters(['getEvents'])
    },

    components: {
        EventsCard
    },

    async mounted () {
        await this.fetchEvents({ page: 1, limit: 10 });
        this.events = this.getEvents.rows;
        
    }
}

</script>