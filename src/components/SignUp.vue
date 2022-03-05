<template>
<img class="logo" alt="Alpha logo" src="../assets/alpha_logo.png">
<h1>Sign Up</h1>
<div class="register">
    <input type="text" v-model="name" placeholder="Enter Name">
    <input type="email" v-model="email" placeholder="Enter Email">
    <input type="password" v-model="password" placeholder="Enter Password">
    <button v-on:click="signUp" >Sign Up</button>
    <p>
        Already have an account? Please <router-link to="/sign-in">sign in</router-link>
    </p>
</div>
</template>
<script>
import axios from 'axios'
export default {
    name :'SignUp',
    data() {
        return {
            name:'',
            email:'',
            password:''
        }
    },
    methods: {
        async signUp()
        {
            let result = await axios.post("http://localhost:3000/users", {
                name:this.name,
                email:this.email,
                password:this.password
            });

            console.log(result);
            if(result.status==201)
            {
                localStorage.setItem("user-reg", JSON.stringify(result.data));
                this.$router.push({name:'MainPage'});
            }
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
