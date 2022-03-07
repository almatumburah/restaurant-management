<template>
<PageHeader/>
<h1>Update Restaurant</h1>
</template>
<script>
import PageHeader from './PageHeader.vue';
export default {
    name:'UpdateRestaurant',
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