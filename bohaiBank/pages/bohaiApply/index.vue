<template>
	<view class="bohaiApply">
		<image :src="img" mode="" class="bohai-img"></image>
		<view  style="border-left:10rpx solid #E8BE2E;padding-left: 5rpx;font-weight: 700;height: 40rpx;line-height: 40rpx ;margin: 15rpx 0;">申请人信息</view>
		<view class="bohaiApply_item">
			<view class="bohai_item_lable">姓名</view>
			<view class="bohai_item_content"><input type="text" placeholder="姓名" placeholder-class="input_color" /></view>
		</view>
		<!-- <view class="bohaiApply_item">
					<view class="bohai_item_lable">房屋地址</view>
					<view class="bohai_item_content" @click="openAddres"><input type="text" v-model="pickerText" placeholder="房屋地址" placeholder-class="input_color" /> <icon style="margin-left: 150rpx;" class="iconfont icondizhi"></icon></view>
				</view> -->

		<view class="bohaiApply_item">
			<view class="bohai_item_lable">身份证号码</view>
			<view class="bohai_item_content "><input type="text" placeholder="身份证号码" placeholder-class="input_color" /></view>
		</view>
		<view class="bohaiApply_item">
			<view class="bohai_item_lable">婚姻状态</view>
			<view class="bohai_item_content">
				<radio-group @change="marriageRadioChange">
					<label class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in marriageItems" :key="item.value">
						<radio :value="item.value" :checked="index === marriageCurrent" />

						<text style="margin: 0 20rpx 0 10rpx;">{{ item.name }}</text>
					</label>
				</radio-group>
			</view>
		</view>
		<view>
			<view  style="border-left:10rpx solid #E8BE2E;padding-left: 5rpx;font-weight: 700;height: 40rpx;line-height: 40rpx ;margin: 15rpx 0;">配偶信息采集</view>
			<view class="bohaiApply_item">
				<view class="bohai_item_lable">姓名</view>
				<view class="bohai_item_content"><input type="text" placeholder="姓名" placeholder-class="input_color" /></view>
			</view>
			<view class="bohaiApply_item">
				<view class="bohai_item_lable">身份证号码</view>
				<view class="bohai_item_content "><input type="text" placeholder="身份证号码" placeholder-class="input_color" /></view>
			</view>
			<view class="bohaiApply_item" style="border-bottom:1px solid #FFFFFF ;">
				<view class="bohai_item_lable">结婚证</view>
				<view class="bohai_item_content "></view>
			</view>
			
				<view @click="chooseimage" class="marryPhoto" v-if="marryPaths === ''">
					
					<icon
						class="iconfont  iconpaizhao"
						
					></icon>
				</view>
			<image :src="marryPaths" mode="" v-if="marryPaths != ''" style="height: 180rpx;
	width: 260rpx;
	display: block;margin-left: 20rpx;"></image>
			
			<view class="bohaiApply_item" style="border-bottom:1px solid #FFFFFF ;">
				<view class="bohai_item_lable">配偶工作性质</view>
				<view class="bohai_item_content">
					<radio-group @change="spouseRadioChange">
						<label class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in spouseItems" :key="item.value">
							<radio :value="item.value" :checked="index === spouseCurrent" />
			
							<text style="margin: 0 20rpx 0 10rpx;">{{ item.name }}</text>
						</label>
					</radio-group>
				</view>
			</view>
			<view style="display: flex;">
				<view @click="chooseimage" class="marryPhoto" v-if="marryPaths === ''" style="position: relative;">
								
								<icon
									class="iconfont  iconpaizhao"
									
								></icon>
								<view style="position: absolute;left: 20rpx;top: 36rpx;font-size: 18rpx;">收入证明</view>
								
							</view>
				<view @click="chooseimage" class="marryPhoto" v-if="marryPaths === ''" style="margin-left: 20rpx;position: relative;">
								
								<icon
									class="iconfont  iconpaizhao"
									
								></icon>
								<view style="position: absolute;left: 20rpx;top: 36rpx;font-size: 18rpx;">工资流水</view>
							</view>
			</view>
			
					<image :src="marryPaths" mode="" v-if="marryPaths != ''" style="height: 180rpx;
			width: 260rpx;
			display: block;margin-left: 20rpx;"></image>
			
		</view>
		<view  style="border-left:10rpx solid #E8BE2E;padding-left: 5rpx;font-weight: 700;height: 40rpx;line-height: 40rpx ;margin: 15rpx 0;">贷款信息</view>
		<view class="bohaiApply_item">
			<view class="bohai_item_lable">贷款金额</view>
			<view class="bohai_item_content"><input type="text" placeholder="金额" placeholder-class="input_color" /></view>
		</view>
		<view class="bohaiApply_item">
			<view class="bohai_item_lable">贷款年限</view>
			<view class="bohai_item_content"><input type="text" placeholder="最大不能超过60年" placeholder-class="input_color" /></view>
		</view>
		<view class="bohaiApply_item">
			<view class="bohai_item_lable">还款方式</view>
			<view class="bohai_item_content" @click="bohaiBindPickerChange">
				<view class="bohai_item_content bohai_item_content_bohai">
					<view class="uni-list uni-input-style">
						<view class="uni-list-cell uni-input-style">
							<view class="uni-list-cell-db uni-input-style">
								<picker @change="bohaiBindPickerChange" :value="bohaiIndex" :range="bohaiArray">
									<view class="uni-input uni-input-style">{{ bohaiArray[bohaiIndex] }}</view>
								</picker>
							</view>
						</view>
					</view>
					<view class="iconfont  iconyou iconclass"></view>
				</view>
			</view>
		</view>
		<view class="bohaiApply_item">
			<view class="bohai_item_lable">贷款类型</view>
			<view class="bohai_item_content" @click="bohaiBindPickerChange">
				<view class="bohai_item_content bohai_item_content_bohai">
					<view class="uni-list uni-input-style">
						<view class="uni-list-cell uni-input-style">
							<view class="uni-list-cell-db uni-input-style">
								<picker @change="bohaiBindPickerChange" :value="bohaiIndex" :range="bohaiArray">
									<view class="uni-input uni-input-style">{{ bohaiArray[bohaiIndex] }}</view>
								</picker>
							</view>
						</view>
					</view>
					<view class="iconfont  iconyou iconclass"></view>
				</view>
			</view>
		</view>
		<view class="bohaiApply_item">
			<view class="bohai_item_lable">联系电话</view>
			<view class="bohai_item_content"><input type="text" placeholder="电话" placeholder-class="input_color" /></view>
		</view>
		<view  style="border-left:10rpx solid #E8BE2E;padding-left: 5rpx;font-weight: 700;height: 40rpx;line-height: 40rpx ;margin: 15rpx 0;">信息采集</view>
        <view  style="padding-left: 5rpx;font-weight: 700;height: 40rpx;line-height: 40rpx ;margin: 15rpx 0;color: #666666;">身份证信息</view>
		<view style="display: flex;">
			<view @click="chooseimage" class="marryPhoto" v-if="marryPaths === ''" style="position: relative;">
							
							<icon
								class="iconfont  iconpaizhao"
								
							></icon>
							<view style="position: absolute;left: 20rpx;top: 36rpx;font-size: 18rpx;">收入证明</view>
							
						</view>
			<view @click="chooseimage" class="marryPhoto" v-if="marryPaths === ''" style="margin-left: 20rpx;position: relative;">
							
							<icon
								class="iconfont  iconpaizhao"
								
							></icon>
							<view style="position: absolute;left: 20rpx;top: 36rpx;font-size: 18rpx;">工资流水</view>
						</view>
		</view>
		
				<image :src="marryPaths" mode="" v-if="marryPaths != ''" style="height: 180rpx;
		width: 260rpx;
		display: block;margin-left: 20rpx;"></image>
		
		<view  style="padding-left: 5rpx;font-weight: 700;height: 40rpx;line-height: 40rpx ;margin: 15rpx 0;color: #666666;">户口本信息</view>
		<view style="display: flex;">
			<view @click="chooseimage" class="marryPhoto" v-if="marryPaths === ''" style="position: relative;">
							
							<icon
								class="iconfont  iconpaizhao"
								
							></icon>
							<view style="position: absolute;left: 30rpx;top: 36rpx;font-size: 18rpx;">首页</view>
							
						</view>
			<view @click="chooseimage" class="marryPhoto" v-if="marryPaths === ''" style="margin-left: 20rpx;position: relative;">
							
							<icon
								class="iconfont  iconpaizhao"
								
							></icon>
							<view style="position: absolute;left: 30rpx;top: 36rpx;font-size: 18rpx;">户主页</view>
						</view>
			<view @click="chooseimage" class="marryPhoto" v-if="marryPaths === ''" style="margin-left: 20rpx;position: relative;">
							
							<icon
								class="iconfont  iconpaizhao"
								
							></icon>
							<view style="position: absolute;left: 30rpx;top: 36rpx;font-size: 18rpx;">本人页</view>
						</view>
		</view>
		
				<image :src="marryPaths" mode="" v-if="marryPaths != ''" style="height: 180rpx;
		width: 260rpx;
		display: block;margin-left: 20rpx;"></image>
		
		
		<view class="bohaiApply_item" style="border-bottom:1px solid #FFFFFF ;">
			<view class="bohai_item_lable">工作性质</view>
			<view class="bohai_item_content">
				<radio-group @change="spouseRadioChange">
					<label class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in spouseItems" :key="item.value">
						<radio :value="item.value" :checked="index === spouseCurrent" />
		
						<text style="margin: 0 20rpx 0 10rpx;">{{ item.name }}</text>
					</label>
				</radio-group>
			</view>
		</view>
		<view style="display: flex;">
			<view @click="chooseimage" class="marryPhoto" v-if="marryPaths === ''" style="position: relative;">
							
							<icon
								class="iconfont  iconpaizhao"
								
							></icon>
							<view style="position: absolute;left: 20rpx;top: 36rpx;font-size: 18rpx;">收入证明</view>
							
						</view>
			<view @click="chooseimage" class="marryPhoto" v-if="marryPaths === ''" style="margin-left: 20rpx;position: relative;">
							
							<icon
								class="iconfont  iconpaizhao"
								
							></icon>
							<view style="position: absolute;left: 20rpx;top: 36rpx;font-size: 18rpx;">工资流水</view>
						</view>
		</view>
		<view class="bohaiApply_item" style="border-bottom:1px solid #FFFFFF ;">
			<view class="bohai_item_lable">预约时间为：</view>
			<view class="bohai_item_content">{{value}}</view>
		</view>
		<!-- <view class="bohaiApply_item">
			<view class="bohai_item_lable">小区名称</view>
			<view class="bohai_item_content"><input type="text" placeholder="小区名称" placeholder-class="input_color" /></view>
		</view>
		<view class="bohaiApply_item">
			<view class="bohai_item_lable">房屋面积</view>
			<view class="bohai_item_content"><input type="text" placeholder="房屋面积" placeholder-class="input_color" /></view>
		</view>
		<view class="bohaiApply_item">
			<view class="bohai_item_lable">装修预算</view>
			<view class="bohai_item_content" @click="bohaiBindPickerChange">
				<view class="bohai_item_content bohai_item_content_bohai">
					<view class="uni-list uni-input-style">
						<view class="uni-list-cell uni-input-style">
							<view class="uni-list-cell-db uni-input-style">
								<picker @change="bohaiBindPickerChange" :value="bohaiIndex" :range="bohaiArray">
									<view class="uni-input uni-input-style">{{ bohaiArray[bohaiIndex] }}</view>
								</picker>
							</view>
						</view>
					</view>
					<view class="iconfont  iconyou iconclass"></view>
				</view>
			</view>
		</view> -->
		<view class="bohaiApply_item">
			<view class="bohai_item_lable">联系方式</view>
			<view class="bohai_item_content"><input type="text" placeholder="手机号" placeholder-class="input_color" /></view>
		</view>
		<view style="text-align: center;padding-bottom: 10rpx;height: 20rpx;">
			<label class="radio" style="font-size: 25rpx;">
				<radio value="r1" :checked="agree" @click="agree = !agree" />
				同意
				<label class="noticeBook" @click="open" style="color: #333333;">《用户告知书》</label>
			</label>
		</view>
		<view class="bohaiApply_ft"><view class="btn" @click="submit">提交</view></view>
		<!-- <uni-popup ref="popup" type="center">底部弹出 Popup</uni-popup> -->
		<uni-popup ref="popup" type="center" :mask-click="false" @change="change">
			<view class="uni-tip">
				<text class="uni-tip-title">用户告知书</text>
				<text class="uni-tip-content">内容</text>
				<view class="uni-tip-group-button">
					<text class="uni-tip-button" @click="cancel('tip')">取消</text>
					<text class="uni-tip-button" @click="cancel('tip')">确定</text>
				</view>
			</view>
		</uni-popup>
		<!-- <simple-address ref="simpleAddress" :pickerValueDefault="cityPickerValueDefault" @onConfirm="onConfirm" themeColor='#007AFF'></simple-address> -->
	</view>
