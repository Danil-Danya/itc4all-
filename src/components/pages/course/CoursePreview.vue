<template>
    <div class="courses__preview">
        <div class="courses__preview-logo">
            <img :src="`${staticPath}images/${preview.preview}`" alt="Course preview" class="courses__preview-img">
            <div class="courses__preview-video">
                <video controls autoplay @timeupdate="onTimeUpdate" ref="videoPlayer">
                    <source :src="videoUrl" type="video/mp4">
                </video>
            </div>
        </div>
        <div class="courses__info">
            <h2 class="courses__title">{{ preview.title }}</h2>
            <p class="courses__mentor">Mentor: {{ preview.mentor }}</p>
            <div class="courses__price-container">
                <h2 class="courses__price-title">Цена курса</h2>
                <p class="courses__price-now">{{ preview.price }} so'm </p>
                <p class="courses__price-full">{{ preview.fullPrice }} so'm</p>
                <form id="form-payme" class="courses__info-form" method="POST" action="https://checkout.paycom.uz/">
                    <input type="hidden" name="merchant" value="66c32c999412202b2cc37df6">
                    <input type="hidden" name="account[order_id]" value="197">
                    <input type="hidden" name="amount" value="500">
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

export default {
    data() {
        return {
            videoUrl: '',
            videoId: this.$route.query.videos_id,
            currentStart: 0,
            chunkSize: 20 * 1024 * 1024 
        };
    },

    props: {
        preview: {
            type: Object,
            required: true
        },
    },

    methods: {
        async loadVideoChunk(start, end) {
            try {
                const response = await fetchVideo(this.videoId, `bytes=${start}-${end}`);
                console.log(response);
                
                const blobUrl = URL.createObjectURL(response);

                if (this.videoUrl) {
                    URL.revokeObjectURL(this.videoUrl); // Очищаем предыдущий URL
                }
                this.videoUrl = blobUrl; // Устанавливаем новый URL
                this.currentStart = end + 1; // Обновляем начало для следующего фрагмента
            } catch (error) {
                console.error('Ошибка загрузки видео:', error);
            }
        },


        async onTimeUpdate() {
            const player = this.$refs.videoPlayer;

            if (player.duration - player.currentTime < 10) {
                await this.loadVideoChunk(this.currentStart, this.currentStart + this.chunkSize);
            }
        },

        async videoPlay() {
            await this.loadVideoChunk(this.currentStart, this.currentStart + this.chunkSize);
        }
    },

    mounted() {
        this.videoPlay();
        Paycom.Button('#form-payme', '#button-container');
    },

    beforeDestroy() {
        if (this.videoUrl) {
            URL.revokeObjectURL(this.videoUrl); // Очистка URL при уничтожении компонента
        }
    }
};
</script>
