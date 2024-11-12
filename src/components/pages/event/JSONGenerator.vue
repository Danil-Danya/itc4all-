<template>
    <div class="event__content">
        <div class="event__item" v-for="item in json" :key="item">
            <h2 class="title event__content-subtitle">{{ item.subtitle }}</h2>
            <p class="event__content-text" v-html="item.description"></p>
            <ul class="event__content-list">
                <li v-for="text in item.list" :key="text">
                    <span class="event__content-list-punct"></span>
                    <p class="event__content-list-text" v-html="text"></p>
                </li>
            </ul>
            <!-- <img src="@/assets/images/events/Lessson.jpg" alt="Image" class="event__content-img"> -->
        </div>
    </div>
</template>


<script>

export default {
    props: {
        json: {
            type: Object,
            required: true
        }
    }
}

</script>