</template>

<script>
'use strict';
var _self;
import { BOHAI_LOGO } from '@/config/image.js';
import uniPopup from '@/components/uni-popup/uni-popup.vue';
import status from '../../utils/status.js'
export default {
	components: {
		uniPopup
	},
	data() {
		return {
			img: BOHAI_LOGO,
			// cityPickerValueDefault: [0, 0, 1],
			//                 pickerText: '',
			bohaiArray: ['中国', '美国', '巴西', '日本'],
			bohaiIndex: 0,
			marriageCurrent:0,
			marriageItems: [
				{
					value: 'CHN',
					name: '未婚'
				},
				{
					value: 'USA',
					name: '已婚'
				},
				
				{
					value: 'CH',
					name: '离异'
				}
			],
			marryPaths: '',
			spouseCurrent:0,
			spouseItems: [
				{
					value: 'USA',
					name: '企业职员'
				},
				{
					value: 'CHN',
					name: '法人'
				}
			],
			value:''
			
			
		};
	},
	methods: {
		// openAddres() {

		//                 this.$refs.simpleAddress.open();
		//             },
		//             onConfirm(e) {

		// 				var b=e.label.split('-')
		// 				// console.log(e)

		//                 this.pickerText = b[0]+' '+ b[1]+' '+b[2]
		//             },
		open() {
			this.$refs.popup.open();
		},
		cancel() {
			this.$refs.popup.close();
		},
		change(e) {
			console.log('是否打开:' + e.show);
		},
		bohaiBindPickerChange: function(e) {
			console.log('picker发送选择改变，携带值为', e.target.value);
			this.bohaiIndex = e.target.value;
		},
		submit() {
			// uni.navigateTo({
			// 	url:CHOOSEBUSSINESS
			// })
		},
		marriageRadioChange: function(evt) {
			for (let i = 0; i < this.marriageItems.length; i++) {
				if (this.marriageItems[i].value === evt.target.value) {
					this.marriageCurrent = i;
					break;
				}
			}
		},
		spouseRadioChange: function(evt) {
			for (let i = 0; i < this.spouseItems.length; i++) {
				if (this.spouseItems[i].value === evt.target.value) {
					this.spouseCurrent = i;
					break;
				}
			}
		},
		// 选择照片
		chooseimage: function() {
			var _this = this;
			uni.chooseImage({
				count: 9, // 默认9
				sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
				sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
				success: function(res) {
					// 返回选定照片的本地文件路径列表，marryPath可以作为img标签的src属性显示图片
					_self.marryPaths = res.tempFilePaths;
				}
			});
		},
		getTime:function(){
		
		var date = new Date(),
		year = date.getFullYear(),
		month = date.getMonth() + 1,
		day = date.getDate(),
		hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours(),
		minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes(),
		second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
		month >= 1 && month <= 9 ? (month = "0" + month) : "";
		day >= 0 && day <= 9 ? (day = "0" + day) : "";
		var timer = year  + month + day ;
		return timer;
		},
	},
	async onLoad() {
		_self = this;
		var data=this.getTime()
		
		
	}
};
</script>

