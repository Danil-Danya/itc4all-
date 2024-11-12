import { fetchZoomSessions, fetchOneZoomSession } from "@/api/axios";

export default {
    state: {
        sessions: [],
        session: {}
    },

    actions: {
        async fetchSessions(context, params) {
            const response = await fetchZoomSessions(params);   
            const sessionsData = response;

            context.commit('setSessions', sessionsData);
        },

        async fetchSession(context, id, params) {
            const response = await fetchOneZoomSession(id);   
            const sessionsData = response;

            context.commit('setSession', sessionsData);
        }
    },

    mutations: {
        setSessions(state, sessions) {
            state.sessions = sessions;
        },

        setSession(state, session) {
            state.session = session;
        }
    },

    getters: {
        getSessions (state) {
            return state.sessions;
        },

        getSession (state) {
            return state.session;
        }
    }
}