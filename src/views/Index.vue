<template>
    <div>
        <About />
        <Reviews />
        <Form />
    </div>
</template>

<script>

import About from '@/components/pages/index/About.vue';
import Form from '@/components/pages/index/Form.vue';
import Reviews from '@/components/pages/index/Reviews.vue';

export default {
    components: {
        About,
        Form,
        Reviews
    }
}

</script>