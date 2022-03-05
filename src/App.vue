<template>
  <router-view />
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
  margin-top: 60px;
}
.logo{
    width: 100px;
}
.register input, .login input{
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
.register button, .login button{
cursor: pointer;
width: 320px;
height: 45px;
color: white;
border: 2px solid black;
background: black;
border-radius: 5px;
}
</style>
