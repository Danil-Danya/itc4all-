<template>
    <section class="site">
        <div class="wrapper">
            <div class="site-bg"></div>
            <header class="header">
                <Navbar />
            </header>
            <main class="main">
                <Router-view />
            </main>
            <footer class="footer">
                <Footer />
            </footer>
        </div>
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