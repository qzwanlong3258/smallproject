<template>
	<view class="bohaiApply">
		<image :src="img" mode="" class="bohai-img"></image>
		<view style="height:28px ;display: flex;"> 
		<view class="shuxian" ></view>
		<view class="title" >申请人信息</view></view>
		<view class="bohaiApply_item">
			<view class="bohai_item_lable">姓名</view>
			<view class="bohai_item_content"><input type="text" v-model="dataList.name" placeholder="请输入姓名" placeholder-class="input_color" /></view>
		</view>
		<!-- <view class="bohaiApply_item">
					<view class="bohai_item_lable">房屋地址</view>
					<view class="bohai_item_content" @click="openAddres"><input type="text" v-model="pickerText" placeholder="房屋地址" placeholder-class="input_color" /> <icon style="margin-left: 150rpx;" class="iconfont icondizhi"></icon></view>
				</view> -->
		<view class="bohaiApply_item">
			<view class="bohai_item_lable">身份证号码</view>
			<view class="bohai_item_content "><input type="number" v-model="dataList.certificateCode" placeholder="请输入身份证" maxlength="18" placeholder-class="input_color" /></view>
		</view>
		<!-- 婚姻状态 -->
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
		<view style="height:28px ;display: flex;">
		<view class="shuxian" ></view>
		<view class="title" >贷款信息</view></view>
		<!-- 贷款金额 -->
		<view class="bohaiApply_item">
			<view class="bohai_item_lable">贷款金额</view>
			<view class="bohai_item_content"><input type="number" v-model="dataList.loanAmount" placeholder="请输入贷款金额" placeholder-class="input_color" /></view>
		</view>
		<!-- 贷款年限 -->
		<view class="bohaiApply_item">
			<view class="bohai_item_lable">贷款年限</view>
			<view class="bohai_item_content"><input type="number" v-model="dataList.loanPeriod" placeholder="请输入贷款年限 " placeholder-class="input_color" /></view>
		</view>
		<!-- 还款方式 -->
		<view class="bohaiApply_item">
			<view class="bohai_item_lable">还款方式</view>
			<view class="bohai_item_content" >
				<view class="bohai_item_content bohai_item_content_bohai">
					<view class="uni-list uni-input-style">
						<view class="uni-list-cell uni-input-style">
							<view class="uni-list-cell-db uni-input-style">
								<picker @change="repayBindPickerChange" :value="repayIndex" :range="repayArray">
									<view class="uni-input uni-input-style">{{ repayArray[repayIndex] }}</view>
								</picker>
							</view>
						</view>
					</view>
					<view class="iconfont  iconyou iconclass"></view>
				</view>
			</view>
		</view>
		<!-- 贷款类型 -->
		<view class="bohaiApply_item">
			<view class="bohai_item_lable">贷款类型</view>
			<view class="bohai_item_content" >
				<view class="bohai_item_content bohai_item_content_bohai">
					<view class="uni-list uni-input-style">
						<view class="uni-list-cell uni-input-style">
							<view class="uni-list-cell-db uni-input-style">
								<picker @change="loanBindPickerChange" :value="loanIndex" :range="loanArray">
									<view class="uni-input uni-input-style">{{ loanArray[loanIndex] }}</view>
								</picker>
							</view>
						</view>
					</view>
					<view class="iconfont  iconyou iconclass"></view>
				</view>
			</view>
		</view>
		<!-- 电话 -->
		<view class="bohaiApply_item">
			<view class="bohai_item_lable">联系电话</view>
			<view class="bohai_item_content"><input type="number" v-model="dataList.phone" placeholder="请输入电话" placeholder-class="input_color" /></view>
		</view>
		<view style="height:28px ;display: flex;">
		<view class="shuxian" ></view>
		<view class="title" >信息采集</view></view>
		
        <view  class="titleChild">身份证信息</view>
		<!-- 照相 身份证 -->
		<view style="display: flex;border-bottom: 1px solid #EEEEEE;">
			<!-- 正面 -->
			<view class="photo-box" @click="chooseimage('cardBeforeImg')" v-if="dataList.cardBeforeImg === ''">
				<icon
					class="iconfont  iconpaizhao iconphoto"
					
				></icon>
				<view class="icon-text">正面</view>
			</view>
			<image :src="dataList.cardBeforeImg" mode="" v-if="dataList.cardBeforeImg != ''" style="height: 180rpx;
			width: 260rpx;
			display: block;margin-left: 20rpx;"></image>
			<!-- 反面 -->
			<view class="photo-box" @click="chooseimage('cardAfterImg')" v-if="dataList.cardAfterImg === ''">
				<icon
					class="iconfont  iconpaizhao iconphoto"
					
				></icon>
				<view class="icon-text">背面</view>
			</view>
			<image :src="dataList.cardAfterImg" mode="" v-if="dataList.cardAfterImg != ''" style="height: 180rpx;
			width: 260rpx;
			display: block;margin-left: 16px;"></image>
			
		</view>
		<view  class="titleChild">户口本信息</view>
		<!-- 照相 户口 -->
		<view style="display: flex;border-bottom: 1px solid #EEEEEE;">
			<!-- 首页 -->
			<view class="photo-box" @click="chooseimage('bookletIndexImg')" v-if="dataList.bookletIndexImg === ''">
				<icon
					class="iconfont  iconpaizhao iconphoto"
					
				></icon>
				<view class="icon-text">首页</view>
			</view>
			<image :src="dataList.bookletIndexImg" mode="" v-if="dataList.bookletIndexImg != ''" style="height: 180rpx;
			width: 260rpx;
			display: block;margin-left: 20rpx;"></image>
			<!-- 户主页 -->
			<view class="photo-box" @click="chooseimage('bookletThisImg')" v-if="dataList.bookletThisImg === ''">
				<icon
					class="iconfont  iconpaizhao iconphoto"
					
				></icon>
				<view class="icon-text">户主页</view>
			</view>
			<image :src="dataList.bookletThisImg" mode="" v-if="dataList.bookletThisImg != ''" style="height: 180rpx;
			width: 260rpx;
			display: block;margin-left: 16px;"></image>
			<!-- 本人页 -->
			<view class="photo-box" @click="chooseimage('bookletMainImg')" v-if="dataList.bookletMainImg === ''">
				<icon
					class="iconfont  iconpaizhao iconphoto"
					
				></icon>
				<view class="icon-text">本人页</view>
			</view>
			<image :src="dataList.bookletMainImg" mode="" v-if="dataList.bookletMainImg != ''" style="height: 180rpx;
			width: 260rpx;
			display: block;margin-left: 16px;"></image>
			
			
		</view>
		
			
				
		
		
		<view class="bohaiApply_item" style="border-bottom:1px solid #FFFFFF ;">
			<view class="bohai_item_lable">工作性质</view>
			<view class="bohai_item_content">
				<radio-group @change="thisRadioChange">
					<label class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in thisItems" :key="item.value">
						<radio :value="item.value" :checked="index === thisCurrent" />
		
						<text style="margin: 0 20rpx 0 10rpx;">{{ item.name }}</text>
					</label>
				</radio-group>
			</view>
		</view>
		<!-- top  -->
		<view style="display: flex;border-bottom: 1px solid #EEEEEE;" v-if="thisCurrent ===0">
			<!-- 收入证明 -->
			<view class="photo-box" @click="chooseimage('thisRunningWater','incomeProof')" v-if="dataList.thisRunningWater[0].incomeProof === ''">
				<icon
					class="iconfont  iconpaizhao iconphoto"
					
				></icon>
				<view class="icon-text">收入证明</view>
			</view>
			<image :src="dataList.thisRunningWater[0].incomeProof" mode="" v-if="dataList.thisRunningWater[0].incomeProof != ''" style="height: 180rpx;
			width: 260rpx;
			display: block;margin-left: 20rpx;"></image>
			<!-- 工资流水 -->
			<view class="photo-box" @click="chooseimage('thisRunningWater','incomeWater')" v-if="dataList.thisRunningWater[0].incomeWater === ''">
				<icon
					class="iconfont  iconpaizhao iconphoto"
					
				></icon>
				<view class="icon-text">工资流水</view>
			</view>
			<image :src="dataList.thisRunningWater[0].incomeWater" mode="" v-if="dataList.thisRunningWater[0].incomeWater != ''" style="height: 180rpx;
			width: 260rpx;
			display: block;margin-left: 16px;"></image>
			
		</view>
		<!-- top  -->
		<view style="display: flex;border-bottom: 1px solid #EEEEEE;" v-if="thisCurrent ===1">
			<!-- 营业执照 -->
			<view class="photo-box" @click="chooseimage('thisRunningWater','license')" v-if="dataList.thisRunningWater[0].license === ''">
				<icon
					class="iconfont  iconpaizhao iconphoto"
					
				></icon>
				<view class="icon-text">营业执照</view>
			</view>
			<image :src="dataList.thisRunningWater[0].license" mode="" v-if="dataList.thisRunningWater[0].license != ''" style="height: 180rpx;
			width: 260rpx;
			display: block;margin-left: 20rpx;"></image>
			<!-- 企业流水 -->
			<view class="photo-box" @click="chooseimage('thisRunningWater','busFlow')" v-if="dataList.thisRunningWater[0].busFlow === ''">
				<icon
					class="iconfont  iconpaizhao iconphoto"
					
				></icon>
				<view class="icon-text">企业流水</view>
			</view>
			<image :src="dataList.thisRunningWater[0].busFlow" mode="" v-if="dataList.thisRunningWater[0].busFlow != ''" style="height: 180rpx;
			width: 260rpx;
			display: block;margin-left: 16px;"></image>
			
		</view>
		
		
		<view v-if="marriageCurrent === 1">
			<view style="height:28px ;display: flex;">
			<view class="shuxian" ></view>
			<view class="title" >配偶信息采集</view></view>
				
				<view class="bohaiApply_item">
					<view class="bohai_item_lable">姓名</view>
					<view class="bohai_item_content"><input type="text" v-model="dataList.marriageName" placeholder="请输入姓名" placeholder-class="input_color" /></view>
				</view>
				<view class="bohaiApply_item">
					<view class="bohai_item_lable">身份证号码</view>
					<view class="bohai_item_content "><input type="number" maxlength="18" v-model="dataList.marriageCertificateCode" placeholder="请输入身份证" placeholder-class="input_color" /></view>
				</view>
				<!-- 结婚证  -->
				<view style="display: flex;border-bottom: 1px solid #EEEEEE;" >
					<!-- 结婚证 -->
					<view class="photo-box" @click="chooseimage('marriageCertificateType')" v-if="dataList.marriageCertificateType === ''">
						<icon
							class="iconfont  iconpaizhao iconphoto"
							
						></icon>
						<view class="icon-text">结婚证</view>
					</view>
					<image :src="dataList.marriageCertificateType" mode="" v-if="dataList.marriageCertificateType != ''" style="height: 180rpx;
					width: 260rpx;
					display: block;margin-left: 20rpx;"></image>
					
				</view>
				
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
				<!-- top  -->
				<view style="display: flex;border-bottom: 1px solid #EEEEEE;" v-if="spouseCurrent ===0">
					<!-- 收入证明 -->
					<view class="photo-box" @click="chooseimage('spouseRunningWater','incomeProof')" v-if="dataList.spouseRunningWater[0].incomeProof === ''">
						<icon
							class="iconfont  iconpaizhao iconphoto"
							
						></icon>
						<view class="icon-text">收入证明</view>
					</view>
					<image :src="dataList.spouseRunningWater[0].incomeProof" mode="" v-if="dataList.spouseRunningWater[0].incomeProof != ''" style="height: 180rpx;
					width: 260rpx;
					display: block;margin-left: 20rpx;"></image>
					<!-- 工资流水 -->
					<view class="photo-box" @click="chooseimage('spouseRunningWater','incomeWater')" v-if="dataList.spouseRunningWater[0].incomeWater === ''">
						<icon
							class="iconfont  iconpaizhao iconphoto"
							
						></icon>
						<view class="icon-text">工资流水</view>
					</view>
					<image :src="dataList.spouseRunningWater[0].incomeWater" mode="" v-if="dataList.spouseRunningWater[0].incomeWater != ''" style="height: 180rpx;
					width: 260rpx;
					display: block;margin-left: 16px;"></image>
					
				</view>
				<!-- top  -->
				<view style="display: flex;border-bottom: 1px solid #EEEEEE;" v-if="spouseCurrent ===1">
					<!-- 营业执照 -->
					<view class="photo-box" @click="chooseimage('spouseRunningWater','license')" v-if="dataList.spouseRunningWater[0].license === ''">
						<icon
							class="iconfont  iconpaizhao iconphoto"
							
						></icon>
						<view class="icon-text">营业执照</view>
					</view>
					<image :src="dataList.spouseRunningWater[0].license" mode="" v-if="dataList.spouseRunningWater[0].license != ''" style="height: 180rpx;
					width: 260rpx;
					display: block;margin-left: 20rpx;"></image>
					<!-- 企业流水 -->
					<view class="photo-box" @click="chooseimage('spouseRunningWater','busFlow')" v-if="dataList.spouseRunningWater[0].busFlow === ''">
						<icon
							class="iconfont  iconpaizhao iconphoto"
							
						></icon>
						<view class="icon-text">企业流水</view>
					</view>
					<image :src="dataList.spouseRunningWater[0].busFlow" mode="" v-if="dataList.spouseRunningWater[0].busFlow != ''" style="height: 180rpx;
					width: 260rpx;
					display: block;margin-left: 16px;"></image>
					
				</view>
			</view>
		<!-- 离婚证  -->
		<view style="display: flex;border-bottom: 1px solid #EEEEEE;"  v-if='marriageCurrent === 2'>
			<!-- 离婚证 -->
			<view class="photo-box" @click="chooseimage('divorce')" v-if="dataList.divorce === ''">
				<icon
					class="iconfont  iconpaizhao iconphoto"
					
				></icon>
				<view class="icon-text">离婚证</view>
			</view>
			<image :src="dataList.divorce" mode="" v-if="dataList.divorce != ''" style="height: 180rpx;
			width: 260rpx;
			display: block;margin-left: 20rpx;"></image>
			
		</view>
		<view class="bohaiApply_item" style="border-bottom:1px solid #FFFFFF ;">
			<view class="bohai_item_lable">预约时间为：</view>
			<view class="bohai_item_content" @click="dateopen">
				<hTimePicker sTime="15" cTime="15" interval="1" sDay='2' @changeTime="startChangeTime">
				 
				    <input v-model="startTime" type="text" slot="pCon" class="changeTime" placeholder="起始日期">
				  
				</hTimePicker>
				<hTimePicker sTime="15" cTime="15" interval="1" sDay='2' @changeTime="closeChangeTime">
				 
				    <input v-model="closeTime" type="text" slot="pCon" class="changeTime" placeholder="结束日期">
				  
				</hTimePicker>
			</view>
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
		<!-- <view class="bohaiApply_item">
			<view class="bohai_item_lable">联系方式</view>
			<view class="bohai_item_content"><input type="text" placeholder="手机号" placeholder-class="input_color" /></view>
		</view> -->
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
import { BOHAI } from '@/config/image.js';
import uniPopup from '@/components/uni-popup/uni-popup.vue';
import status from '../../utils/status.js';
import hTimePicker from "@/components/h-timePicker/h-timePicker.vue";
import {
		submitData
	} from '@/api/submit.js'
