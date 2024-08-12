<template>
    <section class="footer-section">
        <div class="footer__container">
            <div class="container">
                <div class="footer__content">
                    <div class="footer__logo">
                        <router-link to="/">
                            <img src="@/assets/images/footer/logo.svg" alt="Logo" class="footer__logo-img">
                        </router-link>
                    </div>
                    <div class="footer__item" v-for="item in footerData" :key="item">
                        <div class="footer__item-container-title">
                            <h3 class="footer__item-title">{{ item.title }}</h3>
                        </div>
                        <div class="footer__item-content" v-for="content in item.links" :key="content">
                            <span class="footer__icon" v-if="content.icon">
                                <component :is="content.icon" />
                            </span>
                            <router-link :to="content.link" class="footer__item-link">{{ content.text }}</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

import Phone from '@/components/icons/footer/Phone.vue';
import Location from '@/components/icons/footer/Location.vue';
import Email from '@/components/icons/footer/Email.vue';

export default {
    data: () => ({
        footerData: [
            {
                title: 'Меню сайта',
                links: [
                    {
                        text: 'Домой',
                        link: '/'
                    },
                    {
                        text: 'Курсы',
                        link: '/courses'
                    },
                    {
                        text: 'Менторы',
                        link: '/mentors'
                    },
                    {
                        text: 'События',
                        link: '/events'
                    },
                    {
                        text: 'FAQ',
                        link: '/faq'
                    },
                ],
            },
            {
                title: 'Регистрация на сайте',
                links: [
                    {
                        text: 'Войти',
                        link: '/login'
                    },
                    {
                        text: 'Регистрация',
                        link: '/registration'
                    },
                ]
            },
            {
                title: 'Контакты',
                links: [
                    {
                        text: '+998 (33) 999 99 99',
                        icon: 'Phone',
                        link: 'tel:+998339999999'
                    },
                    {
                        text: 'itc4allcompany@gmail.com',
                        icon: 'Email',
                        link: 'mailto:itc4allcompany@gmail.com'
                    },
                    {
                        text: 'Узбекистан, г. Ташкент, ул Тест, 68A',
                        icon: 'Location',
                        link: 'https://maps.app.goo.gl/EZdHKLT9jytN43pG8'
                    },
                ]
            },
        ]
    }),

    components: {
        Phone,
        Location,
        Email
    }
}

</script>