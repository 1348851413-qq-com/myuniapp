<template>
	<view class="content">
		<view class="navbar">
			<view class="search_bar">
				<view class="search">
					<image src="/static/images/index/sy_icon_search.png" alt="" class="search_btn">
					<input type="text" placeholder="请输入关键词">
				</view>
				<view class="sign">签到</view>
			</view>
		</view>
		<view class="index_bd"> 
			<view class="swiper_wrap">
				<swiper circular="true">
					<swiper-item>
						<view class="swiper-item">
							<image src="/static/images/index/f3df9edb71289dd0904fbea8ae40c6b5.jpg" alt="">
						</view>
							
					</swiper-item>
					<swiper-item>
						<view class="swiper-item">
							<image src="/static/images/index/f3df9edb71289dd0904fbea8ae40c6b5.jpg" alt="">
						</view>
							
					</swiper-item>
						<swiper-item>
						<view class="swiper-item">
							<image src="/static/images/index/f3df9edb71289dd0904fbea8ae40c6b5.jpg" alt="">
						</view>
							
					</swiper-item>
						<swiper-item>
						<view class="swiper-item">
							<image src="/static/images/index/f3df9edb71289dd0904fbea8ae40c6b5.jpg" alt="">
						</view>
							
					</swiper-item>
				</swiper>
			</view>
			<view class="menu_wrap">
				<swiper @change="getCurrent">
					<swiper-item >
						<view class="menu-item">
							<view v-for="(v,k) in menu.page1" :key="k" class="item-wrap">
								<image :src="v.img">
								<view>{{v.title}}</view>
							</view>
						</view>
					</swiper-item>	
					<swiper-item >
						<view class="menu-item">
							<view v-for="(v,k) in menu.page2" :key="k" class="item-wrap">
								<image :src="v.img">
								<view>{{v.title}}</view>
							</view>
						</view>
					</swiper-item>	
				</swiper>
				<view class="swiper-dots">
					<view :class="{'active':menu.current==0}"></view>
					<view :class="{'active':menu.current==1}"></view>
				</view>
			</view>
			<view class="notic">
				<view class="notic-icon">
					<image src="~@/static/images/index/sy_icon_gg.png">
				</view>
				<view class="notic-list">
					<swiper vertical autoplay circular disable-touch="false" duration="1000" style="height:40upx">
						<swiper-item>
							<view class="notic-item">
								公告公告1
							</view>
						</swiper-item>
						<swiper-item>
							<view class="notic-item">
								公告公告2公告公告1公告公告1公告公告1公告公告1公告公告1
							</view>
						</swiper-item>
					</swiper>
				</view>
			</view>
		</view>
		<view class="module">
			<image src="~@/static/images/index/index_new_2898.png" class="title-img">
			<view class="list_bd">
				<view class="left">
					<view class="big">
						<view class="title">友情链接</view>
						<view class="list_type color_fd7d7d">销量榜</view>
					</view>
					<view>
						<view class="title">免费交换流量</view>
						<view class="list_type color_c18bfd">高权重榜</view>
					</view>
				</view>
				<view class="right">
					<view>
						<view class="title">微信公众号广告</view>
						<view class="list_type color_fd7d7d">销量榜</view>
					</view>
					<view>
						<view class="title">微博广告</view>
						<view class="list_type color_fd7d7d">销量榜</view>
					</view>
					<view class="noborder">
						<view class="title">网站广告</view>
						<view class="list_type">低价热卖榜</view>
					</view>
				</view>	
				<view class="bottom">
					<view class="noborder">
						<view class="title">商机加盟</view>
						<view class="list_type color_5cd7f2">新榜</view>
					</view>
					<view>
						<view class="title">免费换链</view>
						<view class="list_type color_77a8f5">优质榜</view>
					</view>
					<view>
						<view class="title">流量购买</view>
						<view class="list_type color_c18bfd">高权重榜</view>
					</view>
					<view>
						<view class="title">软文交易</view>
						<view class="list_type color_fd7d7d">销量榜</view>
					</view>
				</view>	
			</view>
			<view class="notic">
				<view class="notic-icon">
					<image src="~@/static/images/index/sy_icon_jydt.png">
				</view>
				<view class="notic-list order-notic">
					<swiper vertical autoplay circular disable-touch="false" duration="1000" style="height:40upx">
						<swiper-item>
							<view class="notic-item">
								<view class="order-tag">友情链接</view>
								<view>公告公告1公告公告1公告公告1公告公告1公告公告1公告公告1公告公告1</view>
							</view>
						</swiper-item>
						
					</swiper>
				</view>
			</view>
		</view>
		<view class="module">
			<view class="module_title">
				<view>自媒体广告</view>
				<view class="type">
					<view :class="{'active':mediaType==1}" @click="changeMedia" data-type="1">微信公众号</view>
					<view :class="{'active':mediaType==2}" @click="changeMedia" data-type="2">微博广告</view>
				</view>
			</view>
			<view class="media_banber">
				<image src="~@/static/images/index/wx_more.png">
			</view>
			<mediaWb v-show="mediaType==2"></mediaWb>
			<mediaWx v-show="mediaType==1"></mediaWx>
		</view>
		<view class="module" style="background:none;padding:0;">
			<view class="module_title">
				<view>热门自媒体推荐</view>
				
			</view>
			<scroll-view scroll-x>
				<view class="hot-media">
					<view class="media-item">
						<view class="media-img">
							<image src="/static/images/index/sy_icon_wzjy.png">
						</view>
						<view>标题标题</view>
						<view class="fans">阅读：111</view>
						<view class="show_btn">查看</view>
					</view>
				</view>

			</scroll-view>
		</view>	
		<view class="module">
			<view class="module_title">
				<view>商机加盟</view>
				<view class="more_btn">更多&gt;</view>
			</view>
			<view class="media_banber">
				<image src="~@/static/images/index/sy_banner_zsjm.png">
			</view>
			<business></business>
		</view>
		<view class="high_brand">
			<view class="high_wrap">
				<view>
					<image src="/static/images/index/sy_banner_zsjm.png">
					<view class="title">标题标题标题标题标题标题</view>
					<view class="price">1-5万</view>
				</view>
				<view>
					<image src="/static/images/index/sy_banner_zsjm.png">
					<view class="title">标题标题标题标题标题标题</view>
					<view class="price">1-5万</view>
				</view>
				<view>
					<image src="/static/images/index/sy_banner_zsjm.png">
					<view class="title">标题标题标题标题标题标题</view>
					<view class="price">1-5万</view>
				</view>
			</view>
		</view>
		<view class="module">
			<view class="module_title">
				<view>明星网站</view>
				<view class="include">收录</view>
			</view>
			<web></web>

		</view>
		<view class="hot-rec">
			<view class="hot-rec-title">热门推荐</view>
			<view class="hot-rec-link">
				<view>2-5元</view>
				<view>优质链接</view>
				<view>推荐链接</view>
				<view>软文套餐</view>
				<view>低价广告</view>
				<view>网站交易</view>
			</view>
		</view>
		<view class="module">
			<view class="module_title">
				<view>友链推荐</view>
				<view class="more_btn">更多&gt;</view>
			</view>
			<view class="friend-rec">
				<view class="rec-item">
					<image src="~@/static/images/index/sy_banner_zsjm.png" class="rec-cover">
					<view class="title clearfix mb10">
						<view>标题标题标题标题</view>
						<view class="default-tag">新闻资讯</view>
					</view>
					<view class="clearfix mb10">
						<view class="bd-weight">8</view>
						<view class="list-url">www.baidu.com</view>
					</view>
					<view class="clearfix mb10">
						<view class="show-type">直显风格</view>
						<view class="show-type">首页</view>
					</view>
					<view class="clearfix mb10">
						<view class="list-url">销量：888</view>
					</view>
					<view class="price">
						￥111.00/月
					</view>
					<view class="buy">购买</view>
                </view>
			</view>

		</view>
			<view class="module">
			<view class="module_title">
				<view>网站广告推荐</view>
				<view class="more_btn">更多&gt;</view>
			</view>
			<web></web>

		</view>
		<footerBox></footerBox>
	</view>
