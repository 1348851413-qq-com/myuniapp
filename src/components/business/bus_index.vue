<template>
    <view class="bus_list">
        <view class="bus_item" v-for="(v,k) in list" :key="k">
            <image :src="'/api2'+v.img" class="cover">
            <view class="title clearfix">
                <view>{{v.title}}</view>
                <view class="tag">{{v.name_cate}}</view>
            </view>
            <view class="age clearfix">
                <view>年限：{{v.age}}年</view>
                <view>门店：{{tool.filterNum(v.num_store)}}个</view>
            </view>
            <view class="address">
                <view>{{v.city}}</view>
                <view>{{tool.filterNum(v.num_store)}}人已申请</view>
            </view>
            <view class="price">
                <view>{{v.investment1}}-{{v.investment2}}万</view>
                <image src="~@/static/images/business/sjzlxq_zxsc_icon1.png">
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
        }
    },
    methods:{

    }
}
</script>
<style scoped>
    .bus_list{
        /* width: 100%; */
        display: flex;
        flex-wrap: wrap;
    }
    .bus_list .bus_item{
        flex: 0 0 50%;
        box-sizing: border-box;
        margin-bottom: 20upx;
    }
    .bus_list .bus_item:nth-child(odd){
        padding-right: 8upx;
    }
    .bus_list .bus_item:nth-child(even){
        padding-left: 8upx;
    }
    .bus_item .cover{
        width: 100%;
        height: 180upx;
        border-radius: 10upx;
        margin-bottom: 10upx;
    }
    .bus_item .title{
        margin-bottom: 10upx;
    }
    .bus_item .title view:nth-child(1){
        font-size: 35upx;
        max-width: 200upx;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        float: left;
    }
    .bus_item .title .tag{
        float: left;
        border: 1upx solid #ff9c00;
        color: #ff9c00;
        font-size: 25upx;
        padding: 0 8upx;
        margin-top: 8upx;
        line-height: 30upx;
        border-radius: 5upx;
    }
    .bus_item .age view{
        font-size: 20upx;
        color: #666;
        background-color: #f6f6f7;
        margin:0 5upx 7upx 0;
        padding: 3upx 8upx;
        float: left;
    }
    .bus_item .age view:nth-child(2){
        margin-right: 0;
    }
    .bus_item .address{
        display: flex;
        justify-content: space-between;
        font-size: 20upx;
        color:#999;
        margin-bottom: 8upx;
    }
    .bus_item .address view:nth-child(1){
        padding-left: 35upx;
        background: url("~@/static/images/business/address_icon.png") 0 center no-repeat;
        background-size: 25upx auto;
    }
    .bus_item .price{
        color:#FF7800;
        font-size: 35upx;
        font-weight: bold;
        display: flex;
        justify-content: space-between;
        padding-right: 15upx;
    }
    .bus_item image{
        width: 40upx;
        height: 40upx;
    }
</style>