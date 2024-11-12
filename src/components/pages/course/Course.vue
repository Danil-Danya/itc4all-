<template>
    <div class="container">
        <div class="course__container">
            <CoursePreview :preview="preview" :video="videoUrl" />
            <CourseVideos :videos="videos" />
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { fetchVideo } from '@/api/axios';

import CoursePreview from './CoursePreview.vue';
import CourseVideos from './CourseVideos.vue';

export default {
    data: () => ({
        preview: {},
        videos: [],
        videoUrl: ''
    }),

    components: {
        CoursePreview,
        CourseVideos
    },

    methods: {
        ...mapActions(['fetchCourse']),

        async videoPlay() {
            const videoId = this.$route.query.videos_id;
            const videoBlob = await fetchVideo(videoId);
            this.videoUrl = URL.createObjectURL(videoBlob);
        }
    },

    computed: {
        ...mapGetters(['getCourse'])
    },

    watch: {
        '$route.query': {
            deep: true,
            async handler() {
                //await this.videoPlay(); 
            }
        }
    },

    async mounted() {
        await this.fetchCourse(this.$route.params.id);
        this.preview = {
            title: this.getCourse.name,
            mentor: this.getCourse.mentor,
            price: this.getCourse.price,
            fullPrice: this.getCourse.full_price,
            preview: this.getCourse.course_preview.path
        };

        this.videos = this.getCourse.videos;

        // Загружаем видео при первом монтировании
       // await this.videoPlay();
    }
};
</script>
