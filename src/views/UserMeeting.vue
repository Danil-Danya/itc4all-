<template>
    <div id="meetingSDKElement"></div>
    <div class="session-container" v-if="session">
        <iframe :src="session.join_session_link"
            width="1200px" height="1000px" frameborder="0"
        >
        </iframe>
    </div>
</template>

<script>
import ZoomMtgEmbedded from '@zoom/meetingsdk/embedded';
//import { ZoomMtg } from '@zoom/meetingsdk';
//import { ZoomMtg } from '@zoomus/websdk';
import axios from 'axios';

import { mapActions, mapGetters } from 'vuex';

export default {
    data: () => ({
        iframe: false,
        session: {}
    }),

    methods: {
        ...mapActions(['fetchSession'])
    },

    computed: {
        ...mapGetters(['getSession'])
    },

    async mounted () {
        await this.fetchSession(this.$route.params.id);
        this.session = this.getSession.data;
        const session = this.getSession.data;
        

        //let meetingSDKElement = document.getElementById('meetingSDKElement');

        const res = await axios.get('http://api.startit.uz/server-api/zoom-sdk/signature', {
            params: {
                meeting_number: session.unical_zoom_session_id
            }
        });

        const signature = res.data.signature;
        console.log(signature);
        
        console.log(session.unical_zoom_session_id);
        var client = ZoomMtgEmbedded.createClient()

        let meetingSDKElement = document.getElementById('meetingSDKElement');

//   client.init({zoomAppRoot: meetingSDKElement, language: 'en-US', patchJsMedia: true, leaveOnPageUnload: true}).then(() => {
//     client.join({
//       signature: signature,
//       sdkKey: 'XHjODJJCSwy1a3jRNTbxsA',
//       meetingNumber: session.unical_zoom_session_id,
//       password: session.zoom_session_password,
//       userName: 'Danil',
//       //userEmail: userEmail,
//     //   tk: registrantToken,
//     //   zak: zakToken
//     }).then(() => {
//       console.log('joined successfully')
//     }).catch((error) => {
//       console.log(error)
//     })
//   }).catch((error) => {
//     console.log(error)
//   })

        // ZoomMtg.init({
        //     leaveUrl: '', 
        //     success: (success) => {
        //         ZoomMtg.join({
        //             sdkKey: 'XHjODJJCSwy1a3jRNTbxsA',
        //             signature: signature, 
        //             meetingNumber: session.unical_zoom_session_id,
        //             passWord: session.zoom_session_password,
        //             userName: 'Tommy',
        //             success: (success) => {
        //                 console.log(success)
        //             },
        //             error: (error) => {
        //                 console.log(error)
        //             }
        //         })
        //     },
        //     error: (error) => {
        //         console.log(error)
        //     }
        // })
    }
}

</script>