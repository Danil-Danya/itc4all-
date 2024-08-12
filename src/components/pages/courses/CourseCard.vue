<template>
    <div class="course__card">
        <div class="course__preview">
            <span class="course-bg">Preview</span>
            <img src="@/assets/images/courses/course.png" alt="Course" class="course__preview-img">
        </div>
        <div class="course__info">
            <div class="course__name">
                <h2 class="course__name-title">Курс Экспресс бекенд</h2>
            </div>
            <div class="course__data">
                <div class="course__mentor-name">
                    <h3 class="course__info-title">Преподователь: </h3>
                    <p class="course__info-text">Умид Маликов</p>
                </div>
                <div class="course__lessons-info">
                    <h3 class="course__info-title">Занятий в курсе: </h3>
                    <p class="course__info-text">32</p>
                </div>
            </div>
            <div class="course__button-container">
                <router-link to="" class="course__button">Перейти на страницу курса</router-link>
            </div>
        </div>
    </div>
</template>