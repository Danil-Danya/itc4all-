<template>
    <div class="course__card">
        <div class="course__preview">
            <span class="course-bg">Preview</span>
            <img :src="`${staticPath}images/${course.course_preview.path}`" alt="Course" class="course__preview-img">
        </div>
        <div class="course__info">
            <div class="course__name">
                <h2 class="course__name-title">{{ course.name }}</h2>
            </div>
            <div class="course__data">
                <div class="course__mentor-name">
                    <h3 class="course__info-title">{{ $t('courses.mentor') }} </h3>
                    <p class="course__info-text">{{ course.mentor }}</p>
                </div>
                <div class="course__lessons-info">
                    <h3 class="course__info-title">{{ $t('courses.lessonCount') }} </h3>
                    <p class="course__info-text">{{ course.videos.length }}</p>
                </div>
            </div>
            <div class="course__button-container">
                <router-link :to="`/course/${course.id}`" class="course__button">{{ $t('courses.lessonLink') }}</router-link>
            </div>
        </div>
    </div>
</template>


<script>


export default {
    props: {
        course: {
            type: Object,
            required: true
        }
    }
}


</script>

