<template>
    <section class="navbar">
        <div class="container">
            <div class="navbar__container">
                <div class="nabnar__logo">
                    <router-link to="/">
                        <img src="@/assets/images/navbar/logo.svg" alt="Logo" class="logo navbar__logo">
                    </router-link>
                </div>
                <nav class="nav navbar__nav">
                    <ul class="navbar__nav-ul">
                        <li v-for="item in navbarLinks" :key="item">
                            <router-link :to="item.to" class="navbar__link">{{ item.text }}</router-link>
                        </li>
                    </ul>
                </nav>
                <div class="navbar__other">
                    <div class="navbar__login">
                        <ul class="navbar__login-ul">
                            <li v-for="item in registrationLinks" :key="item" class="navbar__login-link">
                                <router-link :to="item.to" class="navbar__link">{{ item.text }}</router-link>
                            </li>
                        </ul>   
                    </div>
                    <div class="navbar__locales">
                        <p class="navbar__text">Рус</p>
                        <span class="navbar__icon">
                            <Arrow />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

import Arrow from '@/components/icons/navbar/Arrow.vue';

export default {
    data: () => ({
        navbarLinks: [
            { 
                text: 'Главная',
                to: '/'
            },
            { 
                text: 'Курсы',
                to: '/courses'
            },
            { 
                text: 'Менторы',
                to: '/mentors'
            },
            { 
                text: 'События',
                to: '/events'
            },
            { 
                text: 'FAQ',
                to: '/faq'
            },
        ],
        registrationLinks: [
            {
                text: 'Войти',
                to: '/login'
            },
            {
                text: 'Регистрация',
                to: '/registration'
            },
        ]
    }),

    components: {
        Arrow
    }
}

</script>