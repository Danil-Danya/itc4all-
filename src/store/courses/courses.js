import { fetchCoureses, fetchOneCourese } from '@/api/axios.js';

export default {
    state: {
        courses: [],
        course: {}
    },

    actions: {
        async fetchCourses(context, params) {
            const response = await fetchCoureses(params);
            const coursesData = response;

            context.commit('setCourses', coursesData);
        },

        async fetchCourse(context, id) {
            const response = await fetchOneCourese(id);
            const courseData = response;

            context.commit('setCourse', courseData);
        }
    },

    mutations: {
        setCourses(state, courses) {
            state.courses = courses;
        },

        setCourse(state, course) {
            state.course = course;
        }
    },

    getters: {
        getCourses(state) {
            return state.courses;
        },

        getCourse(state) {
            return state.course;
        }
    }
}
