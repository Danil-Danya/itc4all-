<template>
    <section class="header__section">
        <div class="container">
            <div class="header__content">
                <div class="header__left">
                    <h1 class="header__title" data-speed="0.8">С нами изучите IT и увидите свою карьеру</h1>
                </div>
                <div class="header__right">
                    <img src="@/assets/images/index/header/header.png" data-speed="1.2" alt="Header" class="header__image">
                </div>
                <div class="header__animate">
                    <div :class="`header__animate-${item}`" v-for="item in 4" :key="item"></div>
                </div>
            </div>
        </div>
    </section>
</template>