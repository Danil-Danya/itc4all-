<template>
    <div class="mentor__profile">
        <div class="mentor__profile-avatar">
            <img :src="`${staticPath}images/${avatar}`" alt="" class="mentor__profile-avatar-img">
        </div>
        <div class="mentor__profile-info">
            <h2 class="mentor__name">{{ firstName }} {{ lastName }}</h2>
            <p class="mentor__activity">{{ speciality }}</p>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        avatar: {
            type: String,
            required: true
        },
        speciality: {
            type: String,
            required: true
        },
    }
}


</script>