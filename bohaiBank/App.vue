<script>
	import { LOGIN, APPLY} from '@/config/router.js';
	import {
		getStorage
	} from '@/utils/storage.js'
	export default {
		onLaunch: function() {
			if (!getStorage('isLogin')){
				uni.reLaunch({
					url: LOGIN,
				})
			}else{
				uni.reLaunch({
					url: APPLY,
				})
			}
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
	@import "./style/iconfont.scss";
</style>
