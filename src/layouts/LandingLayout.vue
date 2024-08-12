<template>
    <section class="landing">
        <header class="header">
            <Navbar />
            <Header />
        </header>
        <main class="main">
            <Router-view />
        </main>
        <footer class="footer">
            <Footer />
        </footer>
    </section>
</template>

<script>

import Navbar from '@/components/layouts/all/Navbar.vue';
import Footer from '@/components/layouts/all/Footer.vue';
import Header from '@/components/layouts/landing/Header.vue';

export default {
    components: {
        Navbar,
        Footer,
        Header
    }
}


</script>