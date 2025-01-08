<template>
    <section class="about">
        <div class="container">
            <div class="about__container">
                <h2 class="title about__title">{{ $t('about.title') }}</h2>
                <div class="about__content">
                    <div class="about__left">
                        <h3 class="about__left-title">{{ $t('about.subtitleLeft') }}</h3>
                        <div class="about__item" v-for="item in aboutPluses" :key="item">
                            <span class="about__icon">
                                <Upruvment />
                            </span>
                            <p class="about__text">{{ item }}</p>
                        </div>
                    </div>
                    <div class="about__right">
                        <h3 class="about__right-title">{{ $t('about.subtitleRight') }}</h3>
                        <div class="about__item" v-for="item in abutMinuses" :key="item">
                            <span class="about__icon">
                                <Inpruvment />
                            </span>
                            <p class="about__text about__text-inactive">{{ item }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

import Upruvment from '@/components/icons/index/about/Upruvment.vue';
import Inpruvment from '@/components/icons/index/about/Inpruvment.vue';

export default {
    data: () => ({
        aboutPluses: [
            'Вы не хотите учиться в одиночку. Вы хотите стать частью сообщества единомышленников, которые работают вместе и помогают друг другу строить карьеру своей мечты.',
            'Вы не хотите учиться в одиночку. Вы хотите стать частью сообщества единомышленников, которые работают вместе и помогают друг другу строить карьеру своей мечты.',
            'Вы не хотите учиться в одиночку. Вы хотите стать частью сообщества единомышленников, которые работают вместе и помогают друг другу строить карьеру своей мечты.',
            'Вы не хотите учиться в одиночку. Вы хотите стать частью сообщества единомышленников, которые работают вместе и помогают друг другу строить карьеру своей мечты.',
        ],
        abutMinuses: [
            'Вы не хотите учиться в одиночку. Вы хотите стать частью сообщества единомышленников, которые работают вместе и помогают друг другу строить карьеру своей мечты.',
            'Вы не хотите учиться в одиночку. Вы хотите стать частью сообщества единомышленников, которые работают вместе и помогают друг другу строить карьеру своей мечты.',
            'Вы не хотите учиться в одиночку. Вы хотите стать частью сообщества единомышленников, которые работают вместе и помогают друг другу строить карьеру своей мечты.',
            'Вы не хотите учиться в одиночку. Вы хотите стать частью сообщества единомышленников, которые работают вместе и помогают друг другу строить карьеру своей мечты.',
        ]
    }),

    components: {
        Inpruvment,
        Upruvment
    },

    mounted () {
        const locale = this.$i18n.locale;

        this.aboutPluses = this.$i18n.messages[locale].about.left;
        this.abutMinuses = this.$i18n.messages[locale].about.right;
    }
}

</script>