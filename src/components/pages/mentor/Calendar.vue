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
            />
            <div class="mentor__button">
                <form id="form-payme" class="mentor__form" method="POST" action="https://checkout.paycom.uz/">
                    <input type="hidden" name="merchant" value="66e5b04e8cc73123c0128fd2">
                    <input type="hidden" name="account[user_email]" value="danil.snip@gmail.com">
                    <input type="hidden" name="account[user_name]" value="Данил Сабитов">
                    <input type="hidden" name="account[product_name]" value="Учебная сессия в зуме с Xikmatilla Alaberganov">
                    <input type="hidden" name="account[product_id]" value="2">
                    <input type="hidden" name="account[product_type]" value="ZOOM_SESSION">
                    <input type="hidden" name="account[start_time]" value="2024-10-15T14:30:00Z">
                    <input type="hidden" name="account[duration]" value="60">
                    <input type="hidden" name="amount" value="100000">
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

export default {
    components: {
        VueDatePicker,
    },
    
    data () {
        return {
            date: null,
        };
    },

    mounted () {
        Paycom.Button('#form-payme', '#button-container');

        this.$nextTick(() => {
            this.$refs.datepicker.toggleMenu();
        })
    },
};
</script>
