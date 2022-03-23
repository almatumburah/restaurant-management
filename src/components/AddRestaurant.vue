<template>
<PageHeader/>
<h1>Add New Restaurant</h1>
<form class="add">
<input type="text" v-model="restaurant.name" placeholder="Enter Name" required>
<input type="url" v-model="restaurant.image" placeholder="Enter Image Url" required>
<textarea v-model="restaurant.description" placeholder="Restaurant Description..." cols="30" rows="10"></textarea>
<button type="button" v-on:click="addRestaurant">Add Restaurant</button>
</form>
</template>
<script>
import PageHeader from './PageHeader.vue';
export default {
    name:'AddRestaurant',
    components:{
        PageHeader
    },
    data() {
        return {
            restaurant :{
                name:'',
                image:'',
                description:''
            }
        }
    },
    methods: {
        addRestaurant()
        {
            console.log(this.restaurant);
        }
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