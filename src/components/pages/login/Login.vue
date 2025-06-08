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
                    <p class="message">{{ message }}</p>
                    <button class="login__button" @click.prevent="login">{{ $t('login.login') }}</button>
                </form>
            </div>
        </div>
    </section>
</template>

<script>

import { login } from '@/api/axios';

export default {
    data: () => ({
        email: '',
        password: '',
        message: ''
    }),

    methods: {
        async login () {
            try {
                const { email, password } = this;
                const loginResponse = await login({ email, password });
    
                if (localStorage.getItem('access_token') && loginResponse.status === 200) {
                    this.$router.replace({ path: '/user/profile' })
                }
                else {
                    console.log(111);
                    
                    switch (localStorage.getItem('locale')) {
                        case 'Рус':
                            this.message = 'Неверный логин или пароль';
                            break;
                        case 'Eng':
                            this.message = 'Invalid login or password';
                            break;
                        case 'Uzb':
                            this.message = 'Noto\'t login yoki parol';
                            break;
                    }
                }
            }
            catch (error) {
                console.error('Error during login:', error);
            }
        }
    }
}

</script>