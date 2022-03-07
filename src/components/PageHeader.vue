<template>
<div class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/add-restaurant">Add Restaurant</router-link>
    <a v-on:click="signOut" class="logout" href="#">Sign Out</a>
</div>
</template>
<script>
export default {
    name:'PageHeader',
    methods:{
        signOut()
        {
            localStorage.clear();
            this.$router.push({name:'SignIn'});

        }
    }
}
</script>
<style>
    .nav{
        background-color: black;
        overflow: hidden;
    }
    .nav a{
        float: left;
        color: gainsboro;
        padding: 14px 16px;
        text-align: center;
        font-size: 17px;
        text-decoration: none;
    }
    .nav .logout{
        float: right;
    }
    .nav a:hover{
        background: gainsboro;
        color: snow;
    }
</style>