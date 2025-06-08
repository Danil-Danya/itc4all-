<template>
    <div class="reviews__slider-container">
        <swiper
            :modules="modules"
            :slides-per-view="preview"
            :space-between="32"
            :speed="200"
            :loop="true"
            :pagination="{ 
                clickable: true,
                el: '.reviews__slider-pagination'
            }"
            :autoplay="{
                delay: 3000,
            }"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
            class="reviews__slider"
        >
            <swiper-slide v-for="item in slides" :key="item">
                <div class="reviews__slider-item">
                    <div class="reviews__slider-user">
                        <div class="reviews__slider-avatar">
                            <img :src="item.img" alt="Avatar" class="reviews__slider-avatart">
                        </div>
                        <div class="reviews__slider-info">
                            <h3 class="reviews__slider-name">{{ item.name }}</h3>
                            <div class="reviews__slider-star-container">
                                <span class="reviews__slider-star" :key="item">
                                    <Star />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="reviews__slider-content">
                        <p class="reviews__slider-text">{{ item.text }} </p>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
        <div class="reviews__slider-pagination-container">
            <div class="reviews__slider-pagination"></div>
        </div>
    </div>
</template>

<script>

import Star from '@/components/icons/index/reviews/Stars.vue';

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default {
    data: () => ({
        preview: 3,
        windowWidth: window.innerWidth,
        slides: [
            {
                "name": "Наргиза",
                "role": "студент курса «Веб-разработка»",
                "img":   require('@/assets/images/reviews/review4.webp'),
                "text": "Здесь я получаю качественное образование по доступной цене."
            },
            {
                "name": "Гульнор",
                "role": "студент курса «Разработка на Python»",
                "img": require('@/assets/images/reviews/review3.webp'),
                "text": "Мне нравится, как курсы интегрируют теорию с практическими заданиями"
            },
            {
                "name": "Шерзод",
                "role": "студент курса «UI/UX Дизайн»",
                "img": require('@/assets/images/reviews/review1.jpg'),
                "text": "«StartIT.uz даёт сильный старт. Здесь не просто учат, а готовят к реальной работе. Знания, которые я получил, уже помогают мне на собеседованиях!»"
            },
            {
                "name": "Саодат",
                "role": "студент курса «Data Science»",
                "img": require('@/assets/images/reviews/review2.webp'),
                "text": "Платформа позволяет мне учиться в своём темпе и в удобное для меня время."
            }
        ]
    }),

    components: {
      Swiper,
      SwiperSlide,
      Star
    },

    setup() {
        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log('slide change');
        };
        return {
            onSwiper,
            onSlideChange,
            modules: [Navigation, Pagination, Scrollbar, Autoplay, A11y],
        };
    },

    methods: {
        updateSizeWindow () {
            this.windowWidth = window.innerWidth;

            if (this.windowWidth > 1240) {
                this.preview = 3
            }

            if (this.windowWidth < 1240) {
                this.preview = 2
            }

            if (this.windowWidth < 760) {
                this.preview = 1
            }
        }
    },

    mounted () {
        const locale = this.$i18n.locale;
        const messages = this.$i18n.messages[locale].reviews;

        document.addEventListener('resize', this.updateSizeWindow());

        if (messages && Array.isArray(messages.slides)) {
            messages.slides.forEach((element, index) => {
                this.slides[index].name = element.name;
                this.slides[index].text = element.text;
            });
        } 
    }
};

</script>