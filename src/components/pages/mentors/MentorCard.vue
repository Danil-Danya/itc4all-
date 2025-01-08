<template>
    <div class="mentor__card">
        <div class="mentor__avatar">
            <img :src="`${staticPath}images/${mentor.mentors_previews.path}`" alt="Mentors"
                class="mentor__avatar-img">
        </div>
        <div class="mentor__info">
            <h3 class="mentor__info-title"> {{ mentor.first_name }} {{ mentor.last_name }} </h3>
            <p class="mentor__text"> {{ mentor.speciality }} </p>
            <p class="mentor__text">Опыт: {{ mentor.experience }} лет</p>
        </div>
        <div class="mentor__icons-container">
            <span class="mentor__icons" v-for="item in socials" :key="item">
                <a :href="item.icon === 'gmail' ? `mailto:${item.link}` : item.link">
                    <component :is="item.icon" />
                </a>
            </span>
        </div>
        <router-link :to="getMentorLink" class="mentor__link" v-if="profile">Личная сессия</router-link>
    </div>
</template>

<script>

import In from '@/components/icons/mentor/In.vue';
import Instagram from '@/components/icons/mentor/Instagram.vue';
import Telegram from '@/components/icons/mentor/Telegram.vue';
import Github from '@/components/icons/mentor/Github.vue';
import Gmail from '@/components/icons/mentor/gmail.vue';

import { mapActions, mapGetters } from 'vuex';

//`http://185.170.196.41/images/${mentor.mentors_previews.path}`

export default {
    data: () => ({
        socials: [],
        profile: {}
    }),

    components: {
        In,
        Instagram,
        Telegram,
        Github,
        Gmail
    },

    props: {
        mentor: {
            type: Object,
            required: true
        }
    },

    computed: {
        ...mapGetters(['getProfile']),

        getMentorLink () {
            let mentorLink = `/mentor/${this.mentor.first_name}-${this.mentor.last_name}`;
            let mentorFormatLink = mentorLink.toLocaleLowerCase() + '?mentor_id=' + this.mentor.id;
            
            return mentorFormatLink;
        }
    },

    methods: {
        ...mapActions(['fetchProfile'])
    },

    async mounted () {
        await this.fetchProfile();
        this.profile = this.getProfile;

        for (let key in this.mentor.mentros_social) {
            if (key !== 'id') {
                let icon = {
                    icon: key,
                    link: this.mentor.mentros_social[key]
                }
    
                this.socials.push(icon);
            }
        }
    }
}


</script>