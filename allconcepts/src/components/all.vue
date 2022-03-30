<template>
<div>
    <h2>ES6</h2><br><br>
    <h2>{{name1}}</h2>
    <button @click="f1()">Click to change</button><br><br><br>
    
    <button @click="f2()">for Each loop</button><br><br><br>
    
    <button @click="f3()">filter function</button><br><br><br>

    <button @click="f4()">map function</button><br><br><br>
    
    

    
</div>
</template>
<script>
export default{
    name:"EseConcept",
    data(){
        return{
            a:[1,2,3,4,5],
            name1:"Javascript",
            }
    },
    methods: {
        f1(){
             this.name1="Fortune 500apps"
             return this.name1;
        },
        f2(){
            this.a.forEach((number,index) => {console.log(number,index)})
        },
        f3(){
            this.a.filter((number,index) => {
                if(index!=0){console.log(number)}
                })
        },
        f4(){
        var mapping= this.a.map((number,index) => {
             if(index==0) return 0
             return number
         })
         console.log(mapping)
        },
        
    },
}
</script>