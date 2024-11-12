<template>
    <section class="user">
        <div class="user__content">
            <Sidebar />
            <div class="container">
                <div class="user-container">
                    <div class="user__container-layout">
                        <Header v-if="header"/>
                        <Profile v-if="profile"/>
                    </div>
                    <Router-view />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Sidebar from '@/components/layouts/user/Sidebar.vue';
import Header from '@/components/layouts/user/Header.vue';
import Profile from '@/components/layouts/user/Profile.vue';

export default {
    components: {
        Sidebar,
        Header,
        Profile
    },

    computed: {
        header() {
            return this.$route.meta.header;
        },
        
        profile() {
            return this.$route.meta.profile;
        }
    }
}

</script>