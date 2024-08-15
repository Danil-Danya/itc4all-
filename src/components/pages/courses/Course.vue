<template>
    <section class="courese">
        <div class="container">
            <div class="course__container">
                <h2 class="title course__title">Курсы</h2>
                <div class="course__content">
                    <CoureseCard v-for="item in 9"/>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import CoureseCard from './CourseCard.vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

export default {
    components: {
        CoureseCard
    },

    mounted () {
        this.$nextTick(() => {
            gsap.fromTo('.course__card', {
                y: 300,
                opacity: 0,
            },{
                y: 0,
                opacity: 1,
                duration: 0.5,
                stagger: 1,
                scrollTrigger: {
                    trigger: '.course__container',
                    start: 'top 80%',
                    end: 'bottom 80%',
                    scrub: false,
                }
            });
    
            if (window.clientWidth < 950) {
                gsap.fromTo(item, {
                    y: 100,
                    opacity: 0,
                }, {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 1,
                    scrollTrigger: {
                        trigger: trigger,
                        start: 'top 80%',
                        end: 'bottom 80%',
                        scrub: 4,
                    }
                });
            }
        })
    }
}

</script>