<template>
    <div class="mentor__description">
        <div class="mentor__description-content">
            <h1 class="mentor__description-name">{{ firstName }} {{ lastName }}</h1>
            <p class="mentor__description-text">{{ description }}</p>
        </div>
        <div class="mentor__social">
            <a
                v-for="social in socials"
                :key="social.name"
                :href="social.link"
                class="mentor__link-social"
                target="_blank"
                rel="noopener noreferrer"
            >
                <span class="mentor__icon-social">
                    <component :is="social.icon" />
                </span>
            </a>
        </div>
    </div>
</template>

<script>

import Gmail from '@/components/icons/mentor/gmail.vue';
import Linkedin from '@/components/icons/mentor/In.vue';
import Instagram from '@/components/icons/mentor/Instagram.vue';
import Github from '@/components/icons/mentor/Github.vue';
import Telegram from '@/components/icons/mentor/Telegram.vue';

export default {
    computed: {
        socials () {
            return [
                { name: 'gmail', link: this.gmail || '#', icon: 'Gmail' },
                { name: 'linkedin', link: this.linkedin || '#', icon: 'Linkedin' },
                { name: 'instagram', link: this.instagram || '#', icon: 'Instagram' },
                { name: 'telegram', link: this.telegram || '#', icon: 'Telegram' },
                { name: 'github', link: this.github || '#', icon: 'Github' }
            ];
        }
    },

    props: {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        gmail: {
            type: true,
            required: true
        },
        linkedin: {
            type: String,
            required: true
        },
        github: {
            type: String,
            required: true
        },
        instagram: {
            type: String,
            required: true
        },
        telegram: {
            type: String,
            required: true
        }
    },

    components: {
        Github,
        Gmail,
        Instagram,
        Linkedin,
        Telegram
    }
}

</script>