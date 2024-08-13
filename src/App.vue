<template>
    <div class="app">
        <div :class="layout">
            <component :is="layout"> 
                <Router-view />
            </component>
    </div>
    </div>
</template>

<script>

import { nextTick } from 'vue';
import LandingLayout from './layouts/LandingLayout.vue';
import LoginLayout from './layouts/LoginLayout.vue';
import MentorLayout from './layouts/MentorLayout.vue';
import SiteLayout from './layouts/SiteLayout.vue';
import UserLayout from './layouts/UserLayout.vue';

import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/all';


export default {
    components: {
        LandingLayout,
        LoginLayout,
        MentorLayout,
        SiteLayout,
        UserLayout
    },

    computed: {
        layout () {          
            return `${this.$route.meta.layouts || 'login'}-layout`
        }
    },

    mounted () {
    }
}

</script>