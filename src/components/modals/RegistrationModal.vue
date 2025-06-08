<template>
    <section class="modal">
        <div class="modal__container">
            <div class="modal__content">
                <h2 class="modal__title">{{ $t('registrationConfirmation.title') }}</h2>
                <div class="modal__text">
                    <p>{{ $t('registrationConfirmation.text1') }}</p>
                    <p style="margin-top: 20px;">{{ $t('registrationConfirmation.text2') }}</p>
                    <p>{{ $t('registrationConfirmation.text3') }}</p>
                </div>
                <div class="modal__error" v-if="message">
                    <p class="modal__error-message">{{ $t('registrationConfirmation.errorMessage') }}</p>
                </div>
                <button class="modal__button" @click.prevent="checkToContinue">{{ $t('registrationConfirmation.button') }}</button>
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
