const baseUrl = 'http://192.168.3.25:1001';
 // const baseUrl = 'http://yapi.open.com.cn/mock/2423';
const auth = `${baseUrl}/wx/user`;

module.exports = {
	LOGIN_NOWECAHT_LOGIN: `${baseUrl}/info/phoneCodeLogin`,
	SEND_VERIFICATION_CODE: `${baseUrl}/info/code`,
	SUBMIT:`${baseUrl}/info/submit`
	
}