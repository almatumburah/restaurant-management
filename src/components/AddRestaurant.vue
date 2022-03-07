<template>
<PageHeader/>
<h1>Add Restaurant</h1>
</template>
<script>
import PageHeader from './PageHeader.vue';
export default {
    name:'AddRestaurant',
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