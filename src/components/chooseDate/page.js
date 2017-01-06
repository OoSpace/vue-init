/*这里是脚本文件*/
/*文件最后要有对外的export*/

import Vue from 'vue'

Vue.filter('formate',function(value,val1){
	let year = value.substring(0,4);
	let month = value.substring(4,6);
	let day = value.substring(6,8);
	let str = year + '/' + month + '/' + day;
	if(val1 == 'month'){
		return new Date(str).getMonth() + 1;
	}else if(val1 == 'day'){
		return new Date(str).getDate();
	}
});
export default {
	props:{
		dates:{
			type:Array,
			default:() =>{
				return [];
			} 
		},
		nowDate:''	
	},
	data(){
		return {
			img1:'./images/border.png'
		}
	},
	methods:{
		chooseDate(d){
			this.nowDate = d;
			this.$dispatch('choose-date',d);
		}
	}
}