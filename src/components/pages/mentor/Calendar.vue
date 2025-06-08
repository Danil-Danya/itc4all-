<template>
    <div class="mentor__calendar">
        <div class="mentor__calendar-component">
            <h2 class="mentor__calendar-title">Заказать сессию в Zoom с ментором</h2>

            <VueDatePicker 
                v-model="date" 
                :inline="true" 
                :auto-close="false"  
                locale="ru"  
                selectText="Выбрать"
                :enable-time-picker="true"
                ref="datepicker"
            />

            <div class="mentor__button" v-if="profile && mentor">
                <form id="form-payme" class="mentor__form" method="POST" action="https://checkout.paycom.uz/">
                    <input type="hidden" name="merchant" value="66e5b04e8cc73123c0128fd2">
                    <input type="hidden" name="account[user_email]" :value="profile.email">
                    <input type="hidden" name="account[user_name]" :value="profile.first_name + ' ' + profile.last_name">
                    <input type="hidden" name="account[product_name]" :value="'Zoom sessiya ' + mentor.first_name + ' ' + mentor.last_name">
                    <input type="hidden" name="account[product_id]" :value="+$route.query.mentor_id">
                    <input type="hidden" name="account[product_type]" value="ZOOM_SESSION">
                    <input type="hidden" name="account[start_time]" :value="formattedStartTime">
                    <input type="hidden" name="account[duration]" value="60">
                    <input type="hidden" name="amount" :value="mentor.price * 100">
                    <input type="hidden" name="account[product_uuid]" value="4vme4f0b-8c1d-4a2b-9c3d-5f7e6a0e8b1d">
                    <input type="hidden" name="account[UUID]" value="V4">
                    <input type="hidden" name="account[product_timestamp]" :value="Date.now()">
                    <input type="hidden" name="lang" value="ru">
                    <input type="hidden" name="button" data-type="svg" value="colored">
                    <div id="button-container"></div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

import { mapActions, mapGetters } from 'vuex';

export default {
    components: {
        VueDatePicker,
    },

    data: () => ({
        date: null,
        pageLoadTime: new Date(),
        profile: null,
        mentor: null,
    }),

    computed: {
        formattedStartTime() {
            const dateToUse = this.date || this.pageLoadTime;
            return new Date(dateToUse).toISOString();
        },

        ...mapGetters([
            'getProfile',
            'getMentor',
        ])
    },

    methods: {
        ...mapActions([
            'fetchProfile',
            'fetchMentor',
        ]),
    },

    async mounted () {
        await this.fetchProfile();
        await this.fetchMentor(this.$route.query.mentor_id);
        
        this.profile = this.getProfile.data;
        this.mentor = this.getMentor;

        console.log(this.mentor.price * 100);
        console.log(this.profile);
        

        this.$nextTick(() => {
            this.$refs?.datepicker?.toggleMenu?.();
        });

        setTimeout(() => {
            Paycom.Button('#form-payme', '#button-container');
        }, 1000);
    },

    watch: {
        date() {
            this.$nextTick(() => {
            Paycom.Button('#form-payme', '#button-container');
            });
        }
    }

};
</script>
