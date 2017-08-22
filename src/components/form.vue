<template>
	<div class="form">
		<el-form ref="form" :model="form" label-width="80px">
		    <el-input v-model="form.name" placeholder="姓名"></el-input>
		    <el-input v-model="form.phone" placeholder="联系电话"></el-input>
		    <el-input v-model="form.district" placeholder="意向加盟区域"></el-input>
		    <el-select v-model="form.home" placeholder="有无房源">
		      <el-option label="无" value="none"></el-option>
		      <el-option label="有" value="yes"></el-option>
		    </el-select>
		    <el-input type="textarea" v-model="form.desc" placeholder="备注"></el-input>
		    <el-input class="modify" v-model="form.name" placeholder="验证码"></el-input>
		    <span class="check">sdgftrse</span>
		    <el-button type="success" @click="submitForm('ruleForm')">提交</el-button>
		</el-form>
	</div>
</template>
<script>
	export default {
	    data() {
	      return {
	        form: {
	          name: ''
	        }
	      }
	  	},
	  	methods: {
	  	    submitForm(form) {
	  	       this.$refs[form].validate((valid) => {
	  	         if (valid) {
	  	           alert('submit!');
	  	         } else {
	  	           console.log('error submit!!');
	  	           return false;
	  	         }
	  	       });
	  	     }   
	  	}

    }
</script>
<style>
	.form{
		margin: 15px 0 30px 0
	}
	.el-form{
		margin: 12px;
	}
	.form .el-textarea__inner{
		height: 247px;
	}

	.form .modify{
		width:76%;
	}
	.form .el-button--success{
		width:100%;
	}
	span.check{
	    border: 1px solid #000;
        padding: 5px;
    }
</style>