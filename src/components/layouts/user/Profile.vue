<template>
    <div class="user__profile">
        <div class="user__profile-avatar">
            <img src="@/assets/images/users/profile/profile.png" alt="Avatar" class="user__avatar-img" v-if="!getUser.avatar">
            <img :src="'https://api.startit.uz/images/' + getUser.avatar.path" alt="Avatar" class="user__avatar-img" v-else>
        </div>
        <div class="user__profile-data" v-if="getProfile.data">
            <h2 class="user__profile-title"> {{ getProfile.data.first_name }} {{ getProfile.data.last_name }} </h2>
            <p class="user__profile-role">{{ $t("profile.edite.role") }}</p>
        </div>
        <div class="user__profile-action">
            <router-link to="/user/profile-edite" class="user__profile-link">{{ $t("profile.edite.button") }}</router-link>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    computed: {
        ...mapGetters(['getProfile', 'getUser']),
    },

    methods: {
        ...mapActions(['fetchProfile', 'fetchUser']),
    },

    async mounted () {
        await this.fetchProfile();
        await this.fetchUser(this.getProfile.data.profile_id);

        console.log(this.getProfile);
        
    }
}

</script>