
	let firstBackTime = 0
	const __sfc__ = defineApp({
		onLaunch: function () {
			console.log('App Launch')
		},
		onShow: function () {
			console.log('App Show')
		},
		onHide: function () {
			console.log('App Hide')
		},

		onLastPageBackPress: function () {
			console.log('App LastPageBackPress')
			if (firstBackTime == 0) {
				uni.showToast({
					title: '再按一次退出应用',
					position: 'bottom',
				})
				firstBackTime = Date.now()
				setTimeout(() => {
					firstBackTime = 0
				}, 2000)
			} else if (Date.now() - firstBackTime < 2000) {
				firstBackTime = Date.now()
				uni.exit()
			}
		},

		onExit: function () {
			console.log('App Exit')
		},
	})

export default __sfc__
const GenAppStyles = [utsMapOf([["uni-row", padStyleMapOf(utsMapOf([["flexDirection", "row"]]))], ["uni-column", padStyleMapOf(utsMapOf([["flexDirection", "column"]]))]])]
