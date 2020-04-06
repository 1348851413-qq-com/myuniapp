<template>
    <view class="web-list">
        <view class="web-item">
            <view class="cover">
                <image src="/static/images/index/sy_banner_zsjm.png">
            </view>
            <view class="web-msg">
                <view class="title clearfix mb10">
                    <view>标题标题</view>
                    <view class="default-tag">新闻资讯</view>
                </view>
                <view class="clearfix mb10">
                    <view class="autochain"></view>
                    <view class="bd-weight">9</view>
                    <view class="list-url">www.baidu.com</view>
                    <view></view>
                </view>
                <view class="clearfix mb10">
                    <view class="goods-type">友情链接</view>
                </view>
                <view class="clearfix mb10">
                    <view class="show-type">直显风格</view>
                    <view class="show-type">首页</view>
                    <view class="list-url">上链率：99%</view>
                </view>
                <view class="price-box">
                    <view class="price—num price">￥100:00/月</view>
                    <view class="list-url">销量：999</view>
                </view>
                <view class="buy">购买</view>
            </view>
        </view>
          <view class="web-item">
            <view class="cover">
                <image src="/static/images/index/sy_banner_zsjm.png">
            </view>
            <view class="web-msg">
                <view class="title clearfix mb10">
                    <view>标题标题</view>
                    <view class="default-tag">新闻资讯</view>
                </view>
                <view class="clearfix mb10">
                    <view class="autochain"></view>
                    <view class="bd-weight">9</view>
                    <view class="list-url">www.baidu.com</view>
                    <view></view>
                </view>
                <view class="clearfix mb10">
                    <view class="goods-type">友情链接</view>
                </view>
                <view class="clearfix mb10">
                    <view class="show-type">直显风格</view>
                    <view class="show-type">首页</view>
                    <view class="list-url">上链率：99%</view>
                </view>
                <view class="price-box">
                    <view class="price—num price">￥100:00/月</view>
                    <view class="list-url">销量：999</view>
                </view>
                <view class="buy">购买</view>
            </view>
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
    .web-item{
        width: 100%; 
    }  
    .web-item{
        display: flex;
        width: 100%;
        border-bottom: 1upx solid #dfdfdf;
        padding: 25upx 0 ;
    }
    .web-item:nth-last-child(1){
        border-bottom: none;
    }
    .cover{
        flex: 0 0 30%;
        
    }
    .cover image{
        width: 100%;
        height: 150upx;
    }
    .web-msg{
        flex:0 0 70%; 
        box-sizing: border-box;
        padding-left: 20upx;
        position: relative;
    }
    .web-msg .title view:nth-child(1){
        font-size: 35upx;
        max-width: 300upx;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        float: left;
        margin-right: 15upx;
    }
    .goods-type{
        padding: 0 5upx;
        color:#7c9fbf;
        background-color: #f0f4f8;
        font-size: 20upx;
        float: left;
    }
   
    .price—num{
        font-size: 28upx;
        float: left;
        margin-right: 10upx;
    }
    .price-box .list-url{
        margin-top: 5upx;
    }
    .buy{
        position: absolute;
        right: 0;
        bottom: 10upx;
       

    }
</style>