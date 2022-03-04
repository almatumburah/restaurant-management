<template>
    <img class="logo" alt="Alpha logo" src="../assets/alpha_logo.png">
    <h1>Sign Up</h1>
    <div class="register">
        <input type="text" placeholder="Enter Name">
        <input type="email" placeholder="Enter Email">
        <input type="password" placeholder="Enter Password">
        <input type="password" placeholder="Confirm Password">
        <button>Sign Up</button>
    </div>
</template>
<script>
    export default {
        name :'SignUp'
    }
</script>

<style>
    .logo{
        width: 100px;
    }
    .register input{
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 2px solid black;
    border-radius: 5px;
    }
    .register button{
    cursor: pointer;
    width: 320px;
    height: 45px;
    color: white;
    border: 2px solid black;
    background: black;
    border-radius: 5px;
    }
</style>
