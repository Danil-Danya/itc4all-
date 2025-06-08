<template>
    <div class="session__card">
        <div class="session__card-preview">
            <img :src="`${staticPath}images/${avatar}`" alt="Mentor" class="session__card-preview-img">
        </div>
        <div class="session__card-content">
            <h2 class="session__card-title">{{ session.name }}</h2>
            <div class="session__card-action">
                <a :href="'mailto:' + session.mentor_email" class="session__card-mentor">{{ session.mentor_email }}</a>
                <router-link :to="`/user/meeting/${session.id}`" class="session__card-link">{{ $t('zoomSession.link') }}</router-link>
            </div>
        </div>
    </div>
</template>


<script>
import sessions from '@/store/sessions/sessions';


export default {
    data: () => ({
        avatar: []
    }),

    props: {
        session: Object,
        mentors: Array
    },
    
    mounted () {
        setTimeout(() => {
            this.mentors.forEach((mentor) => {
                if (mentor.email === this.session.mentor_email) {
                    this.avatar = mentor.mentors_previews.path;    
                }
            })
        }, 300);
    }
}

</script>