import {
		getStorage
	} from '@/utils/storage.js'
export default {
	components: {
		uniPopup,
		 hTimePicker
	},
	data() {
		return {
			dataList:{
				cardBeforeImg:'',
				cardAfterImg:'',
				bookletIndexImg:'',
				bookletThisImg:'',
				bookletMainImg:'',
				marriageCertificateType:'' ,//结婚证
				divorce:'',
				thisRunningWater:[
					{
						incomeProof:'',
						incomeWater:'',
						license:'',
						busFlow:''
					}
				],
				spouseRunningWater:[
					{
						incomeProof:'',
						incomeWater:'',
						license:'',
						busFlow:''
					}
				]
			},
			img: BOHAI,
			// cityPickerValueDefault: [0, 0, 1],
			//                 pickerText: '',
			showCaledar:false,
			bohaiArray: ['中国', '美国', '巴西', '日本'],
			bohaiIndex: 0,
			repayArray: ['等额本息', '等额本金'],
			repayIndex: 0,
			loanArray: ['商业贷款', '公积金贷款','组合贷款'],
			loanIndex: 0,
			marriageCurrent:0,
			marriageItems: [
				{
					value: '未婚',
					name: '未婚'
				},
				{
					value: '已婚',
					name: '已婚'
				},
				
				{
					value: '离异',
					name: '离异'
				}
			],
			marryPaths: '',
			thisCurrent:0,
			thisItems: [
				{
					value: '企业职员',
					name: '企业职员'
				},
				{
					value: '法人',
					name: '法人'
				}
			],
			spouseCurrent:0,
			spouseItems: [
				{
					value: '企业职员',
					name: '企业职员'
				},
				{
					value: '法人',
					name: '法人'
				}
			],
			value:'',
			startTime:'',
			closeTime:''
			
			
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
		repayBindPickerChange: function(e) {
			
			console.log('picker发送选择改变，携带值为', e.target.value);
			this.repayIndex = e.target.value;
			_self.dataList.refundType = this.repayArray[e.target.value]
		},
		loanBindPickerChange: function(e) {
			console.log('picker发送选择改变，携带值为', e.target.value);
			this.loanIndex = e.target.value;
			_self.dataList.loanType = this.loanArray[e.target.value]
		},
		submit() {
			// uni.navigateTo({
			// 	url:CHOOSEBUSSINESS
			// })
			submitData(this.dataList).then(res=>{
				 uni.showToast({  
				                        icon:"none",  
				                        content:'提交成功'  
				                     });
			})
			console.log(this.dataList)
		},
		marriageRadioChange: function(evt) {
			for (let i = 0; i < this.marriageItems.length; i++) {
				if (this.marriageItems[i].value === evt.target.value) {
					this.marriageCurrent = i;
					_self.dataList.marriageState = evt.target.value
					break;
				}
			}
		},
		spouseRadioChange: function(evt) {
			for (let i = 0; i < this.spouseItems.length; i++) {
				if (this.spouseItems[i].value === evt.target.value) {
					this.spouseCurrent = i;
					_self.dataList.marriageWorkNature = evt.target.value
					break;
				}
			}
		},
		thisRadioChange: function(evt) {
			for (let i = 0; i < this.thisItems.length; i++) {
				if (this.thisItems[i].value === evt.target.value) {
					this.thisCurrent = i;
					_self.dataList.workNature = evt.target.value
					break;
				}
			}
		},
		// 选择照片
		chooseimage: function(e,a) {
			var _this = this;
			uni.chooseImage({
				count: 9, // 默认9
				sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
				sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
				success: function(res) {
					// 返回选定照片的本地文件路径列表，marryPath可以作为img标签的src属性显示图片
					if(e ==='thisRunningWater'||e ==='spouseRunningWater') {
						_self.dataList[e][0][a]= res.tempFilePaths;
						return
					}
					_self.dataList[e] = res.tempFilePaths;
				}
			});
		},
		startChangeTime(e){
			console.log(e)
			_self.startTime = e
		},
		closeChangeTime(e){
			console.log(e)
			_self.closeTime = e
			_self.dataList.faceTime = this.startTime +'~'+this.closeTime
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
		// changeTime(e){
		// 	console.log(e)
		// },
	},
	async onLoad() {
		_self = this;
		_self.dataList.phone=getStorage('phone')?getStorage('phone'):''
		// var data=this.getTime()
		
		
	}
};
</script>

<style scoped>
.bohai-img {
	display: block;
	width: 100%;
	height: 150px;
}
.bohaiApply {
	font-size: 32rpx;
	color: #333333;
	background: rgba(255, 255, 255, 1);
	height: 2600rpx;
	position: relative;
	margin: 0 16px;
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
	font-size:13px;
	font-family:PingFangSC-Regular,PingFang SC;
	font-weight:400;
	color:rgba(102,102,102,1);
	
}
.bohai_item_content {
	flex: 1;
	display: flex;
	align-items: center;
	font-size:13px;
	font-family:PingFangSC-Regular,PingFang SC;
	font-weight:400;
}
.bohai_item_content_bohai {
	position: relative;
}
.shuxian{
	width:2px;
	height:18px;
	background:rgba(232,190,46,1);
	margin-top: 5px;
}
.title{
	padding-left: 5px;height:28px;
	font-size:17px;
	font-family:PingFangSC-Medium,PingFang SC;
	font-weight:500;
	color:rgba(51,51,51,1);
	line-height:28px;
}
.titleChild{
	width:87px;
	height:24px;
	font-size:15px;
	font-family:PingFangSC-Regular,PingFang SC;
	font-weight:400;
	color:rgba(102,102,102,1);
	line-height:24px;
}
.photo-box{
	width:56px;
	height:56px;
	background:rgba(248,248,248,1);
	border:1px solid rgba(238,238,238,1);
	text-align: center;
	line-height: 45px;
	margin: 8px;
}
.iconphoto{
	width:21px;
	height:18px;
	color: #999999;
	
}
.icon-text{
	margin-top: -5px;
	text-align: center;
	height:5px;
	font-size:10px;
	font-family:PingFangSC-Regular,PingFang SC;
	font-weight:400;
	color:rgba(102,102,102,1);
	line-height:5px;
}
.iconclass {
	position: absolute;
	right: 0;
}
.uni-input-style {
	width: 100%;
}
.input_color {
	
	color:#999999;
}
.bohaiApply_ft {
	margin-top: 30rpx;
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
