<template>
<div id="hello">
    <p>users = {{ users }}</p>
    <p>id 88 Index = {{elmIndex}}</p>
    <button @click="myFunction()">Click Me</button>
</div>

</template>
<script>
export default {
    name:'IndexFirst',
    data(){
        return{
            users:[ { id: 20, name: 'Captain Piett' },
            { id: 24, name: 'General Veers' },
            { id: 56, name:'Admiral Ozzel' },
            { id: 88, name: 'Commander Jerjerrod' } ],
            elmIndex:''
            }
            },
            methods:
            {
                myFunction() {
                    this.elmIndex=this.users.findIndex((data)=>{
                        return data.id == '88'
                        })
                        console.log(this.elmIndex);
                        },
                    }
                    }
</script>