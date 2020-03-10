import {
	request
} from '@/config/http.js';
import {
	LOGIN_NOWECAHT_LOGIN,
	SEND_VERIFICATION_CODE
} from '@/config/api.js';

//获取验证码
export function sendVerificationCode(data) {
	return request({
		method: 'post',
		url: SEND_VERIFICATION_CODE,
		showSuccessToast: true,
		data,
		needToken : false
	})
}

//通过手机验证码登录授权
export function getPhoneLogin(data){
	return request({
		method: 'POST',
		url: LOGIN_NOWECAHT_LOGIN,
		showSuccessToast: true,
		data,
		needToken : false
	})
}
