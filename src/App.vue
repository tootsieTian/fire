<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
	// // 数据存放的js文件
	// import data_store from './data/data_store'
	//
	// // 用户信息组件
	// import userInfo from '@/components/userinfo/userInfo'
	// // 商品组件
	// import subProduct from '@/components/product/subProduct'

	export default {
		name: 'App',
		data() {
			return {
				userName: '', //保存用户名
				userTel: '', //保存手机信息	
				// item_data: data_store, //死数据
				remake: '', //备注信息
			}
		},
		components: {
			// userInfo,
			// subProduct
		},
		methods: {
			newUserName(data) {
				this.userName = data
			},
			newUserTel(data) {
				this.userTel = data
			},
			submit() {
				alert('提交成功！')
			}
		}
	}
</script>

<style scoped="scoped">
	@import url("assets/css/base.css");

	#app {
		height: 100vh;
	}

	form {
		/* padding: 10px; */
		padding-top: 10px;
		padding-right: 10px;
		height: calc(100vh + 80px);
	}

	.sub-head {
		position: sticky;
		top: 0px;
		z-index: 30;
	}

	.sub-head h1 {

		height: 40px;
		line-height: 40px;
		font-size: 18px;
		text-align: center;

		margin: 0;
		background-color: #0078FF;
		opacity: 0.8;
		color: white;
	}

	.remake {
		display: flex;
		width: 100%;

	}

	.remake span {
		flex: 1;
		font-size: 16px;
		color: #333333;
	}

	.remake textarea {
		flex: 6;
		resize: none;
		outline: none;
		height: 60px;
		overflow: hidden;
		border: 1px solid var(--color-background);
	}
	.foot{
		padding-top: 5px;
		background: #FFFFFF;
		width: 100%;
		position: fixed;
		display: flex;
		flex-direction: column;
		bottom: 3px;
		left: 50%;
		align-items: center;
		transform: translate(-50%);
	}

	.submit {
		padding-top: 7px;
		padding-bottom: 8px;
		width: 75%;
		margin: 5px 0;
		border-radius: 15px;
		border: none;
		outline: none;
		background: #0078FF;
		color: #FFFFFF;
	}

	.sale {
		font-size: 13px;
		color: red;
		height: 20px;
		width: 100%;
		line-height: 20px;
		text-align: center;
		border-radius: 3px;

	}
</style>
