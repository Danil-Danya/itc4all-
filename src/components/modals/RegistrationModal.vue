<template>
    <section class="modal">
        <div class="modal__container">
            <div class="modal__content">
                <h2 class="modal__title">Подтверждение регистрации</h2>
                <span class="modal__line"></span>
                <div class="modal__text">
                    <p>Для завершения регистрации, пожалуйста, проверьте вашу электронную почту и перейдите по ссылке в письме для подтверждения вашего аккаунта.</p>
                    <p style="margin-top: 20px;">Если вы не видите письмо, пожалуйста, проверьте папку <strong>"Спам"</strong>.</p>
                    <p>После подтверждения, вы сможете войти в свой аккаунт или нажать кнопку продолжить для проверки верификации.</p>
                </div>
                <div class="modal__error" v-if="message">
                    <p class="modal__error-message">Данный пользователь не был верифицирован, пожалуйста, проследуйте инструкции выше!</p>
                </div>
                <button class="modal__button" @click.prevent="checkToContinue">Продолжить</button>
            </div>
        </div>
    </section>
</template>


<script>

import { profile } from '@/api/axios';

export default {
    data: () => ({
        message: false
    }),

    methods: {
        async checkToContinue () {
            const response = await profile();
            console.log(response);
            
            if (response.status !== 200) {
                this.message = true;
            } 
            else {
                this.$router.replace({ path: '/user/profile' });
            }
        }
    }
}

</script>
