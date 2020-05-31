 <template fluid>
  <div>
    <Header />
    <swiper ref="mySwiper" :options="swiperOptions" style="height:100vh;">
      <swiper-slide>
        <div class="main_image black"></div>
      </swiper-slide>
      <swiper-slide>
        <div class="main_image blue"></div>
      </swiper-slide>
      <swiper-slide>
        <div class="main_image red"></div>
      </swiper-slide>
      <swiper-slide>
        <div class="main_image green"></div>
      </swiper-slide>
      <swiper-slide>
        <div class="main_image gray"></div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <v-btn>
      버튼
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'home',
   data() {
      return {
        swiperOptions: {
          direction: "vertical",
          pagination: {
            el: '.swiper-pagination'
          },
          // Some Swiper option/callback...
        }
      }
    },

    computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
    },
    mounted() {
      console.log('Current Swiper instance object', this.swiper)
      this.swiper.slideTo(1, 1000, false)
    }
};
</script>