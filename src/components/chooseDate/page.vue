<!--引入脚本文件-->
<script src="./page.js"></script>

<!--引入样式文件-->
<style lang="less" rel="stylesheet/less" scoped>
	@import "./page.less"; 
</style>

<!--模本文件-->
<template>
	<div class="list-date">
		<div class="date-title">选择出发日期</div>
			<ul class="clearfix">
				<li v-for="item in dates" @click="chooseDate(item)" onclick="_tcTraObj._tcTrackEvent('click','yugou-riqi-{{item}}','wxtrain','')">
					<div class="date-text" >
						<span>{{item | formate 'month'}}月</span>
						<em>{{item | formate 'day'}}日</em>
					</div>
					<img src="./images/border.png" v-if="nowDate != item">
					<img src="./images/date-active.png" v-if="nowDate == item">
				</li>
			</ul>
	</div>
</template>