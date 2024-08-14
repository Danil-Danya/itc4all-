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
                <div class="navbar__burgermenu" ref="burger" @click="toggleMoble">
                    <span class="navbar__burgermenu-line" ref="line" v-for="item in 3"></span>
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

export default {
    data: () => ({
        mobile: false,
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

    methods: {
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
    }
}

</script>