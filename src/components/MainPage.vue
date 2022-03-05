<template>
<h1>Welcome Home</h1>
</template>
<script>
export default {
    name:'MainPage',
     mounted() {
        let user = localStorage.getItem('user-reg');
        if(!user)
        {
            this.$router.push({name:'SignUp'});
        }
    },
}
</script>
<style>
    
</style>