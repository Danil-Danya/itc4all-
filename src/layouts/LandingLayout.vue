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

import { gsap } from 'gsap/gsap-core';
import { ScrollTrigger } from 'gsap/all';


export default {
    components: {
        Navbar,
        Footer,
        Header
    },

    mounted () {
        this.$nextTick(() => {
            gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

            if (ScrollTrigger.isTouch !== 1) {
                ScrollSmoother.create({
                    wrapper: '.wrapper',
                    content: '.content',
                    smooth: 1,
                    effects: true
                })
            }

        })
    },
}


</script>