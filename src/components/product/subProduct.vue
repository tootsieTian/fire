<template>
	<div class="sub-product" ref = 'box'>
		<div class="sub-product-item">
			<div v-for="(item,index) in data"
				 :key='index' class="item-list"
				 :class="{'now':index===current}"
				 @click="index_now(index)">
				{{item}}
			</div>
		</div>
			<sub-produc-info @changeCurrent="changeCurrent" :info='item_data[current]' :current="current"></sub-produc-info>
			<div id=""></div>
	</div>
</template>

<script>

	
	import subProducInfo from './subProducInfo.vue'
	export default {
		props: {
			data: {
				type: Array,
				default: function() {
					return []
				},
			},
			item_data:{
				type: Array,
				default: function() {
					return []
				},
			}
		},
		components:{
			subProducInfo,
		},
		data() {
			return {
				current: 0,
				isHeight:false,//计算高的类

			}
		},
		mounted() {
			// 监听滚动
		},
		methods: {
			changeCurrent(){
				this.current =1
			},
			index_now(index) {
				this.current = index
			}
		}

	}
</script>

<style scoped="scoped">
	.sub-product {
		height: calc(100vh - 180px);
		display: flex;
		overflow: hidden;
		
	}

	.sub-product-item {
		flex: 1;

	}

	.sub-produc-info {
		flex: 5;
	}

	.sub-product-item .item-list {
		height: 40px;

		text-align: center;
		line-height: 40px;

	}

	.sub-product-item .item-list.now {
		width: calc(100% + 2px);
		border-left: 3px solid #0078FF;
		background-color: #f1f2f6;
	}

	
</style>
