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
                    <div class="navbar__login" v-if="getProfile.status !== 200">
                        <ul class="navbar__login-ul">
                            <li v-for="item in registrationLinks" :key="item" class="navbar__login-link">
                                <router-link :to="item.to" class="navbar__link">{{ item.text }}</router-link>
                            </li>
                        </ul>   
                    </div>
                    <div class="navbar__locales-container" @click="toggleLangs">
                        <div class="navbar__locales">
                            <p class="navbar__text">{{ locale }}</p>
                            <span class="navbar__icon" ref="icon">
                                <Arrow />
                            </span>
                        </div>
                        <Transition name="bounce" duration="190">
                            <div class="navbar__locales-dropdown" v-show="lang">
                                <ul class="navbar__locales-list">
                                    <li v-for="(lang, index) in langs" :key="lang" @click="selectLang(index)">
                                        <p class="navbar__text navbar__locales-button">{{ lang }}</p>
                                    </li>
                                </ul>
                            </div>
                        </Transition>
                    </div>
                </div>
                <div class="navbar__burgermenu" ref="burger" @click="toggleMoble">
                    <span class="navbar__burgermenu-line" ref="line" v-for="item in 3" :key="item"></span>
                </div>
                <transition name="navbar">
                    <MobileNavbar @toggleMoble="toggleMoble" v-show="mobile"/>
                </transition>
            </div>
        </div>
    </section>
</template>

<script>

import Arrow from '@/components/icons/navbar/Arrow.vue';
import MobileNavbar from './MobileNavbar.vue';

import { mapGetters, mapActions } from 'vuex';

export default {
    data: () => ({
        mobile: false,
        lang: false,
        langs: ['Рус', 'Eng', 'Uzb'],
        locales: ['rus', 'eng', 'uzb'],
        locale: 'Рус',
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
        Arrow,
        MobileNavbar
    },

    computed: {
        ...mapGetters(['getProfile'])
    },

    methods: {
        ...mapActions(['fetchProfile']),

        toggleLangs () {
            this.lang = !this.lang;

            const icon = this.$refs.icon;
            if (this.lang) 
                icon.style.transform = 'rotate(180deg)';
            else 
                icon.style.transform = 'rotate(0deg)';
        },

        selectLang (index) {
            localStorage.setItem('locale', this.langs[index]);

            this.locale = this.langs[index];
            this.$i18n.locale = this.locales[index];

            location.reload();
        },

        toggleMoble () {
            this.mobile = !this.mobile;

            const { line, burger } = this.$refs;

            if (this.mobile) {
                line[0].style.transform = 'rotate(45deg)';
                line[2].style.transform = 'rotate(-45deg)';

                line[0].style.position = 'absolute';
                line[2].style.position = 'absolute';

                line[1].style.display = 'none';

                
                burger.classList.add('navbar__burgermenu-active');
            }
            else {
                line[0].style.transform = 'rotate(0)';
                line[2].style.transform = 'rotate(0)';

                line[0].style.position = 'relative';
                line[2].style.position = 'relative';

                line[1].style.display = 'block';

                
                burger.classList.remove('navbar__burgermenu-active');
            }
        }
    },

    async mounted () {
        const lang = localStorage.getItem('locale');

        if (!lang) {
            localStorage.setItem('locale', 'Рус');
            localStorage.setItem('lang', this.langs);
        }

        if (lang === this.langs[0]) {
            const messages = this.$i18n.messages['rus'];
            this.$i18n.locale = 'rus';

            this.navbarLinks = this.navbarLinks.map((link, index) => {
                return {
                    to: link.to,
                    text: messages.navbar.navigation[index]
                }
            })

            this.registrationLinks = this.registrationLinks.map((link, index) => {
                return {
                    to: link.to,
                    text: messages.navbar.authorization[index]
                }
            })
        }

        if (lang === this.langs[1]) {
            const messages = this.$i18n.messages['eng'];
            this.$i18n.locale = 'eng';

            this.navbarLinks = this.navbarLinks.map((link, index) => {
                return {
                    to: link.to,
                    text: messages.navbar.navigation[index]
                }
            })

            this.registrationLinks = this.registrationLinks.map((link, index) => {
                return {
                    to: link.to,
                    text: messages.navbar.authorization[index]
                }
            })
        }

        if (lang === this.langs[2]) {
            const messages = this.$i18n.messages['uzb'];
            this.$i18n.locale = 'uzb';

            this.navbarLinks = this.navbarLinks.map((link, index) => {
                return {
                    to: link.to,
                    text: messages.navbar.navigation[index]
                }
            })

            this.registrationLinks = this.registrationLinks.map((link, index) => {
                return {
                    to: link.to,
                    text: messages.navbar.authorization[index]
                }
            })
        }

        await this.fetchProfile();
        if (this.getProfile.status === 200) {
            this.navbarLinks.push({
                text: this.$i18n.locale === 'rus'
                ? 'Профиль'
                : this.$i18n.locale === 'eng'
                    ? 'Profile'
                    : 'Profil',
                to: '/user/profile'
            })
        }
    }
}

</script>