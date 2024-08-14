<template>
    <div class="navbar__mobile">
        <div class="navbar__mobile-container">
            <nav class="navbar__mobile-nav">
                <ul class="navbar__mobile-ul">
                    <li v-for="link in navbarLinks" :key="link" @click="toggleMoble">
                        <router-link :to="link.to" class="navbar__mobile-link">{{link.text}}</router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
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

    methods: {
        toggleMoble () {
            this.$emit('toggleMoble')
        }
    }
}

</script>