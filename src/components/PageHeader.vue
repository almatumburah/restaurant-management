<template>
<div class="nav">
    <a href="#">Home</a>
    <a href="#">Add Restaurant</a>
    <a class="logout" href="#">Sign Out</a>
</div>
</template>
<script>
export default {
    name:'PageHeader'
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