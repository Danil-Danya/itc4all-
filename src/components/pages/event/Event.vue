<template>
    <section class="event">
        <div class="container">
            <Preview :preview="preview"/>
            <JSONGenerator :json="json" />
        </div>
    </section>
</template>

<script>
import Preview from './Peview.vue';
import JSONGenerator from './JSONGenerator.vue';

import { mapActions, mapGetters } from 'vuex';

export default {
    data: () => ({
        preview: {},
        json: []
    }),

    components: {
        Preview,
        JSONGenerator
    },

    methods: {
        ...mapActions(['fetchEvent'])
    },

    computed: {
        ...mapGetters(['getEvent'])
    },

    async mounted () {
        const id = this.$route.params.url;
        await this.fetchEvent(id);

        this.preview.title = this.getEvent.title;
        this.preview.preview = this.getEvent.preview;
        

        if (typeof this.getEvent.content === 'string') {
            const json = `[${this.getEvent.content}]`;
            this.json = JSON.parse(json);
        } 
        else {
            this.json = this.getEvent.content;
        }

        console.log(this.json);
    }
}

</script>