<template>
    <section class="mentor">
        <div class="container">
            <div class="mentor__container">
                <h2 class="title mentor__title">Менторы</h2>
                <div class="mentor__content">
                    <MentorCard v-for=" item in 10"/>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

import MentorCard from './MentorCard.vue';

export default {
    components: {
        MentorCard
    }
}

</script>