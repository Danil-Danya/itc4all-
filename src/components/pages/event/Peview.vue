<template>
    <div class="event__preview">
        <h1 class="title event__preview-title">{{ preview.title }}</h1>
        <img :src="`${staticPath}images/${preview.preview}`" alt="Preview" class="event__preview-img">
    </div>
</template>

<script>

export default {
    props: {
        preview: {
            type: Object,
            required: true
        }
    }
}

</script>