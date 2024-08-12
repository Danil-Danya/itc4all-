<template>
    <section class="reviews">
        <div class="container">
            <div class="reviews__container">
                <h2 class="title reviews__title">Отзывы</h2>
                <div class="reviews__container">
                    <ReviewsSlider />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import ReviewsSlider from "../../sliders/ReviewsSlider.vue";

export default {
    components: {
        ReviewsSlider
    }
}

</script>