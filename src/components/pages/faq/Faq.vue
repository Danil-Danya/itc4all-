<template>
    <section class="faq">
        <div class="container">
            <div class="faq__container">
                <h2 class="title faq__title">{{ $t('faq.title') }}</h2>
                <div class="faq__content">
                    <FaqCard v-for="item in faqData" :question="item.question" :answer="item.text"/>
                </div>
            </div>
        </div>
    </section>
</template>


<script>
import FaqCard from './FaqCard.vue';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

export default {
    data: () => ({
        faqData: [
            { question: 'Курсы платные?', text: 'Да, все в мире просит денег.' },
            { question: 'Что такое платные видео-сессии через Zoom?', text: 'Это онлайн-мероприятия через Zoom, которые требуют оплаты.' },
            { question: 'Как зарегистрироваться на видео-сессию?', text: 'Зарегистрируйтесь на нашем сайте, выбрав нужную сессию и оплатив её.' },
            { question: 'Какие способы оплаты вы принимаете?', text: 'Мы принимаем карты, Payme и Click.' },
            { question: 'Нужно ли мне иметь аккаунт в Zoom для участия?', text: 'Нет, достаточно зарегистрироваться на нашем сайте.' },
            { question: 'Что делать, если я не могу подключиться к Zoom-сессии?', text: 'Проверьте интернет, перезагрузите устройство. Если проблема сохраняется, свяжитесь с поддержкой.' },
        ]
    }),
    components: {
        FaqCard
    },

    mounted () {
        const locale = this.$i18n.locale;
        this.faqData = this.$i18n.messages[locale].faq.questions

        gsap.fromTo('.faq__card', {
            y: 300,
            opacity: 0,
        },{
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 1,
            scrollTrigger: {
                trigger: '.faq__container',
                start: 'top 80%',
                end: 'bottom 80%',
                scrub: 0.5,
            }
        });

        if (window.clientWidth < 950) {
            gsap.fromTo(item, {
                y: 50,
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
    }
}

</script>