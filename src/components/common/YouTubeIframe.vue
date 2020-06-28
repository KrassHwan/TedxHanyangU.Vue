<template>
    <div class="VideoFrame">
        <div class="VideoBox">
            <h1 style="color: white; margin-bottom: 5vh; margin-top: 5vh">Tedx Rules</h1>
            <div class="Video">
                <MyPlayer
                    ref="p"
                    :ytid="ytid"
                    :yturl="yturl"
                    :width="videoWindow.width"
                    :height="videoWindow.height"
                    :player-vars="{controls: 0}"
                    @read="onPlayerReady"
                />
            </div>
        </div>
        <div class="mx-10 goAbout">
            <div id="pendulum">
                <v-btn x-large rounded color="white" style="font-weight: bold;" >
                    Go About<v-icon right>fa-arrow-right</v-icon>
                </v-btn>
            </div>
        </div>
    </div>
</template>

<script>
import { Player } from 'vue-youtube-iframe-api'

export default {
    name: "YouTubeVideo",
    props : ["ytid", "yturl", "videoplay"],
    data(){
        return{
            videoWindow:{
                width:0,
                height:0
            }
        }
    },
    created(){
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },
    methods: {
        goAbout(){
            this.$router.push({name: "about"});
        },
        onPlayerReady () {
            console.log(this.$refs.p.player)
        },
        play() {
            this.$refs.p.player.playVideo()
        },
        pause() {
            this.$refs.p.player.pauseVideo()
        },
        handleResize() {
            this.videoWindow.width = Math.max(window.innerWidth * 0.6, 300);
            this.videoWindow.height = Math.max(window.innerWidth *  0.3375, 168.75);
        }
    },
    components: {
        MyPlayer: Player
    },
    watch: {
        videoplay: function () {
            if(this.videoplay){
                this.play()
            } else{
                this.pause()
            }
        }
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize);
    },
}
</script>

<style scoped>
.VideoFrame{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    height: calc(100vh - 64px);
}
.Video{
  padding: 10px;
  border: 1px solid white; 
}
.VideoBox{
    position: absolute;
    align-self: flex-start;
}
.goAbout{
    color: white;
    margin-bottom: 2vh;
}

@media(max-width:600px) {
    .goAbout{
        margin-bottom: 10vh;
    }
}

@keyframes pendulum  {
    from { margin-left: 40px;}
    to { margin-left:10px; }
}
#pendulum {
    animation: pendulum 0.5s infinite;
    animation-direction: alternate-reverse;
}

</style>
