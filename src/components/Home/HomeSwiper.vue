<template>
    <swiper ref="homeSwiper" :options="swiperOptions">
        <swiper-slide>
            <v-layout xs9 row justify-center align-center class="firstSlide slide">
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
                <v-flex column align-center class="textWrap">
                    <div class="mainText">{{text_ko}}</div>
                    <div class="mainText">{{text_en}}</div>
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
                <v-flex column align-center class="textWrap">
                    <div class="mainText">{{text_ko}}</div>
                    <div class="mainText">{{text_en}}</div>
                </v-flex>
            </v-layout>
        </swiper-slide>
        <swiper-slide >
            Talk
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
            text_ko:"TED는 Technology, Entertainment, Design의 약자로 자신이 하는 일에 열정을 가진 사람들이 \n 'Ideas Worth Spreading(공유할 가치가 있는 아이디어)'이라는 슬로건 아래에서 18분간 발표하고 이야기를 나누는 자리입니다. \nTEDx의 'x'는 독립적으로 조직된 TED 이벤트를 뜻하며, TED의 기본 가이드라인을 활용하여, \n자발적으로 TED를 기획하고자 하는 사람들이 모여 만드는 이벤트입니다.",
            text_en:"TED, short for Technology, Entertainment, Design, is a conference where speakers with passion \nfor their work presents their ideas under the slogan 'Ideas Worth Spreading' for 18 minutes. \nThe 'x' in TEDx represents the idea of an independent TED-like event \norganized by individuals under TED specific guidelines.",
            swiperOptions: {
                direction: 'vertical',
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    bulletClass: "bullet",
                    bulletActiveClass: "bullet-active"
                },
                mousewheel: true,
                 autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                },
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
.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: black;
    
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    color: white;
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
.slide{
    padding-top: 100px;
    background-size: contain;
    height: 100%;
}
.firstSlide{
    background-image: url('../../assets/image/light.jpg');
    background-position: right center;
}
.secondSlide{
    background-image: url('../../assets/image/hanyanglogo.jpg');
    background-position: left center;
}
.tedx{
    padding-left: 80px; 
    width:220px;
    background-color: rgba(0,0,0, 0.5);
    height: 320px;
}
.leastWord {
    margin-left: 5px;
    color: white;
    font-size: 2rem;
    font-weight: bold;
}
.firstWord{
    font-size: 3rem;
    color: red;
    font-weight: bold;
}
.textWrap{
    background-color: rgba(0,0,0, 0.5);
    height: 320px;
}
.mainText{
    font-size: 12px;
    width: 50vw;
    text-align: start;
    padding: 30px 10px;
    max-width: 500px;
}
@media(max-width:500px) {
        .mainText{
            display: none;
        }
    }
</style>