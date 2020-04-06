<template>
    <view class="media_list">
        <view class="media_item">
            <view class="item_top">
                <view class="image_box">
                    <image src="/static/images/index/sy_icon_wzjy.png">
                </view>
                <view class="msg_box">
                    <view class="title">
                        <view class="goods_title">标题标题</view>
                        <view class="tag">新闻资讯</view>
                    </view>
                    <view class="goods_msg">
                        <view class="clearfix">
                            <view>微信号：1111</view>
                        </view>
                         <view class="clearfix">
                            <view>阅读数：1111</view>
                            <view>头条：2222</view>
                            <view>非头条：2222</view>
                        </view>
                    </view>
                </view>
            </view>
            <view class="item_bottom">
                <view class="type">
                    <view>头条软广</view>
                    <view>非头条软广</view>
                    <view>头条硬广</view>
                    <view>非头条硬广</view>
                </view>
                <view class="price">
                    <view>￥111</view>
                    <view>￥111</view>
                    <view>￥111</view>
                    <view>￥111</view>
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
    }
    .item_top{
        width: 100%;
        height: 150upx;
        display: flex;
    }
    .image_box{
        flex: 0 0 110upx;
        height: 110upx;
    }
    .image_box image{
        width: 100%;
        height: 100%;
        border-radius: 50%;
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
      .msg_box .tag{
        line-height: 34upx;
        font-size: 20upx;
        color: #0babfe;
        border: 1upx solid #0babfe;
        border-radius: 8upx;
        padding: 0 8upx;
    }
</style>