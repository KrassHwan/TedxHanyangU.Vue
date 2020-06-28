<template>
    <swiper ref="homeSwiper" :options="swiperOptions">
        <swiper-slide>
            <v-layout xs12 row justify-center align-center class="firstSlide slide">
                <v-flex xs12 column class="black-back">
                    <v-flex class="wordWrap" >
                        <v-flex class="Word" style="align-self: flex-start;">
                            <div class="firstWord">T</div>
                            <div class="leastWord">echnology</div>
                        </v-flex>
                        <v-flex class="Word" style="align-self: flex-end;">
                            <div class="firstWord">E</div>
                            <div class="leastWord">ntertainment</div>
                        </v-flex>
                        <v-flex class="Word" style="align-self: flex-center;">
                            <div class="firstWord">D</div>
                            <div class="leastWord">esign</div>
                        </v-flex>
                        <v-flex class="Word" style="align-self: flex-start; padding-left: 5vw">
                            <div class="firstWord">X</div>
                            <div class="leastWord"> = independent</div>
                        </v-flex>
                    </v-flex>
                    <v-flex column align-center class="textWrap">
                        <div class="mainText">{{text}}</div>
                    </v-flex>
                </v-flex>
            </v-layout>
        </swiper-slide>
        <swiper-slide>
            <v-layout xs12 row justify-center align-center class="secondSlide slide">
                <YouTubeIframe 
                    v-bind:ytid="null"
                    v-bind:yturl="TedxRuleVideo"
                    v-bind:videoplay="videoplay"
                />
            </v-layout>
        </swiper-slide>
        <swiper-slide >
            Talk
        </swiper-slide>
        <swiper-slide >
            Contact
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script>
import YouTubeIframe from "@components/common/YouTubeIframe"
import { HomeMainText, TedxRuleVideo } from '@/constant.js'

export default {
    name: 'HomeSwiper',
    data() {
        return {
            videoplay: false,
            swiperOptions: {
                direction: 'vertical',
                pagination: {
                    el: '.swiper-pagination',
                    bulletClass: "bullet",
                    bulletActiveClass: "bullet-active"
                },
                mousewheel: true
            },
            text: HomeMainText,
            TedxRuleVideo: TedxRuleVideo
        }
    },
    components:{
        YouTubeIframe: YouTubeIframe
    },
    computed: {
        swiper() {
            return this.$refs.homeSwiper.$swiper
        }
    },
    mounted() {
        var component = this
        var swiper = this.$refs.homeSwiper.$swiper
        swiper.on('slideChange', function () {
            if(swiper.activeIndex == 1){
                component.videoplay = true
            } else{
                component.videoplay = false
            }
        });
    }
}
</script>

<style>
.swiper-container {
    width: 100%;
    height: 100%;
}
.bullet{
    margin: 6px 0;
    display: block;
    width: 8px;
    height: 8px;
    border-radius: 100%;
    background: white;
    opacity: 0.2;
    z-index: 20;
}
.bullet-active{
    opacity: 1;
}

.slide{padding-top: 56px; color: #ffffff; height: auto;}

.firstSlide{background-image: url('../../assets/image/light.jpg');background-position: center center; background-size: cover;}

.black-back{background-color: rgba(0,0,0, 0.5);width: 100vw;height: calc(100vh - 56px); display: flex; justify-content: center; align-items: center; padding: 0px 5vw;}
.wordWrap{display: flex; flex-direction: column; padding-right: min(5vw, 50px); max-width: calc(40vw - max(10vw, 100px));}
.Word{display: flex; align-items: center;}
.firstWord{font-size: max(5vw, 5vh) ; color: red;font-weight: bold; font-family: "NanumSquare"; font-weight: 800;}
.leastWord {color: white;font-size: max(4vw, 4vh); font-family: "NanumSquare"; font-weight: 700; overflow: visible; white-space: nowrap;}

.textWrap{background-color: rgba(255,255,255, 0.1); padding: 1vh 1vw}
.mainText{font-size: max(min(20px, 2vw), 12px);font-family: "NanumSquare"; font-weight: 400; white-space: pre-line; word-break:keep-all; text-align:left;}
.VideoWrap{display: flex; flex-direction: row; justify-content: center; align-items: center;}

@media(max-width:600px) {
    .black-back{
        flex-direction: column;
    }
    .wordWrap{
        padding: 1vh 10vw !important;
        width: 80vw;
    }
    .textWrap{
        padding: 1vh 10vw !important;
        width: 80vw;
    }
 }
</style>