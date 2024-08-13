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
            <swiper-slide v-for="item in 9" :key="item">
                <div class="reviews__slider-item">
                    <div class="reviews__slider-user">
                        <div class="reviews__slider-avatar">
                            <img src="@/assets/images/index/reviews/user.png" alt="Avatar" class="reviews__slider-avatart">
                        </div>
                        <div class="reviews__slider-info">
                            <h3 class="reviews__slider-name">Умид</h3>
                            <div class="reviews__slider-star-container">
                                <span class="reviews__slider-star" :key="item">
                                    <Star />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="reviews__slider-content">
                        <p class="reviews__slider-text">Допустим лучшие курсы во всем мире </p>
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
        windowWidth: window.innerWidth
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
        this.updateSizeWindow();
        window.addEventListener('resize', this.updateSizeWindow())
    }
};

</script>