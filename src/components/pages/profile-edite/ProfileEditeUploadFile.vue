<template>
    <div class="profile__upload">
        <div class="profile__upload-avatar">
            <img :src="avatarUrl" alt="Avatar" class="profile__upload-avatar-img">
        </div>
        <form class="profile__upload-form">
            <div class="profile__upload-zone">
                <span class="profile__upload-icon">
                    <Upload />
                </span>
                <input type="file" @change="onFileSelected" class="profile__upload-input">
                <h2 class="profile__upload-title">{{ $t('profile.edite.page.upload') }}</h2>
                <p class="profile__upload-text">{{ $t('profile.edite.page.uploadMessage') }}</p>
            </div>
            <button @click.prevent="uploadAvatar" class="profile__upload-button">{{ $t('profile.edite.page.update') }}</button>
        </form>
    </div>
</template>

<script>
import Upload from '@/components/icons/upload/Upload.vue';
import { updateUserAvatar } from '@/api/axios.js'; // Импортируем метод для загрузки

import { mapActions, mapGetters } from 'vuex';

export default {
    components: {
        Upload
    },
    data() {
        return {
            selectedFile: null,
            avatarUrl: import('@/assets/images/users/profile/profile.png'), // Дефолтный аватар
            userId: 0
        };
    },

    computed: {
        ...mapGetters(['getProfile', 'getUser']),
    },

    methods: {
        ...mapActions(['fetchProfile', 'fetchUser']),

        onFileSelected(event) {
            const file = event.target.files[0];
            this.selectedFile = file;

            if (file) {
                this.avatarUrl = URL.createObjectURL(file);
            }
        },


        async uploadAvatar() {
            if (!this.selectedFile) {
                alert("Пожалуйста, выберите файл!");
                return;
            }


            const formData = new FormData();

            formData.append('file', this.selectedFile);
            formData.append('id', this.userId);

            try {
                await updateUserAvatar(formData);
                window.location.reload();
            } catch (error) {
                console.error("Ошибка при загрузке файла:", error);
                alert('Ошибка при загрузке файла');
            }
        }
    },

    async mounted () {
        await this.fetchProfile();
        await this.fetchUser(this.getProfile.data.profile_id);
        this.userId = this.getUser.id;
    }
};
</script>

