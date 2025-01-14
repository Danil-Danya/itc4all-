<template>
    <div class="courses__videos-container">
        <h2 class="title" style="margin-bottom: 20px;">{{ $t('course.programTitle') }}</h2>
        <div class="courses__videos-item" v-for="video in videos" :key="video">
            <div class="courses__videos-icon">
                <Play />
            </div>
            <h2 class="courses__videos-theme">{{ video.name }}</h2>
            <router-link :to="`?videos_id=${video.id}`" class="courses__videos-link">{{ $t('course.play') }}</router-link>
        </div>
    </div>
</template>

<script>

import Play from '@/components/icons/course/Play.vue'

export default {
    components: {
        Play
    },

    props: {
        videos: {
            type: Array,
            required: true
        },
    }
}

</script>