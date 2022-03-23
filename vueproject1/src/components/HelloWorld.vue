<template>
<div class="hello">
  <pc1 msg="Hello" name="Aziya" number=123456789></pc1>
  <pc2 :msg="msg" :name="name" :number="number"></pc2>
  <pc3 ref="msg" >{{msg}}</pc3>
  </div>
</template>
<script>
import pc1 from "@/components/pc1.vue"
import pc2 from "@/components/pc2.vue"
import pc3 from "@/components/pc3.vue"
export default {
name: 'HelloWorld',
components:{
  pc1,
  pc2,
  pc3,
  },
  data(){
    return {
      msg:"hello",
      name:"Neha",
      number:11111111,
      };
      },
      mounted(){
        this.msg=this.$refs.pc3.msg;
        }
        }
</script>





