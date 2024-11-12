<template>
    <section class="header__section">
        <div class="container">
            <div class="header__content">
                <div class="header__left">
                    <h1 
                        ref="headerTitle" 
                        class="header__title" 
                        data-speed="0.8">
                    </h1>
                </div>
                <div class="header__right">
                    <img src="@/assets/images/index/header/header.png" data-speed="1.2" alt="Header" class="header__image">
                </div>
                <div class="header__animate">
                    <div :class="`header__animate-${item}`" v-for="item in 4" :key="item"></div>
                </div>
            </div>
        </div>
    </section>
</template>


<script>

import gsap from 'gsap';

export default {
    data: () => ({
        titles: [
            'Отобранные курсы с лучшими преподавателями',
            'С нами изучите IT и увидите свою карьеру',
            'Личные занятия по Zoom с нашими преподавателями'
        ],
        currentIndex: 0
    }),
    mounted() {
        this.animateTitles();
    },
    methods: {
        animateTitles() {
            const titleElement = this.$refs.headerTitle;
            const timeline = gsap.timeline({ repeat: -1, delay: 0 });

            this.titles.forEach((title, index) => {
                timeline.to(titleElement, {
                    opacity: 0,
                    duration: 0.5,
                    onComplete: () => {
                        titleElement.innerHTML = this.titles[index];
                    }
                }).to(titleElement, {
                    opacity: 1,
                    duration: 0.5
                }).to({}, {
                    duration: 1,
                });
            });

            timeline.play();
        }
    }
}


</script>