<style scoped>
.bohai-img {
	display: block;
	width: 100%;
	height: 108px;
}
.bohaiApply {
	font-size: 32rpx;
	color: #333333;
	background: rgba(255, 255, 255, 1);
	height: 2600rpx;
	position: relative;
	margin: 0 20rpx;
}

.bohaiApply_item {
	height: 82rpx;
	display: flex;
	line-height: 82rpx;
	border-bottom: 2rpx solid rgba(229, 229, 229, 1);
}
.bohai_item_lable {
	flex-basis: 200rpx;
	padding-left: 20rpx;
}
.bohai_item_content {
	flex: 1;
	display: flex;
	align-items: center;
}
.bohai_item_content_bohai {
	position: relative;
}
.iconclass {
	position: absolute;
	right: 0;
}
.uni-input-style {
	width: 100%;
}
.input_color {
	color: #dbdbdb;
}
.bohaiApply_ft {
	position: absolute;
	left: 0;
	bottom: 20rpx;
	width: 100%;
	height: 100rpx;
}
.marryPhoto{
	height: 100rpx;
	width: 100rpx;
	line-height: 100rpx;
	text-align: center;
	background: #C0C0C0;
	position: relative;
	margin-left: 20rpx;
}


.btn {
	height: 100rpx;

	text-align: center;
	line-height: 100rpx;
	border-radius: 5rpx;
	background: #e8be2e;
	color: #ffffff;
	margin-left: 20rpx;
	margin-right: 20rpx;
}
/* 提示窗口 */
.uni-tip {
	/* #ifndef APP-NVUE */
	display: flex;
	flex-direction: column;
	/* #endif */
	padding: 15px;
	width: 300px;
	background-color: #fff;
	border-radius: 10px;
}
.uni-tip-title {
	margin-bottom: 10px;
	text-align: center;
	font-weight: bold;
	font-size: 16px;
	color: #333;
}

.uni-tip-content {
	/* padding: 15px;
	*/
	font-size: 14px;
	color: #666;
}

.uni-tip-group-button {
	/* #ifndef APP-NVUE */
	display: flex;
	/* #endif */
	flex-direction: row;
	margin-top: 20px;
}

.uni-tip-button {
	flex: 1;
	text-align: center;
	font-size: 14px;
	color: #3b4144;
}
</style>
