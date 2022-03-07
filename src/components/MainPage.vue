<template>
<PageHeader/>
<h1>Welcome Home</h1>
</template>
<script>
import PageHeader from './PageHeader.vue';
export default {
    name:'MainPage',
    components:{
        PageHeader
    },
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