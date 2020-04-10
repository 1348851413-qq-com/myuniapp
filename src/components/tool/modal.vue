<template>
    <view class="modal_wrap">
        <view class="loading" v-if="loadingShow">
            <view class="loading-border"></view>
            <image src="~@/static/images/index/logo.png">
        </view>
    </view>
</template>
<script>
export default {
    data(){
        return {

        }
    },
    methods:{

    },
    computed:{
        loadingShow(){
            return this.$store.state.loading;
        }
    }
}
</script>
<style >
    .loading{
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 90upx;
        height: 90upx;
        border-radius: 50%;
        z-index: 999;
    }
    .loading image{
        width: 100%;
        height:100%;
    }
    .loading .loading-border{
        border-top: 1upx solid #0dc2fd;
        border-right: 1upx solid transparent;
        border-radius: 50%;
        position: absolute;
        width: 100%;
        height: 100%;
        animation: rotate 2s infinite linear;
    }
    @keyframes rotate{
        0%{
            transform: rotate(0deg);
        }100%{
             transform: rotate(360deg);
        }
    }
</style>