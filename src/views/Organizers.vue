<template>
    <div>
        <Header/>
        <div class="oranizerback black">
            <img :src="logo" class="img">
            <div style="color:white;" class="img box">
                <div>{{message}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "organizer",
    data() {
        return {
            message: "안녕하세요!",
            logo: require('@assets/logo.png')
        };
    },
    methods:{
        messagechange(){
            this.message = "안녕못한다"
        }
    },
    created() {
        setTimeout(this.messagechange, 3000)
    }
}
</script>

<style scoped>
.oranizerback{
    height:400px; 
    width:50vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.img{
    width: 200px;
    height: 100px;;
}
.box{
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
</style>