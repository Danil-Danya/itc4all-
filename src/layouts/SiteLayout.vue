<template>
    <section class="site">
        <div class="wrapper">
            <div class="content">
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
        </div>
    </section>
</template>

<script>

import Navbar from '@/components/layouts/all/Navbar.vue';
import Footer from '@/components/layouts/all/Footer.vue';

import { gsap } from 'gsap/gsap-core';
import { ScrollTrigger } from 'gsap/all';


export default {
    components: {
        Navbar,
        Footer
    },

    mounted () {
        this.$nextTick(() => {
            gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

            ScrollSmoother.create({
                wrapper: '.wrapper',
                content: '.content',
                smooth: 1
            })
        })

        this.$router.beforeEach((to, from, next) => {
            if (this.smoother) {
                this.smoother.kill();
            }
            next();
        });
    },

    beforeDestroy() {
        if (this.smoother) {
            this.smoother.kill(); // Уничтожаем ScrollSmoother
        }
    }
}


</script>