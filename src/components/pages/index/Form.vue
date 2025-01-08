<template>
    <section class="form">
        <div class="container">
            <div class="form__container">
                <h2 class="title title-white form__title">{{ $t('form.title') }}</h2>
                <div class="form__content">
                    <div class="form__left">
                        <img src="@/assets/images/index/form/form.png" alt="Form" class="form__image">
                    </div>
                    <div class="form__right">
                        <form action="" class="form__form">
                            <input type="text" class="form__input" :placeholder="$t('form.inputName')" v-model="name">
                            <input type="tel" class="form__input" placeholder="+998 (90) 000 00 00" v-model="phone">
                            <textarea class="form__textarea" cols="30" rows="10" :placeholder="$t('form.inputMessage')" v-model="message"></textarea>
                            <button class="form__button" @click.prevent="sendRequesToServer">{{ $t('form.button') }}</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script>

import { sendRequest } from '@/api/axios';

export default {
    methods: {
        async sendRequesToServer () {
            await sendRequest(this.name, this.phone, this.message);
        }
    }
}

</script>