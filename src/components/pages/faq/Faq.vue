<template>
    <section class="faq">
        <div class="container">
            <div class="faq__container">
                <h2 class="title faq__title">FAQ</h2>
                <div class="faq__content">
                    <FaqCard v-for="item in faqData" :question="item.question" :answer="item.text"/>
                </div>
            </div>
        </div>
    </section>
</template>


<script>
import FaqCard from './FaqCard.vue';

export default {
    data: () => ({
        faqData: [
            { question: 'Курсы платные?', text: 'Да, все в мире просит денег.' },
            { question: 'Что такое платные видео-сессии через Zoom?', text: 'Это онлайн-мероприятия через Zoom, которые требуют оплаты.' },
            { question: 'Как зарегистрироваться на видео-сессию?', text: 'Зарегистрируйтесь на нашем сайте, выбрав нужную сессию и оплатив её.' },
            { question: 'Какие способы оплаты вы принимаете?', text: 'Мы принимаем карты, Payme и Click.' },
            { question: 'Нужно ли мне иметь аккаунт в Zoom для участия?', text: 'Нет, достаточно зарегистрироваться на нашем сайте.' },
            { question: 'Что делать, если я не могу подключиться к Zoom-сессии?', text: 'Проверьте интернет, перезагрузите устройство. Если проблема сохраняется, свяжитесь с поддержкой.' },
        ]
    }),
    components: {
        FaqCard
    }
}

</script>