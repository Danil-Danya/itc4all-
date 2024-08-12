<template>
    <div class="mentor__card">
        <div class="mentor__avatar">
            <img src="@/assets/images/mentors/avatar.png" alt="Mentors" class="mentor__avatar-img">
        </div>
        <div class="mentor__info">
            <h3 class="mentor__info-title">Durdona Bakhronova</h3>
            <p class="mentor__text">Frontend разработчик</p>
            <p class="mentor__text">Опыт: 5years</p>
        </div>
        <div class="mentor__icons-container">
            <span class="mentor__icons" v-for="item in 3">
                <In />
            </span>
        </div>
    </div>
</template>

<script>

import In from '@/components/icons/mentor/In.vue';

export default {
    components: {
        In
    }
}


</script>