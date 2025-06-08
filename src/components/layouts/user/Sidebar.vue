<template>
    <section class="sidebar" :class="activeBar ? 'sidebar-active' : null">
        <div class="sidebar__content">
            <div class="sidebar__logo-container">
                <router-link to="/">
                    <img src="@/assets/images/sidebar/logo.svg" alt="Logo" class="sidebar__logo">
                </router-link>
                <div class="sidebar__mobile">
                    <div class="sidebar__burger-menu" @click="toggleFullBar">
                        <div class="sidebar__burger-line" :class="activeBurger ? 'sidebar__burger-line-active' : null" v-for="item in 3" :key="item"></div>
                    </div>
                </div>
            </div>
            <ul class="sidebar__list" v-if="activeBar">
                <li v-for="link in links" :key="link">
                    <router-link :to="link.path" class="sidebar__link" :class="$route.path === link.path ? 'sidebar__link-active' : null" @click="logout(link, $event)">
                        <span class="sidebar__icon">
                            <component :is="link.icon" />
                        </span>
                        <p class="sidebar__link-text">{{ link.text }}</p>
                    </router-link>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>

import Home from '@/components/icons/sidebar/Home.vue';
import Logout from '@/components/icons/sidebar/Logout.vue';
import Meeting from '@/components/icons/sidebar/Meeting.vue';
import Payment from '@/components/icons/sidebar/Payment.vue';
import Profile from '@/components/icons/sidebar/Profile.vue';

export default {
    data: () => ({
        activeBurger: false,
        activeBar: false,
        langs: ['Рус', 'Eng', 'Uzb'],
        locales: ['rus', 'eng', 'uzb'],
        links: [
            {
                path: '/user/profile',
                text: 'Домашняя',
                icon: Home,
            },
            {
                path: '/courses',
                text: 'Курсы',
                icon: Payment,
            },
            {
                path: '/user/sessions',
                text: 'Zoom сессии',
                icon: Meeting,
            },
            {
                path: '/user/profile-edite',
                text: 'Редактировать профиль',
                icon: Profile,
            },
            {
                path: '/login',
                text: 'Выход',
                icon: Logout,
            },
        ]
    }),

    methods: {
        toggleFullBar () {
            this.activeBurger = !this.activeBurger;
            this.activeBar = !this.activeBar;
        },

        logout (link, event) {
            if (link.path === '/login') {
                event.preventDefault();

                localStorage.removeItem('access_token');
                this.$router.replace({ path: '/login' });
            }
        }
    },

    mounted () {
        if (window.innerWidth > 1000) {
            this.activeBar = true;
        }

        const locale = localStorage.getItem('locale');

        for (let i = 0; i < this.langs.length; i++) {
            if (this.langs[i] === locale) {
                this.links = this.$i18n.messages[this.locales[i]].sidebar.links;
                this.$i18n.locale = this.locales[i];
            }
        }
    }
}

</script>