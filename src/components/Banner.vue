<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="str in listImg" :style="{ backgroundImage: 'url(' + str.url + ')' }"></div>
        </div>
        <div class="swiper-pagination swiper-pagination-white"></div>
    </div>
</template>

<script>
    //首先要安装swiper，然后引入
    import Swiper from 'swiper';
    import 'swiper/dist/css/swiper.min.css';
    export default {
        // 通过props获取父组件传递过来的属性listImg
        props: ['listImg'],
        mounted() {
            console.log('mounted', this)
            //实例化swiper必须等到dom渲染完成才能操作。
            var swiper = new Swiper('.swiper-container', {
                pagination: '.swiper-pagination',
                paginationClickable: true,
                loop: true,
                speed: 600,
                autoplay: 4000,
                onTouchEnd: function() {
                    swiper.startAutoplay()
                }
            });
        }
    }
</script>

<style>
    .swiper-container {
        width: 100%;
        height: 10rem;
    }
    .swiper-container .swiper-wrapper {
        width: 100%;
        height: 100%;
    }
    .swiper-slide {
        background-position: center;
        background-size: cover;
        width: 100%;
        height: 100%;
    }
    .swiper-slide img {
        width: 100%;
        height: 100%;
    }

    .swiper-pagination-bullet {
        width:0.5rem;
        height: 0.5rem;
        display: inline-block;
    }
    
    .swiper-pagination-white .swiper-pagination-bullet {
        background: black;
    }

</style>