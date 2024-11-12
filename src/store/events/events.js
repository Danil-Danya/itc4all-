import { fetchEvents, fetchOneEvent } from '@/api/axios.js';

export default {
    state: {
        events: [],
        event: {}
    },

    actions: {
        async fetchEvents(context, params) {
            const response = await fetchEvents(params);
            const eventsData = response;

            context.commit('setEvents', eventsData);
        },

        async fetchEvent(context, id) {
            const response = await fetchOneEvent(id);
            const eventData = response;

            context.commit('setEvent', eventData);
        }
    },

    mutations: {
        setEvents(state, events) {
            state.events = events;
        },

        setEvent(state, event) {
            state.event = event;
        }
    },

    getters: {
        getEvents(state) {
            return state.events;
        },

        getEvent(state) {
            return state.event;
        }
    }
}
