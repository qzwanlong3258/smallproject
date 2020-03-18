<template>
	<view class="body">
		<image class="logo" mode="widthFix" :src="img[0]"></image>
		<view class="btn-page">
			<view class="btnone"  @click="submitTest">
				
				
			</view>
			<image v-if="shoeOne" class="codeOne" :src="img[1]" mode="widthFix"></image>
			<view class="btntwo"  @click="submitApply">
			</view>
			<image class="codeTwo" v-if="shoeTwo" :src="img[2]" mode="widthFix"></image>
		</view>
	</view>
</template>

<script>
	import { ANDROID, IOS, LOGO } from '@/config/image.js';
	var _self;
	export default {
		data() {
			return {
				shoeOne:false,
				shoeTwo:false,
				img:[LOGO,ANDROID,IOS]
			}
		},
		onLoad() {
			_self=this

		},
		methods: {
			submitTest(){
				_self.shoeOne=!this.shoeOne
				_self.shoeTwo = false
			},
			submitApply(){
				_self.shoeTwo=!this.shoeTwo
				_self.shoeOne = false
			}

		}
	}
</script>

<style>
	.body {
		width: 100%;
	}

	.logo {	
		width: 100%;
		display: block;
		position: absolute;
	}
	.btn-page{
		width: 100%;
		height: 100%;
		
		position: absolute;
	}
	.btnone{
		height: 20rpx;
		line-height: 80rpx;
		width: 90rpx;
		
		border-radius: 45rpx;
		position: absolute;
		right: 140rpx;
		top:29rpx;
	}
	.btntwo{
		height: 20rpx;
		line-height: 83rpx;
		width: 65rpx;
		
		border-radius: 45rpx;
		position: absolute;
		right: 55rpx;
		top:29rpx;
	}
	.codeOne{
		width: 100rpx;
		position: absolute;
		right: 134rpx;
		top:45rpx;
	}
	.codeTwo{
		width: 100rpx;
		position: absolute;
		right: 36rpx;
		top:45rpx;
	}

	
</style>