</template>

<script>
	import mediaWb from "../../components/mediaList/media_wb.vue";
	import mediaWx from "../../components/mediaList/media_wx.vue";
	import business from "../../components/business/bus_index.vue";
	import web from "../../components/web/webList.vue";
	import footerBox from "../../components/footer/footer.vue";
	export default {
		data() {
			return {
				title: 'Hello',
				menu:{
					page1:[
						{title:'友情链接',img:'/static/images/index/sy_icon_ylmm.png',src:''},
						{title:'商机加盟',img:'/static/images/index/sy_icon_sjlm.png',src:''},
						{title:'免费换链',img:'/static/images/index/sy_icon_mfhl.png',src:''},
						{title:'网站广告',img:'/static/images/index/sy_icon_wzgg.png',src:''},
						{title:'网站交易',img:'/static/images/index/sy_icon_wzjy.png',src:''},
						{title:'软文交易',img:'/static/images/index/sy_icon_rwjy.png',src:''},
						{title:'自媒体交易',img:'/static/images/index/sy_icon_zmtgg.png',src:''},
						{title:'流量购买',img:'/static/images/index/sy_icon_llgm.png',src:''},
						{title:'免费交换',img:'/static/images/index/sy_icon_lljh.png',src:''},
						{title:'站长工具',img:'/static/images/index/sy_icon_zzgj.png',src:''}
					],
					page2:[
						{title:'申请收录',img:'/static/images/index/sy_icon_sqsl.png',src:''},
						{title:'站长资讯',img:'/static/images/index/sy_icon_zzzx.png',src:''},
						{title:'友链套餐',img:'/static/images/index/sy_icon_yltc.png',src:''},
						{title:'软文套餐',img:'/static/images/index/sy_icon_rwtc.png',src:''},
						
					],
					current:0
				},
				mediaType:1
			}
		},
		onLoad() {

		},
		methods: {
			getCurrent(e){
				this.menu.current=e.detail.current;
			},
			changeMedia(e){
				if(e.currentTarget.dataset.type==this.mediaType){
					return false;
				}
				this.mediaType=e.currentTarget.dataset.type;
			}
		},
		components:{
			mediaWb,
			mediaWx,
			business,
			web,
			footerBox
		}
	}
