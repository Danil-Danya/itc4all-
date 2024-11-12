<template>
    <section class="profile">
        <div class="profile__container">
            <h2 class="profile__title">Ваши курсы</h2>
            <div class="profile__container-course">
                <!-- <div class="profile__course-item" v-for="course in test" :key="course">
                    <ProfileCourseCard :course="course" />
                </div> -->
                <p class="profile__message">На данный момент вы пока не покупали курсы</p>
            </div>
        </div>
    </section>
</template>

<script>
import ProfileCourseCard from './ProfileCourseCard.vue';

export default {
    data: () => ({
        
    }),

    components: {
        ProfileCourseCard
    }
}

</script>