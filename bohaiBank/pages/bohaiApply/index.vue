<template>
	<view class="bohaiApply" :style="{height: bohaiApplyHeight}">
		<image :src="img" mode="widthFix" class="bohai-img"></image>
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
		<view class="title" >上传按揭贷款资料</view></view>
		
        <view  class="titleChild">身份证信息</view>
		<!-- 照相 身份证 -->
		<view style="display: flex;border-bottom: 1px solid #EEEEEE;">
			<scroll-view  scroll-x="true" style="flex: 1;white-space: nowrap;
			width: 100%;">
			<!-- 正面 -->
			<view class="photo-box" @click="chooseimage('cardBeforeImg')" v-if="dataL.cardBeforeImg === ''">
				<icon
					class="iconfont  iconpaizhao iconphoto"
					
				></icon>
				<view class="icon-text">正面</view>
			</view>
			<image :src="dataL.cardBeforeImg" mode="aspectFit" v-if="dataL.cardBeforeImg != ''" style="
			height: 150rpx;width: 230rpx;
			display: inline-block;margin-left: 20rpx;"></image>
			<!-- 反面 -->
			<view class="photo-box" @click="chooseimage('cardAfterImg')" v-if="dataL.cardAfterImg === ''">
				<icon
					class="iconfont  iconpaizhao iconphoto"
					
				></icon>
				<view class="icon-text">背面</view>
			</view>
			<image :src="dataL.cardAfterImg" mode="aspectFit" v-if="dataL.cardAfterImg != ''" style="
			width: 230rpx;height: 150rpx;
			display: inline-block;margin-left: 16px;"></image>
			</scroll-view>
		</view>
		<view  class="titleChild">户口本信息</view>
		<!-- 照相 户口 -->
		<view style="display: flex;border-bottom: 1px solid #EEEEEE;">
			<scroll-view  scroll-x="true" style="flex: 1;white-space: nowrap;
		width: 100%;">
			<!-- 首页 -->
			<view class="photo-box" @click="chooseimage('bookletIndexImg')" v-if="dataL.bookletIndexImg === ''">
				<icon
					class="iconfont  iconpaizhao iconphoto"
					
				></icon>
				<view class="icon-text">首页</view>
			</view>
			<image :src="dataL.bookletIndexImg" mode="aspectFit" v-if="dataL.bookletIndexImg != ''" style="
			width: 230rpx;height: 150rpx;
			display: inline-block;margin-left: 20rpx;"></image>
			<!-- 户主页 -->
			<view class="photo-box" @click="chooseimage('bookletThisImg')" v-if="dataL.bookletThisImg === ''">
				<icon
					class="iconfont  iconpaizhao iconphoto"
					
				></icon>
				<view class="icon-text">户主页</view>
			</view>
			<image :src="dataL.bookletThisImg" mode="aspectFit" v-if="dataL.bookletThisImg != ''" style="
			width: 230rpx;height: 150rpx;
			display: inline-block;margin-left: 16px;"></image>
			<!-- 本人页 -->
			<view class="photo-box" @click="chooseimage('bookletMainImg')" v-if="dataL.bookletMainImg === ''">
				<icon
					class="iconfont  iconpaizhao iconphoto"
					
				></icon>
				<view class="icon-text">本人页</view>
			</view>
			<image :src="dataL.bookletMainImg" mode="aspectFit" v-if="dataL.bookletMainImg != ''" style="
			width: 230rpx;height: 150rpx;
			display: inline-block;margin-left: 16px;"></image>
			
			</scroll-view>
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
			<scroll-view  scroll-x="true" style="flex: 1;white-space: nowrap;
			width: 100%;">
			<!-- 收入证明 -->
			<view class="photo-box" @click="chooseimage('incomeProof')" v-if="dataL.incomeProof === ''">
				<icon
					class="iconfont  iconpaizhao iconphoto"
					
				></icon>
				<view class="icon-text">收入证明</view>
			</view>
			<image :src="dataL.incomeProof" mode="aspectFit" v-if="dataL.incomeProof != ''" style="
			width: 230rpx;height: 150rpx;
			display: inline-block;margin-left: 20rpx;"></image>
			<!-- 工资流水 -->
			<image :src="item" v-for="(item,index) in dataL.thisRunningWater" :key="index" mode="aspectFit" v-if="item!= ''" style="
			width: 230rpx;height: 150rpx;
			display: inline-block;margin-left: 16px;"></image>
			<view class="photo-box" @click="chooseimage('thisRunningWater')" >
				<icon
					class="iconfont  iconpaizhao iconphoto"
					
				></icon>
				<view class="icon-text">工资流水</view>
			</view>
			
			</scroll-view>
		</view>
		<!-- top  -->
		<view style="display: flex;border-bottom: 1px solid #EEEEEE;" v-if="thisCurrent ===1">
			<scroll-view  scroll-x="true" style="flex: 1;white-space: nowrap;
			width: 100%;">
			<!-- 营业执照 -->
			<view class="photo-box" @click="chooseimage('incomeProof')" v-if="dataL.incomeProof === ''">
				<icon
					class="iconfont  iconpaizhao iconphoto"
					
				></icon>
				<view class="icon-text">营业执照</view>
			</view>
			<image :src="dataList.incomeProof" mode="aspectFit" v-if="dataL.incomeProof != ''" style="
			width: 230rpx;height: 150rpx;
			display: inline-block;margin-left: 20rpx;"></image>
			<!-- 企业流水 -->
			<image :src="item" v-for="(item,index) in dataL.thisRunningWater" :key="index" mode="aspectFit" v-if="item != ''" style="
			width: 230rpx;height: 150rpx;
			display: inline-block;margin-left: 16px;"></image>
			
			<view class="photo-box" @click="chooseimage('thisRunningWater')" >
				<icon
					class="iconfont  iconpaizhao iconphoto"
					
				></icon>
				<view class="icon-text">企业流水</view>
			</view>
			</scroll-view>
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
					<scroll-view  scroll-x="true" style="flex: 1;white-space: nowrap;
					width: 100%;">
					<!-- 结婚证 -->
					<view class="photo-box" @click="chooseimage('marriageCertificateType')" v-if="dataL.marriageCertificateType === ''">
						<icon
							class="iconfont  iconpaizhao iconphoto"
							
						></icon>
						<view class="icon-text">结婚证</view>
					</view>
					<image :src="dataL.marriageCertificateType" mode="aspectFit" v-if="dataL.marriageCertificateType != ''" style="width: 230rpx;height: 150rpx;
			display: inline-block;margin-left: 20rpx;"></image>
					</scroll-view>
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
					<scroll-view  scroll-x="true" style="flex: 1;white-space: nowrap;
					width: 100%;">
					<!-- 收入证明 -->
					<view class="photo-box" @click="chooseimage('marriageIncomeProof')" v-if="dataL.marriageIncomeProof === ''">
						<icon
							class="iconfont  iconpaizhao iconphoto"
							
						></icon>
						<view class="icon-text">收入证明</view>
					</view>
					<image :src="dataL.marriageIncomeProof" mode="aspectFit" v-if="dataL.marriageIncomeProof != ''" style="
					width: 230rpx;height: 150rpx;
					display: inline-block;margin-left: 20rpx;"></image>
					<!-- 工资流水 -->
					<image :src="item" v-for="(item,index) in dataL.spouseRunningWater" :key="index" mode="aspectFit" v-if="item != ''" style="
					width: 230rpx;height: 150rpx;
					display: inline-block;margin-left: 16px;"></image>
					<view class="photo-box" @click="chooseimage('spouseRunningWater')" >
						<icon
							class="iconfont  iconpaizhao iconphoto"
							
						></icon>
						<view class="icon-text">工资流水</view>
					</view>
					
					</scroll-view>
				</view>
				<!-- top  -->
				<view style="display: flex;border-bottom: 1px solid #EEEEEE;" v-if="spouseCurrent ===1">
					<scroll-view  scroll-x="true" style="flex: 1;white-space: nowrap;
					width: 100%;">
					<!-- 营业执照 -->
					<view class="photo-box" @click="chooseimage('marriageIncomeProof')" v-if="dataL.marriageIncomeProof === ''">
						<icon
							class="iconfont  iconpaizhao iconphoto"
							
						></icon>
						<view class="icon-text">营业执照</view>
					</view>
					<image :src="dataL.marriageIncomeProof" mode="aspectFit" v-if="dataL.marriageIncomeProof != ''" style="
					width: 230rpx;height: 150rpx;
					display: inline-block;margin-left: 20rpx;"></image>
					<!-- 企业流水 -->
					<image :src="item" v-for="(item,index) in dataL.spouseRunningWater" :key="index" mode="aspectFit" v-if="item != ''" style="
					width: 230rpx;height: 150rpx;
					display: inline-block;margin-left: 16px;"></image>
					
					<view class="photo-box" @click="chooseimage('spouseRunningWater')" >
						<icon
							class="iconfont  iconpaizhao iconphoto"
							
						></icon>
						<view class="icon-text">企业流水</view>
					</view>
					</scroll-view>
				</view>
			</view>
		<!-- 离婚证  -->
		<view style="display: flex;border-bottom: 1px solid #EEEEEE;"  v-if='marriageCurrent === 2'>
			<scroll-view  scroll-x="true" style="flex: 1;white-space: nowrap;
			width: 100%;">
			<!-- 离婚证 -->
			<view class="photo-box" @click="chooseimage('divorce')" v-if="dataL.divorce === ''">
				<icon
					class="iconfont  iconpaizhao iconphoto"
					
				></icon>
				<view class="icon-text">离婚证</view>
			</view>
			<image :src="dataL.divorce" mode="aspectFit" v-if="dataL.divorce != ''" style="
			width: 230rpx;height: 150rpx;
			display: inline-block;margin-left: 20rpx;"></image>
			</scroll-view>
		</view>
		<view class="bohaiApply_item" style="border-bottom:1px solid #FFFFFF ;">
			<view class="bohai_item_lable">预约时间为：</view>
			<view class="bohai_item_content" @click="dateopen">
				<hTimePicker sTime="0" cTime="24" interval="1" sDay='2' @changeTime="startChangeTime">
				 
				    <input v-model="startTime" type="text" slot="pCon" class="changeTime" placeholder-style="color:#666666" placeholder="起始日期">
				  
				</hTimePicker>
				
			</view>
		</view>
		<view class="bohaiApply_item" style="border-bottom:1px solid #FFFFFF ;">
			<view class="bohai_item_lable"></view>
			<view class="bohai_item_content" @click="dateopen">
				
				<hTimePicker sTime="0" cTime="24" interval="1" sDay='2' @changeTime="closeChangeTime">
				 
				    <input v-model="closeTime" type="text" slot="pCon" placeholder-style="color:#666666" class="changeTime" placeholder="结束日期">
				  
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
		<view class="ft" style="position: fixed;height: 130rpx;width: 100%;left: 0;bottom: 20px;z-index: 800;background: #FFFFFF;">
			<view style="text-align: center;padding-bottom: 10rpx;height: 20rpx;">
				<label class="radio" style="font-size: 25rpx;">
					<radio value="r1" :checked="agree" @click="agre" />
					你已完全阅读并确认
					<label class="noticeBook" @click.stop="open" style="color: #333333;">《用户信息授权协议》</label>的内容
				</label>
			</view>
			<view class="bohaiApply_ft"><view class="btn" @click="submit">提交</view></view>
		</view>
		

		<!-- <uni-popup ref="popup" type="center">底部弹出 Popup</uni-popup> -->
		<uni-popup ref="popup" type="center" :mask-click="false" @change="change">
			<view class="uni-tip" >
				<text class="uni-tip-title">用户信息授权协议</text>
				<scroll-view   scroll-y="true" class="scroll-Y uni-tip-content"> 
				
				
					
					用户信息授权协议（以下简称“本协议”）是陕西非客金融科技有限公司（以下简称“非客金融”或“本公司”）与用户（以下简称“您”）就个人信息授权使用所订立的合约。您通过网络页面点击提交（或其他类似意思表示，以所在页面显示名称为准），即视为本人签署，构成具有约束力的法律文件。本协议适用于【非客金融】平台的所有相关服务。
					在接受本协议之前，请您仔细阅读本协议的全部内容（特别是以粗体下划线标注的内容）。如果您不同意本协议的任意内容，或者无法准确理解该条款的含义，请不要进行任何操作。
					一、非客金融是一家技术先进的互联网金融、装修服务平台，该平台及其合作机构通过整合互联网及传统数据源，运用成熟的量化方法及金融经验，为用户提供互联网金融、装修服务。
					二、在使用本服务前，您需符合下列要求：
					1、您使用该线上服务前所认筹或购买的房屋符合当地的法律法规，并能独立承担法律责任；
					2、您需提供真实、有效、完整和最新的个人信息、财产信息及个人通讯信息等。
					三、您明确对非客金融、各信用服务提供方及其书面指定的第三方作如下个人信息查询、使用授权：
					1、您理解并同意，您使用非客金融服务时，即授权本公司根据您所提供的各项信息（包括个人信息、财产信息及个人通讯信息等。）及本公司独立获得的信息评定您在本公司所拥有的个人信用风险，或决定是否审核通过您的服务申请。您向本公司提交有关信息和资料的行为，均应视为已合法授权本公司因提供本服务的需要，而对用户的相关信息进行采集、储存、整理、加工，并按照本服务条款的约定向第三方提交相关资料。在不透露单个用户的具体信息内容的前提下，本公司有权对整个用户数据库进行分析，并对用户数据库进行商业上的利用。
					2、您理解并同意，如您向本公司授权您的信用卡账单邮箱，本公司将可能读取您所授权的邮箱中的相关信息。
					3、您理解并同意，如您向本公司提交、绑定或授权您的银行卡信息/账户，本公司将可能：
					（1）查询并核对您的账户信息；
					（2）查询并读取您银资行卡账户中的交易信息；
					（3）基于您签署的相关融资协议通过您所授权或绑定的银行卡账户进行代收与代付服务。
					4、您理解并同意，如您向本公司授权您的微信账号、淘宝网账号、京东账号等网络身份账号，本公司将可能读取您所授权的账号中的相关信息。
					5、您理解并同意：您通过本公司服务，使用POP方式，或使用WEB和APP等其他方式，收取并获取第三方提供的有关您的各类信息的行为，均应视为您自愿将相关信息提交给本公司按照本服务条款的规定加以使用，且本公司对此已获得您的充分授权。上述信息，除了本条第2项、第3项、第4项、第5项所述以外，还包括本人个人及财产信息（包含本人的姓名、身份证号、银行卡号、公积金账户、芝麻信用信息、教育信息、联系人信息、不动产信息、车辆信息、驾照信息、出行信息、消费信息和消费行为、工作信息、社交信息、财产信息、资信状况、就业情况、收入情况、婚姻情况、地址信息、位置数据等），本人的通讯方式（包括但不限于固话、手机、宽带网络等）、通讯信息（包括但不限于通话纪录、短信记录、套餐使用情况、浏览网页情况等）及本人还款信息，以及将来本公司新增业务所可能涉及的其他信息。
					6、您理解并同意，为了向您提供约定服务之必要，可能需要您在第三方服务平台注册账户，为便于操作，您作为委托人不可撤销地在此授权本公司代为办理相关事项，包括但不限于以您的名义在平台上及平台指定的第三方支付机构注册账户并设置密码、代为提交材料、代为签署相关协议、代为接收或交付款项等，您承诺本公司作为受托人在该账户下进行的前述操作均代表委托人的真实意思表示，委托人承担因该等操作而产生或可能产生的一切法律后果，并按照该等合同或文件的约定行使权利并履行义务，您同意本公司有权将授权事项进行转委托。
					7、您理解并同意，在您使用非客金融提供的服务时，本公司将可能依据《征信业管理条例》及相关法律法规，向第三方支付/征信/金融机构合法了解、获取、核实您的信用信息。所获取的个人信用信息仅在非客金融业务中使用，且不向其他机构、个人提供或披露。
					8、本公司不会采集您的宗教信仰、基因、指纹、血型、疾病和病史信息以及法律、行政法规规定禁止采集的其他个人信息。
					9、您的收入、存款、有价证券、商业保险、不动产的信息和纳税数额等信息对于您而言是相当私密而重要的，如果您在使用本服务的过程中，向本公司提供了上述信息，您明确并保证，您已经充分理解并知晓该等信息被提供和使用的风险，包括但不限于；上述信息可能对您的信用评价、以及分析报告等结果产生不利影响，且该等信息被本公司依法提供给第三方后被他人不当利用的风险，以及因您的信用状况较好而造成您被不良信息骚扰的风险。
					10、您理解并同意，当第三方向本公司查询您的相应用户信息时，该第三方应当获得您的事先书面同意并约定用途，但是法律规定可以不经同意查询的除外。如果您希望本公司向第三方提供您的用户信息时，您应当向本公司提供清楚明确的授权，否则可能导致本公司不能提供该等服务，或错误提供该等服务，因此产生的后果应当由您自行承担。
					四、个人征信授权
					1、本人无条件、不可撤销地授权非客金融、各信用服务提供方及其书面指定的第三方可以根据国家规定或在业务存续期间出于向本人提供消费贷款及相关服务之目的，一次或多次向中国人民银行金融信用信息基础数据库查询、打印、保存并获取本人的个人征信信息，用于下述用途：（1）审核本人贷款申请；（2）处理贷后管理事务；（3）处理本人征信异议；（4）依法或经有权部门要求；（5）其他本人申请或办理的业务。
					2、本人无条件、不可撤销地同意并授权非客金融、各信用服务提供方及其书面指定的第三方，根据《征信业管理条例》和《个人信用信息基础数据库管理暂行办法》等相关法律法规及监管规则规定向中国人民银行金融信用信息基础数据库报送申请人个人信用信息以及可能对申请人信用状况构成负面影响的不良信息（如逾期情况等），并在法律、法规及规范性文件规定的用途范围内留存、审核、分析、报送和使用本人的个人信用报告。
					3、授权非客金融可以将本人在相关业务履行的不良信用记录向中国人民银行、监管部门或其指定的信用征集机构提供，且不再另行告知本人。
					五、非客金融、各信用服务提供方及其书面指定的第三方依据本授权书对本人的个人征信进行查询、使用及授信的期限自本授权书本人签署之日起至本人全部分期付款款项清偿完毕时止。非客金融、各信用服务提供方及其书面指定的第三方应依照相关法律、法规、规章的规定对通过查询掌握的本人个人隐私信息予以保密，且仅用于对本人作信贷信用审查及贷后管理之用途。
					六、本授权经接受后即时生效，且效力具有独立性，不因相关业务合同或条款无效或被撤销而无效或失效，本授权一经做出，便不可撤销。
					如因被授权人收集、使用、共享本人相关信息导致纠纷的，本人同意与被授权人友好协商解决，协商不成的，将争议或纠纷提交至纠纷所涉及的信用服务提供方所在地有管辖权的人民法院。
					本人已知悉本授权书全部内容（特别是加粗字体内容）的含义及因此产生的法律效力，自愿作出以上授权。本授权书是本人真实意思表示，本人同意承担由此带来的一切法律后果。
				
				
				</scroll-view>
				<text class="uni-tip-content">
					</text>
				<view class="uni-tip-group-button">
					<text class="uni-tip-button" @click="cancel('no')">取消</text>
					<text class="uni-tip-button" @click="cancel('ok')">确定</text>
				</view>
			</view>
			
		</uni-popup>
		<uniPopupOne ref="popupone" type="center" :mask-click="false" @popchange="popchange">
			<view class="uni-tip" style="height: 180px; position: relative;">
				
				<view class="iconfont iconcha" style="position: absolute;right: 20px;top: 10px;" @click="poponeclick"></view>
				<view style="height: 60px;width: 100%;text-align: center;"><image :src="rightimg" mode="aspectFill" style="width: 60px;height: 60px;"></image></view>
				
				<view style="height:21px;
