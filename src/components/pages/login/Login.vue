<template>
    <section class="login">
        <div class="container">
            <div class="login__container">
                <div class="login__logo">
                    <router-link to="/">
                        <img src="@/assets/images/login/logo.svg" alt="Logo" class="login__logo-img">
                    </router-link>
                </div>
                <form class="login__form">
                    <h2 class="login__title">{{ $t('login.login') }}</h2>
                    <div class="login__form-container">
                        <div class="login__input-container">
                            <label for="" class="login__label">{{ $t('login.email') }}</label>
                            <input type="email" class="login__input" v-model="email">
                            <p class="login__message"></p>
                        </div>
                        <div class="login__input-container">
                            <label for="" class="login__label">{{ $t('login.password') }}</label>
                            <input type="password" class="login__input" v-model="password">
                            <p class="login__message"></p>
                        </div>
                    </div>
                    <button class="login__button" @click.prevent="login">Войти</button>
                </form>
            </div>
        </div>
    </section>
</template>

<script>

import { login } from '@/api/axios';

export default {
    methods: {
        async login () {
            const { email, password } = this;
            await login({ email, password });

            if (localStorage.getItem('access_token')) {
                this.$router.replace({ path: '/user/profile' })
            }
        }
    }
}

</script>