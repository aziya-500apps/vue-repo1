<template>
<div>
    <h1>Details</h1>
    <center><table>
        <thead>
            <tr>
                
                <th>Email</th>
                <th>Country</th>
            </tr>
        </thead>
    <tbody>
        <tr v-for="user in emp" :key="user.id">
           
            <td>{{user.mail}}</td>
            <td>{{user.country}}</td>
        </tr>
    </tbody>
</table></center>
</div>
</template>
<script>
export default {
    name: 'tableData',
    data(){
        return{
            emp: [
                {mail: 'shaikaziya', country: 'India'},
                {mail: 'shaikasma', country: 'USA'},
                {mail: 'shaikashu', country: 'London'},
                
                ]
            };
        }

};

</script>