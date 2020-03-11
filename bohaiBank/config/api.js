const baseUrl = 'http://47.104.232.184:1001';
 // const baseUrl = 'http://yapi.open.com.cn/mock/2423';
const auth = `${baseUrl}/wx/user`;

module.exports = {
	LOGIN_NOWECAHT_LOGIN: `${baseUrl}/info/phoneCodeLogin`,
	SEND_VERIFICATION_CODE: `${baseUrl}/info/code`,
	SUBMIT:`${baseUrl}/info/submit`,
	UPLOAD:`${baseUrl}/ftp/upload`
}