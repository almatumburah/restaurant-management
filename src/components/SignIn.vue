<template>
<img class="logo" alt="Alpha logo" src="../assets/alpha_logo.png">
<h1>Sign In</h1>
<div class="login">
    <input type="email" v-model="email" placeholder="Enter Email">
    <input type="password" v-model="password" placeholder="Enter Password">
    <button v-on:click="signIn">Sign In</button>
    <p>
        Do not have an account? Please <router-link to="/sign-up">sign up</router-link>
    </p>
</div>
</template>
<script>
import axios from 'axios'
export default {
    name:'SignIn',
    data() {
        return {
            email:'',
            password:'',
        }
    },
    methods: {
        async signIn()
        {
            let result = await axios.get(
                'http://localhost:3000/users?email='+this.email+'&password='+this.password
                );
            
            if(result.status==200 && result.data.length>0)
            {
                localStorage.setItem("user-reg", JSON.stringify(result.data[0]));
                this.$router.push({name:'MainPage'});
            }
            console.log(result);
        }
    },
    mounted() {
        let user = localStorage.getItem('user-reg');
        if(user)
        {
            this.$router.push({name:'MainPage'});
        }
    },
}
</script>
<style>
    
</style>