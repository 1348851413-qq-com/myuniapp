<template>
    <view class="filter-wrap">
        <view class="hd clearfix">
            <view class="soft_title">{{softTitle}}</view>
            <view v-for="(v,k) in filterObj.type" v-if="filterObj.type">{{v.str}}</view>
            <view class="filter-btn">筛选</view>
        </view>
        <view class="soft_list">

        </view>
    </view>
</template>
<script>
export default {
    data(){
        return{
            softTitle:'综合排序'
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
                    type:[]
                }
            }

        }
    },
    methods:{
        
    }
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
        padding: 20upx;
        border-bottom: 1upx solid #efefef;
    }
    .hd view{
        box-sizing: border-box;
        padding: 0 20upx;
    }
    /* .filter-btn{} */
</style>