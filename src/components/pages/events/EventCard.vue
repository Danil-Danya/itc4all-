<template>
    <div class="events__card">
        <router-link class="events__card-img-container" :to="'event/' + card.id">
            <img :src="`${staticPath}images/${card.preview}`" alt="Card" class="events__card-img">
        </router-link>
        <h2 class="title events__card-title">{{ card.title }}</h2>
        <p class="events__card-text">{{ card.description }}</p>
    </div>
</template>

<script>


export default {
    props: {
        card: {
            type: Object,
            required: true
        }
    }
}

</script>