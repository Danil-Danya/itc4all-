import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_URL,
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
    }
});

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
    } catch (error) {
        console.log(error);
        return { success: false, message: "Ошибка при регистрации" };
    }
};


const login = async (data, params) => {
    const response = await api.post('login', data);
    const accessToken = response.data.accessTocken;

    localStorage.setItem('access_token', accessToken);

    return response.data;
}

const profile = async (data, params) => {
    const response = await api.get('profile');
    return response;
}

const fetchUsers = async (url, params) => {

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

const fetchVideo = async (id, range) => { // 1 MB
    const response = await api.get(`videos/${id}`, {
        responseType: 'blob',
        headers: {
            Range: range
        }
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

const updateUserAvatar = async (id, data, params) => {
    const response = await api.patch(`/user-edited-avatar/${id}`, data, {
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

export {
    registration,
    login,
    profile,
    fetchUsers,
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
    //fetchSertificate,
    sendRequest
}