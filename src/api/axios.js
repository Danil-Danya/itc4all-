import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_URL,
});

api.interceptors.request.use(
    config => {
        const token = localStorage.getItem('access_token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    error => Promise.reject(error)
);


const registration = async (data) => {
    try {
        const response = await api.post('registration', data);

        if (response.status >= 200 && response.status < 300) {
            const accessToken = response.data.accessTocken;
            const refreshToken = response.data.refreshTocken;
            
            localStorage.setItem('access_token', accessToken);
            localStorage.setItem('refresh_token', refreshToken);

            return { 
                success: true 
            };
        }
    } 
    catch (error) {
        console.log(error);
        return { success: false, message: "Ошибка при регистрации" };
    }
};


const login = async (data, params) => {
    try {
        const response = await api.post('login', data);
        const accessToken = response.data.accessTocken;
    
        if (response.status === 200) {
            localStorage.setItem('access_token', accessToken);
            api.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
        }
    
        return response;
    }
    catch (error) {
        console.log(error);
        return error.response;
    }
}

const profile = async (data, params) => {
    const response = await api.get('profile');
    return response;
}

const fetchUsers = async (params) => {}

const fetchUser = async (id) => {
    try {
        const response = await api.get(`users/${id}`);
        return response.data;
    }
    catch (error) {
        console.log(error);
    }
}

const fetchMentors = async (params) => {
    const response = await api.get('mentors', {
        params
    });
    return response.data;
}

const fetchOneMentor = async (id, params) => {
    const response = await api.get(`mentors/${id}`);
    return response.data;
}

const fetchEvents = async (params) => {
    const response = await api.get('events', {
        params
    });

    return response.data;
}

const fetchOneEvent = async (id, params) => {
    const response = await api.get(`event`, {
        params: {
            id
        }
    });
    return response.data;
}

const fetchCoureses = async (params) => {
    const response = await api.get('courses', {
        params
    })

    return response.data;
}

const fetchOneCourese = async (id, params) => {
    const response = await api.get(`courses/${id}`, {
        params
    })

    return response.data;
}

const fetchVideo = async (id) => {
    const response = await api.get(`videos/${id}`, {
        responseType: 'blob',
        headers: {
            Range: 'bytes=0-',
        },
    });
    return response.data;
};


const headersVideo = async (id) => {
    const response = await api.head(`videos/${id}`, {
        responseType: 'blob',
        headers: {
            Range: 'bytes=0-'
        }
    });
    return {
        contentLength: response.headers['content-length'],
        contentType: response.headers['content-type'],
        acceptRanges: response.headers['accept-ranges']
    };
};


const fetchZoomSessions = async (url, params) => {
    const response = await api.get('zoom-sessions', {
        params
    })

    return response;
}

const fetchOneZoomSession = async (id, params) => {
    const response = await api.get(`zoom-sessions/${id}`, {
        params
    });

    return response
}

const updateUserAvatar = async (data, params) => {
    const response = await api.patch(`/user-edited-avatar`, data, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });

    return response;
}

const sendRequest = async (phone, name, message) => {
    try {
        const response = await api.post('request', {
            name,
            phone,
            message
        });

        if (response)
            location.reload()
    }
    catch (error) {
        console.log(error);
    }
}

const checkAccessCourse = async (courseId) => {
    try {
        const response = await api.post(`videos/check/${courseId}`);
        const access = response.data;

        const accessed = access.status === 'success' && access.message === 'Transaction found' ? true : false;
        return accessed;
    }
    catch (error) {
        console.error('Error checking course access:', error);
    }
} 

const editedProfile = async (id, data) => {
    try {
        const response = await api.patch(`/user-edit-profile/${id}`, data);
        return response;
    }
    catch (error) {
        console.log(error);
    }
}

const fetchTransactions = async () => {
    try {
        const response = await api.get('transactions', {
            params: {
                page: 1,
                limit: 10000000
            }
        });
        return response.data;
    }
    catch (error) {
        console.log(error);
    }
}

export {
    registration,
    login,
    profile,
    fetchUsers,
    fetchUser,
    fetchMentors,
    fetchEvents,
    fetchOneMentor,
    fetchOneEvent,
    fetchCoureses,
    fetchOneCourese,
    fetchVideo,
    fetchZoomSessions,
    fetchOneZoomSession,
    updateUserAvatar,
    headersVideo,
    checkAccessCourse,
    //fetchSertificate,
    sendRequest,
    fetchTransactions,
    editedProfile
}