<template>
    <section class="profile">
        <div class="profile__container">
            <h2 class="profile__title">{{ $t("profile.title") }}</h2>
            <div class="profile__container-course">
                <div class="profile__course-item" v-for="course in filteredCourses" :key="course" v-if="filteredCourses.length">
                    <router-link :to="`/course/${course.id}`" class="profile__course-link">
                        <ProfileCourseCard :course="course" />
                    </router-link>
                </div>
                <p class="profile__message" v-else>{{ $t("profile.message") }}</p>
            </div>
        </div>
    </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import ProfileCourseCard from './ProfileCourseCard.vue';

export default {
    data: () => ({
        courses: [],
        profile: {},
        transactions: [],
        filteredCourses: [],
    }),

    components: {
        ProfileCourseCard
    },

    computed: {
        ...mapGetters([
            'getCourses',
            'getProfile',
            'getTransactions',
        ]),
    },

    methods: {
        ...mapActions([
            'fetchCourses',
            'fetchProfile',
            'fetchTransactions',
        ]),

        async getFullDataFromApi () {
            await this.fetchCourses();
            await this.fetchProfile();
            await this.fetchTransactions();

            
            this.transactions = this.getTransactions?.rows || [];
            this.courses = this.getCourses?.rows || [];
            this.profile = this.getProfile.data || {};
            
            this.filterCoursesByUser();

            console.log(this.filteredCourses);
            
        },

        filterCoursesByUser() {
            if (!this.profile || !this.transactions.length || !this.courses.length) return;

            const userPayments = this.transactions.filter(
                tx => tx.user_first_name === this.profile.first_name && tx.user_last_name === this.profile.last_name
            );

            const paidCourseNames = userPayments.map(tx => tx.product_name);

            this.filteredCourses = this.courses.filter(
                course => paidCourseNames.includes(course.name)
            );
        }

    },

    async mounted() {
        await this.getFullDataFromApi();
    },
}

</script>