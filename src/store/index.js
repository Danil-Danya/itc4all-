import { createStore } from 'vuex';

import profile from './profile/profile';
import mentors from './mentors/mentors';
import events from './events/events';
import courses from './courses/courses';
import sessions from './sessions/sessions';

export default createStore({
    modules: {
        profile,
        mentors,
        events,
        courses,
        sessions
    }
})