<template>
    <div>
        <Header/>
        <div class="oranizerback black"></div>
        <img :src="logo">
        <div>{{message}}</div>
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
    width:100vw; 
}
.black{
    background-color: black;
}
.blue-1{
    background-color: red;
}
</style>