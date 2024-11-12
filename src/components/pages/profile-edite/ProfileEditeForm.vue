<template>
    <div class="profile__edite-container-form">
        <div class="profile__edite-list">
            <h2 class="profile__edite-title">Редактировать профиль</h2>
        </div>
        <form action="" class="profile__edite-form">
            <div class="profile__edite-input-container">
                <div class="profile__edite-input-block">
                    <label for="" class="profile__edite-label">Имя</label>
                    <input type="text" class="profile__edite-input" placeholder="Нигина" v-model="firstName">
                </div>
                <div class="profile__edite-input-block">
                    <label for="" class="profile__edite-label">Фамилия</label>
                    <input type="text" class="profile__edite-input" placeholder="Орлова" v-model="lastName">
                </div>
            </div>
            <div class="profile__edite-input-container">
                <div class="profile__edite-input-block">
                    <label for="" class="profile__edite-label">Город</label>
                    <input type="text" class="profile__edite-input" placeholder="Ташкент" v-model="city">
                </div>
                <div class="profile__edite-input-block">
                    <label for="" class="profile__edite-label">Страна</label>
                    <input type="text" class="profile__edite-input" placeholder="Узбекистан" v-model="country">
                </div>
            </div>
            <div class="profile__edite-input-container">
                <div class="profile__edite-input-block">
                    <label for="" class="profile__edite-label">Электронная почта</label>
                    <input type="text" class="profile__edite-input" placeholder="nigina@email.com" v-model="email">
                </div>
                <div class="profile__edite-input-block">
                    <label for="" class="profile__edite-label">Пароль</label>
                    <input type="text" class="profile__edite-input" placeholder="Ваш пароль" v-model="password">
                </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    methods: {
        async editeProfile () {

        },
    }
}
</script>