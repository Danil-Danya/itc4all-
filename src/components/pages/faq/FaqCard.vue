<template>
    <div class="faq__card" @click="toggleAccordione">
        <div class="faq__card-content">
            <div class="faq__card-inital">
                <div class="faq__icon-custom" ref="icon">
                    <span class="faq__icon-line"></span>
                    <span class="faq__icon-line"></span>
                </div>
                <h3 class="faq__card-title title" @click="toggleAccordione">{{ question }}</h3>
            </div>
            <transition 
             name="accordione" 
             
             @enter="beforeEnter"
             @after-enter="enter"
             @before-leave="leave"
            >
                <div class="faq__card-answer inner" v-if="visible">
                    <p class="faq__text">{{ answer }}</p>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>

export default {
    data: () => ({
        visible: false
    }),

    props: {
        question: String,
        answer: String
    },

    methods: {
        toggleAccordione () {
            this.visible = !this.visible;
        },


        beforeEnter(el) {
            el.style.height = '0px';
            el.style.opacity = '0';
        },

        enter(el) {
            el.style.height = el.scrollHeight + 'px';
            el.style.opacity = '1';
        },

        leave(el) {
            el.style.height = '0px';
            el.style.opacity = '0';
        }
    },

    watch: {
        'visible': {
            deep: true,
            handler () {
                const { icon } = this.$refs;
                const classActive = 'faq__icon-custom-active';

                if (this.visible) {
                    icon.classList.add(classActive);
                }
                else {
                    icon.classList.remove(classActive);
                }
            }
        }
    }
}

</script>