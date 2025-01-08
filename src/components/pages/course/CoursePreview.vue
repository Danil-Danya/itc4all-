<template>
    <div class="courses__preview">
        <div class="courses__preview-logo">
            <div class="courses__preview-video" v-if="$route.query.videos_id">
                <video controls autoplay ref="videoPlayer" class="course-videotag"></video>
            </div>
            <img :src="`${staticPath}images/${preview.preview}`" alt="Course preview" class="courses__preview-img" v-else>
        </div>
        <div class="courses__info">
            <h2 class="courses__title">{{ preview.title }}</h2>
            <p class="courses__mentor">Mentor: {{ preview.mentor }}</p>
            <div class="courses__price-container">
                <h2 class="courses__price-title">Цена курса</h2>
                <p class="courses__price-now">{{ preview.price }} so'm</p>
                <p class="courses__price-full">{{ preview.fullPrice }} so'm</p>
                <form id="form-payme" class="courses__info-form" method="POST" action="https://checkout.paycom.uz/" v-if="preview">
                    <input type="hidden" name="merchant" value="66e5b04e8cc73123c0128fd2">
                    <input type="hidden" name="account[user_email]" :value="profile.email">
                    <input type="hidden" name="account[user_name]" :value="profile.first_name + ' ' + profile.last_name">
                    <input type="hidden" name="account[product_name]" :value="preview.title">
                    <input type="hidden" name="account[product_id]" :value="+$route.params.id">
                    <input type="hidden" name="account[product_type]" value="COURSE">
                    <input type="hidden" name="account[start_time]" value="2024-10-15T14:30:00Z">
                    <input type="hidden" name="account[duration]" value="На всегда">
                    <input type="hidden" name="amount" :value="preview.price * 100">
                    <input type="hidden" name="lang" value="ru">
                    <input type="hidden" name="button" data-type="svg" value="colored">
                    <div id="button-container"></div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { fetchVideo } from '@/api/axios';
import { mapActions, mapGetters } from 'vuex';

export default {
    data: () => ({
        videoUrl: '',
        video: false,
        profile: {},
        course: {}
    }),

    props: {
        preview: {
            type: Object,
            required: true
        },
    },

    computed: {
        ...mapGetters([
            'getProfile',
        ])
    },

    methods: {
        ...mapActions([
            'fetchProfile',
        ]),

        async loadVideo() {
            try {
                const video = await fetchVideo(this.$route.query.videos_id);
                this.videoUrl = `https://api.startit.uz/hls/${this.$route.query.videos_id}/index.m3u8`; 
            } catch (error) {
                console.error('Ошибка загрузки видео:', error);
            }
        },

        initializeHLSPlayer() {
            if (Hls.isSupported()) {
                const video = this.$refs.videoPlayer;

                const hls = new Hls();
                hls.loadSource(this.videoUrl); 
                hls.attachMedia(video); 

                hls.on(Hls.Events.MANIFEST_PARSED, function () {
                    //video.play();
                    this.video = true
                });
            } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
                video.src = this.videoUrl;
                video.addEventListener('loadedmetadata', function () {
                    //video.play();
                });
                this.video = true
            }

        }
    },

    async mounted() {
        setTimeout(() => {
            Paycom.Button('#form-payme', '#button-container');
        }, 500);

        await this.fetchProfile();
        const id = this.$route.params.id;
        this.profile = this.getProfile.data;

        await this.loadVideo(); 
        this.initializeHLSPlayer();
    },

    watch: {
        $route: {
            deep: true,
            async handler () {
                await this.loadVideo(); 
                this.initializeHLSPlayer();
            }
        }
    }
};
</script>

