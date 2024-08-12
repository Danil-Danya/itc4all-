<template>
    <section class="header__section">
        <div class="container">
            <div class="header__content">
                <div class="header__left">
                    <h1 class="header__title">С нами изучите IT и увидите свою карьеру</h1>
                </div>
                <div class="header__right">
                    <img src="@/assets/images/index/header/header.png" alt="Header" class="header__image">
                </div>
                <div class="header__animate">
                    <div :class="`header__animate-${item}`" v-for="item in 4" :key="item"></div>
                </div>
            </div>
        </div>
    </section>
</template>