<template>
    <div class="profile__course-card">
        <div class="profile__course-preview">
            <img :src="course.course_preview.path ? staticPath + 'images/' + course.course_preview.path : '@/assets/images/courses/course.png'" alt="Course" class="profile__course-preview-img">
        </div>
        <div class="profile__course-card-content">
            <h3 class="profile__course-card-title">{{ course.name }}</h3>
            <div class="profile__course-card-action">
                <p class="profile__course-card-author">{{ course.mentor }}</p>
                <!-- <a href="/" :class="course.ending ? 'profile__course-card-sertificate-active' : 'profile__course-card-sertificate'">Сертификат</a> -->
            </div>
        </div>
    </div>
</template>

<script>
import courses from '@/store/courses/courses';


export default {
    props: {
        course: Object,
        required: true
    }
}

</script>