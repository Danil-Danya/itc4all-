<template>
    <section class="courese">
        <div class="container">
            <div class="course__container">
                <h2 class="title course__title">Курсы</h2>
                <div class="course__content">
                    <CoureseCard v-for="item in 9"/>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import CoureseCard from './CourseCard.vue';

export default {
    components: {
        CoureseCard
    }
}

</script>