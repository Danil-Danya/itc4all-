import { fetchTransactions } from "@/api/axios";

export default {
    state: {
        transactions: [],
    },

    actions: {
        async fetchTransactions(context, params) {
            const response = await fetchTransactions(params);   
            const transactionsData = response;

            context.commit('setTransactions', transactionsData);
        }
    },

    mutations: {
        setTransactions(state, transactions) {
            state.transactions = transactions;
        }
    },

    getters: {
        getTransactions(state) {
            return state.transactions;
        }
    }
}
