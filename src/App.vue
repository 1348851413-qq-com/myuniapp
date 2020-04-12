<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	.clearfix::after{
		content:'';
		display: block;
		clear: both;
	}
	.color_b2{
		color:#b2b2b2;
	}
	.price{
		color:#FF7800;
	}
	.default-tag{
		float: left;
		padding: 0 8upx;
		font-size: 25upx;
		color:#68b9f2;
		border:1px solid #68b9f2;
		border-radius: 5upx;
		margin-top: 8upx;
	}
	.bd-weight{
		float: left;
		width: 55upx;
		height: 28upx;
		background: url("~@/static/images/index/sy_icon_baidu.png") no-repeat;
		background-size: 100% 100%;
		box-sizing: border-box;
		padding-left: 30upx;
		line-height: 30upx;
		color: #fff;
		font-size: 20upx;
		margin-right: 15upx;
	}
	.list-url{
		font-size: 20upx;
		color:#999;
		float: left;
	}
	.autochain{
		float: left;
		width: 30upx;
		height: 30upx;
		background: url("~@/static/images/index/sy_tag_a.png") no-repeat;
		background-size: 100% 100%;
		margin-right: 10upx;
	}
	.mb10{
		  margin-bottom: 10upx;
	}
	.show-type{
        padding: 0 5upx;
        color:#666;
        background-color: #f4f4f4;
        font-size: 20upx;
        float: left;
        margin-right: 10upx;
    }
	.buy{
		 width:110upx;
        height:50upx;
        background-color: #53bcfb;
        color:#fff;
        border-radius: 25upx;
        text-align: center;
        font-size: 30upx;
        line-height: 50upx;
	}
	.text-overflow{
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	view{
		box-sizing: border-box;
	}
</style>
