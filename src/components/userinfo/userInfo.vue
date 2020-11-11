<template>
	<div class="sub-use-info">
		<div class="use-box" style="margin-right: 10px">
			<label for="use-name"> <i class="iconfont">&#xe657;</i></label>
			<input type="text" id="use-name" name="useName" placeholder="请输入姓名" v-model="userName" @keyup="newUserName"/>
		</div>
		<div class="use-box">
			<label for="use-tel"> <i class="iconfont">&#xe603;</i></label>
			<input type="text" id="use-tel" name="useTel" placeholder="请输入电话号码" v-model="userTel" @keyup="newUserTel"/>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				userName: '', //保存用户名
				userTel: '', //保存手机信息	
			}
		},
		methods:{
			newUserName(){
				this.$emit('userName',this.userName)
			},
			newUserTel(){
				this.$emit('userTel',this.userTel)
			}
		}
		
	}
</script>

<style scoped="scoped">

	
	.sub-use-info {
    	display: flex;
		height: 40px;
		margin-left: 10px;
	}
	
	.sub-use-info input {
		border: 1px solid var(--color-background);
		height: 30px;
		width: 100%;
		padding-left: 40px;
	}
	
	.use-box {
		position: relative;
		margin-bottom: 25px;
	}
	
	.sub-use-info label {
		display: inline-block;
		width: 40px;
		height: 36px;
		position: absolute;
		text-align: center;
	}
	
	.sub-use-info label i {
		font-size: 20px;
		line-height: 40px;
		color: var(--color-background);
	
	}
</style>
