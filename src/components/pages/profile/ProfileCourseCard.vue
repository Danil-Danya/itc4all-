<template>
    <div class="profile__course-card">
        <div class="profile__course-preview">
            <img src="@/assets/images/courses/course.png" alt="Course" class="profile__course-preview-img">
        </div>
        <div class="profile__course-card-content">
            <h3 class="profile__course-card-title">{{ course.title }}</h3>
            <div class="profile__course-card-action">
                <p class="profile__course-card-author">{{ course.author }}</p>
                <a href="/" :class="course.ending ? 'profile__course-card-sertificate-active' : 'profile__course-card-sertificate'">Сертификат</a>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        course: Object
    }
}

</script>