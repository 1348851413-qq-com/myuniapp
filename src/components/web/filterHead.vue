<template>
    <view class="filter-wrap">
      
        <view class="hd clearfix">
            <view class="soft_title text-overflow active">{{softTitle}}</view>
            <view v-if="filterObj.type.length>0">
                <view v-for="(v,k) in filterObj.type" :key="k"  >{{v.str}}</view>
            </view>
            <view class="filter-btn" @click="openAll" data-type="openFilter">筛选</view>
        </view>
        <view class="filter-bg" v-show="showSoft">
            <view class="soft_list">
                <view class="active">
                    综合排序
                </view>
                <view>
                    价格升序
                </view>
            </view>
        </view>
        <view class="filter-right-bg" v-show="openFilter" @click="openAll" data-type="openFilter">
            <view class="filter-right opMenu">
                <scroll-view scroll-y>
                    <view class="filter-item">
                        <view class="title">百度权重</view>
                        <view class="values clearfix">
                            <text :class="now==k?'active':''" v-for="(v,k) in bdweight" :key="k">{{v}}</text>
                        </view>
                    </view>
                     <view  class="filter-item" v-for="(v,k) in bdweight" :key="k">
                        <view class="title clearfix">行业分类 <text class="show-all" @click="openAll" :class="showCate?'show-open-all':''" data-type="showCate">全部</text></view>
                        <view class="values clearfix">
                            <text :class="now==k?'active':''" v-for="(v,k) in bdweight" :key="k">{{v}}</text>
                        </view>
                    </view>
                </scroll-view>
                 <view class="save-btns">
                    <view class="clear">重置</view>
                    <view class="save">确认</view>
                </view>
            </view>
        </view>
       
    </view>
</template>
<script>
export default {
    data(){
        return{
            softTitle:'综合排序',
            showSoft:false ,
            bdweight:[0,1,2,3,4,5,6,7,8,9],
            now:1,
            showCate:false,
            openFilter:false
        }
    },
    props:{
        filterObj:{
            type:Object,
            default:()=>{
                return {
                    sort:[
                        {str:'综合排序',val:''}
                    ],
                    type:[
                        
                    ]
                }
            }

        }
    },
    methods:{
        openAll(e){
            this[e.target.dataset.type]=!this[e.target.dataset.type];
 
        }
    },
    
}
</script>
<style scoped>
    .filter-wrap{
        width: 100%;
        box-sizing: border-box;
       
    }
    .hd{
        width: 100%;
        box-sizing: border-box;
        font-size:28upx;
        padding: 20upx 0;
        border-bottom: 1upx solid #efefef;
        background-color: #fff;
    }
    .hd>view{
        box-sizing: border-box;
        padding: 0 25upx;
        float: left;
        position: relative;
    }
    .soft_title{
        max-width: 250upx;
    }
    .soft_title::after{
        content: '';
        position: absolute;
        border-left: 8upx solid transparent;
        border-top:  8upx solid #051B28;
        border-right:  8upx solid transparent;
        border-bottom: none;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
    }
    .hd .active{
        color:#0BABFE;
    }
    .soft_title.active::after{
        border-top-color: #0BABFE;
    }
    
    .soft_list{
        width: 100%;
        background-color: #fff;
    }
    .soft_list view{
        font-size: 25upx;
        padding: 25upx 30upx;
        border-bottom: 1px solid #efefef;
        position: relative;
    }
    .soft_list .active{
        color: #0BABFE;
    }
    .soft_list .active::after{
        content: '';
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 30upx;
        width: 20upx;
        height: 17upx;
        background: url("~@/static/images/icon/ylmm_icon_check01.png") no-repeat ;
        background-size: 100% auto;
    }
    .filter-bg,.filter-right-bg{
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.4);
        z-index: -1;
    }
    .filter-right-bg{
        position:fixed;
        top: 0;
        z-index: 999;
    }
    .hd .filter-btn{
        float: right;
        padding-right: 40upx;
        background: url("~@/static/images/icon/ylmm_icon_xuan.png") 80upx 12upx  no-repeat;
        background-size: 27upx auto;
    }
    .filter-right{
        position: absolute;
        right: 0;
        top: 0;
        width: 85%;
        height: 100%;
        background-color: #fff;
        padding: 30upx 20upx;
    }
    .filter-right scroll-view{
        height: 94%;
    }
    .filter-right .title{
       color:#333;
       font-size: 30upx;
       margin-bottom: 20upx;
    }
    .filter-right .filter-item{
        width: 100%;
        padding: 20upx 0;
        border-bottom: 1upx solid #efefef;
    }
    .filter-right .filter-item:nth-last-child(1){
        border-bottom: none;
    }
    .filter-right .values text{
        width:22%;
        text-align: center;
        line-height:60upx;
        font-size: 20upx;
        height: 60upx;
        border-radius: 8upx;
        background-color: #EFF2F5;
        margin-bottom: 20upx;
        float: left;
        margin-right: 20upx;
        box-sizing: border-box;
    }
    .filter-right .values text:nth-child(4n+0){
        margin-right: 0;
    }
    .filter-right .values .active{
        border:1upx solid #0BABFE;
        background: url("~@/static/images/icon/ylmm_icon_tcchick.png") 100upx 30upx no-repeat;
        background-size: 30upx 30upx;
    }
    .show-all{
        float: right;
        font-size: 20upx;
        color:#999;
        padding-right: 30upx;
        margin-top: 8upx;
        position: relative;
    }
    .show-all::after{
        content: '';
        position: absolute;
        width: 20upx;
        height: 14upx;
        background: url("~@/static/images/icon/icon_fold_1.png") right center no-repeat;
        background-size: 20upx auto;
        right: 0;
        top: 50%;
        margin-top: -7upx;
        transform: rotate(-180deg);
        transition: all .3s;
    }
    .show-open-all::after{
        transform: rotate(0);
    }
    .save-btns{
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        display: flex;
        line-height: 90upx;
        text-align: center;
        font-size: 30upx;
      
    }
    .save-btns .clear{
        flex: 1;
        background-color: #fff;
        border-top:1upx solid #E6E6E6;
    }
    .save-btns .save{
        flex: 1;
        background-color: #0BABFE;
        color:#fff;
    }
    .opMenu{
        animation: opMenu .5s linear ;
    }
    @keyframes opMenu{
        0%{
            transform: translateX(100%);
        }100%{
             transform: translateX(0);
        }
    }
</style>