</script>

<style scoped>
	.content{
		background-color: #f5f5f5
	}
	.navbar {
		width: 100%;
		height: 300upx;
		background: url("/static/images/index/index_hd_bg.png") no-repeat ;
		background-size: 100% auto;

	}
	.search_bar{
		width: 100%;
		padding:0 30upx;
		height: 120upx;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.search{
		flex: 6;
		background-color: #fff;
		border-radius: 10upx;
		height: 70upx;
		position: relative;
	}
	.search image{
		width: 34upx;
		height: 34upx;
		position: absolute;
		top: 50%;
		margin-top: -17upx;
		left: 50upx;
	}
	.search input{
		width: 80%;
		height: 70upx;
		line-height: 70upx;
		margin-left: 20%;
		font-size: 30upx;
	}
	.sign{
		flex: 1;
		color: #fff;
		text-align: right;
		font-size:35upx
	}
	.index_bd{
		box-sizing: border-box;
		margin:-155upx 30upx 20upx;
		background-color: #fff;
		border-radius: 15upx;
		overflow: hidden;
	}
	.swiper_wrap{
		width: 100%;
		height: 250upx;
		position: relative;
		margin-bottom:30upx;
	
	}
	.swiper_wrap::before{
		content: '';
		position: absolute;
		width: 85%;
		height: 0;
		bottom: 0.05rem;
		left: 50%;
		transform: translateX(-50%);
		box-shadow: 0 10upx 30upx 15upx #c0c4fc;
		z-index: 0;
	}

	.swiper-item{
		width: 100%;
		height:250upx;
		border-radius: 15upx;
		overflow: hidden;
	}
	.swiper-item image{
		width: 100%;
		height:100%;
	}
	.menu_wrap{
		box-sizing: border-box;
		padding: 0 20upx;
		height:400upx;
		position: relative;
	
	}
	.menu_wrap .menu-item{
		width: 100%;
		display: flex;
		flex-wrap: wrap;
	}
	.menu-item .item-wrap{
		flex: 0 0 20%;
		height: 130upx;
		text-align: center;
		margin-bottom: 30upx;
		font-size: 25upx;
	}
	.menu-item image{
		width: 90upx;
		height: 90upx;
		margin-bottom: 15upx;
	}
	.swiper-dots{
		width: 100upx;
		height: 7upx;
		display: flex;
		position: absolute;
		bottom: 50upx;
		left: 50%;
		margin-left: -50upx;
	}
	.swiper-dots view{
		flex: 1;
		background-color: #dfdee1 ;
	}
	.swiper-dots .active{
		background-color: #0dc2fd;
	}
	.notic{
		height: 40upx;
		padding: 15upx 0;
		margin:0 20upx;
		border-top: 1upx solid #efefef;
		display: flex;
		align-items: center
	}
	.notic-icon{
		flex: 1;
	}
	.notic image{
		width: 120upx;
		height: 30upx;
	}
	.notic .notic-list{
		flex: 3;
		height: 40upx;
		font-size: 25upx;
	}
	.notic-item{
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.order-tag{
		float: left;
		padding: 0 5upx 2upx;
		border: 1upx solid #ff9430;
		color:#ff9430;
		line-height: 30upx;
		border-radius: 8upx;
		margin-right: 15upx;
	}
	.module{
		margin: 0 30upx 25upx;
		border-radius: 15upx;
		padding: 20upx;
		background-color: #fff;
	}
	.module .title-img{
		width: 330upx;
		height: 40upx;
		display: block;
		margin: 15upx auto 30upx;
	}
	.list_bd{
		border-top: 1upx solid #efefef;
		margin-bottom: 20upx;
		display: flex;
		flex-wrap: wrap;
	}
	.list_bd .left{
		flex: 0 0 50%;
		box-sizing: border-box;
		border-right: 1upx solid #efefef;
	}
	.list_bd .right{
		flex: 0 0 50%;
	}
	.list_bd .bottom{
		flex: 0 0 100%;
		display: flex;
		border-top: 1upx solid #efefef;
		border-right: 1px solid transparent;
		box-sizing: border-box;
	}
	.left>view,.right>view{
		box-sizing: border-box;
		padding: 20upx;
		height: 150upx;
	}
	.right>view{
		border-bottom: 1upx solid #efefef;
	}
	.left .big{
		height: 300upx;
		border-bottom: 1upx solid #efefef;
	}
	.bottom>view{
		flex:  0 0 25%;
		height: 220upx;
		padding: 20upx 12upx 0;
		box-sizing: border-box;
		border-left: 1upx solid #efefef;
	}
	.noborder{
		border: none !important;
	}
	.list_bd .title{
		font-size: 31upx;
		color:#333;
		font-weight: bold;
		margin-bottom: 10upx;
	}
	.list_bd .list_type{
		font-size: 20upx;
	}
	.left>view:nth-child(1){
		background: url("~@/static/images/index/sy_icon_yclj2.png")70% 80% no-repeat;
		background-size: 150upx auto;
	}
	.left>view:nth-child(2){
		background: url("~@/static/images/index/sy_icon_mflljh.png")85% 60% no-repeat;
		background-size: 80upx auto;
	}
	.right>view:nth-child(1){
		background: url("~@/static/images/index/sy_icon_wx2.png")95% 80% no-repeat;
		background-size: 80upx auto;
	}
	.right>view:nth-child(2){
		background: url("~@/static/images/index/sy_icon_wb2.png")95% 60% no-repeat;
		background-size: 80upx auto;
	}
	.right>view:nth-child(3){
		background: url("~@/static/images/index/sy_icon_wzgg2.png")95% 60% no-repeat;
		background-size: 80upx auto;
	}
	.bottom>view:nth-child(1){
		background: url("~@/static/images/index/sy_icon_sjjm2.png")70% bottom no-repeat;
		background-size: 80upx auto;
	}
	.bottom>view:nth-child(2){
		background: url("~@/static/images/index/sy_icon_mfhl2.png")70% bottom no-repeat;
		background-size: 80upx auto;
	}
	.bottom>view:nth-child(3){
		background: url("~@/static/images/index/sy_icon_llgm2.png")70% bottom no-repeat;
		background-size: 80upx auto;
	}
	.bottom>view:nth-child(4){
		background: url("~@/static/images/index/sy_icon_rwjy2.png")70% bottom no-repeat;
		background-size: 80upx auto;
	}
	.color_c18bfd{color: #c18bfd;}/*权重榜*/
	.color_fd7d7d{color: #fd7d7d;}/*销量榜*/
	.color_fda947{color: #fda947;}/*低价榜*/
	.color_5cd7f2{color: #5cd7f2;}/*新榜*/
	.color_77a8f5{color: #77a8f5}/*优质榜*/
	/* 自媒体广告 */
	.module .module_title{
		font: 40upx MicrosoftJhengHei,微软雅黑;
		color: #333;
		font-weight: 700;
		display: flex;
		justify-content: space-between;
		margin-bottom: 30upx;
	}
	.module .type{
		font-size: 20upx;
		width: 370upx;
		font-weight: normal;
		display: flex;
		align-items: center;
	}
	.module .type view{
		flex: 1;
		background-color: #eef3f9;
		color:#7c9fbf;
		text-align: center;
		line-height: 60upx;
		border-radius: 30upx;
	}
	.module .type view:nth-child(1){
		margin-right: 20upx;
	}
	.module .type .active{
		background-color: #0dc2fd;
		color:#fff;
	}
	.media_banber{
		width: 100%;
		height: 140upx;
		margin-bottom: 20upx;
		
	}
	.media_banber image{
		width: 100%;
		height: 100%;
		border-radius: 15upx;
	}
	.hot-media{
		display: flex;
	}
	.hot-media .media-item{
		flex:0 0 200upx;
		background-color: #fff;
		border-radius: 15upx;
		text-align: center;
		font-size: 30upx;
		margin-right: 20upx;
		padding: 15upx 0;
	}
	.hot-media .media-item:nth-last-child(1){
		margin-right: 0;
	}
	.hot-media .media-img{
		position: relative;
		width: 110upx;
		height: 110upx;
		margin: 0 auto;
		margin-bottom: 10upx;
	}
	.hot-media image{
		border-radius: 50%;
		width: 100%;
		height: 100%;
	}
	.hot-media .fans{
		font-size: 20upx;
		color:#666;
		margin-bottom: 25upx;
	}
	.hot-media .show_btn{
		width: 120upx;
		color: #53bcfb;
		line-height: 50upx;
		border-radius: 25upx;
		border: 1upx solid #53bcfb;
		margin: 0 auto;
	}
	.more_btn{
		color:#999;
		font-weight: normal;
		font-size: 25upx;
		padding-top: 15upx;
	}
	.high_brand{
		margin: 20upx 30upx ;
		padding:15upx 20upx 15upx 25%;
		background: url("~@/static/images/index/high_brand_bg.png") no-repeat;
		background-size: 100% 100%;
	}
	.high_brand .high_wrap{
		width: 100%;
		display: flex;
		justify-content: space-between;
	}
	.high_brand .high_wrap>view{
		flex: 0 0 30%;
		font-size: 30upx;
		text-align: center;
	}
	.high_brand .title{
		width: 150upx;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		color: #051b28;
	}
	.high_brand .high_wrap image{
		width: 100%;
		height: 100upx;
		border-radius: 5upx;
	}
	.include{
		color:#0BABFE;
		width: 70upx;
		padding-left: 45upx;
		background: url("~@/static/images/index/sy_icon_shoulu.png") 10upx center no-repeat;
		background-size: 30upx 30upx;
		font-size: 30upx;
		line-height: 60upx;
		font-weight: normal;
	}
	.hot-rec{
		margin:15upx 30upx 20upx;

	}
	.hot-rec-title{
		padding: 20upx 0;
		font-size:28upx;
		color: #999;
		font-weight: bold;
		background: url("~@/static/images/index/line_bg.png")center no-repeat;
		background-size: 100% auto;
		text-align: center;
	}
	.hot-rec-link{
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		margin-bottom: 25upx;
	}
	.hot-rec-link view{
		flex: 0 0 30%;
		line-height: 70upx;
		font-size: 28upx;
		color:#999;
		border-radius: 10upx;
		border: 1px solid #ededed;
		background-color: #fff;
		text-align: center;
		margin-bottom: 25upx;
	}
	.friend-rec{
		display: flex;
	
	}
	.friend-rec .rec-item{
		flex: 0 0 50%;
		box-sizing: border-box;
		position: relative;
	}
	.friend-rec .rec-item:nth-child(odd){
		padding-right: 8upx;
	}
	.friend-rec .rec-item:nth-child(even){
		padding-left: 8upx;
	}
	.friend-rec image{
		width: 100%;
		height: 200upx;
		border-radius: 10upx;
		margin-bottom: 10upx;
	}
	.friend-rec .title view:nth-child(1){
 		font-size: 35upx;
        max-width: 200upx;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        float: left;
	}
	.friend-rec .price{
		font-size: 28upx;
	}
	.friend-rec .buy{
		position: absolute;
		right:10upx;
		bottom: 10upx;
	}
</style>