font-size:15px;
font-family:PingFangSC-Medium,PingFang SC;
font-weight:500;
color:rgba(51,51,51,1);
line-height:21px; text-align: center;margin-top: 100px;"> 提交成功</view>
			</view>
			
		</uniPopupOne>
		
		<!-- <simple-address ref="simpleAddress" :pickerValueDefault="cityPickerValueDefault" @onConfirm="onConfirm" themeColor='#007AFF'></simple-address> -->
	</view>
</template>

<script>
'use strict';
var _self;
import { BOHAI ,RIGHT} from '@/config/image.js';
import uniPopup from '@/components/uni-popup/uni-popup.vue';
import uniPopupOne from '@/components/uni-popup/uni-popup.vue';
import status from '../../utils/status.js';
import hTimePicker from "@/components/h-timePicker/h-timePicker.vue";
import { LOGIN} from '@/config/router.js';
// import Word from "./components/text.vue";
import {
		submitData
	} from '@/api/submit.js'
import {
		getStorage,setStorage
	} from '@/utils/storage.js'
	import {
		UPLOAD
	} from '@/config/api.js';
export default {
	components: {
		uniPopup,
		 hTimePicker,
		 uniPopupOne
		 // Text
	},
	data() {
		return {
			bohaiApplyHeight:'2350rpx',
			dataList:{
				phone:'',
				cardBeforeImg:'',
				cardAfterImg:'',
				bookletIndexImg:'',
				bookletThisImg:'',
				bookletMainImg:'',
				marriageCertificateType:'' ,//结婚证
				divorce:'',
				marriageIncomeProof:'',
				incomeProof:'',
				thisRunningWater:[
					
				],
				spouseRunningWater:[
					
				]
			},
			dataL:{
				cardBeforeImg:'',
				cardAfterImg:'',
				bookletIndexImg:'',
				bookletThisImg:'',
				bookletMainImg:'',
				marriageCertificateType:'' ,//结婚证
				divorce:'',
				marriageIncomeProof:'',
				incomeProof:'',
				thisRunningWater:[
					
				],
				spouseRunningWater:[
					
				]
			},
			img: BOHAI,
			rightimg:RIGHT,
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
			closeTime:'',
			agree:false
			
			
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
		cancel(e) {
			this.$refs.popup.close();
			if(e == 'ok'){
				this.agree=true
			}
			if(e == 'no'){
				this.agree=false
			}
			console.log(this.agree)
		},
		poponeclick(){
			this.$refs.popupone.close();
		},
		popchange(e) {
			console.log('是否打开:' + e.show);
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
		agre() {
			_self.agree=!this.agree
		},
		submit() {
			// uni.navigateTo({
			// 	url:CHOOSEBUSSINESS
			// })
			// console.log(this.agree)
			if(!this.agree) {
				uni.showToast({
				    title: '请阅读用户信息授权协议',
				    duration: 2000,
					icon:'none'
				});
				return;
			}
			if(!this.dataList.name) {
				uni.showToast({
				    title: '请输入名字',
				    duration: 2000,
					icon:'none'
				});
				return;
			}
			if(!this.dataList.phone) {
				uni.showToast({
				    title: '请输入手机号',
				    duration: 2000,
					icon:'none'
				});
				return;
			}
			if(!this.dataList.certificateCode) {
				uni.showToast({
				    title: '请输入身份证',
				    duration: 2000,
					icon:'none'
				});
				return;
			}
			if(!this.dataList.loanAmount) {
				uni.showToast({
				    title: '请输入贷款金额',
				    duration: 2000,
					icon:'none'
				});
				return;
			}
			if(!this.dataList.loanPeriod) {
				uni.showToast({
				    title: '请输入贷款年限',
				    duration: 2000,
					icon:'none'
				});
				return;
			}
			if(!this.dataL.cardBeforeImg) {
				uni.showToast({
				    title: '请上传身份证正面',
				    duration: 2000,
					icon:'none'
				});
				return;
			}
			if(!this.dataL.cardAfterImg) {
				uni.showToast({
				    title: '请上传身份证背面',
				    duration: 2000,
					icon:'none'
				});
				return;
			}
			if(!this.dataL.bookletIndexImg) {
				uni.showToast({
				    title: '请上传户口本首页',
				    duration: 2000,
					icon:'none'
				});
				return;
			}
			if(!this.dataL.bookletThisImg) {
				uni.showToast({
				    title: '请上传户口本户主页',
				    duration: 2000,
					icon:'none'
				});
				return;
			}
			if(!this.dataL.bookletMainImg) {
				uni.showToast({
				    title: '请上传户口本本人页',
				    duration: 2000,
					icon:'none'
				});
				return;
			}
			if(!this.dataList.faceTime) {
				uni.showToast({
				    title: '请输入正确的预约时间',
				    duration: 2000,
					icon:'none'
				});
				return;
			}
			if(this.marriageCurrent ===1){
				if(!this.dataList.marriageName) {
					uni.showToast({
					    title: '请输入配偶姓名',
					    duration: 2000,
						icon:'none'
					});
					return;
				}
				if(!this.dataList.marriageCertificateCode) {
					uni.showToast({
					    title: '请输入配偶身份证',
					    duration: 2000,
						icon:'none'
					});
					return;
				}
				if(!this.dataL.marriageCertificateType) {
					uni.showToast({
					    title: '请上传结婚证',
					    duration: 2000,
						icon:'none'
					});
					return;
				}
				if(this.spouseCurrent === 0){
					if(!this.dataL.marriageIncomeProof) {
						uni.showToast({
						    title: '请完善信息后提交',
						    duration: 2000,
							icon:'none'
						});
						return;
					}
					if(!this.dataL.spouseRunningWater) {
						uni.showToast({
						    title: '请完善信息后提交',
						    duration: 2000,
							icon:'none'
						});
						return;
					}
				}
				if(this.spouseCurrent === 1){
					if(!this.dataL.marriageIncomeProof) {
						uni.showToast({
						    title: '请完善信息后提交',
						    duration: 2000,
							icon:'none'
						});
						return;
					}
					if(!this.dataL.spouseRunningWater) {
						uni.showToast({
						    title: '请完善信息后提交',
						    duration: 2000,
							icon:'none'
						});
						return;
					}
				}
				
			}
			if(this.marriageCurrent ===2){
				if(!this.dataL.divorce) {
					uni.showToast({
					    title: '请上传离婚证',
					    duration: 2000,
						icon:'none'
					});
					return;
				}
				
			}
			// console.log(this.thisCurrent)
			if(this.thisCurrent === 0){
				if(!this.dataL.incomeProof) {
					uni.showToast({
					    title: '请完善信息后提交',
					    duration: 2000,
						icon:'none'
					});
					return;
				}
				if(!this.dataL.thisRunningWater) {
					uni.showToast({
					    title: '请完善信息后提交',
					    duration: 2000,
						icon:'none'
					});
					return;
				}
			}
			// console.log(this.thisCurrent)
			if(this.thisCurrent === 1){
				if(!this.dataL.incomeProof) {
					uni.showToast({
					    title: '请完善信息后提交',
					    duration: 2000,
						icon:'none'
					});
					return;
				}
				if(!this.dataL.thisRunningWater) {
					uni.showToast({
					    title: '请完善信息后提交',
					    duration: 2000,
						icon:'none'
					});
					return;
				}
			}
			
			submitData(this.dataList).then(res=>{
				// uni.showToast({
				// 				title:'提交成功',
				// 			})
				// 			setTimeout(function(){
				// 				setStorage('isLogin', false)
				// 				uni.reLaunch({
				// 					url: LOGIN,
				// 				})
				// 			},3000)
				this.$refs.popupone.open();
				
				
				
			})
			console.log(this.dataList)
		},
		marriageRadioChange: function(evt) {
			for (let i = 0; i < this.marriageItems.length; i++) {
				if (this.marriageItems[i].value === evt.target.value) {
					this.marriageCurrent = i;
					_self.dataList.marriageState = evt.target.value
					if (i == 0){
						_self.bohaiApplyHeight = '2460rpx'
					}
					if (i == 1){
						_self.bohaiApplyHeight = '3100rpx'
					}
					if (i == 2){
						_self.bohaiApplyHeight = '2500rpx'
					}
					
					
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
		chooseimage: function(e) {
			var _this = this;
			uni.chooseImage({
				count: 9, // 默认9
				sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
				sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
				success: function(res) {
					// 返回选定照片的本地文件路径列表，marryPath可以作为img标签的src属性显示图片
					var imgFiles = res.tempFilePaths[0]
					
					
					uni.uploadFile({
					                            // 需要上传的地址
					                            url:UPLOAD,
					                            // filePath  需要上传的文件
					                            filePath: imgFiles,
					                            name: 'file',
					                            success: (res1) =>{
					                                // 显示上传信息
					        //                         console.log(res1)
													// console.log(_self)
													// console.log(e)
													// console.log(_self.dataList[e])
													// console.log(res1.data )
													let w=JSON.parse(res1.data)
													if(e ==='thisRunningWater'||e ==='spouseRunningWater') {
														_self.dataL[e].push(imgFiles);			
														_self.dataList[e].push(w.data);
														
													} else{
														_self.dataList[e] = w.data;
														_self.dataL[e] = imgFiles;
													}
													
													
					                            }
					                        });
					
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
	onLoad() {
		_self = this;
		_self.dataList.phone=getStorage('phone')?getStorage('phone'):''
		
		_self.dataList.refundType = this.repayArray[0]
		_self.dataList.loanType = this.loanArray[0]
		
		_self.dataList.marriageState = '未婚'
		_self.dataList.marriageWorkNature = '企业职员'
		_self.dataList.workNature = '企业职员'
		console.log(this.dataList)
		
		
		// var data=this.getTime()
		
		
	}
};
</script>

<style scoped>
.changeTime{
	background: #FFFFFF;
	border: 1px solid #EEEEEE;
}
.bohai-img {
	display: block;
	width: 100%;
	
}
.bohaiApply {
	font-size: 32rpx;
	color: #333333;
	background: rgba(255, 255, 255, 1);
	
	position: relative;
	margin: 0 16px;
	position: relative;
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
	
	font-weight:400;
	color:rgba(102,102,102,1);
	
}
.bohai_item_content {
	flex: 1;
	display: flex;
	align-items: center;
	font-size:13px;
	
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
	font-size:15px;
	font-family:PingFangSC-Medium,PingFang SC;
	font-weight:500;
	color:rgba(51,51,51,1);
	line-height:28px;
}
.titleChild{
	width:87px;
	height:24px;
	font-size:14px;
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
	display: inline-block;
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
.scroll-Y{
	height: 260px;
	
}
.uni-input-style {
	width: 100%;
}
.input_color {
	font-size:13px;
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
