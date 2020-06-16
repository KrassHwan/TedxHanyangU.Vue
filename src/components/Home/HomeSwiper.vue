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
                <v-flex column class="tedx">
                    <v-flex row justify-start>
                        <div class="firstWord">T</div>
                        <div class="leastWord">echnology</div>
                    </v-flex>
                    <v-flex row justify-start>
                        <div class="firstWord">E</div>
                        <div class="leastWord">ntertainment</div>
                    </v-flex>
                    <v-flex row justify-start>
                        <div class="firstWord">D</div>
                        <div class="leastWord">esign</div>
                    </v-flex>
                    <v-flex row justify-start>
                        <div class="firstWord">X</div>
                        <div class="leastWord"></div>
                    </v-flex>
                </v-flex>
            </v-layout>
        </swiper-slide>
        <swiper-slide >
            <v-layout xs12 row justify-center align-center class="secondSlide slide">
                <v-flex column class="tedx">
                    <v-flex row justify-start>
                        <div class="firstWord">T</div>
                        <div class="leastWord">echnology</div>
                    </v-flex>
                    <v-flex row justify-start>
                        <div class="firstWord">E</div>
                        <div class="leastWord">ntertainment</div>
                    </v-flex>
                    <v-flex row justify-start>
                        <div class="firstWord">D</div>
                        <div class="leastWord">esign</div>
                    </v-flex>
                    <v-flex row justify-start>
                        <div class="firstWord">X</div>
                        <div class="leastWord"></div>
                    </v-flex>
                </v-flex>
            </v-layout>
        </swiper-slide>
        <swiper-slide >
            About
        </swiper-slide>
        <swiper-slide >
            Contact
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>
<script>
  export default {
    name: 'HomeSwiper',
    data() {
        return {
            text:"TED는 Technology, Entertainment, Design의 약자로 자신이 하는 일에 열정을 가진 사람들이 'Ideas Worth Spreading (공유할 가치가 있는 아이디어)' 이라는 슬로건 아래에서 18분간 발표하고 이야기를 나누는 자리입니다. TEDx의 'x'는 독립적으로 조직된 TED 이벤트를 뜻하며, TED의 기본 가이드라인을 활용하여, 자발적으로 TED를 기획하고자 하는 사람들이 모여 만드는 이벤트입니다.\n\nTED, short for Technology, Entertainment, Design, is a conference where speakers with passion for their work presents their ideas under the slogan 'Ideas Worth Spreading' for 18 minutes. The 'x' in TEDx represents the idea of an independent TED-like event organized by individuals under TED specific guidelines.",
            swiperOptions: {
                direction: 'vertical',
                pagination: {
                    el: '.swiper-pagination',
                    bulletClass: "bullet",
                    bulletActiveClass: "bullet-active"
                },
                mousewheel: true,
                // autoplay: {
                //     delay: 2500,
                //     disableOnInteraction: false,
                // },
            }
        }
    },
    computed: {
        swiper() {
            return this.$refs.homeSwiper.$swiper
        }
    },
    mounted(){
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

.slide{padding-top: 56px; color: #ffffff;}

.firstSlide{background-image: url('../../assets/image/light.jpg');background-position: center center; background-size: cover;}
.secondSlide{background-image: url('../../assets/image/hanyanglogo.png');background-position: center center; background-size: contain;}

.black-back{background-color: rgba(0,0,0, 0.5);width: 100vw;height: calc(100vh - 56px); display: flex; justify-content: center; align-items: center; padding: 0px 5vw;}
.wordWrap{display: flex; flex-direction: column; padding-right: min(5vw, 50px); max-width: calc(40vw - max(10vw, 100px));}
.Word{display: flex; align-items: center;}
.firstWord{font-size: max(5vw, 5vh) ; color: red;font-weight: bold; font-family: "NanumSquare"; font-weight: 800;}
.leastWord {color: white;font-size: max(4vw, 4vh); font-family: "NanumSquare"; font-weight: 700; overflow: visible; white-space: nowrap;}

.textWrap{background-color: rgba(255,255,255, 0.1); padding: 1vh 1vw}
.mainText{font-size: max(min(20px, 2vw), 12px);font-family: "NanumSquare"; font-weight: 400; white-space: pre-line; word-break:keep-all; text-align:left;}

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