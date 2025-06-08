<template>
    <div class="profile__edite-container-form">
        <div class="profile__edite-list">
            <h2 class="profile__edite-title">{{ $t('profile.edite.page.title') }}</h2>
        </div>
        <form action="" class="profile__edite-form">
            <div class="profile__edite-input-container">
                <div class="profile__edite-input-block">
                    <label for="" class="profile__edite-label">{{ $t('profile.edite.page.city') }}</label>
                    <input type="text" class="profile__edite-input" placeholder="Tahskent" v-model="city">
                </div>
                <div class="profile__edite-input-block">
                    <label for="" class="profile__edite-label">{{ $t('profile.edite.page.country') }}</label>
                    <input type="text" class="profile__edite-input" placeholder="Uzbekistan" v-model="country">
                </div>
            </div>
            <div class="profile__edite-input-container">
                <div class="profile__edite-input-block">
                    <label for="" class="profile__edite-label">{{ $t('profile.edite.page.email') }}</label>
                    <input type="text" class="profile__edite-input" placeholder="nigina@email.com" v-model="email">
                </div>
                <div class="profile__edite-input-block">
                    <label for="" class="profile__edite-label">{{ $t('profile.edite.page.password') }}</label>
                    <input type="text" class="profile__edite-input" placeholder="qwertyqQW123" v-model="password">
                </div>
            </div>
            <button @click.prevent="editeProfile" class="profile__upload-button">{{ $t('profile.edite.page.update') }}</button>
        </form>
    </div>
</template>

<script>
import { editedProfile } from '@/api/axios.js';
import { mapGetters } from 'vuex';

export default {
    data: () => ({
        firstName: '',
        lastName: '',
        city: '',
        country: '',
        email: '',
        password: ''
    }),

    computed: {
        ...mapGetters(['getProfile']),
    },

    methods: {
        async editeProfile () {
            const body = {
                first_name: this.getProfile.data.first_name,
                last_name:  this.getProfile.data.last_name,
                city: this.city,
                country: this.country,
                email: this.email,
                password: this.password
            }

            const editeProfile = await editedProfile(this.getProfile.data.id, body);

            if (editeProfile.status === 200) {
                location.reload();
            } 
        },
    }
}
</script>