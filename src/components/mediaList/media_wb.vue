<template>
    <view class="media_list">
        <view class="media_item" v-for="(v,k) in list" :key="k">
            <view class="item_top">
                <view class="image_box">
                    <image :src="v.headimg">
                    <view class="approve"  :class="'approve'+v.verified_ext" v-if="v.verified_ext>1"></view>
                </view>
                <view class="msg_box">
                    <view class="title">
                        <view class="goods_title">{{v.wbname}}</view>
                        <view class="vip"></view>
                        <view class="level">LV.{{v.urank}}</view>
                        <view class="tag">{{v.cataname}}</view>
                    </view>
                    <view class="goods_msg">
                        <view class="clearfix">
                            <view>粉丝：{{tool.filterNum(v.fans)}}</view>
                            <view>销量：{{tool.filterNum(v.num)}}</view>
                        </view>
                         <view class="clearfix">
                            <view>评论：{{tool.filterNum(v.p_avg)}}</view>
                            <view>转发：{{tool.filterNum(v.z_avg)}}</view>
                            <view>点赞：{{tool.filterNum(v.d_avg)}}</view>
                        </view>
                    </view>
                </view>
            </view>
            <view class="item_bottom">
                <view class="type">
                    <view>软广直发</view>
                    <view>软广转发</view>
                    <view>硬广直发</view>
                    <view>硬广转发</view>
                </view>
                <view class="price">
                    <view>￥{{v.zrprice}}</view>
                    <view>￥{{v.urprice}}</view>
                    <view>￥{{v.zyprice}}</view>
                    <view>￥{{v.uyprice}}</view>
                </view>
            </view>
        </view>
    </view>
</template>
<script>
export default {
    data(){
        return{

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
    .media_list{
        width: 100%;
     
        box-sizing: border-box;
        padding: 20upx 0;
    }
    .media_item{
        width: 100%;
        height: 270upx;
        margin-bottom: 20upx;
    }
    .item_top{
        width: 100%;
        height: 150upx;
        display: flex;
    }
    .image_box{
        flex: 0 0 110upx;
        height: 110upx;
        position: relative;
    }
    .image_box image{
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
    .approve{
        width: 30upx;
        height: 30upx;
        position: absolute;
        background: url("~@/static/images/media/approve2.png") no-repeat;
        background-size: 100%; 
        right: 0;
        bottom: 0;
    }
    .approve3{
        background: url("~@/static/images/media/approve3.png") no-repeat;
        background-size: 100%; 
    }
     .approve4{
        background: url("~@/static/images/media/approve4.png") no-repeat;
        background-size: 100%; 
    }
    .msg_box{
        width: 500upx;
        padding-left: 30upx;
    }
    .msg_box .title{
        width: 100%;
        display: flex;
        font-size: 30upx;
        align-items: center;
        margin-bottom: 10upx;
    }
    .msg_box .goods_title{
        max-width:220upx;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-right: 10upx;
    }
    .msg_box .vip{
        flex: 0 0 35upx;
        height: 35upx;
        background: url("~@/static/images/media/icon_sinav1.png") no-repeat;
        background-size: 100%;
        margin-right: 15upx;
    }
    .msg_box .level{
        flex: 0 0 70upx;
        text-align: center;
        background-color: #ff3939;
        color:#fff;
        font-size: 20upx;
        line-height: 34upx;
        border-radius: 17upx;
        margin-right: 15upx;
    }
    .msg_box .tag{
        line-height: 34upx;
        font-size: 20upx;
        color: #0babfe;
        border: 1upx solid #0babfe;
        border-radius: 8upx;
        padding: 0 8upx;
    }
    .goods_msg{
        font-size: 20upx;
        color:#666;
    }
    .goods_msg>view{
        margin-bottom: 5upx;
    }
    .goods_msg>view>view{
        float: left;
        margin-right: 15upx;
    }
    .item_bottom{
        padding: 20upx 0;
        height: 80upx;
        background-color: #F5F7FA;
    }
    .item_bottom>view{
        display: flex;
        text-align: center;
        margin-bottom: 15upx;
        font-size: 25upx;
    }
    .item_bottom .type view{
        flex: 1;
        color: #666;
    }
    .item_bottom .price view{
        flex: 1;
        color: #FF7800;
        white-space: nowrap;
    }
    
</style>