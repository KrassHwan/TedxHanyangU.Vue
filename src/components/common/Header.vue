<template>
    <v-app-bar 
        flat
        :color="headcolor"
        style="position: fixed; transition:all ease 1s 0s;z-index:2;"
    >
        <v-layout row justify-space-between style="padding: 0px 20px; align-items: center;">
            <div class="headerTitle" @click="goMain()">
                <span class="red-text">TED</span>
                <span class="red-text headerTitlex">x</span>
                <span class="headerOrg">HanyangU</span>
            </div>
            <div class="headerfunc">
                <v-btn
                    text
                    @click="SearchSwich()"
                    :color="btncolor"
                    v-if="windowWidth > 500"
                >
                    <i class="fas fa-search"></i>
                </v-btn>
                <div
                    style="transition:all 1s ease 0s;"
                    :class="search"
                >
                    <v-text-field
                        flat
                        solo-inverted
                        hide-details
                        label="Search"
                        style="width:100%"
                    />
                </div>
                <v-btn
                    text
                    @click="SideBarOn()"
                    :color="btncolor"
                >
                    <i class="fas fa-bars"></i>
                </v-btn>
            </div>
        </v-layout>
    </v-app-bar>
</template>

<script>
import { bus } from "@/main";

export default {
    name: "headers",
    props : ['route'],
    // ==================== Component Variable ==================== //
    data() {
        return {
            headcolor: "rgba(255, 255, 255, 0)",
            btncolor: "white",
            height_check: false,
            search_check: false,
            sidebaron: false,
            search: "search_hidden",
            windowWidth: 0
        };
    },
    // ==================== Component Methods ==================== //
    methods: {
        // ========== Main Function ========== //
        // 메인 화면으로 이동하는 함수
        goMain() {
            this.$router.push({ name: "main" }).catch(err => {});
        },

        SideBarOn(){
            if (this.sidebaron){
                bus.$emit("sidebaroff")
            }
            this.sidebaron = true
            bus.$emit("sidebaron")
        },

        onScroll() {
            if (window.pageYOffset >= 10){
                this.height_check = true
            } else {
                this.height_check = false
            }
        },

        SearchSwich() {
            this.search_check = !this.search_check
            if(this.search_check){
                this.search = "search_show"
            }else{
                this.search = "search_hidden"
            }
        },

        headerCheck(){
            if (this.height_check || this.search_check){
                this.headcolor = "rgba(255, 255, 255, 1)"
                this.btncolor = "black"
            } else{
                this.headcolor = "rgba(255, 255, 255, 0)"
                this.btncolor = "white"
            }
        },
        handleResize() {
            this.windowWidth = window.innerWidth
        }
    },
    watch: {
        height_check: function () {
            this.headerCheck()
        },
        search_check: function () {
            this.headerCheck()
        }
    },
    created () {
        window.addEventListener('scroll', this.onScroll);
        window.addEventListener('resize', this.handleResize);
        if (window.pageYOffset >= 0){
            window.scroll(0, 0);
        }
        this.handleResize();
    }
};
</script>