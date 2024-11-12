export default {
    computed: {
        staticPath () {
            return import.meta.env.VITE_APP_STATIC_URL
        }
    }
}