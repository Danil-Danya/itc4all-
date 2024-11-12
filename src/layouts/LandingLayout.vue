<template>
    <section class="landing">
        <div class="wrapper">
            <div class="content">
                <header class="header">
                    <Navbar />
                    <Header data-speed="0.9" />
                </header>
                <main class="main">
                    <Router-view />
                </main>
                <footer class="footer">
                    <Footer />
                </footer>
            </div>
        </div>
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
    },

    mounted () {
        
    },
}


</script>