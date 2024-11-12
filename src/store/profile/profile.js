import { profile } from '@/api/axios.js';
const env = import.meta.env;

export default {
    state: {
        profile: {}
    },

    actions: {
        async fetchProfile (context, id) {
            const response = await profile();
            const profileData = response;

            context.commit('setProfile', profileData);
        }
    },

    mutations: {
        setProfile (state, profile) {
            state.profile = profile;
        }
    },

    getters: {
        getProfile (state) {
            return state.profile;
        }
    }
}
