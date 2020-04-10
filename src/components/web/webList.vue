<template>
    <view class="web-list">
        <view class="web-item" v-for="(v,k) in list" :key="k">
            <view class="cover">
                <image :src="'/api2'+v.image">
            </view>
            <view class="web-msg">
                <view class="title clearfix mb10">
                    <view>{{v.name}}</view>
                    <view class="default-tag">{{v.cid1name}}</view>
                </view>
                <view class="clearfix mb10">
                    <view class="autochain" v-if="v.autochain==2"></view>
                    <view class="bd-weight">{{v.bdweight}}</view>
                    <view class="list-url">{{v.url}}</view>
                    <view></view>
                </view>
                <view class="clearfix mb10" v-if="goodsType==1">
                    <view class="goods-type">{{v.type}}</view>
                </view>
                <view class="clearfix mb10" v-if="showType==1">
                    <view class="show-type">{{tool.showStyle(v.show_style)}}</view>
                    <view class="show-type">{{v.dispage}}</view>
                    <view class="list-url">上链率：99%</view>
                </view>
                <view class="price-box" v-if="showPrice==1">
                    <view class="price—num price">￥{{v.price}}/月</view>
                    <view class="list-url">销量：{{tool.filterNum(v.count)}}</view>
                </view>
                <view class="buy" v-if="showBuy==1">购买</view>
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
    props:{
        list:{
            type:Array,
            default:()=>[]
        },
        showType:{
            type:String,
            default:'1'
        },
        goodsType:{
            type:String,
            default:'1'
        },
        showPrice:{
            type:String,
            default:'1'
        },
        showBuy:{
            type:String,
            default:'1'
        }
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
        font-size: 30upx;
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