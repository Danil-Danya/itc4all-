<template>
    <section class="login">
        <transition name="modal">
            <RegistrationModal v-if="modal"/>
        </transition>
        <div class="container">
            <div class="login__container">
                <div class="login__logo">
                    <router-link to="/">
                        <img src="@/assets/images/login/logo.svg" alt="Logo" class="login__logo-img">
                    </router-link>
                </div>
                <form class="login__form login__form-registr" @submit.prevent="registration">
                    <h2 class="login__title">{{ $t('registration.registration') }}</h2>
                    <div class="login__form-container">
                        <div class="login__input-container">
                            <label class="login__label">{{ $t('registration.email') }}</label>
                            <input type="email" class="login__input" v-model="email">
                            <!-- <p v-if="v$.$dirty || !v$.email.required" class="login__message">Почта обязательна</p>
                            <p v-else-if="v$.$dirty || !v$.email.email" class="login__message">Неверный формат почты</p> -->
                        </div>
                        <div class="login__input-container">
                            <label class="login__label">{{ $t('registration.password') }}</label>
                            <input type="password" class="login__input" v-model="password">
                            <!-- <p v-if="v$.$dirty || !v$.password.required" class="login__message">Пароль обязателен</p>
                            <p v-else-if="v$.$dirty || !v$.password.minLength" class="login__message">Пароль должен содержать минимум 8 символов</p> -->
                        </div>
                        <div class="login__input-container">
                            <label class="login__label">{{ $t('registration.firstName') }}</label>
                            <input type="text" class="login__input" v-model="first_name">
                            <!-- <p v-if="v$.$dirty || !v$.first_name.required" class="login__message">Имя обязательно</p> -->
                        </div>
                        <div class="login__input-container">
                            <label class="login__label">{{ $t('registration.lastName') }}</label>
                            <input type="text" class="login__input" v-model="last_name">
                            <!-- <p v-if="v$.$dirty || !v$.last_name.required" class="login__message">Фамилия обязательна</p> -->
                        </div>
                    </div>
                    <button class="login__button login__button-registr" @click="registration">{{ $t('registration.registration') }}</button>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
import RegistrationModal from '@/components/modals/RegistrationModal.vue';
import { registration } from '@/api/axios';
import { useVuelidate } from '@vuelidate/core';
import { required, email, minLength } from '@vuelidate/validators';

export default {
    data() {
        return {
            email: '',
            password: '',
            first_name: '',
            last_name: '',
            modal: false
        };
    },

    setup() {
        const v$ = useVuelidate();
        return { v$ };
    },

    validations() {
        return {
            email: {
                required,
                email
            },
            password: {
                required,
                minLength: minLength(8)
            },
            first_name: {
                required
            },
            last_name: {
                required
            }
        };
    },

    methods: {
        async registration () {
            this.v$.$touch();  

            if (!this.v$.$invalid) {
                const { email, password, first_name, last_name } = this;
                const response = await registration({ email, password, first_name, last_name });

                if (response.success) {
                    this.modal = true;
                }
            }
        }
    },

    components: {
        RegistrationModal
    }
};
</script>
