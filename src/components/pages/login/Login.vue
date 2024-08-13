<template>
    <section class="login">
        <div class="container">
            <div class="login__container">
                <div class="login__logo">
                    <router-link to="/">
                        <img src="@/assets/images/login/logo.svg" alt="Logo" class="login__logo-img">
                    </router-link>
                </div>
                <form class="login__form">
                    <h2 class="login__title">Войти</h2>
                    <div class="login__form-container">
                        <div class="login__input-container">
                            <label for="" class="login__label">Почта</label>
                            <input type="email" class="login__input">
                            <p class="login__message"></p>
                        </div>
                        <div class="login__input-container">
                            <label for="" class="login__label">Пароль</label>
                            <input type="password" class="login__input">
                            <p class="login__message"></p>
                        </div>
                    </div>
                    <button class="login__button">Войти</button>
                </form>
            </div>
        </div>
    </section>
</template>