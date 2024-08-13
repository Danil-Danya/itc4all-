<template>
    <section class="site">
        <div class="site-bg"></div>
        <main class="main">
            <Router-view />
        </main>
    </section>
</template>

<script>

import Navbar from '@/components/layouts/all/Navbar.vue';
import Footer from '@/components/layouts/all/Footer.vue';

export default {
    components: {
        Navbar,
        Footer
    }
}


</script>