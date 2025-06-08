<template>
    <div class="courses__videos-container">
        <h2 class="title" style="margin-bottom: 20px;">{{ $t('course.programTitle') }}</h2>
        <div class="courses__videos-item" v-for="video in videos" :key="video">
            <div class="courses__videos-icon">
                <Play />
            </div>
            <h2 class="courses__videos-theme">{{ video.name }}</h2>
            <router-link :to="`?videos_id=${video.id}`" class="courses__videos-link" v-if="access">{{ $t('course.play') }}</router-link>
            <p class="courses__videos-link courses__videos-link-offed" v-else>{{ $t('course.play') }}</p>
        </div>
    </div>
</template>

<script>

import Play from '@/components/icons/course/Play.vue';
import { checkAccessCourse } from '@/api/axios';

export default {
    data: () => ({
        access: false,
    }),

    components: {
        Play
    },

    props: {
        videos: {
            type: Array,
            required: true
        },
    },

    methods: {
        async checkAccess() {
            const access = await checkAccessCourse(this.$route.params.id);
            this.access = access;
        },
    },

    beforeRouteUpdate(to, from, next) {
        this.checkAccess().then(() => {
            next();
        });
    },

    async mounted() {
        await this.checkAccess();
    },
}

</script>