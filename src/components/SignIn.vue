<template>
<img class="logo" alt="Alpha logo" src="../assets/alpha_logo.png">
<h1>Sign In</h1>
<div class="login">
    <input type="email" v-model="email" placeholder="Enter Email">
    <input type="password" v-model="password" placeholder="Enter Password">
    <button>Sign In</button>
    <p>
        Do not have an account? Please <router-link to="/sign-up">sign up</router-link>
    </p>
</div>
</template>
<script>
export default {
    name:'SignIn'
}
</script>
<style>
    
</style>