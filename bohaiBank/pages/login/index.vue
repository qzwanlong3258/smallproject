<template>
	<view class="login">
		<view class="login-hd">
			<image :src="img" mode="" ></image>
		</view>
		<view style="height: 25px;">
			<view class="text">渤海银行专属</view>
		</view>
		<view style="margin: 36px 16px 0 ;padding-bottom: 13.75px;border-bottom: 0.5px solid #EEEEEE;display: flex;">
			<input  v-model="param.phone" placeholder="请输入手机号" type="number" maxlength="13" placeholder-class="input" style="flex: 1;">
			<view style="flex-basis: 72px;" class="getcode">
				<span  @click="getCode">{{codeValue}}</span>
				
			</view>
		</view>
		<view style="margin: 14.25px 16px 0; padding-bottom: 13.75px;border-bottom: 0.5px solid #EEEEEE;display: flex;">
			<input v-model="param.code" placeholder="请输入验证码"  type="number" maxlength="6" placeholder-class="input" style="flex: 1;">
			</view>
		<view class="btn" @click="login">登录</view>
	</view>
</template>

<script>
	import { BOHAI_LOGIN } from '@/config/image.js';
	import {
		sendVerificationCode,
		getPhoneLogin
	} from '@/api/auth.js'
	import {
		setStorage
	} from '@/utils/storage.js'
	import { LOGIN, APPLY} from '@/config/router.js';
	export default {
		data() {
			return {
				img:BOHAI_LOGIN,
				codeValue: '获取验证码',
				   param: {
				   	phone: '',
				   	code: ''
				   }
				   
			}
		},
		onLoad() {

		},
		methods: {
			//获取验证码
			getCode: function() {
				const _this = this;
				if (this.codeValue == '获取验证码' && /^1\d{0,10}$/g.test(this.param.phone)) {
					sendVerificationCode({
						phone: this.param.phone
					}).then(res => {
						this.getCodeTime();
					});
				} else {
					wx.showToast({
						title: '请填写手机号码',
						icon: 'none',
						duration: 2000
					})
				}
			},
			//验证码倒计时
			getCodeTime: function(options) {
				var that = this;
				var currentTime = 90;
				that.codeValue = currentTime + '秒'
				let interval = setInterval(function() {
					that.codeValue = (currentTime - 1) + '秒'
					currentTime--;
					if (currentTime <= 0) {
						clearInterval(interval)
						that.codeValue = '获取验证码'
					}
				}, 1000)
			},
			
			//登录授权
			login: function() {
				if (this.param.phone && this.param.code) {
					getPhoneLogin(this.param).then(res => {
						// setStorage('tempToken', res.token)
						// setStorage('refreshToken', res.refreshToken)
						// setStorage('userInfo', res.userInfo)
						setStorage('isLogin', true)
						setStorage('phone', this.param.phone)
						uni.switchTab({
							url: getApp().globalData.fm,
							fail: () => {
								uni.reLaunch({
									url: APPLY,
								})
							}
						})
					})
				} else {
					uni.showToast({
						title: '信息不全,请完善',
						icon: 'none',
						duration: 2000
					})
				}
			} 

		}
	}
</script>

<style scoped>
	.login{
		height: 100px;
		background: rgba(255, 255, 255, 1);
	}
	.login-hd {
		height: 65px;
		padding: 28px 0 12px 0;
		text-align: center;
	}
	.login-hd image{
		height: 65px;
		width: 65px;
	}
	.text{
		width:109px;
		height:25px;
		font-size:18px;
		font-family:PingFangSC-Semibold,PingFang SC;
		font-weight:600;
		color:rgba(51,51,51,1);
		line-height:25px;
		margin: 0 auto;
	}
	.input{
		width:104px;
		height:24px;
		font-size:17px;
		font-family:PingFangSC-Regular,PingFang SC;
		font-weight:400;
		color:rgba(204,204,204,1);
		line-height:24px;
	}
	.getcode{
		width:72px;
		height:20px;
		font-size:14px;
		font-family:PingFangSC-Regular,PingFang SC;
		font-weight:400;
		color:rgba(51,51,51,1);
		line-height:20px;
	}
	.btn{
		margin: 30.25px 16px;
		height:47px;
		background:rgba(232,190,46,1);
		border-radius:2px;
		text-align: center;
		line-height: 47px;
		color: #FFFFFF;
		font-size: 18px;
	}
</style>
