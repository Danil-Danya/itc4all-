<template>
    <div class="user__profile">
        <div class="user__profile-avatar">
            <img src="@/assets/images/users/profile/profile.png" alt="Avatar" class="user__avatar-img">
        </div>
        <div class="user__profile-data" v-if="getProfile.data">
            <h2 class="user__profile-title"> {{ getProfile.data.first_name }} {{ getProfile.data.last_name }} </h2>
            <p class="user__profile-role">Student</p>
        </div>
        <div class="user__profile-action">
            <router-link to="/user/profile-edite" class="user__profile-link">Изменить профиль</router-link>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    computed: {
        ...mapGetters(['getProfile'])
    },

    methods: {
        ...mapActions(['fetchProfile'])
    },

    async mounted () {
        await this.fetchProfile();

        console.log(this.getProfile);
        
    }
}

</script>