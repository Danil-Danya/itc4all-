import { fetchMentors, fetchOneMentor } from '@/api/axios.js'; 

export default {
    state: {
        mentors: [],    
        mentor: {}      
    },

    actions: {
        async fetchMentors(context, params) {
            const response = await fetchMentors(params);   
            const mentorsData = response;

            context.commit('setMentors', mentorsData);
        },

        async fetchMentor(context, id) {
            const response = await fetchOneMentor(id);   
            const mentorData = response;

            context.commit('setMentor', mentorData);
        }
    },

    mutations: {
        setMentors(state, mentors) {
            state.mentors = mentors;
        },

        setMentor(state, mentor) {
            state.mentor = mentor;
        }
    },

    getters: {
        getMentors(state) {
            return state.mentors; 
        },

        getMentor(state) {
            return state.mentor;   
        }
    }
}
