<template>
    <view class="footer">
        <view>
            <image src="~@/static/images/footer/sy_icon_qq.png">
            <view>在线客服</view>
        </view>
        <view>
            <image src="~@/static/images/footer/sy_icon_web.png">
            <view>电脑版</view>
        </view>
        <view>
            <image src="~@/static/images/footer/sy_icon_app.png">
            <view>APP版</view>
        </view>
    </view>
</template>
<script>
    export default {
        data(){
            return {

            }
        },
        onLoad(){

        },
        methods:{

        }
    }
</script>
<style scoped>
    .footer{
        width: 100%;
        padding:60upx 30upx;
        background-color: #fff;
        text-align: center;
        display: flex;
    }
    .footer view{
        flex: 0 0 30%;
        font-size: 27upx;
        color:#999;
    }
    .footer image{
        width: 80upx;
        height: 80upx;
        margin-bottom: 10upx;
    }
</style>