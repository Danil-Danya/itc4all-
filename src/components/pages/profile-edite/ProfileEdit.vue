<template>
    <section class="profile__edite">
        <div class="profile__edite-container">
            <ProfileEditeUploadFile />
            <ProfileEditeForm />
        </div>
    </section>
</template>

<script>

import ProfileEditeUploadFile from './ProfileEditeUploadFile.vue';
import ProfileEditeForm from './ProfileEditeForm.vue';

export default {
    components: {
        ProfileEditeForm,
        ProfileEditeUploadFile
    }
}

</script>