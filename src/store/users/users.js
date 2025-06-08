import { fetchUsers, fetchUser } from "@/api/axios";

export default {
    state: {
        users: [],
        user: {}
    },

    actions: {
        async fetchUsers(context, params) {
            const response = await fetchUsers(params);   
            const usersData = response;

            context.commit('setUsers', usersData);
        },

        async fetchUser(context, id) {
            const response = await fetchUser(id);   
            const userData = response;

            context.commit('setUser', userData);
        }
    },

    mutations: {
        setUsers(state, users) {
            state.users = users;
        },

        setUser(state, user) {
            state.user = user;
        }
    },

    getters: {
        getUsers(state) {
            return state.users;
        },

        getUser(state) {
            return state.user;
        }
    }
}
